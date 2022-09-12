import React from 'react';
import styles from "./styles.module.scss";
import CustomizePhone from "../../../assets/advantagesphone.svg";


const Customize = () =>  {
  return (
    <section id="Customize" className={styles.container}>
        <div className={styles.left}>
          <img src={CustomizePhone} alt="CustomizePhone" />
        </div>
        <div className={styles.content}>
          <div className={styles.right}>
            <div className={styles.title}>
                <h3>Fully Customizable</h3>
                {/* add star icon */}
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

export default Customize;