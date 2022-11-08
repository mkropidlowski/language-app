import { NextPage } from 'next';
import style from './homePage.module.scss';
import NavBar from '../components/molecules/NavBar';
import Hero from '../components/organism/Hero';
import SeoData from '../components/atoms/SeoData';
import AboutSection from '../components/molecules/AboutSection';
import Slider from '../components/molecules/Slider';
import { SliderLinks } from '../components/molecules/Slider/data/SliderLinks';

const Home: NextPage = () => {
  return (
    <>
    <SeoData title='Language App' description='Małgosia Langowska'/>
      <div className={style.container}>
        <NavBar />
        <Hero />
        <AboutSection />
        <Slider slides={SliderLinks} />
      </div>
    </>
  )
}

export default Home
