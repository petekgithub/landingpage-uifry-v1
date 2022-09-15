import React from 'react';
import styles from "./styles.module.scss";


const Advantages = () =>  {
  return (
    
    <section id="Advantages" className={styles.container}>
        <div className={styles.right}>
          <img src="/assets/advantagesphone.svg" alt="AdvantagesPhone" />
        </div>

        {/* left side */}
        <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.icon}>
                        <div className={styles.info}>
                            <span>Advantages</span>
                            <h1>Why Choose Uifry?</h1>
                        </div> 
                        <h4 className={styles.title}><img className={styles.image} src="/assets/ringicon.svg" alt="RingIcon"/>
                        Clever Notifications</h4>
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