import { FC, ReactNode, RefObject, useCallback, useEffect, useRef, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import Button from "../../../components/ui/button/button";
import { getCl, getCls } from "../../../helper";
import { TrackBall } from "../../../components/trackball/trackball";
import gsap, { Circ, Cubic, Elastic, Expo, Quad, Quart, Quint, Sine } from "gsap";
import { motion } from "framer-motion";
import { useFollowPointer } from "./useFollowPointer";
import Section__JS_Math_Follower from "./follower";

interface Props {
}

let prevTime = 0;

const Section__JS_Math: FC<Props> = (props: Props) => {
    const [dir, setDir] = useState<boolean>(false)
    const [phys, setPhys] = useState<boolean>(false)
    const ref0 = useRef<HTMLDivElement>(null)
    const ref1 = useRef<HTMLDivElement>(null)
    const ref2 = useRef<HTMLDivElement>(null)
    const ref3 = useRef<HTMLDivElement>(null)
    const ref4 = useRef<HTMLDivElement>(null)
    const ref5 = useRef<HTMLDivElement>(null)
    const ref6 = useRef<HTMLDivElement>(null)
    const ref7 = useRef<HTMLDivElement>(null)
    const ref8 = useRef<HTMLDivElement>(null)
    const ref9 = useRef<HTMLDivElement>(null)
    const ref10 = useRef<HTMLDivElement>(null)
    const ref11 = useRef<HTMLDivElement>(null)
    const ref12 = useRef<HTMLDivElement>(null)
    const ref13 = useRef<HTMLDivElement>(null)
    const ref14 = useRef<HTMLDivElement>(null)
    const ref15 = useRef<HTMLDivElement>(null)
    const ref16 = useRef<HTMLDivElement>(null)
    const ref17 = useRef<HTMLDivElement>(null)
    const ref18 = useRef<HTMLDivElement>(null)
    const ref19 = useRef<HTMLDivElement>(null)
    const ref20 = useRef<HTMLDivElement>(null)
    const ref21 = useRef<HTMLDivElement>(null)
    const ref22 = useRef<HTMLDivElement>(null)
    const ref23 = useRef<HTMLDivElement>(null)
    const ref24 = useRef<HTMLDivElement>(null)
    const ref25 = useRef<HTMLDivElement>(null)
    const ref26 = useRef<HTMLDivElement>(null)
    const ref27 = useRef<HTMLDivElement>(null)
    const ref28 = useRef<HTMLDivElement>(null)
    const ref29 = useRef<HTMLDivElement>(null)
    const ref30 = useRef<HTMLDivElement>(null)
    const ref31 = useRef<HTMLDivElement>(null)
    const ref32 = useRef<HTMLDivElement>(null)
    const ref33 = useRef<HTMLDivElement>(null)
    const ref34 = useRef<HTMLDivElement>(null)
    const ref35 = useRef<HTMLDivElement>(null)
    const ref36 = useRef<HTMLDivElement>(null)
    const ref37 = useRef<HTMLDivElement>(null)
    const ref38 = useRef<HTMLDivElement>(null)
    const ref39 = useRef<HTMLDivElement>(null)
    const ref40 = useRef<HTMLDivElement>(null)
    const refBall = useRef(null);
    const viewRef = useRef(null);
    const { x, y } = useFollowPointer(refBall, viewRef);

    useEffect(() => {
        gsap.to(ref0.current, { rotate: dir ? 360 : 0, duration: 2, ease: 'linear' })
        gsap.to(ref1.current, { rotate: dir ? 360 : 0, duration: 2, ease: "power1" })
        gsap.to(ref2.current, { rotate: dir ? 360 : 0, duration: 2, ease: "power1.in" })
        gsap.to(ref3.current, { rotate: dir ? 360 : 0, duration: 2, ease: "power1.out" })
        gsap.to(ref4.current, { rotate: dir ? 360 : 0, duration: 2, ease: "power1.inOut" })
        gsap.to(ref5.current, { rotate: dir ? 360 : 0, duration: 2, ease: "power2" })
        gsap.to(ref6.current, { rotate: dir ? 360 : 0, duration: 2, ease: "power2.in" })
        gsap.to(ref7.current, { rotate: dir ? 360 : 0, duration: 2, ease: "power2.out" })
        gsap.to(ref8.current, { rotate: dir ? 360 : 0, duration: 2, ease: "power2.inOut" })
        gsap.to(ref9.current, { rotate: dir ? 360 : 0, duration: 2, ease: "power3" })
        gsap.to(ref10.current, { rotate: dir ? 360 : 0, duration: 2, ease: "power3.in" })
        gsap.to(ref11.current, { rotate: dir ? 360 : 0, duration: 2, ease: "power3.out" })
        gsap.to(ref12.current, { rotate: dir ? 360 : 0, duration: 2, ease: "power3.inOut" })
        gsap.to(ref13.current, { rotate: dir ? 360 : 0, duration: 2, ease: "power4" })
        gsap.to(ref14.current, { rotate: dir ? 360 : 0, duration: 2, ease: "power4.in" })
        gsap.to(ref15.current, { rotate: dir ? 360 : 0, duration: 2, ease: "power4.out" })
        gsap.to(ref16.current, { rotate: dir ? 360 : 0, duration: 2, ease: "power4.inOut" })
        gsap.to(ref17.current, { rotate: dir ? 360 : 0, duration: 2, ease: "circ" })
        gsap.to(ref18.current, { rotate: dir ? 360 : 0, duration: 2, ease: "circ.in" })
        gsap.to(ref19.current, { rotate: dir ? 360 : 0, duration: 2, ease: "circ.out" })
        gsap.to(ref20.current, { rotate: dir ? 360 : 0, duration: 2, ease: "circ.inOut" })
        gsap.to(ref21.current, { rotate: dir ? 360 : 0, duration: 2, ease: "expo" })
        gsap.to(ref22.current, { rotate: dir ? 360 : 0, duration: 2, ease: "expo.in" })
        gsap.to(ref23.current, { rotate: dir ? 360 : 0, duration: 2, ease: "expo.out" })
        gsap.to(ref24.current, { rotate: dir ? 360 : 0, duration: 2, ease: "expo.inOut" })
        gsap.to(ref25.current, { rotate: dir ? 360 : 0, duration: 2, ease: "sine" })
        gsap.to(ref26.current, { rotate: dir ? 360 : 0, duration: 2, ease: "sine.in" })
        gsap.to(ref27.current, { rotate: dir ? 360 : 0, duration: 2, ease: "sine.out" })
        gsap.to(ref28.current, { rotate: dir ? 360 : 0, duration: 2, ease: "sine.inOut" })
        gsap.to(ref29.current, { rotate: dir ? 360 : 0, duration: 2, ease: "elastic" })
        gsap.to(ref30.current, { rotate: dir ? 360 : 0, duration: 2, ease: "elastic.in" })
        gsap.to(ref31.current, { rotate: dir ? 360 : 0, duration: 2, ease: "elastic.out" })
        gsap.to(ref32.current, { rotate: dir ? 360 : 0, duration: 2, ease: "elastic.inOut" })
        gsap.to(ref33.current, { rotate: dir ? 360 : 0, duration: 2, ease: "back" })
        gsap.to(ref34.current, { rotate: dir ? 360 : 0, duration: 2, ease: "back.in" })
        gsap.to(ref35.current, { rotate: dir ? 360 : 0, duration: 2, ease: "back.out" })
        gsap.to(ref36.current, { rotate: dir ? 360 : 0, duration: 2, ease: "back.inOut" })
        gsap.to(ref37.current, { rotate: dir ? 360 : 0, duration: 2, ease: "bounce" })
        gsap.to(ref38.current, { rotate: dir ? 360 : 0, duration: 2, ease: "bounce.in" })
        gsap.to(ref39.current, { rotate: dir ? 360 : 0, duration: 2, ease: "bounce.out" })
        gsap.to(ref40.current, { rotate: dir ? 360 : 0, duration: 2, ease: "bounce.inOut" })
    }, [dir])

    const start = useCallback(() => {


    }, [dir]);

    const clear = () => {

    }

    return (
        <Section
            id="js_math"
            title="Математические функции"
            description="Думали матеша не понадобится?"
        // checklist={['Общие понятия', 'Особенности delay', 'Динамический transition', 'Математические кривые']}
        >
            <MiniSection
                title="Примеры функций"
                description="Благодаря функциям можно задавать либо заранее заготовленное движение объектов, либо испытать боль и сделать 'своё' "
            >
                <TileList>
                    <Tile title="Примеры графиков функции (общие стандарты)">
                        <img src="/assets/easings.jpg" />
                    </Tile>
                </TileList>
                <TileList>
                    <Tile title="Примеры функций из GSAP">
                        <div className={`${s.list} ${getCl(dir, 'jsTrackBallRoundActive')} `}>
                            <JsTrack _ref={ref0} title="linear" />
                            <JsTrack _ref={ref1} title="power1" />
                            <JsTrack _ref={ref2} title="power1.in" />
                            <JsTrack _ref={ref3} title="power1.out" />
                            <JsTrack _ref={ref4} title="power1.inOut" />
                            <JsTrack _ref={ref5} title="power2" />
                            <JsTrack _ref={ref6} title="power2.in" />
                            <JsTrack _ref={ref7} title="power2.out" />
                            <JsTrack _ref={ref8} title="power2.inOut" />
                            <JsTrack _ref={ref9} title="power3" />
                            <JsTrack _ref={ref10} title="power3.in" />
                            <JsTrack _ref={ref11} title="power3.out" />
                            <JsTrack _ref={ref12} title="power3.inOut" />
                            <JsTrack _ref={ref13} title="power4" />
                            <JsTrack _ref={ref14} title="power4.in" />
                            <JsTrack _ref={ref15} title="power4.out" />
                            <JsTrack _ref={ref16} title="power4.inOut" />
                            <JsTrack _ref={ref17} title="circ" />
                            <JsTrack _ref={ref18} title="circ.in" />
                            <JsTrack _ref={ref19} title="circ.out" />
                            <JsTrack _ref={ref20} title="circ.inOut" />
                            <JsTrack _ref={ref21} title="expo" />
                            <JsTrack _ref={ref22} title="expo.in" />
                            <JsTrack _ref={ref23} title="expo.out" />
                            <JsTrack _ref={ref24} title="expo.inOut" />
                            <JsTrack _ref={ref25} title="sine" />
                            <JsTrack _ref={ref26} title="sine.in" />
                            <JsTrack _ref={ref27} title="sine.out" />
                            <JsTrack _ref={ref28} title="sine.inOut" />
                            <JsTrack _ref={ref29} title="elastic" />
                            <JsTrack _ref={ref30} title="elastic.in" />
                            <JsTrack _ref={ref31} title="elastic.out" />
                            <JsTrack _ref={ref32} title="elastic.inOut" />
                            <JsTrack _ref={ref33} title="back" />
                            <JsTrack _ref={ref34} title="back.in" />
                            <JsTrack _ref={ref35} title="back.out" />
                            <JsTrack _ref={ref36} title="back.inOut" />
                            <JsTrack _ref={ref37} title="bounce" />
                            <JsTrack _ref={ref38} title="bounce.in" />
                            <JsTrack _ref={ref39} title="bounce.out" />
                            <JsTrack _ref={ref40} title="bounce.inOut" />
                        </div>
                        <Button onClick={() => { setDir(!dir) }} type="primary">start</Button>
                    </Tile>
                </TileList>
                <MiniSection
                    title="Physical based анимации"
                    description="Думали физика не понадобится?"
                >
                    <TileList>
                        <Tile title="Примеры физических функций из Framer-motion">
                            <Track
                                phys={phys}
                                transition={{
                                    type: 'linear'
                                }}
                            />
                            <Track
                                phys={phys}
                                transition={{
                                    type: 'inertia',
                                    velocity: 100
                                }}
                            />
                            <Track
                                phys={phys}
                                transition={{
                                    type: 'inertia',
                                    velocity: 20
                                }}
                            />
                            <Track
                                phys={phys}
                                transition={{
                                    type: 'spring',
                                    bounce: 0.5
                                }}
                            />
                            <Track
                                phys={phys}
                                transition={{
                                    type: 'spring',
                                    stiffness: 20,
                                    damping: 3
                                }}
                            />
                            <Track
                                phys={phys}
                                transition={{
                                    type: 'spring',
                                    mass: 0.5
                                }}
                            />
                            <Track
                                phys={phys}
                                transition={{
                                    type: 'spring',
                                    mass: 2
                                }}
                            />
                            <Button onClick={() => { setPhys(!phys) }} type="primary">start</Button>
                        </Tile>
                    </TileList>
                    <TileList>
                        <Tile title="Пример инерциальности физикал функций">
                            <Section__JS_Math_Follower />
                        </Tile>
                    </TileList>
                </MiniSection>


            </MiniSection>
        </Section>
    )
}

interface TrackBallProps {
    _ref: any
    title: string
}

const JsTrack: FC<TrackBallProps> = (props: TrackBallProps) => {
    return (
        <div className={s.jsTrack}>
            <div className={`${s.jsTrack__ball} ${s.back}`} />
            <div className={s.jsTrack__ball} ref={props._ref} />
            <div className={s.jsTrack__title}>{props.title}</div>
        </div>
    )
}

interface TrackProps {
    phys: boolean,
    transition: any
}

const Track: FC<TrackProps> = (props: TrackProps) => {
    const getText = () => {
        let str: string[] = [];
        Object.keys(props.transition).map(key => {
            str.push(`${key}: ${props.transition[key]}`)
        })

        return `{ ${str.join(', ')} }`
    }
    return (
        <div className={s.track}>
            <motion.div
                animate={{
                    x: props.phys ? '1000%' : 0,
                    borderRadius: props.phys ? '5rem' : 0,
                    backgroundColor: props.phys ? '#fd5e0f' : '#00ff1a',
                    rotate: props.phys ? 90 : 0
                }}
                transition={props.transition}
                className={s.track__ball}
            />
            <div className={s.track__text}>{getText()}</div>
        </div>
    )
}

export default Section__JS_Math