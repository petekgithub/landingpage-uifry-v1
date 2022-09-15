import type { NextPage } from 'next';
import Advantages from 'pages/HomePage/Advantages';
import Customize from 'pages/HomePage/Customize';
import Faq from 'pages/HomePage/Faq';
import Features from 'pages/HomePage/Features';
import Footer from 'pages/HomePage/Footer';
import GetStarted from 'pages/HomePage/GetStarted';
import Header from 'pages/HomePage/Header';
import Intro from 'pages/HomePage/Intro';
import Testimonial from 'pages/HomePage/Testimonial';


const Home: NextPage = () => {
  return (
    <>
    <Header />
    <Intro />
    <Features />
    <Advantages />
    <Customize />
    <Testimonial />
    <Faq />
    {/*<GetStarted />
    <Footer /> */}
    

    </>
  )
}

export default Home;
