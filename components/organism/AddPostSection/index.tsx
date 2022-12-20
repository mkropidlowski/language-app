import Heading from "components/atoms/Heading";
import AddPostForm from "components/molecules/AddPostForm";
import style from "./addPostSection.module.scss";
const AddPostSection = () => (
    <div className={style.wrapper}>
        <Heading variant="h3" bold className={style.heading}>
            Dodaj post : opcja Live view - zacznij pisać w formularzu.
        </Heading>
        <AddPostForm />
    </div>
);
export default AddPostSection;
