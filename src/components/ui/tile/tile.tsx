import { CSSProperties, FC, ReactNode, useEffect, useState } from "react";
import s from './styles.module.scss';
import { getClR, getCls } from "../../../helper";

interface Props {
    title?: string,
    description?: string | ReactNode,
    children?: ReactNode,
    className?: string
    style?: CSSProperties
}

interface ListProps {
    children: ReactNode
}

export const TileList: FC<ListProps> = (props: ListProps) => {
    return (
        <div className={s.tileList}>
            {props.children}
        </div>
    )
}

const Tile: FC<Props> = (props: Props) => {
    const cl = getCls([s.tile, getClR(props.className)])
    return (
        <div className={cl} >
            {props.title &&
                <div className={s.tile__title}>
                    {props.title}
                </div>
            }
            {props.description &&
                <div className={s.tile__description}>
                    {props.description}
                </div>
            }
            <div className={s.tile__body} style={props.style}>
                {props.children}
            </div>
        </div>
    )
}

export default Tile