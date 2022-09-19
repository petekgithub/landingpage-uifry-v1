import styles from "./styles.module.scss";
import NavBar from "../../../components/NavBar";
import DownloadButton from "components/Button/DownloadButton";


const Header = () => {
  return (
    <header className={styles.container}>
      <div className= {styles.logo}>
        <img src="/assets/headerlogo.svg" alt="HeaderLogo"/>
      </div>
      <div className= {styles.nav}>
        <NavBar />
      </div>
      <div className= {styles.button}>
        <DownloadButton />
      </div>
    </header>
  );
};

export default Header;