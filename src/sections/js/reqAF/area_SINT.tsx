import { FC, ReactNode, RefObject, useCallback, useEffect, useRef, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import { JsTrackBallStateLess } from "../raw/section";
import Button from "../../../components/ui/button/button";

interface Props {
}

let _sint_anim: any;

let previousTime: number;
let frameCount: number;


const Section__JS_area_SINT: FC<Props> = (props: Props) => {

    const [ref1, setRef1] = useState<RefObject<HTMLDivElement>>()
    const spanRef = useRef<HTMLSpanElement>(null)
    const spanAddRef = useRef<HTMLSpanElement>(null)

    const [frame, setFrame] = useState<boolean>(false)
    const [fps, setFps] = useState<string>('2')

    useEffect(() => {
        if (ref1?.current) {
            console.log(ref1)
        }
    }, [ref1])

    useEffect(() => {
        if (ref1?.current) {
            if (frame) {
                _sint_anim = setInterval(() => { animate(Date.now()) }, 1000 / parseInt(fps))
            } else {
                clearInterval(_sint_anim)
            }
        }
        return () => {
            clearInterval(_sint_anim)
        }

    }, [frame, fps])

    useEffect(() => {
        return () => {
            clearInterval(_sint_anim)
        }
    }, [])

    const animate = (time: number) => {
        if (spanRef.current && spanAddRef.current && ref1?.current) {
            ref1.current.style.left = ((frameCount + 1) / parseInt(fps) * 90) + '%'

            ref1.current.innerHTML = (frameCount + 1)?.toString()
            // spanRef.current.innerHTML = Date.now().toString()

            if (previousTime != undefined) {
                // Инкрементируем счетчик кадров
                frameCount++;

                let str = '';
                for (let i = 0; i < frameCount; i++) {
                    str += '•'
                }
                spanAddRef.current.innerHTML = str
                // Вычисляем дельту времени
                const deltaTime = time - previousTime;

                // Если прошла секунда или больше, обновляем состояние FPS
                if (deltaTime >= 1000) {
                    // Устанавливаем FPS в состояние
                    // setFps(frameCount);
                    spanRef.current.innerHTML = frameCount.toString() + ' fps'

                    // Сбрасываем счетчик кадров
                    frameCount = 0;

                    // Вычитаем дельту из текущего времени для избежания дребезга таймера
                    previousTime = time - (deltaTime % 1000);
                }
            } else {
                // Инициализируем предыдущее время, если это первый кадр
                previousTime = time;
            }
        }
        // _sint_anim = requestAnimationFrame(animate)
    }

    return (
        <Tile
            title="Ручное сравнение fps"
            description={<>setInterval <span ref={spanRef}></span> | <span ref={spanAddRef}></span></>}
        >
            <JsTrackBallStateLess clear={true} setRef={setRef1} />
            Ограничитель кадров: {fps} в сек
            <input type="range" min={1} max={144} value={fps} onChange={e => setFps(e.target.value)}></input>
            <Button type="primary" onClick={() => { setFrame(!frame) }}>{frame ? 'Выключить' : 'Включить'}</Button>
        </Tile>
    )
}


export default Section__JS_area_SINT