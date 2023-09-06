import { NextPage } from "next";
import Hero from "components/organism/Hero";
import AboutSection from "components/organism/AboutSection";
import Slider from "components/molecules/Slider";
import { SliderLinks } from "components/molecules/Slider/data/SliderLinks";
import PageLayout from "components/molecules/PageLayout";
import ContactForm from "components/molecules/ContactForm";
import Map from "components/molecules/Map";
import dynamic from "next/dynamic";

const CookieBanner = dynamic(() => import("components/molecules/Cookie"), { ssr: false });

const Home: NextPage = () => (
    <>
        <PageLayout
            title="Szkoła języka angielskiego ABC FC Langowska"
            description="Nauczanie języka angielskigo ABC FC Helena Langowska to renomowana szkoła w Tczewie, dla wszystkich grup wiekowych, stawiamy na jakość i profesjonalne podejście do nauki języka!"
            hideNavbar
        >
            <Hero />
            <AboutSection />
            <Slider slides={SliderLinks} />
            <ContactForm />
            <Map />
            <CookieBanner />
        </PageLayout>
    </>
);

export default Home;
