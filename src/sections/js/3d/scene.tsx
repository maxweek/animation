import { FC, useEffect, useRef, useState } from "react"
import SceneWorker from './SceneWorker.js';
import s from "./styles.module.scss"
import Button from "../../../components/ui/button/button.js";

interface Props {
    texture: string | 'basic' | 'wireframe',
    model: string
    rotation?: boolean
    shader?: boolean
    onlyShader?: boolean
    show?: boolean
}

const Scene: FC<Props> = (props: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const [sWorker, setSWorker] = useState<any>(false);
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        setSWorker(new SceneWorker(ref.current, {
            texture: props.texture,
            model: props.model,
            rotation: props.rotation,
            shader: props.shader,
            onlyShader: props.onlyShader
        }));
        return () => {
            if (ref.current) {
                ref.current.innerHTML = '';
            }
            if (sWorker) {
                sWorker.destroy();
            }
        }
    }, [ref])

    useEffect(() => {
        if (sWorker) {
            if (show) {
                sWorker.start()
            } else {
                sWorker.stop()
            }
        }
    }, [show, sWorker])

    return (
        <>
            <div ref={ref} className={s.scene}></div>
            <Button type="primary" onClick={() => setShow(!show)}>{show ? 'Скрыть' : 'Показать'}</Button>

        </>
    )
}

export default Scene;