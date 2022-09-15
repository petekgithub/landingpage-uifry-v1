import React from 'react';
import styles from "./styles.module.scss";


const Customize = () =>  {
  return (
    <section id="Customize" className={styles.container}>
        <div className={styles.photo}>
            <img src="/assets/customizephone.svg" alt="CustomizePhone"/>
        </div>
        {/* right side */}
        <div className={styles.content}>
            <div className={styles.info}>
                <h4 className={styles.title}><img className={styles.image} src="/assets/customizestaricon.svg" alt="RingIcon"/>
                  Fully Customizable</h4>
                  <p>
                    Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultricies, In Ultricies Malesuade Elit Mauris Etiam 
                    Odio, Duis, Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis, Rhoncus, Diam, Suspendisse Sit Nunc, 
                    Gravida Eu, Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
                  </p>
            </div>
        </div>
    </section>
  )
}

export default Customize;