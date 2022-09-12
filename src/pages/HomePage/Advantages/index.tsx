import React from 'react';
import styles from "./styles.module.scss";
import AdvantagesPhone from "../../../assets/advantagesphone.svg";


const Advantages = () =>  {
  return (
    <section id="Advantages" className={styles.container}>
        <div className={styles.right}>
          <img src={AdvantagesPhone} alt="AdvantagesPhone" />
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.title}>
                <span>Advantages</span>
                <h1>Why Choose Uifry?</h1>
                {/* add ring icon */}
                <h3>Clever Notifications</h3>       
                <p>
                  Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultricies, In Ultricies Malesuade Elit Mauris Etiam 
                  Odio, Duis, Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis, Rhoncus, Diam, Suspendisse Sit Nunc, 
                  Gravida Eu, Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
                </p>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Advantages;