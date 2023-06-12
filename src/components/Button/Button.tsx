import React from 'react';
import styles from './Button.module.scss';
interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    color: 'orange' | 'blue' | 'red';
};

const Button: React.FC<ButtonProps> = ({ id, children, color, onClick, ...props }) => {
    const className = `${styles.Button} ${styles[`Button__${color}`]}`
    return (
        <button
            id={id}
            className={className}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
