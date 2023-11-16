import { FC, ReactNode, useEffect, useState } from "react";
import './styles.scss';
import { fetchSvgMarkup, getCl, getClR, getRawHtml, loadImage } from "../../../helper";

interface Props {
    src: string,
    className?: string,
    autoPlay?: boolean,
    muted?: boolean,
    loop?: boolean,
    controls?: boolean,
    playsInline?: boolean,

}

const Video: FC<Props> = (props: Props) => {

    return (
        <div className={`video ${getClR(props.className)}`}>
            <video
                src={props.src}
                controls={props.controls ?? false}    
                autoPlay={props.autoPlay ?? true}
                muted={props.muted ?? true}
                loop={props.loop ?? true}
                playsInline={props.playsInline ?? true}
            />
        </div>
    )
}

export default Video;