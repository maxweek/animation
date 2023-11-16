import { FC, ReactNode, useEffect, useState } from "react";
import s from './styles.module.scss';
import { getCl, getCls } from "../../helper";


interface TrackBall {
    modif: string,
    state: boolean
    text?: string
}

export const TrackBall: FC<TrackBall> = (props: TrackBall) => {
    const cls = getCls(['track', s.track, props.modif, getCl(props.state, 'active')])
    return (
        <div className={cls}>
            {props.text && <div className={s.track__text}>{props.text}</div>}
            <div className={getCls(['track__ball', s.track__ball])} />
        </div>
    )
}