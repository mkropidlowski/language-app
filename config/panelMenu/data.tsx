import UserSection from "components/organism/UserSection";
import PostSection from "components/organism/PostSection";
import InboxSection from "components/organism/InboxSection";
import AddPostSection from "components/organism/AddPostSection";

export const panelHeading = "Panel zarządzania";
export const greetingText = "Witaj: ";

export const panelMenuLinks = {
    newPost: {
        text: "Dodaj post",
        content: <AddPostSection />,
        btnVariant: "primary",
    },
    users: {
        text: "Lista studentów",
        content: <UserSection />,
    },
    posts: {
        text: "Posty",
        content: <PostSection />,
    },
    emails: {
        text: "Skrzynka odbiorcza",
        content: <InboxSection />,
    },
    setting: {
        id: "settings",
        text: "Ustawienia",
    },
};
