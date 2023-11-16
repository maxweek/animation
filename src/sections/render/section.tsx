import { FC, ReactNode } from "react";

import s from './styles.module.scss'
import { MiniSection, Section } from "../../components/ui/section/section";
import Tile, { TileList } from "../../components/ui/tile/tile";
import Advantages from "../../components/ui/advantages/advantages";

interface Props {
}

const Section__Render: FC<Props> = (props: Props) => {
    return (
        <Section
            id="render"
            title="Рендер"
            description="Рассчеты ебана"
        >
            <MiniSection title="Виды рендеринга">
                <TileList>
                    <Tile title="Computation rendering">
                        <Advantages items={[
                            'Вычисления',
                            'Фильмы',
                            'CGI',
                        ]}/>
                        <img src="/assets/comprender.gif" />
                        <img src="/assets/comprender_2.gif" />
                    </Tile>
                    <Tile title="RT rendering (Real-time)">
                        <Advantages items={[
                            'Симуляции',
                            'Игры',
                            'Веб-страницы',
                        ]}/>
                        <img src="/assets/rtRender.gif" />
                        <img src="/assets/rtRender_3.gif" />
                        {/* <img src="/assets/rtRender_2.gif" /> */}
                    </Tile>
                </TileList>
            </MiniSection>
            <TileList>
                <Tile title="Рендеринг в браузере">
                    <img src="/assets/renderPath.png" />
                </Tile>
            </TileList>
        </Section>
    )
}

export default Section__Render