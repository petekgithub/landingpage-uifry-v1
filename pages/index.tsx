import MetaHeader from "Common/MetaHeader";
import HomePage from "Home/pages/HomePage";
import { NextPage } from "next";

const Home: NextPage = () => {
  return(
    <>
      <MetaHeader />
      <HomePage />
    </>
  )
};

export default Home;