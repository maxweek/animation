import { FC, ReactNode, RefObject, useCallback, useEffect, useRef, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import { JsTrackBallStateLess } from "../raw/section";
import Button from "../../../components/ui/button/button";

interface Props {
}

let _reqAF_anim: any;

let _previousTime: number;
let _frameCount: number;


const Section__JS_area_ReqAF: FC<Props> = (props: Props) => {

    const [ref1, setRef1] = useState<RefObject<HTMLDivElement>>()
    const spanRef = useRef<HTMLSpanElement>(null)
    const spanAddRef = useRef<HTMLSpanElement>(null)

    const [frame, setFrame] = useState<boolean>(false)
    const [fps, setFps] = useState<string>('0')

    useEffect(() => {
        if (ref1?.current) {
            console.log(ref1)
        }
    }, [ref1])

    useEffect(() => {
        if (ref1?.current) {
            if (frame) {
                _reqAF_anim = requestAnimationFrame(animate)
            } else {
                cancelAnimationFrame(_reqAF_anim)
            }
        }
        return () => {
            cancelAnimationFrame(_reqAF_anim)
        }
    }, [frame, fps])

    useEffect(() => {
        return () => {
            cancelAnimationFrame(_reqAF_anim)
        }
    }, [])

    const animate = (time: number) => {
        if (spanRef.current && spanAddRef.current && ref1?.current) {
            ref1.current.style.left = ((_frameCount + 1) / parseInt(fps) * 90) + '%'

            ref1.current.innerHTML = _frameCount?.toString()
            // spanRef.current.innerHTML = Date.now().toString()

            if (_previousTime != undefined) {
                // Инкрементируем счетчик кадров
                _frameCount++;

                let str = '';
                for (let i = 0; i < _frameCount; i++) {
                    str += '•'
                }
                spanAddRef.current.innerHTML = str
                // Вычисляем дельту времени
                const deltaTime = time - _previousTime;

                // Если прошла секунда или больше, обновляем состояние FPS
                if (deltaTime >= 1000) {
                    // Устанавливаем FPS в состояние
                    // setFps(_frameCount);
                    spanRef.current.innerHTML = _frameCount.toString() + ' fps'
                    setFps(_frameCount.toString())
                    // Сбрасываем счетчик кадров
                    _frameCount = 0;

                    // Вычитаем дельту из текущего времени для избежания дребезга таймера
                    _previousTime = time - (deltaTime % 1000);
                }
            } else {
                // Инициализируем предыдущее время, если это первый кадр
                _previousTime = time;
            }
        }
        _reqAF_anim = requestAnimationFrame(animate)
    }

    return (
        <Tile title="requestAnimationFrame" description={<>Божественное постоянство: <span ref={spanRef}></span> | <span ref={spanAddRef}></span></>}>
            <JsTrackBallStateLess clear={true} setRef={setRef1} />
            <Button type="primary" onClick={() => { setFrame(!frame) }}>{frame ? 'Выключить' : 'Включить'}</Button>
        </Tile>
    )
}


export default Section__JS_area_ReqAF