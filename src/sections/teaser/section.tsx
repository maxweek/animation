import { FC, ReactNode, useEffect, useRef, useState } from "react";
import s from "./styles.module.scss";
import { getCl, getRandomInRange } from "../../helper";
import { AdvancedBloomFilter, DotFilter, GlitchFilter, OldFilmFilter, RGBSplitFilter } from "pixi-filters";
import { GlitchImage } from "../js/filters/glitch";
import { Container, Sprite, Stage } from "@pixi/react";
import * as PIXI from 'pixi.js';
import { set } from "animejs";
import gsap from "gsap";
import { stats } from "../../components/ui/gui/gui";

interface Props {
}


const noizeSprite = PIXI.Sprite.from('/assets/noise.png');
const filters = {
    grgb: new RGBSplitFilter(),
    glitch: new GlitchFilter(),
    film: new OldFilmFilter(),
    bloom: new AdvancedBloomFilter(),
    dot: new DotFilter(),
    disp: new PIXI.DisplacementFilter(noizeSprite),
}

let an: any;
let prevTime: number = 0;

const _type = {
    day: {
        dir: '/assets/comp/day/dir.png',
        diri: '/assets/comp/day/diri.png',
        back: '/assets/comp/day/back.png',
        text: '/assets/comp/day/text.png',
    },
    night: {
        dir: '/assets/comp/night/dir.png',
        diri: '/assets/comp/night/diri.png',
        back: '/assets/comp/night/back.png',
        text: '/assets/comp/night/text.png',
    },
}

const mouse = {
    x: 0,
    y: 0,
    deltaX: 0,
    deltaY: 0,
    completed: false
}

const pos = {
    back: [-0, -10],
    diri: [800, 100],
    dir: [100, 500],
    text: [20, 40],
}

