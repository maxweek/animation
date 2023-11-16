import { FC, ReactNode, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import Button from "../../../components/ui/button/button";
import { getCl, getCls } from "../../../helper";
import { TrackBall } from "../../../components/trackball/trackball";

interface Props {
}

const Section__CSS_Keyframes: FC<Props> = (props: Props) => {
    const [tr1, setTr1] = useState<boolean>(false);
    const [tr2, setTr2] = useState<boolean>(false);
    const [tr3, setTr3] = useState<boolean>(false);
    return (
        <Section
            id="css_examples"
            title="Примеры"
        >
            <MiniSection
                title=""
                description=""
            >
                <TileList>
                    <Tile title="">
                        
                    </Tile>
                </TileList>
            </MiniSection>
        </Section>
    )
}

export default Section__CSS_Keyframes