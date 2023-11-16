import { ChangeEvent, FC, MouseEvent, ReactNode, useEffect, useRef, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import Button from "../../../components/ui/button/button";

interface Props {
}

const _store = {
    targetX: 0,
    targetY: 0,
    ballX: 0,
    ballY: 0,
    ballRot: 0,
    oldX: 0,
    oldY: 0,
    mouseX: 0,
    mouseY: 0,
    trans: 0,
    transOut: 0,
    transIn: 0,
    cos: 0,
    sin: 0,
    rot: 0,
    coef: 120,
    mouseIn: false
}

const Area_Simple: FC<Props> = (props: Props) => {

    const ref = useRef<HTMLDivElement>(null)
    const refBall = useRef<HTMLDivElement>(null)

    let anim: any;

    useEffect(() => {
        moveCircle()
        return () => {
            cancelAnimationFrame(anim)
        }
    }, [])

    const moveCircle = () => {
        function move(time: number) {
            _store.cos = Math.sin(time / 1000)
            _store.sin = Math.cos(time / 1000)

            _store.targetX = _store.sin * _store.coef
            _store.targetY = _store.cos * _store.coef
            _store.rot = _store.cos * _store.sin * _store.coef

            set();
            anim = requestAnimationFrame(move);
        }
        anim = requestAnimationFrame(move)
    }
    
    const set = () => {
        _store.trans = _store.transIn
        // let _mX = (1 - _store.trans) * _store.oldX + _store.trans * _store.mouseX
        // let _mY = (1 - _store.trans) * _store.oldY + _store.trans * _store.mouseY

        _store.ballX = (1 - _store.trans) * _store.targetX + _store.trans * _store.mouseX
        _store.ballY = (1 - _store.trans) * _store.targetY + _store.trans * _store.mouseY
        _store.ballRot = ((1 - _store.trans) * _store.rot) + _store.trans * 45

        _set(_store.ballX, _store.ballY, _store.ballRot)
    }

    const _set = (x: number, y: number, r: number) => {
        if (refBall.current) {
            refBall.current.style.transform = `translate(${x}px,${y}px) rotate(${r}deg)`
        }
    }

    return (
        <div className={s.viewBox} ref={ref}>
            <div className={s.viewBox__ball} ref={refBall}>

            </div>
        </div>
    )
}


export default Area_Simple