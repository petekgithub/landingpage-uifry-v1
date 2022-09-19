import styles from "./styles.module.scss";
import React from 'react';
import NavBar from "../../../components/NavBar";
import DownloadButton from "components/Button/DownloadButton";


const Header = () => {
  return (
    <div className={styles.container}>
      <div className= {styles.logo}>
        <img src="/assets/headerlogo.svg" alt="HeaderLogo"/>
      </div>
      <div className= {styles.nav}>
        <NavBar />
      </div>
      <div className= {styles.button}>
        <DownloadButton />
      </div>
    </div>
  );
};

export default Header;