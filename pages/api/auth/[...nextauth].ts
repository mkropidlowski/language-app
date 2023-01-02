import NextAuth, { Account, Awaitable, Profile, RequestInternal, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/logowanie",
        signOut: "/",
        newUser: "/rejestracja",
        error: "/logowanie",
    },
    debug: true,
    callbacks: {},
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
            },
            async authorize(credential, req) {
                console.log(req);
                console.log("elo");
            },
        }),
    ],
});
