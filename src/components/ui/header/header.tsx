import { FC, ReactNode } from "react";
import s from './styles.module.scss';

interface Props {
}

const Header: FC<Props> = (props: Props) => {
    return (
        <header className={s.header}>
            <div className='container'>
                <div className={s.header__inner}>
                    <div className={s.header__col}>
                        <div className={s.header__title}>Animation Examples</div>
                    </div>
                    <div className={s.header__col}>
                        <div className={s.header__author}>
                            Max Nedelko<br/>
                            Spans
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header