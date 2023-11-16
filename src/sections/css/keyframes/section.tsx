import { FC, ReactNode, useEffect, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import Button from "../../../components/ui/button/button";
import { getCl, getCls } from "../../../helper";
import { TrackBall } from "../../../components/trackball/trackball";
import HiddenBox from "../../../components/ui/hiddenBox/hiddenBox";

interface Props {
}

let tm: any;

const tf = {
    'linear': 'linear',
    'ease': 'ease',
    'ease-in': 'ease-in',
    'ease-out': 'ease-out',
    'ease-in-out': 'ease-in-out',
    'hard-in-out': 'cubic-bezier(0.75, 0, 0.25, 1)',
    'elastic': 'cubic-bezier(0.5,-0.25, 0.5, 1.25)',
    'steps(5)': 'steps(5)',
    'steps(20)': 'steps(20)'
}
const Section__CSS_Keyframes: FC<Props> = (props: Props) => {
    const [elementsCount, setElementsCount] = useState<string>('20');
    const [delayCount, setDelayCount] = useState<string>('10');
    const [durCount, setDurCount] = useState<string>('40');
    const [tFType, setTFType] = useState<any>('ease-in-out');
    const [rerender, setRerender] = useState<boolean>(true);

    useEffect(() => {
        setRerender(false)
        tm = setTimeout(() => {
            setRerender(true)
        }, 200)

        return () => {
            clearTimeout(tm)
        }
    }, [elementsCount, delayCount, durCount, tFType])
    return (
        <Section
            id="keyframes"
            title="Keyframes"
            description={`В CSS, @keyframes используется для создания анимаций, определяя последовательность кадров (или "ключевых кадров") анимации. С помощью этой директивы вы можете установить точные стили для различных моментов времени в течение анимации, что позволяет создавать сложные визуальные эффекты.`}
        // checklist={['Общие понятия', 'Особенности delay', 'Динамический transition', 'Математические кривые']}
        >
            <MiniSection
                title=""
                description=""
            >
                <TileList>
                    <Tile title="База">
                        <div className={s.keyFramesBox}>
                            <div className={s.keyFramesBox__inner} />
                        </div>
                    </Tile>
                    <Tile title="Keyframes и кривыми безье " className={s.tracks}>
                        <TrackBall state={true} modif="kf11" text="linear" />
                        <TrackBall state={true} modif="kf12" text="ease-in" />
                        <TrackBall state={true} modif="kf13" text="ease-out" />
                        <TrackBall state={true} modif="kf14" text="ease-in-out" />
                        <TrackBall state={true} modif="kf15" text="step(10)" />
                        <TrackBall state={true} modif="kf16" text="elastic (ненастоящий)" />
                    </Tile>
                </TileList>
                <TileList>
                    <Tile title="Кружочкы">
                        <div className={s.circleKFBox}>
                            {rerender &&
                                <>
                                    {/* @ts-ignore */}
                                    <div className={s.circleKFBox__item} style={{ animationDuration: parseInt(durCount) / 10 + 's', animationTimingFunction: tf[tFType] }}>
                                        <img src="/assets/spanslogo.svg" />
                                    </div>
                                    {Array.from({ length: parseInt(elementsCount) }).map((el, i) => {
                                        // @ts-ignore
                                        return <div className={s.circleKFBox__item} style={{ animationDuration: parseInt(durCount) / 10 + 's', animationDelay: parseInt(delayCount) * (i + 1) / 10 + 's', animationTimingFunction: tf[tFType] }} />
                                    })}
                                </>
                            }
                        </div>
                        <div className={s.actions}>
                            {Object.keys(tf).map(key => {
                                return <Button type="primary" color={key === tFType ? 'red' : undefined} onClick={() => setTFType(key)}>{key}</Button>
                            })}
                        </div>
                        Элементов: {parseInt(elementsCount)} шт
                        <input type="range" min={0} max={20} value={elementsCount} onChange={e => setElementsCount(e.target.value)} />
                        Задержка: {parseInt(delayCount) / 10} сек
                        <input type="range" min={0} max={50} value={delayCount} onChange={e => setDelayCount(e.target.value)} />
                        Длительность: {parseInt(durCount) / 10} cек
                        <input type="range" min={1} max={40} value={durCount} onChange={e => setDurCount(e.target.value)} />
                    </Tile>
                </TileList>
                <TileList>
                    <Tile>
                        <HiddenBox>
                            <iframe height="300" style={{width: '100%'}} scrolling="no" title="CSS Horse Animation" src="https://codepen.io/aryan-michael-jordan/embed/RwoMbvR?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                See the Pen <a href="https://codepen.io/aryan-michael-jordan/pen/RwoMbvR">
                                    CSS Horse Animation</a> by Aryan Michael (<a href="https://codepen.io/aryan-michael-jordan">@aryan-michael-jordan</a>)
                                on <a href="https://codepen.io">CodePen</a>.
                            </iframe>
                        </HiddenBox>
                    </Tile>
                </TileList>
            </MiniSection>
        </Section>
    )
}

export default Section__CSS_Keyframes