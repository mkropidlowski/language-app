import Heading from "components/atoms/Heading";
import style from "./userPanel.module.scss";

const UserPanel = () => {
    return (
        <div className={style.wrapper}>
            <Heading variant="h2" className={style.heading}>
                User Panel
            </Heading>
        </div>
    );
};

export default UserPanel;
