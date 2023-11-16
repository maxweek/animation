import { FC, ReactNode, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import { getCl, getCls } from "../../../helper";

import Button from "../../../components/ui/button/button";

interface Props {
}

const Section__CSS_Triggers: FC<Props> = (props: Props) => {
    const [tr1, setTr1] = useState<boolean>(true);
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
            id="blockTriggers"
            title="Триггеры интерактивных анимаций"
            description={`Невидимая область вокруг для обнаружения чего-либо, элементов или ПТСР`}
        // checklist={['Общие понятия', 'Особенности delay', 'Динамический transition', 'Математические кривые']}
        >

            <MiniSection
                title="Примеры триггеров"
                description=""
            >
                <TileList>
                    <Tile title="Отсутствие тригера">
                        <div className={getCls([s.cubeBox, '__alt'])}>
                            <div className={s.cubeBox__inner} />
                        </div>
                    </Tile>
                    <Tile title="Триггер внутри">
                        <div className={getCls([s.cubeBox])}>
                            <div className={s.cubeBox__outer}>
                                <div className={s.cubeBox__inner} />
                            </div>
                        </div>
                    </Tile>
                    <Tile title="Триггер извне">
                        <div className={getCls([s.cubeBox, '__diff'])}>
                            <div className={s.cubeBox__outer}>
                                <div className={s.cubeBox__inner} />
                            </div>
                        </div>
                    </Tile>
                </TileList>
            </MiniSection>
            <MiniSection
                title="Помощь триггеров"
                description="В целом триггеры можно визуализовать под себя и конкретную задачу, выставить хелперы на этапе разработки и понять что с чем связано, и правильно ли."
            ><></>
            </MiniSection>
        </Section>
    )
}

export default Section__CSS_Triggers