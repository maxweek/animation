import { FC, ReactNode, RefObject, useCallback, useEffect, useRef, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import Button from "../../../components/ui/button/button";
import { getCl, getCls, getRandomInRange } from "../../../helper";
import { TrackBall } from "../../../components/trackball/trackball";
import { GlitchImage } from "./glitch";
import * as PIXI from "pixi.js"
import { AdvancedBloomFilter, AsciiFilter, DotFilter, GlitchFilter, PixelateFilter, RGBSplitFilter } from "pixi-filters";

interface Props {
}

const noizeSprite = PIXI.Sprite.from('/assets/noise.png');

const filters = {
    rgb: new RGBSplitFilter(),
    grgb: new RGBSplitFilter(),
    glitch: new GlitchFilter(),
    dot: new DotFilter(),
    pixel: new PixelateFilter(),
    bloom: new AdvancedBloomFilter(),
    ascii: new AsciiFilter(),
    disp: new PIXI.DisplacementFilter(noizeSprite),
}

let an: any;
let prevTime: number = 0;

const Section__JS_Filters: FC<Props> = (props: Props) => {
    const [start, setStart] = useState<boolean>(false);
    const displacementSpriteRef = useRef<PIXI.Sprite>(null);
    const _dispRef = useRef<PIXI.Sprite>(null);

    useEffect(() => {
        if (start) {
            anim(0)
        } else {
            cancelAnimationFrame(an);
        }
    }, [start])

    const anim = (time: number) => {
        let x = Math.sin(time / 100) * 5;
        let y = Math.cos(time / 100) * 5;
        let a = Math.cos(time / 1000);
        filters.rgb.green = [x, y]
        filters.rgb.blue = [-x, -y]
        filters.rgb.red = [x, -y]

        // filters.dot.angle = x / 200;
        filters.dot.scale = a + 5;
        filters.pixel.size = [Math.abs(a * 12) + 1, Math.abs(a * 12) + 1]

        // filters.disp.scale.x = a + 1;

        if(displacementSpriteRef.current && _dispRef.current){
            // displacementSpriteRef.current.x = x
            // displacementSpriteRef.current.y = y
            filters.disp.scale.x = x * 2;
            filters.disp.scale.y = y * 2;
            // console.log(time)
        }

        filters.ascii.size = Math.abs(a * 20) + 5
        // filters.dot.angle = a /1000;

        let delta = time - prevTime;
        if (delta > 2000) {
            glitch()
            prevTime = time
        }

        an = requestAnimationFrame(anim)
    }

    const glitch = () => {

        filters.glitch.direction = getRandomInRange(-180, 180);
        let i = 0;
        let max = 10
        let a = setInterval(() => {
            filters.glitch.slices = getRandomInRange(5, 20);
            filters.glitch.offset = getRandomInRange(-50, 50);
            filters.bloom.threshold = getRandomInRange(1, 9) / 10;
            filters.bloom.bloomScale = getRandomInRange(10, 15) / 10;
            filters.bloom.brightness = getRandomInRange(10, 15) / 10;
            filters.bloom.blur = getRandomInRange(1, 20);
            filters.grgb.red = [getRandomInRange(-5, 5), getRandomInRange(-5, 5)]
            filters.grgb.blue = [getRandomInRange(-5, 5), getRandomInRange(-5, 5)]
            filters.grgb.green = [getRandomInRange(-5, 5), getRandomInRange(-5, 5)]
            if (i < max) {
                i++;
            } else {
                clearInterval(a);
                filters.glitch.offset = 0
                filters.bloom.threshold = 0;
                filters.bloom.bloomScale = 0;
                filters.bloom.brightness = 0.6;
                filters.bloom.blur = 0;
                filters.grgb.red = [0, 0]
                filters.grgb.blue = [0, 0]
                filters.grgb.green = [0, 0]
            }
        }, 50)
    }

    return (
        <Section
            id="js_filters"
            title="Фильтры/Шейдеры"
            description="Хардкор не для слабонервных"
        // checklist={['Общие понятия', 'Особенности delay', 'Динамический transition', 'Математические кривые']}
        >
            <SectionLinks links={[
                {
                    text: 'Еще больше примеров',
                    href: 'https://filters.pixijs.download/main/demo/index.html',
                },
            ]}/>
            <MiniSection
                title="Примеры фильтров из PIXI.js"
                description="Добрые люди написани несколько шейдеров"
            >
                <TileList>
                    <Tile title="Глитч, смещение RGB каналов/Displacement map">
                        <div className={s.list}>
                            <GlitchImage src={"/assets/cyberdog.jpg"} width={400} height={400} animation={true} filters={[filters.glitch, filters.grgb]}  />
                            <GlitchImage src={"/assets/cyberdog.jpg"} width={400} height={400} animation={true} filters={[filters.disp]} dispRef={displacementSpriteRef} _dispRef={_dispRef}/>
                        </div>
                        <Button type="primary" onClick={() => setStart(!start)}>{start ? 'Стоп' : 'Старт'}</Button>
                    </Tile>
                </TileList>
                <TileList>
                    <Tile title="rgb filter / glitch filter / bloom filter">
                        <div className={s.list}>
                            <GlitchImage src={"/assets/cyberdog.jpg"} width={320} height={320} animation={true} filters={[filters.rgb]} />
                            <GlitchImage src={"/assets/cyberdog.jpg"} width={320} height={320} animation={true} filters={[filters.glitch]} />
                            <GlitchImage src={"/assets/cyberdog.jpg"} width={320} height={320} animation={true} filters={[filters.bloom]} />
                        </div>
                        <Button type="primary" onClick={() => setStart(!start)}>{start ? 'Стоп' : 'Старт'}</Button>
                    </Tile>
                </TileList>
                <TileList>
                    <Tile title="ascii filter / dot filter / pixel filter">
                        <div className={s.list}>
                            <GlitchImage src={"/assets/cyberdog.jpg"} width={320} height={320} animation={true} filters={[filters.ascii]} />
                            <GlitchImage src={"/assets/cyberdog.jpg"} width={320} height={320} animation={true} filters={[filters.dot]} />
                            <GlitchImage src={"/assets/cyberdog.jpg"} width={320} height={320} animation={true} filters={[filters.pixel]} />
                        </div>
                        <Button type="primary" onClick={() => setStart(!start)}>{start ? 'Стоп' : 'Старт'}</Button>
                    </Tile>
                </TileList>

            </MiniSection>
        </Section >
    )
}

interface ImageProps {
    src: string,
}

const ImageBox: FC<ImageProps> = (props: ImageProps) => {
    return (
        <div className={s.imageBox}>

        </div>
    )
}

export default Section__JS_Filters