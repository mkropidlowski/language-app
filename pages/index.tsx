import { NextPage } from "next";
import Hero from "components/organism/Hero";
import AboutSection from "components/organism/AboutSection";
import Slider from "components/molecules/Slider";
import { SliderLinks } from "components/molecules/Slider/data/SliderLinks";
import PageLayout from "components/molecules/PageLayout";
import ContactForm from "components/molecules/ContactForm";
import Map from "components/molecules/Map";

const Home: NextPage = () => {
    return (
        <>
            <PageLayout title="Language App" description="Małgorzata Langowska" hideNavbar>
                <Hero />
                <AboutSection />
                <Slider slides={SliderLinks} />
                <ContactForm />
                <Map />
            </PageLayout>
        </>
    );
};

export default Home;
