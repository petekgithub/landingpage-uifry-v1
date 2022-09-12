import React from 'react';
import styles from "./styles.module.scss";
import FeaturesPhone from "../../../assets/featuresphone.svg";


const Features = () =>  {
  return (
    <section id="Features" className={styles.container}>
        <div className={styles.left}>
          <img src={FeaturesPhone} alt="FeaturePhone" />
        </div>
        <div className={styles.content}>
          <div className={styles.right}>
            <div className={styles.title}>
                <span>FEATURES</span>
                <h1>Uifry Premium</h1>
            </div>  
            <div className={styles.star}>
                <h4>Budgeting Intervals</h4>
                <p>Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet
                  Faucibus Tincidut Eu Adipiscing Sociis Arcu Lorem Porttitor.
                </p>
            </div>
            <div className={styles.circle}>
                <h4>Budgeting Intervals</h4>
                <p>Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet
                  Faucibus Tincidut Eu Adipiscing Sociis Arcu Lorem Porttitor.
                </p>
            </div>
            <div className={styles.square}>
                <h4>Budgeting Intervals</h4>
                <p>Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet
                  Faucibus Tincidut Eu Adipiscing Sociis Arcu Lorem Porttitor.
                </p>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Features;