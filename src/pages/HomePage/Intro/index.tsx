import { useState } from 'react';
import styles from "./styles.module.scss";


const Intro = () => {
   const change = () => {
     window.open("https://www.youtube.com");
};


  return (
    <div>
      <section id="Intro" className={styles.container}>
        <div className={styles.left}> 
          <div className={styles.info}>
            <h1 className={styles.title}>Make The Best Financial Decisions</h1>
            <p>Cum Et Convallis Risus Placerat Aliquam, Nuno, Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
            <img className={styles.light} src="/assets/introlight.svg" alt="IntroLight"/>   
          </div>
          <div className={styles.media}> 
            <button className={styles.getStartedButton}>GetStarted</button>
            <div className={styles.watch}>
              <img className={styles.video} src="/assets/introvideoicon.svg" alt="IntroVideoWatch"/>
              <button className={styles.button} onClick={change}>Watch Video</button>
            </div>
          </div>
          <div>
            <img className={styles.logo} src="/assets/intrologo.svg" alt="IntroLogo"/> 
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.phone} src="/assets/introphone.png"alt="IntroPhone"/> 
        </div> 
      </section>
    </div>
  );
};

export default Intro;