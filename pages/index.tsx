import type { NextPage } from 'next';
import Advantages from 'pages/HomePage/Advantages';
import Features from 'pages/HomePage/Features';
import Header from 'pages/HomePage/Header';
import Intro from 'pages/HomePage/Intro';


const Home: NextPage = () => {
  return (
    <>
    <Header />
    <Intro />
    <Features />
    <Advantages />
    

    </>
  )
}

export default Home;
