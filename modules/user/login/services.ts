export const isUserLogged = () => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
        } else {
            // User is signed out
            // ...
        }
    });
};

// // import { instance } from "config/axios/axiosConfig";
// import { NextApiRequest, NextApiResponse } from "next";
// import jwt from "jsonwebtoken";

// const FORM_URL = `http://localhost:4000/api/email`;
// const KEY = "ffffffefdfgdfgdfggfgdfdfg";

// // eslint-disable-next-line import/no-anonymous-default-export
// export default function (req: NextApiRequest, res: NextApiResponse) {
//     if (!req.body) {
//         res.statusCode = 404;
//         res.end("Error");
//         return;
//     }

//     const { email, password } = req.body;
//     res.json({
//         token: jwt.sign(
//             {
//                 email,
//                 admin: email === "admin" && password === "admin",
//             },
//             KEY
//         ),
//     });
//     // const res = await instance.post(FORM_URL, body, {
//     //     headers: {
//     //         Signature: "to jest sygnaturaaaa",
//     //     },
//     // });
// }
