import { FC, ReactNode, RefObject, useCallback, useEffect, useRef, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import Button from "../../../components/ui/button/button";
import { getCl, getCls } from "../../../helper";
import { TrackBall } from "../../../components/trackball/trackball";
import gsap, { Circ, Cubic, Elastic, Expo, Quad, Quart, Quint, Sine } from "gsap";
import { motion } from "framer-motion";
import { useFollowPointer } from "./useFollowPointer";

interface Props {
}


const Section__JS_Math_Follower: FC<Props> = (props: Props) => {
    const refBall = useRef(null);
    const viewRef = useRef(null);
    const { x, y } = useFollowPointer(refBall, viewRef);

    return (
        <div className={s.viewBox} ref={viewRef}>
            <motion.div
                className={s.viewBox__ball}
                ref={refBall}
                animate={{ x, y, rotate: x, backgroundColor: `rgba(${x * 2}, ${y * 2}, ${x*y}, 1)` }}
                transition={{
                    type: "spring",
                    damping: 3,
                    stiffness: 50,
                    restDelta: 0.001
                }}
            >

            </motion.div>
        </div>
    )
}


export default Section__JS_Math_Follower