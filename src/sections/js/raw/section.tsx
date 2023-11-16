import { FC, ReactNode, RefObject, useCallback, useEffect, useRef, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import Button from "../../../components/ui/button/button";
import { getCl, getCls } from "../../../helper";
import { TrackBall } from "../../../components/trackball/trackball";
import Video from "../../../components/ui/video/video";

interface Props {
}

const Section__JS_Raw: FC<Props> = (props: Props) => {
    const [tr1, setTr1] = useState<boolean>(false);
    const [tr2, setTr2] = useState<boolean>(false);
    const [tr3, setTr3] = useState<boolean>(false);
    return (
        <Section
            id="js_raw"
            title="Нативные анимации"
            description="Для людей, у которых много времени"
        // checklist={['Общие понятия', 'Особенности delay', 'Динамический transition', 'Математические кривые']}
        >
            <MiniSection
                title="Общие различия"
                description="Нестабильные setInterval, setTimeout"
            >
                <TileList>
                    <Tile title={"Со стейтом"}>
                        <JsTrackBallState />
                    </Tile>
                    <Tile title="Ref">
                        <JsTrackBallStateLess />
                    </Tile>
                    <Tile title="Ref с transition" className={s.withTransit}>
                        <JsTrackBallStateLess />
                    </Tile>
                    {/* <Tile title="С transition">
                        <TrackBall modif="tr11" state={tr1} text="single left | 1s" />
                        <TrackBall modif="tr12" state={tr1} text="multi left / color / border-radius | 2s" />
                        <TrackBall modif="tr13" state={tr1} text="multi left / color / border-radius | 2s 1s" />
                        <Button type={"primary"} onClick={() => setTr1(!tr1)} >Нажми меня</Button>
                    </Tile> */}
                </TileList>
                <TileList>
                    <Tile title="Пример коллаба js триггеров с css transition">
                        <Video src="/assets/crossball.mp4" loop={true} />
                    </Tile>
                </TileList>

            </MiniSection>
        </Section>
    )
}

interface IjsTrackBallState {

}

// let int: any;

const JsTrackBallState: FC<IjsTrackBallState> = (props: IjsTrackBallState) => {
    let int: any;
    let dir = false

    const [left, setLeft] = useState<number>(0)
    // const [dir, setDir] = useState<boolean>(false)

    useEffect(() => {
        int = setInterval(tick, 200)
        return () => {
            clearInterval(int)
        }
    }, [])

    const tick = () => {
        setLeft((currentLeft) => {
            let newLeft = currentLeft;
            if (currentLeft > 90) {
                dir = false
            }
            if (currentLeft < 10) {
                dir = true
            }
            if (dir) {
                newLeft = currentLeft + 10
            } else {
                newLeft = currentLeft - 10
            }
            // console.log(dir, newLeft, newLeft < 100 && !dir, dir && currentLeft > 1);
            return newLeft;
        });
    };

    return (
        <div className={s.jsTrack}>
            <div className={s.jsTrack__ball} style={{ left: left + '%', borderRadius: left / 50 + 'rem' }} >
                {left}
            </div>
        </div>
    )
}

interface IjsTrackBallStateLess {
    setRef?: (r: RefObject<HTMLDivElement>) => void
    clear?: boolean
}

export const JsTrackBallStateLess: FC<IjsTrackBallStateLess> = (props: IjsTrackBallStateLess) => {

    let int: any;
    let left = 0;
    let dir = false
    const ref = useRef<HTMLDivElement>(null)
    // const [dir, setDir] = useState<boolean>(false)

    useEffect(() => {
        if (!props.clear) {
            int = setInterval(tick, 200)
        }
        return () => {
            clearInterval(int)
        }
    }, [])

    useEffect(() => {
        if (ref.current && typeof props.setRef === 'function') {
            props.setRef(ref)
        }
    }, [ref.current])

    const tick = () => {
        let newLeft = left;
        if (left > 90) {
            dir = false
        }
        if (left < 10) {
            dir = true
        }
        if (dir) {
            newLeft = left + 10
        } else {
            newLeft = left - 10
        }
        if (ref.current) {
            left = newLeft
            ref.current.style.left = newLeft + '%'
            ref.current.style.borderRadius = left / 50 + 'rem'
            ref.current.innerHTML = left.toString()
        }
    };

    return (
        <div className={s.jsTrack} >
            <div className={s.jsTrack__ball} ref={ref} >

            </div>
        </div>
    )
}

export default Section__JS_Raw