import { FacebookIcon, InstagramIcon, WhatsappIcon } from "../../../../icons";
import style from "./socialButtons.module.scss";

export const SocialButton = () => (
    <div className={style.wrapper}>
        <FacebookIcon width={"50px"} height={"5s0px"} />
        <InstagramIcon width={"50px"} height={"50px"} />
        <WhatsappIcon width={"50px"} height={"50px"} />
    </div>
);
