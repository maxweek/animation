import { FC, ReactNode, RefObject, useCallback, useEffect, useRef, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import { JsTrackBallStateLess } from "../raw/section";
import Button from "../../../components/ui/button/button";
import Section__JS_area_ReqAF from "./area_ReqAF";
import Section__JS_area_SINT from "./area_SINT";

interface Props {
}

let _reqAF_anim: any;

let previousTime: number;
let frameCount: number;


const Section__JS_ReqAF: FC<Props> = (props: Props) => {


    return (
        <Section
            id="js_reqAF"
            title="requestAnimationFrame"
            description="Порше в мире веб-анимации"
        // checklist={['Общие понятия', 'Особенности delay', 'Динамический transition', 'Математические кривые']}
        >
            <MiniSection
                title="Общие различия"
                description="Нестабильные"
            >
                <TileList>
                    <Section__JS_area_SINT />
                </TileList>
                <TileList>
                    <Section__JS_area_ReqAF />
                </TileList>

            </MiniSection>
        </Section>
    )
}


export default Section__JS_ReqAF