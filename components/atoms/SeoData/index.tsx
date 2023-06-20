import Head from "next/head";
import { FC } from "react";

interface Props {
    title: string;
    description: string;
}
const SeoData: FC<Props> = ({ title, description }) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>
);

export default SeoData;
