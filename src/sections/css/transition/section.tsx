import { FC, ReactNode, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import Button from "../../../components/ui/button/button";
import { getCl, getCls } from "../../../helper";
import { TrackBall } from "../../../components/trackball/trackball";

interface Props {
}

const Section__CSS_Transition: FC<Props> = (props: Props) => {
    const [tr1, setTr1] = useState<boolean>(false);
    const [tr2, setTr2] = useState<boolean>(false);
    const [tr3, setTr3] = useState<boolean>(false);
    return (
        <Section
            id="transition"
            title="Transition"
            description="Свойство transition в CSS предоставляет способ контролировать скорость изменения значений свойств между двумя состояниями. Это позволяет создавать плавные анимации между двумя точками, делая изменения более визуально привлекательными и понятными для пользователей."
        >
            <MiniSection
                title="Общие различия"
            >

                <TileList>
                    <Tile title="Без transition" className={s.withoutTransit}>
                        <TrackBall modif="tr11" state={tr1} text="single left | 1s" />
                        <TrackBall modif="tr12" state={tr1} text="multi left / color / border-radius | 2s" />
                        <TrackBall modif="tr13" state={tr1} text="multi left / color / border-radius | 2s 1s" />
                        <Button type={"primary"} onClick={() => setTr1(!tr1)} >Нажми меня</Button>
                    </Tile>
                    <Tile title="С transition">
                        <TrackBall modif="tr11" state={tr1} text="single left | 1s" />
                        <TrackBall modif="tr12" state={tr1} text="multi left / color / border-radius | 2s" />
                        <TrackBall modif="tr13" state={tr1} text="multi left / color / border-radius | 2s 1s" />
                        <Button type={"primary"} onClick={() => setTr1(!tr1)} >Нажми меня</Button>
                    </Tile>
                </TileList>

            </MiniSection>

            <MiniSection
                title="Особенности delay"
                description="@for в scss позволяет делать последовательный delay (:nth-child / 10)s"
            >

                <TileList>
                    <Tile title="Без transition">
                        <div className={`${s.grid} tr21  ${getCl(tr2, 'active')} ${s.withoutTransit}`}>
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                        </div>
                        <Button type={"primary"} onClick={() => setTr2(!tr2)} >Нажми меня</Button>
                    </Tile>
                    <Tile title="С Transition">
                        <div className={getCls([s.grid, 'tr22', getCl(tr2, 'active')])}>
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                        </div>
                        <Button type={"primary"} onClick={() => setTr2(!tr2)} >Нажми меня</Button>
                    </Tile>
                    <Tile title="С Transition delay">
                        <div className={getCls([s.grid, 'tr23', getCl(tr2, 'active')])}>
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                        </div>
                        <Button type={"primary"} onClick={() => setTr2(!tr2)} >Нажми меня</Button>
                    </Tile>
                </TileList>
            </MiniSection>
            <MiniSection
                title="Динамический Transition"
                description="Позволяет изменять время входа/выхода из анимаций в различных состяниях :hover :active ... и классовых модификаторов (селекторов)"
            >
                <TileList>
                    <Tile title="Без transition">
                        <div className={getCls([s.grid, 'tr31', s.withoutTransit])}>
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                        </div>
                    </Tile>
                    <Tile title="С Transition">
                        <div className={getCls([s.grid, 'tr32'])}>
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                        </div>
                    </Tile>
                    <Tile title="С Dynamic Transition">
                        <div className={getCls([s.grid, 'tr33'])}>
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                            <div className={s.grid__item} />
                        </div>
                    </Tile>
                </TileList>
            </MiniSection>
            <MiniSection
                title="Математические кривые"
                description="В transition есть нативная поддержка timing function по механизму кривых Безье (две опорные точки на графике)"
            >
                <SectionLinks links={[
                    {
                        href: 'https://webformyself.com/kak-uluchshit-css-animaciyu-s-pomoshhyu-kubicheskoj-krivoj-beze/',
                        text: 'Общая теория',
                    },
                    {
                        href: 'https://learn.javascript.ru/css-transitions',
                        text: 'Общая теория 2',
                    },
                    {
                        href: 'https://10015.io/tools/css-cubic-bezier-generator',
                        text: 'Генератор кривых',
                    },
                ]} />
                <TileList>
                    <Tile title="Easings ">
                        <TrackBall state={tr3} modif="tr41" text="linear" />
                        <TrackBall state={tr3} modif="tr42" text="ease-in" />
                        <TrackBall state={tr3} modif="tr43" text="ease-out" />
                        <TrackBall state={tr3} modif="tr44" text="ease-in-out" />
                        <TrackBall state={tr3} modif="tr45" text="step(10)" />
                        <TrackBall state={tr3} modif="tr46" text="elastic (ненастоящий)" />
                        <Button type={"primary"} onClick={() => setTr3(!tr3)} >Нажми меня</Button>
                    </Tile>
                </TileList>
            </MiniSection>
        </Section>
    )
}

export default Section__CSS_Transition