import Input from "components/atoms/Input";
import { FC } from "react";
import style from "./registerForm.module.scss";
import Button from "components/atoms/Button";
import { useRouter } from "next/router";
import { useLogin } from "hooks/useLogin";
import { useForm } from "react-hook-form";
import Heading from "components/atoms/Heading";
import Link from "next/link";

export interface RegisterFormProps {
    email: string;
    password: string;
}

const RegisterForm: FC = () => {
    const route = useRouter();
    const { signIn, error, isPending } = useLogin(null);
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormProps>({ mode: "all" });

    const registerForm = () => {
        const formData = getValues();
        signIn(formData.email, formData.password);
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
                    Rejestracja konta:
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
                        Załóż konto
                    </Button>
                </div>

                {error && <p className={style.loginError}>Błąd rejestracji.</p>}
            </form>
            <Button type="button" color="tertiary" className={style.backToHomepageBtn}>
                <Link href="/">
                    <a>Powrót do strony głównej</a>
                </Link>
            </Button>
        </div>
    );
};

export default RegisterForm;
