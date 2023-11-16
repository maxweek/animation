import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import s from './styles.module.scss';
import { anchorTo, getCl } from "../../../helper";

interface Props {
}

type INav = {
    id: string,
    title: string | null,
    color: string,
    offset: number,
    childrens: {
        id: string,
        title: string | null
        offset: number,
    }[]
}[]


// @ts-ignore
window._sect = {
    sect: '',
    mainSect: '',
}

const Sidebar: FC<Props> = (props: Props) => {
    const [nav, setNav] = useState<INav>([])
    const [activeId, setActiveId] = useState<string>()
    const [mainActiveId, setMainActiveId] = useState<string>()


    const checkScroll = useCallback(() => {
        // console.log('123')
        const wy = window.scrollY
        // console.log(wy, nav)
        let mid = ''
        let id = ''
        nav.map(ms => {
            if (ms.offset <= wy) {
                mid = ms.id
            }
            ms.childrens.map(s => {
                if (ms.childrens[0].id == s.id) {
                    if (ms.offset <= wy) {
                        id = s.id
                    }
                } else {
                    if (s.offset <= wy) {
                        id = s.id
                    }
                }
            })
        })
        if (mid) setMainActiveId(mid)
        if (id) setActiveId(id)
    }, [nav])

    useEffect(() => {
        init();
    }, [])

    useEffect(() => {

        // @ts-ignore
        window._sect = {
            sect: activeId,
            mainSect: mainActiveId,
        }
        window.dispatchEvent(new CustomEvent('_sectUpd'))

    }, [mainActiveId, activeId])

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                init()
            }
        });
        resizeObserver.observe(document.body);
        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
        return () => {
            window.removeEventListener('scroll', checkScroll);
        }
    }, [checkScroll])


    const init = () => {
        const nav: INav = []
        const mainSections: NodeListOf<HTMLDivElement> = document.querySelectorAll('.mainSection')
        if (!mainSections) return

        mainSections.forEach(mainSection => {
            let id = mainSection.id
            // debugger
            let mainObject: INav[0] = {
                id,
                title: mainSection.getAttribute('title'),
                color: mainSection.getAttribute('color') ?? 'gray',
                offset: mainSection.offsetTop,
                childrens: []
            }
            const sections: NodeListOf<HTMLDivElement> = mainSection.querySelectorAll('.section')

            sections.forEach(section => {
                let id = section.id
                let sectionObject: INav[0]['childrens'][0] = {
                    id,
                    title: section.getAttribute('title'),
                    offset: mainObject.offset + section.offsetTop,
                }
                mainObject.childrens.push(sectionObject)
            })

            nav.push(mainObject)
        })

        setNav(nav)
    }

    return (
        <aside className={s.sidebar}>
            <div className={s.sidebar__inner}>
                <div className={s.sidebar__top}>
                    <div className={s.sidebar__title}>
                        Animation Guide
                    </div>
                    {mainActiveId} + {activeId}
                </div>
                <nav className={s.sidebar__nav}>
                    {nav.map(main => {
                        const isActive = main.id === mainActiveId;
                        let color = isActive ? main.color : 'gray';

                        return (
                            <div className={`${s.nav__main} ${getCl(isActive, 'active')}`} style={{ borderColor: color }}>
                                <div className={s.nav__main_title} onClick={() => { anchorTo(main.id) }}>
                                    {main.title}
                                </div>
                                <div className={s.nav__main_list}>
                                    {main.childrens.map(sect => {
                                        const isActive = sect.id === activeId;
                                        return (
                                            <div
                                                className={`${s.nav__sect} ${getCl(isActive, 'active')}`}
                                                style={{ color: isActive ? main.color : 'inherit' }}
                                                onClick={() => { anchorTo(sect.id) }}
                                            >
                                                <div className={s.nav__sect_title}>
                                                    {sect.title}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </nav>
                <div className={s.sidebar__bot}>
                    <div className={s.sidebar__author}>
                        Max Nedelko<br />
                        Spans
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar