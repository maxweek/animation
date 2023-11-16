import { FC, ReactNode } from "react";
import Section__Preview from "./preview/section";
import Section__Render from "./render/section";
import Section__Animations from "./animations/section";
import { MainSection, Section, SectionLinks } from "../components/ui/section/section";
import Section__CSS_Transition from "./css/transition/section";
import Section__CSS_Keyframes from "./css/keyframes/section";
import Section__CSS_Sprites from "./css/sprites/section";
import Section__CSS_Triggers from "./css/triggers/section";
import Section__CSS_Lcp from "./css/lcp/section";
import Section__SVG_Loaders from "./svg/loader/section";
import Section__SVG_Lottie from "./svg/lottie/section";
import Section__JS_Raw from "./js/raw/section";
import Section__JS_Interpolation from "./js/interpolation/section";
import Section__JS_ReqAF from "./js/reqAF/section";
import Section__CSS_3D from "./css/3d/section";
import Section__JS_Math from "./js/math/section";
import Section__JS_2D from "./js/2d/section";
import Section__JS_3D from "./js/3d/section";
import Section__JS_Filters from "./js/filters/section";
import Section__Teaser from "./teaser/section";
import Image from "../components/ui/image/image";
import Tile, { TileList } from "../components/ui/tile/tile";
import Video from "../components/ui/video/video";
import Advantages from "../components/ui/advantages/advantages";
import HiddenBox from "../components/ui/hiddenBox/hiddenBox";
interface Props {
}

