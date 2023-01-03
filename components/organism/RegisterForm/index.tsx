import { FC } from "react";
import { useForm } from "react-hook-form";
import { useSignUp } from "hooks/useSignup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import RedirectLink from "components/atoms/RedirectLink";
import Heading from "components/atoms/Heading";
import { validationSchema } from "./validation/validationSchema";
import { registerFormText } from "./helpers/data";
import { retrunToHomePage } from "config/redirectLinkText/data";
import style from "./registerForm.module.scss";

export interface RegisterFormProps {
    email: string;
    password: string;
}

const RegisterForm: FC = () => {
    const { signUp, error, isPending } = useSignUp(null);
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormProps>({ mode: "all", resolver: yupResolver(validationSchema) });

    const registerForm = () => {
        const formData = getValues();
        signUp(formData.email, formData.password);
    };

    return (
        <div className={style.wrapper}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(registerForm)();
                }}
                className={style.form}
            >
                <Heading variant="h4" bold>
                    {registerFormText.heading}
                </Heading>

                <Input
                    type="text"
                    {...register("email")}
                    error={!!errors.email?.message}
                    errorText={errors.email?.message}
                    label="Adres e-mail:"
                    shouldRenderLabel
                    required
                />
                <Input
                    type="password"
                    {...register("password")}
                    error={!!errors.email?.message}
                    errorText={errors.email?.message}
                    label="Hasło: "
                    shouldRenderLabel
                    required
                />
                <div className={style.formButtonBox}>
                    <Button type="submit" color="secondary" buttonSize="small" className={style.registerButton}>
                        {registerFormText.createAccount}
                    </Button>
                </div>

                {error && <p className={style.loginError}>{registerFormText.registerError}</p>}
            </form>
            <RedirectLink
                shouldRedirectLink
                href={retrunToHomePage.href}
                redirectButtonText={retrunToHomePage.redirectButtonText}
            />
        </div>
    );
};

export default RegisterForm;
