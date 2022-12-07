import clsx from "clsx";
import { ChangeEvent, FC, forwardRef, HTMLProps } from "react";
import Label from "../Label";
import style from "./textarea.module.scss";

export interface Props {
    id?: string;
    className?: string;
    name?: string;
    placeholder?: string;
    error?: boolean;
    errorText?: string;
    defaultValue?: string | number;
    isError?: boolean;
    shouldRenderLabel?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props & HTMLProps<HTMLTextAreaElement>>(
    (
        {
            id,
            name,
            value,
            defaultValue,
            error,
            errorText,
            isError = error || !!errorText,
            className,
            shouldRenderLabel,
            onChange,
            required,
            label,
            ...rest
        },
        ref
    ) => {
        const inputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => onChange?.(e);

        const inputTextAreaPlaceholder = `${label}`;

        return (
            <div className={clsx(style.textareaWrapper, isError && style.textareaWrapperError)}>
                {shouldRenderLabel ? <Label text={inputTextAreaPlaceholder} className={style.label} /> : null}

                <textarea
                    className={clsx(style.textarea, style[`activeTextarea-${!!inputHandler}`])}
                    id={id}
                    name={name}
                    defaultValue={defaultValue}
                    onChange={inputHandler}
                    ref={ref}
                    {...rest}
                />
                {isError ? <div className={clsx(style.errorMessage)}>{errorText}</div> : null}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";
export default Textarea;
