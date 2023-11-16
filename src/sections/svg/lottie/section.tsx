import { FC, ReactNode } from "react";

import s from './styles.module.scss'
import { Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import Image from "../../../components/ui/image/image";
import Video from "../../../components/ui/video/video";
import Lottie from "lottie-react";

import line from '../../../../public/assets/line.json'

interface Props {
}

const Section__SVG_Lottie: FC<Props> = (props: Props) => {
    return (
        <Section
            id="svg_lottie"
            title="Lottie"
            description="Для тех, кто любит делегировать"
        >
            <SectionLinks links={[{
                text: 'svg mutations anime js',
                href: 'https://animejs.com/documentation/#svgAttr'
            }, {
                text: 'generate loader',
                href: 'https://loader.io/'
            }, {
                text: 'lottie.js',
                href: 'https://airbnb.io/lottie/'
            }
            ]} />
            <TileList>
                <Tile
                    title=""
                >

                    <Lottie
                        animationData={line}
                        rendererSettings={{
                            preserveAspectRatio: 'xMidYMid slice'
                        }}
                    />
                </Tile>
                <Tile className={s.rainbowLoader}>
                    <Lottie
                        animationData={line}
                        rendererSettings={{
                            preserveAspectRatio: 'xMidYMid slice'
                        }}
                    />
                </Tile>
                <Tile className={s.rainbowLoader + " sv1"}>
                    <Lottie
                        className={'sv1_i'}
                        animationData={line}
                        rendererSettings={{
                            preserveAspectRatio: 'xMidYMid slice'
                        }}
                    />
                    <Lottie
                        animationData={line}
                        rendererSettings={{
                            preserveAspectRatio: 'xMidYMid slice'
                        }}
                    />
                </Tile>
            </TileList>
            <TileList>
                <Tile>
                    <Video src="/assets/lottie_frames.mp4" />
                </Tile>
            </TileList>
        </Section>
    )
}

export default Section__SVG_Lottie