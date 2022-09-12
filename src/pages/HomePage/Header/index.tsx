import styles from "./styles.module.scss";
import React from 'react';
import Logo from "../../../assets/logo.svg";
import NavMenu from "../../../components/NavMenu";
import DownloadButton from "components/Button/DownloadButton";


const Header = () => {
  return (
    <div className={styles.container}>
      <div className= {styles.left}>
        <img src={Logo} alt="Uifry"/>
      </div>
      <div className= {styles.center}>
        <NavMenu />
      </div>
      <div className= {styles.right}>
        <DownloadButton />
      </div>
    </div>
  )
}

export default Header;