import { FC, ReactNode } from "react";

import s from './styles.module.scss'
import { Section } from "../../components/ui/section/section";
import Tile, { TileList } from "../../components/ui/tile/tile";
import Advantages from "../../components/ui/advantages/advantages";

interface Props {
}

const Section__Preview: FC<Props> = (props: Props) => {
    return (
        <Section
            id="intro"
            title="Философия"
            description="Что такое эти ваши анимации"
        >
            <TileList>
                <Tile>
                    <img src="/assets/first.png" />
                </Tile>
            </TileList>
            <TileList>
                <Tile title="В чем выражается она?">
                    <Advantages items={[
                        'Анимация и последовательности событий',
                        'Визуальная обратная связь',
                        'Привлечение внимания с помощью анимации',
                        'Навигация',
                        'Плавное изменение состояний',
                        'Творческие эффекты',
                    ]} />
                </Tile>
                <Tile title="Один из первых анимационных 'роликов' на фенакистископе, Эдварда Мейбриджа 1893г. ">
                    <img src="/assets/first.gif" />
                </Tile>
            </TileList>
            <p>
                Зачем вообще что либо анимировать? А затем, что человечеству каждый день требуется все больше контенту, и разбавить его можно анимацией, никто больше не хочет смотреть на газеты, а вот если бы они были как в "Гарри Поттере" - тогда вопросов нет. Но тем не менее, всем интересны движущиеся штуки, потому что движение это жизнь, а жизнь это противоположность смерти. Значит надо насмотреться на движущиеся картинки перед смертью. Так и изобрели Мьюзикли и ТикТок. Такая философия...
            </p>
        </Section>
    )
}

export default Section__Preview