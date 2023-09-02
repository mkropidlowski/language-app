import * as yup from "yup";

const schema = {
    max80Characters: "E-mail jest zbyt długi",
    emailRegex:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required("Pole imię i nazwisko jest wymagane.")
        .min(10, "Minimalna liczba znaków - 10.")
        .max(100, "Maksymalna liczba znaków - 100."),
    email: yup
        .string()
        .required("Pole email jest wymagane.")
        .email("Wprowadź poprawny adres e-mail.")
        .trim()
        .matches(schema.emailRegex, "E-mail jest niezgodny.")
        .max(80, schema.max80Characters)
        .min(10, "Minumum 10 znaków."),

    message: yup
        .string()
        .required("Pole wiadomość jest wymagane.")
        .min(10, "Minimum liczba znaków - 10.")
        .max(500, "Maksymalna liczba znaków - 500."),
});
