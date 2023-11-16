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

const Area_Full_WithoutInterpolation: FC<Props> = (props: Props) => {

    const ref = useRef<HTMLDivElement>(null)
    const refBall = useRef<HTMLDivElement>(null)

    let anim: any;

    useEffect(() => {
        if (ref.current && refBall.current) {
            ref.current.addEventListener('mouseenter', enter)
            ref.current.addEventListener('mousemove', move)
            ref.current.addEventListener('mouseleave', leave)
        }
        moveCircle()
        return () => {
            if (ref.current && refBall.current) {
                ref.current.removeEventListener('mouseenter', enter)
                ref.current.removeEventListener('mousemove', move)
                ref.current.removeEventListener('mouseleave', leave)
            }
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

    const move = (e: any) => {
        // console.log(e.offsetY, e.offsetX)
        let x = e.offsetX;
        let y = e.offsetY;
        if (ref.current && refBall.current) {
            _store.mouseX = (x / (ref.current.clientWidth / 2) - 1) * ref.current.clientWidth / 2
            _store.mouseY = (y / (ref.current.clientHeight / 2) - 1) * ref.current.clientHeight / 2
            // set()
        }
    }

    const enter = () => {
        _store.mouseIn = true
        let a = _store.transIn
        resetStoreAnimated(1000, 'ease-in-out', (progress) => {
            if (_store.mouseIn) {
                _store.transIn = a * (1 - progress) + progress
            }
        })

    }
    const leave = () => {
        _store.mouseIn = false
        let a = _store.transIn
        _store.oldX = _store.mouseX
        _store.oldY = _store.mouseY
        resetStoreAnimated(1000, 'ease-in-out', (progress) => {
            if (!_store.mouseIn) {
                _store.transIn = a * (1 - progress)
                // console.log(progress)
            }
        })

    }
    const set = () => {
        _store.trans = _store.transIn

        _store.ballX = _store.mouseIn ? _store.mouseX : _store.targetX
        _store.ballY = _store.mouseIn ? _store.mouseY : _store.targetY
        _store.ballRot = _store.mouseIn ? 45 : _store.rot

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


export default Area_Full_WithoutInterpolation

function resetStoreAnimated(duration: number, timingFunctionName: keyof tF = 'ease', setter = (e: number) => { }) {
    const start = performance.now();
    const timingFunction = timingFunctions[timingFunctionName];


    requestAnimationFrame(function animate(time) {
        // Определяем прогресс анимации
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // Получаем значение изменения в зависимости от временной функции
        const progress = timingFunction(timeFraction);
        // Обновляем значения _store

        setter(progress)

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

interface tF {
    'ease': (t: number) => number,
    'ease-in-out': (t: number) => number,
    'elastic': (t: number) => number,

}


export const timingFunctions: tF = {
    'ease': function (t: number) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
    'ease-in-out': function (t: number) { return t * t * (3 - 2 * t); },
    'elastic': function (t: number) {
        return t === 0 || t === 1 ? t :
            -Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI);
    }
};
