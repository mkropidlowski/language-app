import * as yup from "yup";

export const validationSchema = yup
    .object()
    .shape({
        author: yup.string().required("To pole jest wymagane"),
        content: yup.string().required("To pole jest wymagane"),
        heading: yup.string().required("To pole jest wymagane"),
    })
    .required();
