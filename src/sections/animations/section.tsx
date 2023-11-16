import { FC, ReactNode } from "react";

import s from './styles.module.scss'
import { Section } from "../../components/ui/section/section";
import Tile, { TileList } from "../../components/ui/tile/tile";
import SectionList from "../list";
import Advantages from "../../components/ui/advantages/advantages";

interface Props {
}

const Section__Animations: FC<Props> = (props: Props) => {
    return (
        <Section
            id="anim"
            title="Качественная анимация"
            description="От качественной должен привстать"
        >
            
            <TileList>
                <Tile title="Основные понятия">
                    <Advantages items={[
                        'Отсутствие ограничений взаимодействия',
                        'Чем больше элемент - тем медленнее анимация*',
                        'Плавность и производительность по целевому устройству',
                        'Функциональность',
                        'Связанность и реакция на остальные факторы',
                        'Доходчивость восприятия',
                        'Лаконичность',
                    ]} />
                </Tile>
            </TileList>
            <TileList>
                <Tile title="Веб принципы">
                    <Advantages items={[
                        'Цель и функциональность',
                        'Простота и умеренность',
                        'Плавность и естественность',
                        'Производительность',
                        'Отзывчивость',
                        'Доступность',
                        'Контекстное соответствие',
                    ]} />
                </Tile>
                <Tile title="Общие принципы">
                    <Advantages items={[
                        'Смягчение движения (Squash and Stretch)',
                        'Антисипация (Anticipation)',
                        'Работа с этапами (Staging)',
                        'Прямое и покадровое движение (Straight Ahead Action and Pose to Pose)',
                        'Следование дугам (Follow Through and Overlapping Action)',
                        'Медленное начало и завершение (Slow In and Slow Out)',
                        'Действие и реакция (Action and Reaction)',
                        'Второстепенное действие (Secondary Action)',
                        'Тайминг (Timing)',
                        'Выразительность (Exaggeration)',
                        'Твердые и мягкие формы (Solid Drawing)',
                        'Обращение к деталям (Appeal)',
                    ]} />
                </Tile>
            </TileList>







        </Section>
    )
}

export default Section__Animations