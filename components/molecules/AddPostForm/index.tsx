import { FC } from "react";
import style from "./addPostForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./data/validation";
import Input from "components/atoms/Input";
import Textarea from "components/atoms/Textarea";
import Button from "components/atoms/Button";
import { addPost } from "modules/addPost/services";
import PostPreview from "../PostPreview";
import { Loading } from "components/icons";

export interface AddFormProps {
    heading?: string;
    author?: string;
    content?: string;
    date?: string;
}
const AddPostForm: FC = () => {
    const {
        handleSubmit,
        getValues,
        register,
        reset,
        watch,
        formState: { errors },
    } = useForm<AddFormProps>({ mode: "all", resolver: yupResolver(validationSchema) });

    const submitForm = async () => {
        const postData = getValues();
        try {
            await addPost(postData);
            reset();
        } catch (error) {
            console.log("error");
        }
    };

    const livePostView = {
        heading: watch("heading"),
        author: watch("author"),
        content: watch("content"),
    };

    return (
        <div className={style.wrapper}>
            <form
                className={style.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(submitForm)();
                }}
            >
                <Input
                    type="text"
                    shouldRenderLabel
                    label="Nagłówek"
                    defaultValue={""}
                    {...register("heading")}
                    error={!!errors["heading"]?.message}
                    errorText={errors["heading"]?.message}
                    required
                />
                <Input
                    type="text"
                    shouldRenderLabel
                    label="Autor"
                    defaultValue={""}
                    {...register("author")}
                    error={!!errors["author"]?.message}
                    errorText={errors["author"]?.message}
                    required
                />
                <Textarea label={"Treść posta"} {...register("content")} shouldRenderLabel required />

                <Button type="submit" color="primary">
                    Dodaj post
                </Button>
            </form>
            <div className={style.livePreviewBox}>
                {livePostView.heading ? (
                    <PostPreview
                        author={livePostView.author}
                        heading={livePostView.heading}
                        content={livePostView.content}
                    />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default AddPostForm;
