export const contactFormField = [
    { formKey: "name", label: "Imię i nazwisko" },
    { formKey: "sender_email", label: "Adres e-mail" },
];

export type ResponseStatus = "pending" | "sent" | "error";

export const contactFormResponseStatuses = {
    pending: "Wysyłanie wiadomości...",
    sent: "Wysłano wiadomość",
    default: "Wyślij wiadomość",
};
