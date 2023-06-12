import React, { useState } from "react";
import styles from './Tooltip.module.scss';
interface Props {
    children: React.ReactElement<any>;
    content: string;
    id?: string;
}


const Tooltip: React.FC<Props> = ({ id, children, content }) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow((prevState) => !prevState);
    };

    return (
        <div className={styles.Tooltip} id={id} onMouseEnter={toggleShow} onMouseLeave={toggleShow}>
            {children}
            {show && <span className={styles.Tooltip__Content}>{content}</span>}
        </div>
    );
};

export default Tooltip;