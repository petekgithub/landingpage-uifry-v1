import React from 'react';
import styles from "./styles.module.scss";
import Image from 'next/image';
import Ring from "../../Core/assets/icons/ringicon.svg";

const Advantages = () =>  {
  return (
    <section id="Advantages" className={styles.container}>
      <div className={styles.right}>
        <img
          src="/assets/icon/advantagesphone.svg"
          alt="AdvantagesPhone"
         // layout="fill"
        />

      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.info}>
            <span>Advantages</span>
            <h1>Why Choose Uifry?</h1>
          </div> 
          <h4 className={styles.title}>
            <Image
              className={styles.image} 
              src= {Ring}
              alt="RingIcon"
              layout="fill"
            /> 
          Clever Notifications</h4>
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