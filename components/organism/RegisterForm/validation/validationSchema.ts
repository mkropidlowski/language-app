import * as yup from "yup";

const registerSchemaContent = {
    required: "To pole jest wymagane.",
    min6Characters: "Min 6 znaków.",
    max32Characters: "Max 32 znaki.",
    max80Characters: "Max 80 znaków.",
    password: "Podaj hasło.",
    email: "Podaj adres e-mail.",
};

export const validationSchema = yup
    .object()
    .shape({
        email: yup
            .string()
            .email(registerSchemaContent.email)
            .trim()
            .required(registerSchemaContent.required)
            .max(80, registerSchemaContent.max80Characters),
        password: yup
            .string()
            .trim()
            .required(registerSchemaContent.required)
            .min(6, registerSchemaContent.min6Characters)
            .max(32, registerSchemaContent.max32Characters),
    })
    .required();
