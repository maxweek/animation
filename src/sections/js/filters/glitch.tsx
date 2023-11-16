import { gsap } from "gsap";
import { Stage, Sprite, Container, withFilters, AnimatedSprite } from '@pixi/react';
import { GlitchFilter, RGBSplitFilter } from 'pixi-filters';
import { FC, RefObject, useEffect, useRef, useState } from "react";
import { getRandomInRange } from "../../../helper";
import * as PIXI from "pixi.js"
// debugger

const Filters = withFilters(Container, {
    rgb: RGBSplitFilter,
    glitch: GlitchFilter,
})

interface Props {
    src: string,
    animation?: boolean,
    width: number,
    height: number,
    filters: any[]
    dispRef?: RefObject<PIXI.Sprite>
    _dispRef?: RefObject<PIXI.Sprite>
}

let an: any;

const rgbFilter = new RGBSplitFilter();


export const GlitchImage: FC<Props> = (props: Props) => {
    const [app, setApp] = useState();
    const [image, setImage] = useState<string>('');
    const [opacity, setOpacity] = useState<boolean>(false);

    const imageRef = useRef<any>()

    useEffect(() => {
        // setImage('')
        console.log(rgbFilter)
        init()
    }, [props.src])

    const init = () => {
        setImage(props.src);
    }

    const [renderFilter, setRenderFilter] = useState<boolean>(!!props.dispRef);

    useEffect(() => {
        if (props.dispRef && props.dispRef.current) {
            props.dispRef.current.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
        }
        setRenderFilter(true);
    }, []);

    const onMouseEnter = () => {
        if(props.dispRef?.current){
            setOpacity(true)
        }
    }
    const onMouseLeave = () => {
        if(props.dispRef?.current){
            setOpacity(false)
        }
    }

    return (
        <Stage
            width={props.width}
            height={props.height}
            options={{
                backgroundAlpha: 0,
                antialias: true,
                // resolution: 10,
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {renderFilter && (
                <Container filters={props.filters} ref={props._dispRef}>
                    <Sprite image={image}
                        width={props.width}
                        height={props.height}
                        x={0}
                        y={0}
                        anchor={0}
                        ref={props.dispRef}
                    />
                    {(props.dispRef && opacity) &&
                        <Sprite
                            // image="https://pixijs.io/examples/examples/assets/pixi-filters/displacement_map_repeat.jpg"
                            image="/assets/noise.png"
                            // ref={props.dispRef}
                        />
                    }
                </Container>
            )}
            {/* <Filters
                rgb={rgb}
                glitch={glitchOpt}
                ref={filtersRef}
            >
                {image &&
                    <Sprite image={image}
                        width={props.width}
                        height={props.height}
                        x={props.width / 2}
                        y={props.height / 2}
                        anchor={0.5}
                        ref={imageRef}
                    />
                }
            </Filters> */}
        </Stage >
    )
}
