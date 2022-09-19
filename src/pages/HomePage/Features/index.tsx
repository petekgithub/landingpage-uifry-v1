import React from 'react';
import styles from "./styles.module.scss";


const Features = () =>  {
  return (
    <section id="Features" className={styles.container}>
      <div className={styles.left}>
        <img className={styles.phone} src="/assets/featuresphone.svg" alt="FeaturesPhone"/>
      </div>
      <div className={styles.right}>
        <div className={styles.info}>
          <span>FEATURES</span>
          <h1>Uifry Premium</h1>
        </div>  
        <div className={styles.icon}>
          <h4 className={styles.title}><img className={styles.image} src="/assets/staricon.svg" alt="StarIcon"/>
          Budgeting Intervals</h4>
          <p>Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet
            Faucibus Tincidut Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
        </div>
        <div className={styles.icon}>
          <h4 className={styles.title1}><img className={styles.image} src="/assets/circleicon.svg" alt="CircleIcon"/>
          Budgeting Intervals</h4>
          <p>Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet
            Faucibus Tincidut Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
        </div>
        <div className={styles.icon}>
          <h4 className={styles.title}><img className={styles.image} src="/assets/squareicon.svg" alt="SquareIcon"/>
          Budgeting Intervals</h4>
          <p>Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet
            Faucibus Tincidut Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;