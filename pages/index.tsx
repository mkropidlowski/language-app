import { NextPage } from 'next';
import style from './homePage.module.scss';
import NavBar from '../components/molecules/NavBar';
import Hero from '../components/organism/Hero';
import SeoData from '../components/atoms/SeoData';
import AboutSection from '../components/organism/AboutSection';
import Slider from '../components/molecules/Slider';
import { SliderLinks } from '../components/molecules/Slider/data/SliderLinks';
import Footer from '../components/organism/Footer';
import UserReview from '../components/organism/UserReview';

const Home: NextPage = () => {
  return (
    <>
    <SeoData title='Language App' description='Małgosia Langowska'/>
      <div className={style.container}>
        <NavBar />
        <Hero />
        <AboutSection />
        <Slider slides={SliderLinks} />
        <UserReview />
        <Footer />
      </div>
    </>
  )
}

export default Home
