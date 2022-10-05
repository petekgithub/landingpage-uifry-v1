import HomePage from "Home/pages/HomePage";
import { NextPage } from "next";
import MetaHeader from "../../uifry/src/Common/MetaHeader";

const Home: NextPage = () => {
  return(
    <>
      <MetaHeader />
      <HomePage />
    </>
  )
};

export default Home;