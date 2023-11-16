import { FC, ReactNode, RefObject, useCallback, useEffect, useRef, useState } from "react";

import s from './styles.module.scss'
import { MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import Scene from "./scene";
import Button from "../../../components/ui/button/button";
import Video from "../../../components/ui/video/video";

interface Props {
}

const Section__JS_3D: FC<Props> = (props: Props) => {

    return (
        <Section
            id="js_3d"
            title="3d"
            description="Визуализация трех-мерных моделей на WebGL для серьёзных и угрюмых"
        // checklist={['Общие понятия', 'Особенности delay', 'Динамический transition', 'Математические кривые']}
        >
            <SectionLinks links={[
                {
                    text: 'Three.js',
                    href: 'https://threejs.org/',
                },
                {
                    text: 'd3.js (работа с данными)',
                    href: '',
                },
                {
                    text: 'Hammer.js',
                    href: 'https://hammerjs.github.io/',
                },
            ]} />
            <MiniSection
                title="Примеры 3д сцен"
                description="Бамбулби - наши дни"
            >
                <TileList>
                    <Tile title="Wireframe">
                        <Scene
                            model={'/assets/models/car.fbx'}
                            texture="wireframe"
                            rotation={true}
                        />
                    </Tile>
                    <Tile title="Нормали? Нормально!">
                        <Scene
                            model={'/assets/models/car.fbx'}
                            texture="normal"
                            rotation={true}
                        />
                    </Tile>
                </TileList>
                <TileList>
                    <Tile title="Летающие люстры">
                        <Scene
                            model={'/assets/models/car.fbx'}
                            texture="/assets/models/rainbowTexture.jpg"
                            rotation={true}
                        />

                    </Tile>
                    <Tile title="Разукрашенный кар с текстурой по UV-развертке">
                        <Scene
                            model={'/assets/models/car.fbx'}
                            texture=""
                            rotation={true}
                        />

                    </Tile>

                </TileList>
                <TileList>
                    <Tile title="Пример шейдера vertex/color">
                        <Scene
                            model={'/assets/models/car.fbx'}
                            texture="basic"
                            rotation={true}
                            onlyShader={true}
                            shader={true}
                        />

                    </Tile>
                    <Tile title="Пример постпроцессинга">
                        <Scene
                            model={'/assets/models/car.fbx'}
                            rotation={true}
                            texture="/assets/models/rainbowTexture.jpg"
                            shader={true}
                        />

                    </Tile>
                </TileList>
                <MiniSection title="Костная анимация" description="Привязка кусков меша к соответсвующим костям и облегчение">
                    <TileList>
                        <Tile title="Киборг-убийца">
                            <img src="/assets/bones_1.gif" />
                        </Tile>
                        <Tile>
                            <img src="/assets/boneRig_1.png" />
                        </Tile>
                        <Tile>
                            <img src="/assets/boneRig_2.png" />
                        </Tile>
                    </TileList>
                    <TileList>
                        <Tile>
                            <Video src="/assets/boneRig_2.mp4" />
                        </Tile>
                        <Tile>
                            <Video src="/assets/boneRig_1.mp4" />
                        </Tile>
                    </TileList>
                </MiniSection>
            </MiniSection>
        </Section>
    )
}

export default Section__JS_3D