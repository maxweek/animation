import { FC, ReactNode, useEffect, useRef, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import { getCl, getCls } from "../../../helper";

import Button from "../../../components/ui/button/button";
import Video from "../../../components/ui/video/video";

interface Props {
}

let pos: any;

const Section__CSS_3D: FC<Props> = (props: Props) => {
    const tileRef = useRef<HTMLDivElement>(null)
    const viewRef = useRef<HTMLDivElement>(null)
    const flareRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (viewRef.current) {
            pos = viewRef.current.getBoundingClientRect()
        }
    }, [])

    const mouseMove = (e: any) => {
        if (tileRef.current && viewRef.current && flareRef.current) {
            // console.log(e, )
            // console.log(viewRef.current.offsetLeft)
            let x = e.nativeEvent.offsetX - viewRef.current.clientWidth / 2
            let y = e.nativeEvent.offsetY - viewRef.current.clientHeight / 2;
            // tileRef.current.innerHTML = `x: ${x.toFixed(2)} | y: ${y.toFixed(2)}`

            let coefX = x / viewRef.current.clientWidth * 2
            let coefY = y / viewRef.current.clientHeight * 2

            console.log(e.nativeEvent.offsetX)

            // let _x = 0;
            // let _y = 0;
            // let coefX = x / tileRef.current.clientWidth / 2
            // let coefY = y / tileRef.current.clientHeight / 2
            // // if (x < tileRef.current.clientWidth / 2 && x > -tileRef.current.clientWidth / 2 && y < tileRef.current.clientHeight / 2 && y > -tileRef.current.clientHeight / 2) {
            //     _x = x;
            //     _y = y;
            // // }

            flareRef.current.style.transform = `translateZ(-5rem) rotateY(${coefX * 20}deg) rotateX(${coefY * -20}deg) rotateZ(${coefX * coefY * 200}deg)`

            tileRef.current.style.transform = `translateX(${coefX * 20}px) translateY(${coefY * 20}px) rotateY(${coefX * 20}deg) rotateX(${coefY * -20}deg)`
        }
    }

    return (
        <Section
            id="css_3d"
            title="CSS 3D"
            description={`Это изи, по функционалу примерно как дисковый телефон твоей бабушки, но по факту (не) стабильный`}
        // checklist={['Общие понятия', 'Особенности delay', 'Динамический transition', 'Математические кривые']}
        >

            <MiniSection
                title="Примеры 3D"
                description=""
            >
                <TileList>
                    <Tile title="База">
                        <div className={s.viewBox}>
                            <div className={s.viewBox__outer}>
                                <div className={s.viewBox__box}>
                                    <div className={s.viewBox__box_top} />
                                    <div className={s.viewBox__box_left} />
                                    <div className={s.viewBox__box_right} />
                                    <div className={s.viewBox__box_bottom} />
                                    <div className={s.viewBox__box_front} />
                                    <div className={s.viewBox__box_back} />
                                </div>
                                <div className={s.viewBox__box_small}>
                                    <div className={s.viewBox__box_top} />
                                    <div className={s.viewBox__box_left} />
                                    <div className={s.viewBox__box_right} />
                                    <div className={s.viewBox__box_bottom} />
                                    <div className={s.viewBox__box_front} />
                                    <div className={s.viewBox__box_back} />
                                </div>
                            </div>
                        </div>
                    </Tile>
                    <Tile title="Такая же база, но радужная">
                        <div className={s.viewBox}>
                            <div className={`${s.viewBox__outer} ${s.viewAlt}`}>
                                <div className={s.viewBox__box}>
                                    <div className={s.viewBox__box_top} />
                                    <div className={s.viewBox__box_left} />
                                    <div className={s.viewBox__box_right} />
                                    <div className={s.viewBox__box_bottom} />
                                    <div className={s.viewBox__box_front} />
                                    <div className={s.viewBox__box_back} />
                                </div>
                                <div className={s.viewBox__box_small}>
                                    <div className={s.viewBox__box_top} />
                                    <div className={s.viewBox__box_left} />
                                    <div className={s.viewBox__box_right} />
                                    <div className={s.viewBox__box_bottom} />
                                    <div className={s.viewBox__box_front} />
                                    <div className={s.viewBox__box_back} />
                                </div>
                            </div>
                        </div>
                    </Tile>
                </TileList>
                <TileList>
                    <Tile title="На самом деле оно не лагает, а просто стесняется работать нормально">
                        <div className={s.viewBox} ref={viewRef} onMouseMove={mouseMove}>
                            <div className={`${s.viewBox__outer} ${s.viewAlt}`}>
                                <div className={s.viewBox__tile} ref={tileRef}>
                                    <FaceId />
                                </div>
                                <div className={s.viewBox__tileFlare} ref={flareRef} />
                            </div>
                        </div>
                    </Tile>
                </TileList>
                <TileList>
                    <Tile title="MTS Game - 3д интерфейс большого шлема">
                        <Video src="/assets/mts_preview.mp4" />
                    </Tile>
                </TileList>
            </MiniSection>
        </Section>
    )
}

