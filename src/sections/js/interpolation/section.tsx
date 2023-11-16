import { ChangeEvent, FC, MouseEvent, ReactNode, useEffect, useRef, useState } from "react";

import s from './styles.module.scss'
import { MainSection, MiniSection, Section, SectionLinks } from "../../../components/ui/section/section";
import Tile, { TileList } from "../../../components/ui/tile/tile";
import Button from "../../../components/ui/button/button";
import Area_Full_Interpolation from "./area_full_inter";
import Area_Simple from "./area_simple";
import Area_Full_WithoutInterpolation from "./area_full_wInter";
import Area_Simple_add from "./area_simple_add";

interface Props {
}

const _store = {
    targetX: 0,
    targetY: 0,
    ballX: 0,
    ballY: 0,
    ballRot: 0,
    oldX: 0,
    oldY: 0,
    mouseX: 0,
    mouseY: 0,
    trans: 0,
    transOut: 0,
    transIn: 0,
    cos: 0,
    sin: 0,
    rot: 0,
    coef: 120,
    mouseIn: false
}

const Section__JS_Interpolation: FC<Props> = (props: Props) => {
    const [tr1, setTr1] = useState<boolean>(false);
    const [tr2, setTr2] = useState<boolean>(false);
    const [tr3, setTr3] = useState<boolean>(false);
    const [range, setRange] = useState<number>(0.5);

    return (
        <Section
            id="js_interpolation"
            title="Интерполяция"
            description="Педалька газа для гибких и не очень штуковин"
        // checklist={['Общие понятия', 'Особенности delay', 'Динамический transition', 'Математические кривые']}
        >
            <MiniSection
                title="Общие различия"
            >

                <TileList>
                    <Tile
                        title="Без анимации"
                        description="Ручное управление перехода сосятоний"
                    >
                        <div className={s.jsTrack}>
                            <div className={s.jsTrack__ball} style={{ left: (50 * range) + '%', borderRadius: (2 * range) + 'rem', transform: `rotate(${range * 180}deg)`, backgroundColor: interpolateColor(range) }}>

                            </div>
                        </div>
                        Состояние: {range * 100}%
                        <input type="range" min={0} max={100} value={range * 100} onChange={v => setRange(parseInt(v.target.value) / 100)} />
                        {/* <Button type={"primary"} onClick={() => setTr1(!tr1)} >Нажми меня</Button> */}
                    </Tile>
                </TileList>
                <TileList>
                    <Tile title="Пример анимации" >
                        <Area_Simple />
                    </Tile>
                    <Tile title="Интерполяция двух анимаций" >
                        <Area_Simple_add />
                    </Tile>
                </TileList>
                <TileList>
                    <Tile
                        title="Интерполяция двух анимаций"
                        description="Точнее её отсутсвие, при наведении курсором"
                    >
                        <Area_Full_WithoutInterpolation />
                    </Tile>
                    <Tile
                        title="Интерполяция двух анимаций"
                        description="Самописный экстаз сочетания движений гармонии"
                    >
                        <Area_Full_Interpolation />
                    </Tile>
                </TileList>

                <MiniSection
                    title="А зочем?"
                    description="А затем, что бы плавно сменить одно на другое, прям как с людьми"
                >
                    <></>
                </MiniSection>

            </MiniSection>
        </Section>
    )
}

function interpolateColor(value: number) {
    // Определяем цвета в RGB
    const color1 = { r: 0xff, g: 0x68, b: 0x27 }; // #ff6827
    const color2 = { r: 0xb7, g: 0x27, b: 0xff }; // #b727ff
    const color3 = { r: 0xa6, g: 0xeb, b: 0x24 }; // #a6eb24

    let r, g, b;

    if (value <= 0.5) {
        // Интерполируем между color1 и color2
        r = color1.r + (color2.r - color1.r) * (value / 0.5);
        g = color1.g + (color2.g - color1.g) * (value / 0.5);
        b = color1.b + (color2.b - color1.b) * (value / 0.5);
    } else {
        // Интерполируем между color2 и color3
        r = color2.r + (color3.r - color2.r) * ((value - 0.5) / 0.5);
        g = color2.g + (color3.g - color2.g) * ((value - 0.5) / 0.5);
        b = color2.b + (color3.b - color2.b) * ((value - 0.5) / 0.5);
    }

    // Округляем значения и конвертируем обратно в строку HEX
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

export default Section__JS_Interpolation

