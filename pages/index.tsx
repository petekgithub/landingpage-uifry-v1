import MetaHeader from 'Common/MetaHeader';
import type { NextPage } from 'next';
//import HomePage from 'pages/HomePage';
import Advantages from 'pages/HomePage/Advantages';
import Customize from 'pages/HomePage/Customize';
import Faq from 'pages/HomePage/Faq';
import Features from 'pages/HomePage/Features';
import Footer from 'pages/HomePage/Footer';
import Header from 'pages/HomePage/Header';
import Intro from 'pages/HomePage/Intro';
import Testimonial from 'pages/HomePage/Testimonial';


const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
       {/* you can go with it */}
      {/* <HomePage /> */}

       {/* you can delete every sections later */}
      <Header />
      <Intro />
      <Features />
      <Advantages />
      <Customize />
      <Testimonial />
      <Faq />
      <Footer /> 
    </>
  );
};

export default Home;
