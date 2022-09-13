import styles from "./styles.module.scss";
import React from 'react';
import NavMenu from "../../../components/NavMenu";
import DownloadButton from "components/Button/DownloadButton";


const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}> 
        <div className= {styles.left}>
          <img src="/assets/headerlogo.svg" alt="HeaderLogo"/>
        </div>
        <div className= {styles.center}>
          <NavMenu />
        </div>
        <div className= {styles.right}>
          <DownloadButton />
        </div>
      </div>
    </div>
  )
}

export default Header;