import { FC, ReactNode, useEffect, useState } from "react";
import './styles.scss';
import { fetchSvgMarkup, getCl, getClR, getRawHtml, loadImage } from "../../../helper";

interface Props {
    src: string,
    className?: string,
}

const Image: FC<Props> = (props: Props) => {
    const [image, setImage] = useState<string>('');
    const [loaded, setLoaded] = useState<boolean>(false);
    const isSvg = props.src.includes('.svg');
    let basePath = props.src.includes('http') || props.src.includes('data:') ? '' : '/assets/';

    useEffect(() => {
        setImage('');
        setLoaded(false)
        if (isSvg) {
            fetchSvgMarkup(basePath + props.src, setImage, setLoaded);
        } else {
            loadImage(basePath + props.src).then((url: string) => {
                setImage(url)
                setLoaded(true)
            })
        }
    }, [props.src])

    return (
        <div className={`image ${getCl(!image, 'err')} ${getCl(loaded, 'loaded')} ${getClR(props.className)}`}>
            {isSvg ? <div className="image__svg" dangerouslySetInnerHTML={getRawHtml(image)} /> : <img src={image} />}
        </div>
    )
}

export default Image;