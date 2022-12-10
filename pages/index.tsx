import { NextPage } from "next";
import style from "./homePage.module.scss";
import Hero from "../components/organism/Hero";
import AboutSection from "../components/organism/AboutSection";
import Slider from "../components/molecules/Slider";
import { SliderLinks } from "../components/molecules/Slider/data/SliderLinks";
import PageLayout from "../components/molecules/PageLayout";
import ContactForm from "../components/molecules/ContactForm";

const Home: NextPage = () => {
    return (
        <>
            <PageLayout title="Language App" description="Małgorzata Langowska" shouldNavbarBeTransparentOnLoad>
                <Hero />
                <AboutSection />
                {/* <Slider slides={SliderLinks} /> */}
                {/* <ContactForm /> */}
            </PageLayout>
        </>
    );
};

export default Home;
