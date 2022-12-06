import clsx from "clsx";
import { ChangeEvent, FC, HTMLProps } from "react";
import Label from "../Label";
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
    isError?: boolean;
    shouldRenderLabel?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props & HTMLProps<HTMLInputElement>> = (
    {
        type,
        id,
        name,
        value = "",
        defaultValue,
        error,
        errorText,
        className,
        isError = error || !errorText,
        shouldRenderLabel,
        onChange = () => null,
        required,
        ...rest
    },
    ref
) => {
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e);
    return (
        <div className={style.inputWrapper}>
            {isError ? <div className={style.errorMessage}>{errorText}</div> : null}
            {shouldRenderLabel ? <Label className={style.label} text={"TEST"} /> : null}
            <input
                className={clsx(style.input)}
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
};

export default Input;
