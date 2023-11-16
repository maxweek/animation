import { FC, ReactNode, useEffect, useState } from "react";
import s from './styles.module.scss';

interface Props {
    title?: string,
    description?: string,
    children?: ReactNode,
}

export const Typo: FC<Props> = (props: Props) => {
    return (
        <div className={s.tile}>
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
            <div className={s.tile__body}>
                {props.children}
            </div>
        </div>
    )
}