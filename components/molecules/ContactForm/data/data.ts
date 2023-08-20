export const contactFormField = [
    { formKey: "name", label: "Imię i nazwisko" },
    { formKey: "email", label: "Adres e-mail" },
];

export type ResponseStatus = "pending" | "sent" | "error";

export const formStatusCode = {
    pending: "Wysyłanie..",
    sent: "Wysłano :-)",
    default: "Wyślij wiadomość",
};
