import styles from "./styles.module.scss";
import Image from 'next/image';
import Ring from "../../Core/assets/icons/ringicon.svg";
import Phone from "../../Core/assets/imgs/advantagesphone.svg";


const Advantages = () =>  {
  return (
    <section id="Advantages" className={styles.container}>
      <div className={styles.right}>
        <Image
          src={Phone}
          alt="AdvantagesPhone"
         //layout="fill"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.info}>
            <span>Advantages</span>
            <h1>Why Choose Uifry?</h1>
          </div> 
          <h4 className={styles.title}>
          Clever Notifications</h4>
          <div className={styles.titleinner}>
          <Image
              className={styles.image} 
              src= {Ring}
              alt="RingIcon"
              //layout="fill"
          /> 
          </div>
          <p>
            Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultricies, In Ultricies Malesuade Elit Mauris Etiam 
            Odio, Duis, Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis, Rhoncus, Diam, Suspendisse Sit Nunc, 
            Gravida Eu, Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advantages;