import { FC, ReactNode, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import { getCl, getCls } from "../../../helper";

import heroRun from "./assets/hero__run.png";
import heroRunFrames from "./assets/hero_run_.png";
import heroJump from "./assets/hero__jump.png";
import heroJumpFrames from "./assets/hero_jump_.png";
import Button from "../../../components/ui/button/button";

interface Props {
}

const Section__CSS_Sprites: FC<Props> = (props: Props) => {
    const [tr1, setTr1] = useState<boolean>(false);
    const [tr2, setTr2] = useState<boolean>(false);
    const [tr3, setTr3] = useState<boolean>(false);

    const jump = () => {
        setTr1(true)
        setTimeout(() => {
            setTr1(false)
        }, 1000)
    }
    return (
        <Section
            id="sprites"
            title="Спрайтовы анимации"
            description={`Спрайтовая анимация в CSS использует спрайт-лист — это изображение, которое состоит из нескольких меньших изображений (кадров), расположенных в ряд. Эти кадры последовательно "проигрываются", создавая иллюзию движения или анимации. В контексте веб-дизайна это часто используется для анимированных иконок, загрузчиков и других элементов UI.`}
        // checklist={['Общие понятия', 'Особенности delay', 'Динамический transition', 'Математические кривые']}
        >

            <MiniSection
                title="Примеры спрайтов"
                description=""
            >
                <TileList>
                    <Tile title="Анимация героя">
                        <div className={s.heroBox}>
                            <img src={heroRun} />
                            <div className={s.heroBox__inner} />
                        </div>
                    </Tile>
                    <Tile title="Анимация героя с нумерацией кадров">
                        <div className={getCls([s.heroBox, '__alt'])}>
                            <img src={heroRunFrames} />
                            <div className={s.heroBox__inner} />
                        </div>
                    </Tile>
                </TileList>
            </MiniSection>
            <MiniSection
                title="Примеры спрайтов"
                description=""
            >
                <TileList>
                    <Tile title="Анимация героя + прыжок">
                        <div className={getCls([s.heroBox, getCl(tr1, 'jump')])}>
                            <img src={heroRun} />
                            <img src={heroJump} />
                            <div className={s.heroBox__inner} />
                        </div>
                        <Button type="primary" onClick={jump} disabled={tr1}>Нажми меня</Button>
                    </Tile>
                    <Tile title="Анимация героя + прыжок с нумерацией кадров">
                        <div className={getCls([s.heroBox, '__alt', getCl(tr1, 'jump')])}>
                            <img src={heroRunFrames} />
                            <img src={heroJumpFrames} />
                            <div className={s.heroBox__inner} />
                        </div>
                        <Button type="primary" onClick={jump} disabled={tr1}>Нажми меня</Button>
                    </Tile>
                </TileList>
            </MiniSection>
        </Section>
    )
}

export default Section__CSS_Sprites