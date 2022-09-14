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
          {/* left side */}
            <div className={styles.left}> 
              <div className={styles.info}>
                <h1 className={styles.title}>Make The Best Financial Decisions</h1>
                <p>Cum Et Convallis Risus Placerat Aliquam, Nuno, Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
                <img className={styles.light} src="/assets/introlight.svg" alt="IntroLight"/>   
              </div>
              <div className={styles.media}> 
                <GetStartedButton />
                <img src="/assets/introwatch.svg" alt="IntroWatch"/>
              </div>
              <div>
                <img className={styles.logo} src="/assets/intrologo.svg" alt="IntroLogo"/> 
              </div>
            </div>
            {/* right side */}
            <div className={styles.right}>
              <img className={styles.phone} src="/assets/introphone.png"alt="IntroPhone"/> 
            </div> 
      </section>
    </div>
  )
}

export default Intro;