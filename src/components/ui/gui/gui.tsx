import { FC, ReactNode, useEffect, useState } from "react";
import s from './styles.module.scss';
import Stats from "stats.js";
import dat from "dat.gui"

interface Props {
}

export const stats = new Stats();
const gui = new dat.GUI();

const params = {
}


const GUI: FC<Props> = (props: Props) => {

    const [styles, setStyles] = useState<string>('')


    const [backDropFilter, setbackDropFilter] = useState<boolean>(false)
    const [filter, setfilter] = useState<boolean>(false)
    const [animation, setanimation] = useState<boolean>(false)
    const [left, setleft] = useState<boolean>(false)
    const [transition, settransition] = useState<boolean>(false)

    useEffect(() => {
        // stats.showPanel(0)
        // document.querySelector('.stats')?.appendChild(stats.dom)

        gui.close()

        gui.add({ backDropFilter }, 'backDropFilter').onChange(setbackDropFilter)
        gui.add({ filter }, 'filter').onChange(setfilter)
        gui.add({ animation }, 'animation').onChange(setanimation)
        gui.add({ left }, 'left').onChange(setleft)
        gui.add({ transition }, 'transition').onChange(settransition)

        return () => {
            gui.destroy()
        }
    }, [])

    useEffect(() => { 
        let str: string[] = [];
        if(backDropFilter) str.push('backdrop-filter: none !important;')
        if(filter) str.push('filter: none !important;')
        if(animation) str.push('animation: none !important;')
        if(left) str.push('left: 0 !important;')
        if(transition) str.push('transition: none !important;')

        setStyles(`#__site_wrapper * {${str.join('\n')} }`)
    }, [
        backDropFilter,
        filter,
        animation,
        left,
        transition
    ])

    return (
        <div className={s.gui}>
            <style>{styles}</style>
            <div className={`stats ${s.stats}`}></div>
            <div className={s.box}></div>
        </div>
    )
}

export default GUI;