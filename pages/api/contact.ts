import { publicEnvs } from "config/envs";
import { transporter } from "config/form/services";

const EMAIL = publicEnvs.GMAIL_ADRESS;

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;
        if (!data) {
            return res.status(400).send({ message: "Bad request" });
        }

        const emailOptions = {
            from: data.email,
            to: `${EMAIL}`,
        };

        try {
            await transporter.sendMail({
                ...emailOptions,
                from: data.email,
                subject: data.address,
                html: `<h3>${data.name}</h3><p>${data.text}</p>`,
            });

            return res.status(200).json({ success: true });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    return res.status(400).json({ message: "BAD REQUEST" });
};

export default handler;
