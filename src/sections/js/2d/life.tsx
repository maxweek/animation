import { FC, RefObject, useEffect, useRef, useState } from "react";

import s from './styles.module.scss'
import Button from "../../../components/ui/button/button";

let anim: any;
let coef = 40
let _fps = 2;
let _previousTime: any = undefined;
const mouse = {
    x: null,
    y: null,
    isDown: false,
}

export const Life: FC = () => {
    const ref = useRef<HTMLCanvasElement>(null);
    const [start, setStart] = useState<boolean>(false);
    const [fps, setFps] = useState<string>('2');
    const [size, setSize] = useState<string>('10');
    const [reinit, setReinit] = useState<number>(10);

    useEffect(() => {
        if (ref.current) {
            init(ref.current, parseInt(size) * 5);
        }
        return () => {
            ref.current?.removeEventListener('mouseup', mouseup)
            ref.current?.removeEventListener('mousedown', mousedown)
            ref.current?.removeEventListener('mousemove', mousemove)
            ref.current?.removeEventListener('mouseleave', mouseleave)
        }
    }, [size, reinit, ref.current])

    useEffect(() => {
        if (start) {
            anim = animate(0);
        } else {
            cancelAnimationFrame(anim)
        }
    }, [start])

    useEffect(() => {
        _fps = parseInt(fps);
    }, [fps])

    return (
        <>
            <div className={s.lifeBoxWrapper}>
                <div className={s.lifeBox}>
                    <canvas ref={ref} width={500} height={500} />
                </div>
                Кол-во кадров: {fps} в сек
                <input type="range" min={1} max={60} value={fps} onChange={e => setFps(e.target.value)} />
                Размер поля: {size} хрен пойми чего
                <input type="range" min={1} max={10} value={size} onChange={e => setSize(e.target.value)} />
                <div className={s.lifeBoxActions}>
                    <Button type="primary" onClick={() => setReinit(Math.random())}>Инициализация</Button>
                    <Button type="primary" onClick={() => setStart(!start)}>{start ? 'Старт' : 'Стоп'}</Button>
                    <Button type="primary" onClick={() => next()}>Шаг</Button>
                    <Button type="primary" onClick={() => clear()}>Очистить</Button>
                </div>
            </div>
        </>
    )
}

let dots: number[][] = [];
let ctx: CanvasRenderingContext2D;
let size: {
    origW: number,
    origH: number,
    w: number,
    h: number,
};

function init(ref: HTMLCanvasElement, _size: number) {
    const c = ref.getContext('2d');
    if (!c) return
    ctx = c
    coef = _size;

    ref.width = ref.clientWidth
    ref.height = ref.clientHeight

    ctx.fillStyle = '#00ff2f'
    // ref.addEventListener('click', click)

    ref.addEventListener('mouseup', mouseup)
    ref.addEventListener('mousedown', mousedown)
    ref.addEventListener('mousemove', mousemove)
    ref.addEventListener('mouseleave', mouseleave)

    size = {
        origW: ref.width,
        origH: ref.height,
        w: Math.round(ref.width / coef),
        h: Math.round(ref.height / coef),
    }
    console.log(size)
    for (let x = 0; x < size.w; x++) {
        dots[x] = []
        for (let y = 0; y < size.h; y++) {
            dots[x][y] = 0
        }
    }

    ref.style.backgroundImage = `linear-gradient(to right, transparent calc(100% - 1px), #80808049), linear-gradient(to bottom, transparent calc(100% - 1px), #80808049)`
    ref.style.backgroundSize = `calc(100% / ${size.w}) calc(100% / ${size.h})`
    clear();
    // animate(0)
}

function draw() {
    ctx.clearRect(0, 0, size.origW, size.origH)

    // console.log(dots)
    for (let x = 0; x < dots.length; x++) {
        for (let y = 0; y < dots[x].length; y++) {
            // if(y ) return
            if (dots[x][y]) console.log(x * coef, y * coef, coef, coef)
            if (dots[x][y]) ctx.fillRect(x * coef, y * coef, coef, coef)
        }
    }
}

function clear() {
    ctx.clearRect(0, 0, size.origW, size.origH)
    for (let x = 0; x < dots.length; x++) {
        for (let y = 0; y < dots[x].length; y++) {
            dots[x][y] = 0;
        }
    }
}
function animate(time: number) {
    // ctx.clearRect(0, 0, size.origW, size.origH)
    // ctx.fillStyle = '#00ff2f'
    // ctx.fillRect(0, 0, coef, coef)
    // genRandom()

    // life();
    if (_previousTime != undefined) {
        const deltaTime = time - _previousTime;
        if (deltaTime >= 1000 / _fps) {
            next();
            draw()

            _previousTime = time - (deltaTime % (1000 / _fps));
        }
    } else {
        _previousTime = time;
    }
    anim = requestAnimationFrame(animate)
}

function next() {
    // console.log([...dots])
    // debugger
    let _dots: number[][] = []
    for (let x = 0; x < size.w; x++) {
        _dots[x] = []
        for (let y = 0; y < size.h; y++) {
            let sib = 0;
            // if(dots[x][y] === 0) return;
            if (dots[x][gu(y, 'y') - 1] === 1) sib++;
            if (dots[x][gb(y, 'y') + 1] === 1) sib++;
            if (dots[gu(x, 'x') - 1][y] === 1) sib++;
            if (dots[gu(x, 'x') - 1][gu(y, 'y') - 1] === 1) sib++;
            if (dots[gu(x, 'x') - 1][gb(y, 'y') + 1] === 1) sib++;
            if (dots[gb(x, 'x') + 1][y] === 1) sib++;
            if (dots[gb(x, 'x') + 1][gu(y, 'y') - 1] === 1) sib++;
            if (dots[gb(x, 'x') + 1][gb(y, 'y') + 1] === 1) sib++;
            // console.log(sib)
            // if (sib === 3 || sib === 2) {
            //     _dots[x][y] = 1
            // } else {
            //     _dots[x][y] = 0
            // }
            if (dots[x][y]) {
                if (sib == 2 || sib === 3){
                    _dots[x][y] = 1
                } else {
                    _dots[x][y] = 0
                }
            } else {
                if (sib === 3) {
                    _dots[x][y] = 1
                } else {
                    _dots[x][y] = 0
                }
            }
        }
    }
    // console.log(_dots, dots)
    // debugger
    dots = [..._dots]
    draw()
}

function gu(x: number, v: 'x' | 'y') {
    let l = v === 'x' ? size.w : size.h
    if (x === 0) return l;
    return x
}
function gb(x: number, v: 'x' | 'y') {
    let l = v === 'x' ? size.w : size.h
    if (x === l - 1) return -1;
    return x
}



function mouseup(e: MouseEvent) {
    mouse.isDown = false;
}
function mousedown(e: MouseEvent) {
    mouseDraw(e)
    console.log(e.offsetX)
    mouse.isDown = true;
}
function mousemove(e: MouseEvent) {
    if (mouse.isDown) {
        mouseDraw(e)
    }
}
function mouseleave(e: MouseEvent) {
    mouse.isDown = false;
}

function mouseDraw(e: MouseEvent) {

    const x = Math.round(e.offsetX / coef);
    const y = Math.round(e.offsetY / coef);

    dots[x][y] = 1;
    // console.log(x,y, dots[x][y], e.offsetX)
    ctx.fillRect(x * coef, y * coef, coef, coef)

}