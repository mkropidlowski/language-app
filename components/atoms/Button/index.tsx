import React, { FC, HTMLProps } from "react";
import style from '../Button/Button.module.scss';
import clsx from 'clsx';
import capitalize from 'lodash/capitalize';

export interface Props {
    buttonSize?: 'big' | 'medium' | 'small';
    color?: 'primary' | 'secondary' | 'tertiary';
    variant?: 'default' | 'blank';
    type?: 'submit' | 'button' | 'reset'
    className?: string;
    children?: React.ReactNode;
}

const Button: FC<Props & HTMLProps<HTMLButtonElement>> = (
    (
        {
            color = 'primary',
            buttonSize = 'medium',
            variant = 'default',
            type = 'button',
            className,
            children,
            ...rest
        }
    ) => (
        <button
            type={type}
            color={color}
            className={clsx(
                style.button,
                style[`button${capitalize(variant)}__${capitalize(color)}`],
                style[`${buttonSize}`],
                className,
            )}    
            {...rest}
        >
            {children}
        </button>
    )
)
   


export default Button