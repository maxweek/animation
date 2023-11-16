import { FC, ReactNode, useEffect, useState } from "react";
import s from './styles.module.scss';
import { fetchSvgMarkup, getCl, getClR, getRawHtml, loadImage } from "../../../helper";

interface Props {
    items?: string[],
    links?: {text: string, href: string}[],
    className?: string
}

const Advantages: FC<Props> = (props: Props) => {

    return (
        <div className={`advantages ${s.advantages} ${getClR(props.className)}`}>
            {props.items?.map((el, i) => {
                return (
                    <div className={s.item} key={"adv_" + i} dangerouslySetInnerHTML={getRawHtml(el)}></div>
                )
            })}
            {props.links?.map((el, i) => {
                return (
                    <a href={el.href} target="_blank" className={s.item} key={"adl_" + i}>{el.text}</a>
                )
            })}
        </div>
    )
}

export default Advantages;