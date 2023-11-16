import { FC, ReactNode, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import { getCl, getCls } from "../../../helper";

import Button from "../../../components/ui/button/button";
import Advantages from "../../../components/ui/advantages/advantages";

interface Props {
}

const Section__CSS_Lcp: FC<Props> = (props: Props) => {
    const [tr1, setTr1] = useState<boolean>(true);
    const [tr2, setTr2] = useState<boolean>(false);
    const [tr3, setTr3] = useState<boolean>(false);

    return (
        <Section
            id="lcp"
            title="Смещение макета и неанимируеме свойства"
            description={`Смещения, как и дети - должны быть запланированы`}
        // checklist={['Общие понятия', 'Особенности delay', 'Динамический transition', 'Математические кривые']}
        >

            <MiniSection
                title="Примеры cмещений"
                description="Случайные смещения нам не бро"
            >
                <TileList>
                    <Tile title="Внешнее смещение">
                        <div className={s.cubeBox}>
                            <div className={s.cubeBox__outer}>
                                <p>
                                    Lorem ipsum dolor sit amet.<br />
                                    animated margin-top | padding-left | background-color | opacity
                                </p>
                                <div className={s.cubeBox__inner}></div>
                                <div className={s.cubeBox__inner}></div>
                            </div>
                        </div>
                    </Tile>
                    <Tile title="Внутреннее смещение">
                        <div className={s.cubeBox + ' __alt'}>
                            <div className={s.cubeBox__outer}>
                                <p>
                                    Lorem ipsum dolor sit amet.<br />
                                    animated margin-top | margin-left | background-color | opacity
                                </p>
                                <div className={s.cubeBox__inner}></div>
                                <div className={s.cubeBox__inner}></div>
                            </div>
                        </div>
                    </Tile>
                </TileList>
            </MiniSection>
            <MiniSection
                title="Инфо по свойствам"
                description=""
            >
                <TileList>
                    <Tile title="Неанимируемые свойства" description="Всех блоков">
                        <Advantages items={[
                            'flex',
                            'grid',
                            'display',
                            'font',
                            'border-width',
                            'border-style',
                            '...',
                        ]} />
                    </Tile>
                    <Tile title="Нерекомендоаванные свойства" description="Блоков с относительным позиционированием">
                        <Advantages items={[
                            'left/top/right/bottom',
                            'height/width',
                            'margin',
                            'padding с нефиксировнными width/height',
                            '...',
                        ]} />
                    </Tile>
                    <Tile title="Нерекомендоаванные свойства" description="Блоков с абсолютным позиционированием">
                        Все из первой колонки, по остальным можно, если осторожно :)
                    </Tile>
                </TileList>
            </MiniSection>
        </Section>
    )
}

export default Section__CSS_Lcp