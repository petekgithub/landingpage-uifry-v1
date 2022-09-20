import styles from "./styles.module.scss";
import Image from 'next/image';
import Phone from "../../Core/assets/imgs/customizephone.svg";
import Star from "../../Core/assets/icons/customizestaricon.svg";

const Customize = () =>  {
  return (
    <section id="Customize" className={styles.container}>
      <div className={styles.photo}>
        <Image src={Phone} alt="CustomizePhone"/>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h4 className={styles.title}>
            <Image className={styles.image} src={Star} alt="RingIcon"/>
            Fully Customizable
          </h4>
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

export default Customize;