const Section__Teaser: FC<Props> = (props: Props) => {
    const [start, setStart] = useState<boolean>(true);
    const [show, setShow] = useState<boolean>(false);
    const [type, setType] = useState<'day' | 'night'>('day')
    const ref = useRef<HTMLDivElement>(null)
    const refDiri = useRef<PIXI.Sprite>(null)
    const refDir = useRef<PIXI.Sprite>(null)
    const refBack = useRef<PIXI.Sprite>(null)
    const refText = useRef<PIXI.Sprite>(null)
    const refLogo = useRef<PIXI.Sprite>(null)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 400)
    }, [])
    useEffect(() => {
        if (start) {
            anim(0)
        } else {
            cancelAnimationFrame(an);
        }
    }, [start])

    useEffect(() => {
        filters.film.scratchWidth = 1
        filters.film.scratchDensity = 0.5
        if (type === 'day') {
            filters.film.scratch = 0.6
        } else {
            filters.film.scratch = -0.9
        }
    }, [type])

    useEffect(() => {
        if (refBack.current) {
            refBack.current.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        }
        if (ref.current) {
            ref.current.addEventListener('mousemove', move)
        }
        return () => {
            ref.current?.removeEventListener('mousemove', move)
        }
    }, [])

    const move = (e: MouseEvent) => {
        if (!ref.current) return
        mouse.x = e.offsetX - ref.current.offsetWidth / 2;
        mouse.y = e.offsetY - ref.current.offsetHeight / 2;
        mouse.completed = false

        set()
    }

    const set = () => {
        gsap.to(mouse, 1, {
            deltaX: mouse.x / 20,
            deltaY: mouse.y / 20,
            onComplete: () => {
                mouse.completed = true
            }
        })
        // gsap.to(refDir.current, 1, {
        //     x: pos.dir[0] + mouse.x / 40 + mouse.deltaX,
        //     y: pos.dir[1] + mouse.y / 40 + mouse.deltaY
        // })
        // gsap.to(refBack.current, 1, {
        //     x: pos.back[0] + mouse.x / 100 + mouse.deltaX,
        //     y: pos.back[1] + mouse.y / 100 + mouse.deltaY
        // })
        // gsap.to(refText.current, 1, {
        //     x: pos.text[0] + mouse.x / 10 + mouse.deltaX,
        //     y: pos.text[1] + mouse.y / 10 + mouse.deltaY
        // })

        // if (refDiri.current) {
        //     refDiri.current.x = pos.diri[0] + mouse.x / 20
        //     refDiri.current.y = pos.diri[1] + mouse.y / 20
        // }
        // if (refDir.current) {
        //     refDir.current.x = pos.dir[0] + mouse.x / 40
        //     refDir.current.y = pos.dir[1] + mouse.y / 40
        // }
        // if (refBack.current) {
        //     refBack.current.x = pos.back[0] + mouse.x / 100
        //     refBack.current.y = pos.back[1] + mouse.y / 100
        // }
    }

    const anim = (time: number) => {
        // stats.begin()
        let x = Math.sin(time / 1000) * 5;
        let y = Math.cos(time / 1000) * 5;
        let a = Math.cos(time / 1000 - 200);

        // mouse.deltaX = x
        // mouse.deltaY = y

        // filters.dot.angle = x / 200;
        // filters.film.
        if (refDiri.current) {
            refDiri.current.x = pos.diri[0] + x + mouse.deltaX
            refDiri.current.y = pos.diri[1] + y + mouse.deltaY
        }
        if (refBack.current) {
            refBack.current.x = pos.back[0] + mouse.deltaX / 10
            refBack.current.y = pos.back[1] + mouse.deltaY / 10
        }
        if (refDir.current) {
            refDir.current.x = pos.dir[0] + y + mouse.deltaX
            refDir.current.y = pos.dir[1] + y + mouse.deltaY
        }
        if (refText.current) {
            refText.current.x = pos.text[0] + y + mouse.deltaX * 2
            refText.current.y = pos.text[1] + a + mouse.deltaY * 2
        }
        filters.disp.scale.x = a * 5;
        filters.disp.scale.y = x * 5;
        filters.film.seed = x;

        let delta = time - prevTime;
        if (delta > 4000) {
            glitch()
            prevTime = time
        }
        // stats.update()
        an = requestAnimationFrame(anim)
    }

    const glitch = (type: boolean = false) => {

        filters.glitch.direction = getRandomInRange(-180, 180);
        let i = 0;
        let max = type ? 10 : 10
        let isDot = getRandomInRange(1, 3) === 1;
        // let isDot = true;
        let a = setInterval(() => {
            filters.film.sepia = getRandomInRange(1, 10) / 10 - 2;
            filters.glitch.slices = getRandomInRange(5, 20);
            filters.glitch.offset = getRandomInRange(-50, 50);
            
            if (isDot) {
                filters.dot.enabled = true
                filters.dot.angle = getRandomInRange(0, 180)
                filters.dot.grayscale = Math.random() > 0.5
                filters.dot.scale = getRandomInRange(3, 5) / 5
            } else {
                filters.grgb.red = [getRandomInRange(-5, 5), getRandomInRange(-5, 5)]
                filters.grgb.blue = [getRandomInRange(-5, 5), getRandomInRange(-5, 5)]
                filters.grgb.green = [getRandomInRange(-5, 5), getRandomInRange(-5, 5)]
            }

            if (refLogo.current && i < 4) {

                refLogo.current.x = getRandomInRange(40, 1200)
                refLogo.current.y = getRandomInRange(20, 800)
            } else {
                if (refLogo.current) {
                    refLogo.current.y = -2000
                    refLogo.current.x = -2000
                }
            }
            if (type) {
                filters.bloom.threshold = getRandomInRange(1, 9) / 10
                filters.bloom.brightness = getRandomInRange(1, 10) / 10
                filters.bloom.bloomScale = getRandomInRange(1, 5) / 10
            }
            if (i < max) {
                i++;
            } else {
                clearInterval(a);
                if (refLogo.current) {
                    refLogo.current.x = -2000
                    refLogo.current.y = -2000
                }
                filters.glitch.offset = 0;
                filters.grgb.red = [0, 0]
                filters.grgb.blue = [0, 0]
                filters.grgb.green = [0, 0]
                filters.bloom.threshold = 1
                filters.bloom.brightness = 1
                filters.dot.enabled = false
            }
        }, 50)
    }

    const change = () => {
        glitch(true)
        setTimeout(() => {
            setType(type === 'day' ? 'night' : 'day')
        }, 250)
    }

    return (
        <div className={`${s.box} ${getCl(show, 'show')}`} ref={ref}>
            <div className={s.image} onClick={change}>
                <Stage
                    width={1280}
                    height={800}
                    options={{
                        backgroundAlpha: 0,
                        antialias: true,
                        // resolution: 10,
                    }}
                >
                    <Container filters={[filters.film, filters.glitch, filters.grgb, filters.bloom]}>
                        <Container filters={[filters.disp, filters.dot]}>
                            <Sprite
                                image={_type[type].back}
                                width={1280}
                                height={800}
                                scale={1.1}
                                x={pos.back[0]}
                                y={pos.back[1]}
                                ref={refBack}
                            />
                        </Container>
                        <Sprite
                            image={_type[type].diri}
                            width={393}
                            height={492}
                            x={pos.diri[0]}
                            y={pos.diri[1]}
                            ref={refDiri}
                        />
                        <Sprite
                            image={_type[type].dir}
                            width={407}
                            height={227}
                            x={pos.dir[0]}
                            y={pos.dir[1]}
                            ref={refDir}
                        />
                        <Sprite
                            image={_type[type].text}
                            width={484}
                            height={286}
                            x={pos.text[0]}
                            y={pos.text[1]}
                            ref={refText}
                        />
                        <Sprite
                            image={'/assets/spanslogo.svg'}
                            width={200}
                            height={70}
                            x={20}
                            y={20}
                            ref={refLogo}
                        />
                    </Container>
                </Stage>
                {/* <GlitchImage src="/assets/models/rainbowTexture.jpg" filters={[filters.film, filters.glitch, filters.grgb]} width={window.innerWidth - 260} height={window.innerHeight} /> */}
            </div>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.title}>
                        {/* Руководство по анимации */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section__Teaser