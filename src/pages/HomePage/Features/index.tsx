import styles from "./styles.module.scss";
import Image from 'next/image';
import Phone from "../../Core/assets/imgs/featuresphone.svg";
import Star from "../../Core/assets/icons/staricon.svg";
import Circle from "../../Core/assets/icons/circleicon.svg";
import Square from "../../Core/assets/icons/squareicon.svg";


const Features = () =>  {
  return (
    <section id="Features" className={styles.container}>
      <div className={styles.left}>
        <Image className={styles.phone} src={Phone} alt="FeaturesPhone"/>
      </div>
      <div className={styles.right}>
        <div className={styles.info}>
          <span>FEATURES</span>
          <h1>Uifry Premium</h1>
        </div>  
        <div className={styles.icon}>
          <h4 className={styles.title}>
            <Image className={styles.image} src={Star} alt="StarIcon"/>
            Budgeting Intervals
          </h4>
          <p>Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet
            Faucibus Tincidut Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
        </div>
        <div className={styles.icon}>
          <h4 className={styles.title1}>
            <Image className={styles.image} src={Circle} alt="CircleIcon"/>
            Budgeting Intervals
          </h4>
          <p>Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet
            Faucibus Tincidut Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
        </div>
        <div className={styles.icon}>
          <h4 className={styles.title}>
            <Image className={styles.image} src={Square} alt="SquareIcon"/>
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