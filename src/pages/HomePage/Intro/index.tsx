import React from 'react';
import styles from "./styles.module.scss";
import GetStartedButton from 'components/Button/GetStartedButton';


//export type Logo = "svg" | "png";
// export interface ILogo {
//   src: string | StatticImageData;
// }


const Intro = () => {
  return (
    <div>
      <section id="Intro" className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h1 className={styles.title}>Make The Best Financial Decisions</h1>
            <span>Cum Et Convallis Risus Placerat Aliquam, Nuno, Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</span>
            <img className={styles.light} src="/assets/introlight.svg" alt="IntroLight"/>  
          </div>
          <div className={styles.media}> 
            <GetStartedButton />
            <img src="/assets/introwatch.svg" alt="IntroWatch"/>
          </div>
          <img className={styles.phone} src="/assets/introphone.png"alt="IntroPhone"/> 
          <img src="/assets/intrologo.svg" alt="IntroLogo"/>   
        </div>
      </section>
    </div>
  )
}

export default Intro;