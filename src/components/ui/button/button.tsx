import { FC, ReactNode } from "react";
import './styles.scss';
import { getCl, getClR, getCls } from "../../../helper";

interface Props {
    type: 'primary' | 'secondary' | 'tretiary' | 'simple' | 'arrow' | 'indicator',
    children?: ReactNode,
    loading?: boolean,
    onClick?: () => void,
    disabled?: boolean,
    classList?: string,
    isRound?: boolean,
    fGrow?: boolean,
    color?: 'yellow' | 'red' | 'green' | 'purple',
}

const Button: FC<Props> = (props: Props) => {
    const classnames = getCls([
        getClR(props.classList),
        getCl(true, props.type),
        getCl(props.disabled, 'disabled'),
        getCl(!!props.color, props.color),
        getCl(props.loading, 'loading'),
        getCl(props.fGrow, 'fGrow'),
    ])

    return (
        <button className={`btn ${classnames}`} onClick={props.onClick}>
            {props.children}
        </button>
    )

}

export default Button;