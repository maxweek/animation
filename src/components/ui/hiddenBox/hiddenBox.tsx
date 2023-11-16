import { FC, ReactNode, useEffect, useState } from "react";
import Button from "../button/button";

interface Props {
    enabled?: boolean,
    children: ReactNode
}

const HiddenBox: FC<Props> = (props: Props) => {

    const [show, setShow] = useState<boolean>(!!props.enabled)

    return (
        <>
            {show && props.children}
            <Button type="primary" onClick={() => { setShow(!show) }}>{show ? 'Скрыть' : 'Показать'}</Button>
        </>
    )
}

export default HiddenBox;