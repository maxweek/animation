import { FC, ReactNode } from "react";
import { getCl, getClR, getCls, getRawHtml } from "../../../helper";
import s from './styles.module.scss';
import Button from "../button/button";

interface SectionProps {
    className?: string,
    children: ReactNode
    title?: string
    description?: string
    id?: string
    checklist?: string[]
}

export const Section: FC<SectionProps> = (props: SectionProps) => {
    const cls = getCls([
        'section',
        s.section,
        getClR(props.className)
    ])
    return (
        <section
            id={props.id}
            title={props.title}
            className={cls}>
            <div className="container">
                <SectionTitle title={props.title} description={props.description} />
                {props.checklist &&
                    <div className={s.checklist}>
                        {props.checklist.map(el => {
                            return (
                                <div className={s.checklist__item}>{el}</div>
                            )
                        })}
                    </div>
                }
                <div className={s.inner}>
                    {props.children}
                </div>
            </div>
        </section >
    )
}

interface MiniSectionProps {
    className?: string,
    children: ReactNode
    title?: string
    description?: string
}

export const MiniSection: FC<MiniSectionProps> = (props: MiniSectionProps) => {
    const cls = getCls([
        'miniSection',
        s.miniSection,
        getClR(props.className)
    ])
    return (
        <div
            title={props.title}
            className={cls}>
            <SectionTitle title={props.title} description={props.description} main={'mini'} />
            <div className={s.inner}>
                {props.children}
            </div>
        </div >
    )
}


interface MainSectionProps {
    className?: string,
    children: ReactNode
    title?: string
    description?: string
    color?: string
    id: string
    noTitle?: boolean
    checklist?: string[]
}

export const MainSection: FC<MainSectionProps> = (props: MainSectionProps) => {
    const cls = getCls([
        'mainSection',
        s.mainSection,
        getClR(props.className),
        getCl(!!props.color, props.color)
    ])
    return (
        <section
            id={props.id}
            title={props.title}
            color={props.color}
            className={cls}
            style={{ borderColor: props.color, background: `linear-gradient(30deg, transparent 0%, ${props.color}10 80%, ${props.color}30)` }}>
            <div className="container">
                {!props.noTitle &&
                    <SectionTitle title={props.title} description={props.description} main={'main'} color={props.color} />
                }

                {props.checklist &&
                    <div className={s.checklist}>
                        {props.checklist.map(el => {
                            return (
                                <div className={s.checklist__item}>{el}</div>
                            )
                        })}
                    </div>
                }
            </div>
            <div className={s.inner}>
                {props.children}
            </div>
        </section >
    )
}

export const SectionTitle: FC<any> = ({ main, title, description, color }: { main?: 'main' | 'mini', title?: string, description?: string, color?: string }) => {
    if (!title && !description) return <></>
    return (
        <div className={`${s.titleBox} ${getCl(!!main, main)}`} style={{ backgroundColor: color }}>
            {title &&
                <div className={s.title}>
                    {title}
                </div>
            }
            {description &&
                <div className={s.description} dangerouslySetInnerHTML={getRawHtml(description)} />
            }
        </div>
    )
}

interface SectionLinksProps {
    links: {
        href: string,
        text: string,
    }[]
}

export const SectionLinks: FC<SectionLinksProps> = (props: SectionLinksProps) => {
    return (
        <div className={s.sectionLinks}>
            {props.links.map(el => {
                return (
                    <Button type="primary" color="purple" onClick={() => { window.open(el.href) }}>{el.text}</Button>
                )
            })}
        </div>
    )
} 