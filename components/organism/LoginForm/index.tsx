import Input from "components/atoms/Input";
import { FC } from "react";
import style from "./loginForm.module.scss";
import Button from "components/atoms/Button";
import { useRouter } from "next/router";
import { useLogin } from "hooks/useLogin";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validation/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from "components/atoms/Heading";
import Link from "next/link";
import clsx from "clsx";

export interface LoginFormProps {
    email: string;
    password: string;
}

const LoginForm: FC = () => {
    const router = useRouter();
    const { signIn, error, isPending } = useLogin(null);
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormProps>({ mode: "all", resolver: yupResolver(validationSchema) });

    const submitForm = () => {
        const formData = getValues();
        signIn(formData.email, formData.password);
        router.push("/panel_uzytkownika");
    };

    return (
        <div className={style.wrapper}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(submitForm)();
                }}
                className={style.form}
            >
                <Heading variant="h4" bold>
                    Logowanie do aplikacji:
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
                    error={!!errors.password?.message}
                    errorText={errors.password?.message}
                    label="Hasło: "
                    shouldRenderLabel
                    required
                />
                <div className={style.formButtonBox}>
                    <Button type="submit" color="primary" buttonSize="small" className={style.submitButton}>
                        Zaloguj
                    </Button>
                    <Button
                        type="button"
                        color="secondary"
                        buttonSize="small"
                        className={clsx(style.submitButton, style.registerButton)}
                    >
                        <Link href="/rejestracja">Załóż konto</Link>
                    </Button>
                </div>

                {error && <p className={style.loginError}>Błąd logowania.</p>}
            </form>
            <Button type="button" color="tertiary" className={style.backToHomepageBtn}>
                <Link href="/">
                    <a>Powrót do strony głównej</a>
                </Link>
            </Button>
        </div>
    );
};

export default LoginForm;
