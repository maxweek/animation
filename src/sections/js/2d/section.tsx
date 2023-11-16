import { FC, ReactNode, RefObject, useCallback, useEffect, useRef, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import Button from "../../../components/ui/button/button";
import { getCl, getCls } from "../../../helper";
import { TrackBall } from "../../../components/trackball/trackball";
import { Life } from "./life";
import HiddenBox from "../../../components/ui/hiddenBox/hiddenBox";

interface Props {
}

const Section__JS_2D: FC<Props> = (props: Props) => {
    return (
        <Section
            id="js_2d"
            title="2d"
            description="Для <crocs>простачков</crocs> уверенных в себе людей"
        // checklist={['Общие понятия', 'Особенности delay', 'Динамический transition', 'Математические кривые']}
        >
            <SectionLinks links={[
                {
                    text: 'Pixi.js',
                    href: 'https://pixijs.io/',
                },
                {
                    text: 'Fabric.js',
                    href: 'http://fabricjs.com/',
                },
                {
                    text: 'Даже фотошоп онлайн',
                    href: 'https://fotoshoponline.ru/',
                },
            ]} />
            <MiniSection
                title="Canvas"
                description="Портал в дивный новый мир, довольно <crocs>простой</crocs> нормальный без библиотек"
            >
                <TileList>
                    <Tile
                        title="Игра жизнь"
                        description="Клеточный автомат на canvas"
                    >
                        <Life />
                    </Tile>
                </TileList>
                <TileList>
                    <Tile>
                        <HiddenBox>
                            <iframe height="400" style={{ width: '100%' }} scrolling="no" title="Spatial Hash Canvas Particles" src="https://codepen.io/jackrugile/embed/JLOXWZ?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                See the Pen <a href="https://codepen.io/jackrugile/pen/JLOXWZ">
                                    Spatial Hash Canvas Particles</a> by Jack Rugile (<a href="https://codepen.io/jackrugile">@jackrugile</a>)
                                on <a href="https://codepen.io">CodePen</a>.
                            </iframe>
                        </HiddenBox>
                    </Tile>
                    <Tile>
                        <HiddenBox>
                            <iframe height="400" style={{ width: "100%" }} scrolling="no" title="Canvas particle dynamics" src="https://codepen.io/hendrysadrak/embed/LEVVxq?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                                See the Pen <a href="https://codepen.io/hendrysadrak/pen/LEVVxq">
                                    Canvas particle dynamics</a> by Hendry Sadrak (<a href="https://codepen.io/hendrysadrak">@hendrysadrak</a>)
                                on <a href="https://codepen.io">CodePen</a>.
                            </iframe>
                        </HiddenBox>
                    </Tile>
                </TileList>
            </MiniSection>
            {/* <MiniSection title="Костная анимация">
                <TileList>
                    <Tile>
                        <img src="/assets/bones_1.gif" />
                    </Tile>
                </TileList>
            </MiniSection> */}
        </Section>
    )
}

export default Section__JS_2D