export default Section__CSS_3D


const FaceId = () => {
    return (
        <svg className="faceId" fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5,3 C7.77614237,3 8,3.22385763 8,3.5 C8,3.77614237 7.77614237,4 7.5,4 L5.5,4 C4.67157288,4 4,4.67157288 4,5.5 L4,7.53112887 C4,7.80727125 3.77614237,8.03112887 3.5,8.03112887 C3.22385763,8.03112887 3,7.80727125 3,7.53112887 L3,5.5 C3,4.11928813 4.11928813,3 5.5,3 L7.5,3 Z M16.5,4 C16.2238576,4 16,3.77614237 16,3.5 C16,3.22385763 16.2238576,3 16.5,3 L18.5,3 C19.8807119,3 21,4.11928813 21,5.5 L21,7.5 C21,7.77614237 20.7761424,8 20.5,8 C20.2238576,8 20,7.77614237 20,7.5 L20,5.5 C20,4.67157288 19.3284271,4 18.5,4 L16.5,4 Z M20,16.5 C20,16.2238576 20.2238576,16 20.5,16 C20.7761424,16 21,16.2238576 21,16.5 L21,18.5 C21,19.8807119 19.8807119,21 18.5,21 L16.5,21 C16.2238576,21 16,20.7761424 16,20.5 C16,20.2238576 16.2238576,20 16.5,20 L18.5,20 C19.3284271,20 20,19.3284271 20,18.5 L20,16.5 Z M3,16.5 C3,16.2238576 3.22385763,16 3.5,16 C3.77614237,16 4,16.2238576 4,16.5 L4,18.5 C4,19.3284271 4.67157288,20 5.5,20 L7.5,20 C7.77614237,20 8,20.2238576 8,20.5 C8,20.7761424 7.77614237,21 7.5,21 L5.5,21 C4.11928813,21 3,19.8807119 3,18.5 L3,16.5 Z M8,8.5 C8,8.22385763 8.22385763,8 8.5,8 C8.77614237,8 9,8.22385763 9,8.5 L9,9.5 C9,9.77614237 8.77614237,10 8.5,10 C8.22385763,10 8,9.77614237 8,9.5 L8,8.5 Z M16,8.5 C16,8.22385763 16.2238576,8 16.5,8 C16.7761424,8 17,8.22385763 17,8.5 L17,9.5 C17,9.77614237 16.7761424,10 16.5,10 C16.2238576,10 16,9.77614237 16,9.5 L16,8.5 Z M12,8.5 C12,8.22385763 12.2238576,8 12.5,8 C12.7761424,8 13,8.22385763 13,8.5 L13,12.5 C13,13.3284271 12.3284271,14 11.5,14 C11.2238576,14 11,13.7761424 11,13.5 C11,13.2238576 11.2238576,13 11.5,13 C11.7761424,13 12,12.7761424 12,12.5 L12,8.5 Z M8.1,15.8 C7.93431458,15.5790861 7.9790861,15.2656854 8.2,15.1 C8.4209139,14.9343146 8.73431458,14.9790861 8.9,15.2 C9.81096778,16.4146237 10.8353763,17 12,17 C13.1646237,17 14.1890322,16.4146237 15.1,15.2 C15.2656854,14.9790861 15.5790861,14.9343146 15.8,15.1 C16.0209139,15.2656854 16.0656854,15.5790861 15.9,15.8 C14.8109678,17.252043 13.502043,18 12,18 C10.497957,18 9.18903222,17.252043 8.1,15.8 Z" />
        </svg>
    )
}