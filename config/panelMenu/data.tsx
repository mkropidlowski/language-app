import UserSection from "components/organism/UserSection";
import PostSection from "components/organism/PostSection";

export const panelHeading = "Panel zarządzania";
export const greetingText = "Witaj: ";

export const panelMenuLinks = {
    newPost: {
        text: "Dodaj post",
        content: "Modal ADD POST",
        btnVariant: "primary",
    },
    users: {
        text: "Lista uzytowników",
        content: <UserSection />,
    },
    posts: {
        text: "Posty",
        content: <PostSection />,
    },
    setting: {
        id: "settings",
        text: "Ustawienia",
    },
};
