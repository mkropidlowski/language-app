import Head from "next/head";
import { FC } from "react";

interface Props {
    title: string;
    description: string;
}
const SeoData: FC<Props> = ({ title, description }) => (
    <Head>
        <title>{title}</title>
        <meta name="google-site-verification" content="" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta
            name="keywords"
            content="www, język angielski, naucznie, abc, fc, szkoła językowa, szkoła językowa Tczew, Tczew angielskie, ang Tczew, korepetycje, korepetycje Tczew, Langowska, atrakcyjne ceny angielskiego, indywidualne naczuanie Tczew, Tczew, certyfikaty, matura z angielskiego Tczew, Tczew matura, korki do matury Tczew"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>
);

export default SeoData;
