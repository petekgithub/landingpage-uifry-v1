import Footer from "../../../Common/Footer";
import Header from "../../../Common/Header";
import Advantages from "./Advantages";
import Customize from "./Customize";
import Faq from "./Faq";
import Features from "./Features";
import Intro from "./Intro";
import Testimonial from "./Testimonial";
import styles from "./styles.module.scss";



const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header/>
      {/* <Intro />
      <Features />
      <Advantages />
      <Customize />
      <Testimonial />*/}
      <Faq /> 
      <Footer />
    </div>
  )
};

export default HomePage;