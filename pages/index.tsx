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

const Home: NextPage = () => {
    return (
        <>
            <PageLayout
                title="Szkoła językowa ABC FC"
                description="Renomowana szkoła do nauki w Tczewie, nauczanie dla wszystkich grup wiekowych!"
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
};

export default Home;