const SectionList: FC<Props> = (props: Props) => {
    return (
        <>
            <MainSection
                id="teaser"
                title="Тизер"
                description=""
                color="#000000"
                noTitle={true}
            >
                <Section__Teaser />
            </MainSection>
            <MainSection
                id="intro"
                title="Введение"
                description="Знаний в голову"
                color="#f22323"
                checklist={[
                    'Философия',
                    'Качество',
                    'Frames Per Second (Hz)',
                    'Рендеринг',
                ]}
            >
                <Section__Preview />
                <Section__Animations />

                <Section
                    id="fps"
                    title="Frames Per Second (Hz)"
                    description="Скорость смены картинок"
                >
                    <TileList>
                        <Tile>
                            <img src="/assets/fps.jpg" />
                        </Tile>
                        <Tile>
                            <img src="/assets/hz.png" />
                        </Tile>
                    </TileList>
                    <TileList>
                        <Tile>
                            <img src="/assets/fpshz.gif" />
                        </Tile>
                    </TileList>
                </Section>
                <Section__Render />
            </MainSection>
            <MainSection
                id="css"
                title="CSS анимации"
                description="Стилёвые штучки"
                color="#2384f2"
                checklist={['Общие понятия', 'Особенности delay', 'Динамический transition', 'Математические кривые']}

            >
                <Section__CSS_Transition />
                <Section__CSS_Keyframes />
                <Section__CSS_Sprites />
                <Section__CSS_Triggers />
                <Section__CSS_Lcp />
                <Section__CSS_3D />
            </MainSection>
            <MainSection
                id="svg"
                title="SVG анимации"
                description="Отдельный вид кайфа"
                color="#d800cd"
            >
                <Section__SVG_Loaders />
                <Section__SVG_Lottie />
            </MainSection>
            <MainSection
                id="js"
                title="JS анимации"
                description="Тут делается качественно и геморройно "
                color="#f27523"
            >
                <Section__JS_Raw />
                <Section__JS_ReqAF />
                <Section__JS_Interpolation />
                <Section__JS_Math />
                <Section__JS_2D />
                <Section__JS_3D />
                <Section__JS_Filters />
            </MainSection>
            <MainSection
                id="optimization"
                title="Оптимизация"
                description="Что бы сяоми и хуевеи клиентов не закипели"
                color="#aa23f2"
            >
                <Section
                    id="base"
                    title="Базовая оптимизация"
                    description="На оптимизацию этого проекта лучше не смотреть, потому что ничего не увидишь"
                >
                    <TileList>
                        <Tile title="Нюансы">
                            <Advantages items={[
                                'Использование transform вместо left/top/margin/padding etc. когда это возможно',
                                'Избегать смещения макета | LCP',
                                'Оптимизация картинок/видео/данных с которыми работаете',
                                'Освобождение памяти через display: none; и подготовка для взаимодейсвтий visibility: hidden;',
                                'Подлючение GPU через transfrom3d | trasform-style: preserve-3d',
                                'Использование will-change аттрибута для выделения ресурсов и памяти (не работает с некоторыми динамическими аттрибутами)',
                                'Использование единого потока requestAnimationFrame',
                                'Ограничение вычислений и рендеринга на невидимых областях по <crocs>возможность</crocs> желанию',
                                'Упрощение вычислений где это возможно',
                                'Избегание повторных перерендеров в React/Next/Vue',
                                'Тестирование по девтулзам хрома',
                            ]} />
                        </Tile>
                    </TileList>
                </Section>
                <Section
                    id="compScience"
                    title="Computer Science"
                    description="Что мы говорим comp science?<br/> - Не сегодня"
                >
                    <SectionLinks links={[{ text: 'Полезная статейка на хабре', href: 'https://habr.com/ru/articles/673754/' }]}></SectionLinks>
                    <TileList>
                        <Tile>
                            <Advantages items={[
                                'Алгоритмы работы с данными',
                                'Алгоритмы поиска',
                                'Оценка сложности алгоритмов',
                                'Отслеживание памяти',
                                'Устройство сети и методы работы с ней',
                                'Изучение отдельных особенностей языка и архитектуры',
                                'В случае JS - правильное понимание куч, call stack, event заloop, макро и микро таски и тд.',
                                'Логика, комбинаторика, дискретка, матеша, физика, семьеведение',
                                'И тд, вероятно когда-нибудь к этому вернемся',
                            ]} />
                        </Tile>
                    </TileList>
                </Section>
            </MainSection>
            <MainSection
                id="additional"
                title="Дополнительно"
                description="Че каво"
                color="#00c217"
            >
                <Section
                    id="add_unrecorded"
                    title="Что не вошло?"
                    description="И не вышло"
                >
                    <TileList>
                        <Tile title="Вообще мимо" description="Тема довольно обширная, кому интересно - почитайте">
                            <Advantages items={[
                                'Анимация данных (графики)',
                                'd3.js',
                                'spline.design',
                                'verge 3d',
                                'Подробный разбор шейдеров и фильтров',
                                'Комплексные анимации или анимациионные секвенции',
                                'Анимация по звуковым данным',
                                'Цепочная анимация',
                                'Метрики гугл спид',
                                'Девтулзы Хрома',
                                'И еще куча всякого связанного с этим',
                            ]} />
                        </Tile>
                        <Tile title="Частично вошло" description="Можем как-нибудь отдельно обсудить">
                            <Advantages items={[
                                'Оптимизация',
                                'Постпроцессинг',
                                'Костная анимация и анимация персонажей',
                                'Физические движки и коллайдеры',
                                'Симуляции',
                            ]} />
                        </Tile>
                    </TileList>
                </Section>
                <Section
                    id="add_good"
                    title="Примеры хороших анимаций"
                    description="Без картинок, потому что такое надо видеть в живую"
                >
                    <TileList>
                        <Tile title="Примеры">
                            <Advantages links={[
                                {
                                    href: 'https://next.junni.co.jp/',
                                    text: 'Разбираем'
                                },
                                {
                                    href: 'https://threejs.org/',
                                    text: 'Полный набор потрясающих работ в 3д'
                                },
                                {
                                    href: 'https://medium.com/orpetron/top-10-outstanding-gsap-animation-websites-that-will-inspire-you-c80df4c6d371',
                                    text: 'Лучшие анимании на GSAP'
                                },
                                {
                                    href: 'https://sitehere.ru/podborka-sajtov-s-animaciej-pri-prokrutke',
                                    text: 'Лучшие анимации по скроллу'
                                },
                                {
                                    href: 'https://dzen.ru/a/WnwzZ4MJBTeWsRgZ',
                                    text: 'Еще примеры'
                                },
                            ]} />
                        </Tile>
                    </TileList>
                </Section>
                <Section
                    id="add_bad"
                    title="Примеры плохих анимаций"
                    description="Мне было лень искать больше, но ты и так видишь их каждый день"
                >
                    <TileList>
                        <Tile title="Сломанные анимации в приложении Crossball (iPhone)">
                            <HiddenBox>
                                <Video src="/assets/examples/crossbad.mp4" />
                            </HiddenBox>
                        </Tile>
                        <Tile title="Бедовая анимация из Филлипинского мака из квиза">
                            <HiddenBox>
                                <Video src="/assets/examples/mcd.mp4" />
                            </HiddenBox>
                        </Tile>
                    </TileList>
                    <TileList>
                        <Tile title="Медленная анимация данных, которые нужно увидеть быстро, да и не нужна она тут">
                            <img src="https://miro.medium.com/v2/resize:fit:1200/0*zzD3WZ_6C8-ogzkF.gif" />
                        </Tile>
                    </TileList>
                    <TileList>
                        <Tile title="Медленная и ненужная последовательность появления критически важных для взаимодействия штук">
                            <Video src="https://leonardo.osnova.io/d580bd0b-2881-57da-9ab1-69fc1ac52722/-/format/mp4/" />
                        </Tile>
                    </TileList>
                    <TileList>
                        <Tile title="Cлишком медленно">
                            <Video src="https://leonardo.osnova.io/c8206429-b5fd-5965-8ba9-c6f8c86d6586/-/format/mp4/" />
                        </Tile>
                    </TileList>
                </Section>
                <Section
                    id="add_plus"
                    title="Полезные ссылки"
                    description="Для всей семьи"
                >

                    <TileList>
                        <Tile title="Инструменты и библиотеки">
                            <Advantages links={[
                                { href: "https://d3js.org/", text: "Библиотека по работе с данными (d3.js)" },
                                { href: "https://threejs.org/", text: "Библиотека по работе с 3d (Three.js)" },
                                { href: "https://hammerjs.github.io/", text: "Библиотека по работе с 3d с физическим движком (Hammer.js)" },
                                { href: "https://phaser.io/", text: "Библиотека по разработке 2д игр (Phaser.js)" },
                                { href: "http://fabricjs.com/", text: "Библиотека для работы с 2д canvasEdit (Fabric.js)" },
                                { href: "https://pixijs.io/", text: "Библиотека для работы с 2д графикой и шейдерами (Pixi.js)" },
                                { href: "https://animejs.com/", text: "Библиотека для анимации базовых html элементов (Anime.js)" },
                                { href: "https://airbnb.io/lottie/", text: "Библиотека для SVG анимации json | After Effects Bodymovin (Lottie.js)" },
                                { href: "https://www.gsap.com/", text: "Библиотека со всем для анимации (GSAP | Tween.js)" },
                                { href: "https://www.framer.com/motion/", text: "Библиотека для анимации компонентов (Framer-Motion)" },
                                { href: '', text: '-' },
                                // <a href="" target="_blank"></a>,
                                { href: "https://spline.design/", text: "3d песочница для дизов (spline.design)" },
                                { href: "https://threejs.org/editor/", text: "3d песочница для 3дшников (Three.js)" },
                                { href: "https://codepen.io/", text: "Песочница для проггеров (Codepen)" },
                                { href: "https://www.framer.com/", text: "Анимированные прототипы для дизов (Framer | Framer-Motion)" },
                                { href: "https://fotoshoponline.ru/", text: "Фотошоп онлайн на canvas (Photoshop)" },
                                { href: "https://loader.io/", text: "Генерация SVG лоадера (Loader.io)" },
                                { href: "https://10015.io/tools/css-cubic-bezier-generator", text: "Генератор кривых безье (10015.io)" },
                                { href: "https://www.gsap.com/docs/v3/Eases", text: "Генерация математических кривых (GSAP)" },
                                // <a href="" target="_blank"></a>,
                            ]} />
                        </Tile>
                        <Tile title="Статьи и ссылки">
                            <Advantages links={[
                                { href: "https://skillbox.ru/media/design/ask-expert-animate-it-gently/", text: "Главные принципы анимаций" },
                                { href: "https://habr.com/ru/articles/673754/", text: "Статья по Comp Science (Хабр)" },
                                { href: "https://habr.com/ru/articles/341554/", text: "Еще больше библиотек для анимации (Хабр)" },
                                { href: "https://habr.com/ru/companies/htmlacademy/articles/660901/", text: "Все о веб анимациях (Хабр)" },
                                { href: "https://threejs.org/", text: "Примеры 3д проектов (Three.js)" },
                                { href: "https://webformyself.com/kak-uluchshit-css-animaciyu-s-pomoshhyu-kubicheskoj-krivoj-beze/", text: "Общие правила анимации bezier" },
                                { href: "https://learn.javascript.ru/css-transitions", text: "Общие правила transition анимации" },
                                // <a href="" target="_blank"></a>,
                                // <a href="" target="_blank"></a>,
                                // <a href="" target="_blank"></a>,
                                // <a href="" target="_blank"></a>,
                                // <a href="" target="_blank"></a>,
                                // <a href="" target="_blank"></a>,
                            ]} />
                        </Tile>
                    </TileList>

                </Section>
                <Section
                    id="add_mask"
                    title="Маскировка данных"
                    description="Развлекалово для юзера или Визуальная маскировка блоков с данными, которые находятся в процессе загрузки"
                >
                    <TileList>
                        <Tile style={{ display: 'flex', gap: '1rem', flexDirection: 'row', alignItems: 'center' }}>
                            <Video src="/assets/mask.mp4" loop={true} />
                            <Video src="/assets/mask_2.mp4" loop={true} />
                        </Tile>
                    </TileList>
                </Section>
                <Section
                    id="add_add"
                    title="Пускай полежит тут"
                    description="Некоторые наработки"
                >
                    <TileList>
                        <Tile title="Игрушка про кота с конструктором по JSON данным">
                            <a href="https://realty.ya.ru/sevensuns/findthecat/" target="_blank">Игра про кота</a>
                        </Tile>
                    </TileList>
                    <TileList>
                        <Tile title="Анимация шума перлина и стилистики ломанный псевдо глитч | Ozon ЧП">
                            <HiddenBox>
                                <Video src="/assets/examples/rock.mp4" controls={true} />
                            </HiddenBox>
                        </Tile>
                        <Tile title="Реактивный 3д график от Firebase | OZON Event (Crocus Moscow)">
                            <HiddenBox>
                                <Video src="/assets/examples/ozon.mp4" controls={true} />
                            </HiddenBox>
                        </Tile>
                        <Tile title="3д линия для нашего кросса">
                            <HiddenBox>
                                <Video src="/assets/examples/crossLine.mp4" controls={true} />
                            </HiddenBox>
                        </Tile>
                    </TileList>
                    <TileList>
                        <Tile title="Пример динамической сетки | Отголоски ahbd">
                            <HiddenBox>
                                <Video src="/assets/examples/ahbd_dynamic.mp4" controls={true} />
                            </HiddenBox>
                        </Tile>
                        <Tile title="Пример анимированного drag&drop | Ahbd">
                            <HiddenBox>
                                <Video src="/assets/examples/ahbd.mp4" controls={true} />
                            </HiddenBox>
                        </Tile>
                        <Tile title="Это пример Захара | Sber">
                            <HiddenBox>
                                <Video src="/assets/examples/sber.mp4" controls={true} />
                            </HiddenBox>
                        </Tile>
                    </TileList>
                    <TileList>
                        <Tile title="3д сцена с факелом и инерциальным движком вращения цилиндра | Oval">
                            <HiddenBox>
                                <Video src="/assets/examples/oval.mp4" controls={true} />
                            </HiddenBox>
                        </Tile>
                        <Tile title="3д сцена с интерактивным цилиндром | Oval">
                            <HiddenBox>
                                <Video src="/assets/examples/ovalMedia.mp4" controls={true} />
                            </HiddenBox>
                        </Tile>
                        <Tile title="Анимированный реактивный интерфейс и взаимодейсвтие с 3д (Verge) | ВТБ PPK">
                            <HiddenBox>
                                <Video src="/assets/examples/ppk.mp4" controls={true} />
                            </HiddenBox>
                        </Tile>
                    </TileList>
                    <TileList>
                        <Tile title="Баловства с Houdini FX">
                            <HiddenBox>
                                <Video src="/assets/examples/houdini_1.mp4" controls={true} />
                            </HiddenBox>
                        </Tile>
                        <Tile title="Баловства с Houdini FX">
                            <HiddenBox>
                                <Video src="/assets/examples/houdini_2.mp4" controls={true} />
                            </HiddenBox>
                        </Tile>
                        <Tile title="Баловства с Houdini FX">
                            <HiddenBox>
                                <Video src="/assets/examples/houdini_3.mp4" controls={true} />
                            </HiddenBox>
                        </Tile>
                    </TileList>
                    <TileList>
                        <Tile title="Визуализация звуковых частот в Houdini FX">
                            <HiddenBox>
                                <Video src="/assets/examples/hd_sound.mp4" controls={true} />
                            </HiddenBox>
                        </Tile>
                        <Tile title="Визуализация звуковых частот на JS">
                            <HiddenBox>
                                <Video src="/assets/examples/sound.mp4" controls={true} />
                            </HiddenBox>
                        </Tile>
                    </TileList>
                </Section>
            </MainSection>
            <MainSection
                id="outro"
                title="Заключение" description="Ну вот и все, ты теперь аниматор(-ка)" color="#f22323">

                <Section
                    id="thanks"
                    title="Надеюсь было интересно"
                    description="На создание этой работы было потрачено чуть больше месяца, что бы показать тебе, каков может быть интересный мир анимации, и что теперь умеет Spans (но если в твоей голове родилась идея - посоветуйся с прогером, ибо ему реализовывать все это и тратить свои нервы и время на всю эту шляпу)"
                >
                    <TileList>
                        <Tile
                            title='"Как же он заебал так душно обо всем рассказывать"'
                            description="По-этому держи финальную гифку и бегом в пятницу"
                        >

                            <img src="/assets/cyberman.gif" style={{ maxWidth: 600 }} />
                        </Tile>
                    </TileList>
                    <div>
                        А вообще - все ограничивается воображением и клиенсткими <crocs>сковородками</crocs> сяоми<br /><br />
                        2023 © <a href="https://www.instagram.com/maxim_week/" target="_blank">Максим Неделько</a> | <a href="https://www.instagram.com/spansagency/" target="_blank">SPANS</a> 💕
                    </div>
                </Section>
            </MainSection>
        </>
    )
}

export default SectionList