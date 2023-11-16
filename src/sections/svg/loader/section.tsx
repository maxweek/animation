import { FC, ReactNode, useEffect, useRef } from "react";

import s from './styles.module.scss'
import { Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import Image from "../../../components/ui/image/image";
import Video from "../../../components/ui/video/video";

import anime from "animejs"
import { timingFunctions } from "../../js/interpolation/area_full_wInter";

import maxRocketImage from "../../../../public/assets/maxRocket.png";

interface Props {
}

const Section__SVG_Loaders: FC<Props> = (props: Props) => {

    const ref = useRef(null)
    const refBall = useRef(null)
    const refBall2 = useRef(null)
    const refRocket = useRef(null)

    useEffect(() => {
        // @ts-ignore
        ref.current = anime({
            targets: '.svgPathBox.__path svg path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: function (el, i) { return i * 250 },
            direction: 'alternate',
            loop: true
        })
        const path = anime.path('.svgPathBox.__ball svg path')
        // @ts-ignore
        refBall.current = anime({
            targets: '.svgPathBox.__ball .svgPathBox__ballWrapper',
            translateX: path('x'),
            translateY: path('y'),
            // rotate: path('angle'),
            easing: 'linear',
            duration: 2000,
            loop: true
        })
        // @ts-ignore
        refBall2.current = anime({
            targets: '.svgPathBox.__ball2 .svgPathBox__ballWrapper',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: function (el, i, total) {
                return function (t) {
                    return timingFunctions['ease-in-out'](t)
                }
            },
            duration: 2000,
            loop: true
        })
        const pathRocket = anime.path('.svgPathBox.__rocket svg path')
        // @ts-ignore
        refRocket.current = anime({
            targets: '.svgPathBox.__rocket .svgPathBox__ballWrapper',
            translateX: pathRocket('x'),
            translateY: pathRocket('y'),
            rotate: pathRocket('angle'),
            easing: 'linear',
            duration: 4000,
            loop: true,
            // direction: 'alternate'
        })
    }, [])

    return (
        <Section
            id="svg_loaders"
            title="Loaders"
            description="Крутящиеся штуки, что бы отвлечь внимание пользователя пока <crocs>ты&nbsp;крадешь его данные</crocs> контент грузится"
        >
            <SectionLinks links={[{
                text: 'svg mutations anime js',
                href: 'https://animejs.com/documentation/#svgAttr'
            }, {
                text: 'generate loader',
                href: 'https://loader.io/'
            }
            ]} />
            <TileList>
                <Tile
                    title=""
                >
                    <img src="/assets/loader.svg" />
                </Tile>
                <Tile className={s.rainbowLoader}>
                    <Image src='loader_white.svg' />
                    {/* <img src="/loader.svg" /> */}
                </Tile>
                <Tile className={s.rainbowLoader + " sv1"}>
                    <Image src='loader_white.svg' />
                    <Image src='loader_white.svg' className={'sv1_i'} />
                    {/* <img src="/loader.svg" /> */}
                </Tile>
            </TileList>
            <TileList>
                <Tile>
                    <div className={`${s.svgPathBox} svgPathBox __rainbow`}>
                        <div className={`${s.svgPathBox__back} svgPathBox__back`}>
                            <Path />
                        </div>
                        <div className={`${s.svgPathBox__ball} svgPathBox__ball`}>

                        </div>
                    </div>
                </Tile>
                <Tile>
                    <div className={`${s.svgPathBox} svgPathBox __path`}>
                        <div className={`${s.svgPathBox__back} svgPathBox__back`}>
                            <Path />
                        </div>
                        <div className={`${s.svgPathBox__ball} svgPathBox__ball`}>

                        </div>
                    </div>
                </Tile>
            </TileList>
            <TileList>
                <Tile>
                    <div className={`${s.svgPathBox} svgPathBox __ball`}>
                        <div className={`${s.svgPathBox__back} svgPathBox__back`}>
                            <Path />
                        </div>
                        <div className={`${s.svgPathBox__ballWrapper} svgPathBox__ballWrapper`}>
                            <div className={`${s.svgPathBox__ball} svgPathBox__ball`}>

                            </div>
                        </div>
                    </div>
                </Tile>
                <Tile>
                    <div className={`${s.svgPathBox} svgPathBox __ball2`}>
                        <div className={`${s.svgPathBox__back} svgPathBox__back`}>
                            <Path />
                        </div>
                        <div className={`${s.svgPathBox__ballWrapper} svgPathBox__ballWrapper`}>
                            <div className={`${s.svgPathBox__ball} svgPathBox__ball`}>

                            </div>
                        </div>
                    </div>
                </Tile>
            </TileList>
            <TileList>
                <Tile>
                    <div className={`${s.svgPathBox} svgPathBox __rocket`}>
                        <div className={`${s.svgPathBox__back} svgPathBox__back`}>
                            <RPath />
                        </div>
                        <div className={`${s.svgPathBox__ballWrapper} svgPathBox__ballWrapper`}>
                            <div className={`${s.svgPathBox__ball} svgPathBox__ball`}>
                                <img src={maxRocketImage} />
                            </div>
                        </div>
                    </div>
                </Tile>
                {/* <Tile>
                    <div className={`${s.svgPathBox} svgPathBox __rocket2`}>
                        <div className={`${s.svgPathBox__back} svgPathBox__back`}>
                            <Path />
                        </div>
                        <div className={`${s.svgPathBox__ballWrapper} svgPathBox__ballWrapper`}>
                            <div className={`${s.svgPathBox__ball} svgPathBox__ball`}>
                                <img src={maxRocketImage} />
                            </div>
                        </div>
                    </div>
                </Tile> */}
            </TileList>
            <TileList>
                <Tile title="Пример мутаций сплайнов svg">
                    <Video src="/assets/svg_mutation.mp4" />
                </Tile>
            </TileList>
            <TileList>
                <Tile title="МРСК?? Не важно, просто пример анимации большой SVG карты">
                    <Video src="/assets/mrsk.mp4" />
                </Tile>
            </TileList>
        </Section>
    )
}

export default Section__SVG_Loaders



const Path = () => {
    return (
        <svg width="426" height="426" viewBox="0 0 426 426" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M358 144C358 71.5003 252 65.0003 228.5 65.0003C205 65.0003 85.5 62.0003 85.5 144C85.5 226 161.5 221 228.5 221C295.5 221 358 241 358 290C358 339 318 371 228.5 371C139 371 85.5 337 85.5 313.5" stroke="black" />
        </svg>
    )
}
const RPath = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="402" height="190" viewBox="0 0 402 190" fill="none">
            <path d="M196 94.5L171.955 51.3248C140.38 -5.36975 61.2478 -11.6002 21.1897 39.4543V39.4543C-4.26349 71.8946 -4.53618 117.58 20.3445 150.461V150.461C60.3079 203.276 141.635 197.879 173.77 139.967L199 94.5L230.359 45.5023C265.399 -9.2486 344.437 -11.8879 383.052 40.4033V40.4033C406.88 72.6715 407.146 116.761 383.877 149.435V149.435C345.354 203.527 264.075 201.703 228.476 145.643L196 94.5Z" stroke="black" />
        </svg>
    )
}