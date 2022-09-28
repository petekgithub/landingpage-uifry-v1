import styles from "./styles.module.scss";
import NavBar from "../../../components/NavBar";
import DownloadButton from "components/Button/DownloadButton";
import Image from 'next/image';
import Logo from "../../../Common/assets/imgs/headerlogo.svg";


const Header = () => {
  return (
    <header className={styles.container}>
      <div className= {styles.logo}>
      <Image 
          src={Logo}
          width={117}
          height={35}
        />
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