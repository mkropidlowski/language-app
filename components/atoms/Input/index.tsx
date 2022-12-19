import clsx from "clsx";
import { ChangeEvent, forwardRef, HTMLProps } from "react";
import Label from "components/atoms/Label";
import style from "./input.module.scss";

export type InputTypeProps = "text" | "password" | "email" | "number" | "hidden";
export interface Props {
    id?: string;
    className?: string;
    type: InputTypeProps;
    name?: string;
    placeholder?: string;
    error?: boolean;
    errorText?: string;
    defaultValue?: string | number;
    isError?: string | boolean;
    shouldRenderLabel?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, Props & HTMLProps<HTMLInputElement>>(
    (
        {
            type,
            id,
            name,
            value = "",
            defaultValue,
            label,
            error,
            errorText,
            className,
            isError = error || !errorText,
            shouldRenderLabel,
            onChange = () => null,
            required,
        },
        ref,
        ...rest
    ) => {
        const inputHandler = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e);
        const inputPlaceholder = `${label}`;
        return (
            <div className={style.inputWrapper}>
                {isError ? <div className={clsx(style.errorMessage, className)}>{errorText}</div> : null}
                {shouldRenderLabel ? <Label className={style.label} text={inputPlaceholder} /> : null}
                <input
                    className={clsx(style.input, style[`activeInput-${!!inputHandler}`])}
                    type={type}
                    id={id}
                    name={name}
                    defaultValue={defaultValue}
                    onChange={inputHandler}
                    ref={ref}
                    {...rest}
                />
            </div>
        );
    }
);

Input.displayName = "Input";
export default Input;
