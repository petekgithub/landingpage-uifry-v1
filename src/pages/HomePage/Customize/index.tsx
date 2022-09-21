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
          <div className={styles.inner}>
            <Image className={styles.image} src={Star} alt="StarIcon"/>
            <h4 className={styles.title}>Fully Customizable</h4>
          </div>
          <p>
            Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan, Ultricies, In Ultricies Malesuade Elit Mauris Etiam 
            Odio, Duis, Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis, Rhoncus, Diam, Suspendisse Sit Nunc, 
            Gravida Eu, Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
          </p>
      </div>

    </section>
  );
};

export default Customize;