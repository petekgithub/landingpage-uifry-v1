import styles from "./styles.module.scss";
import DownloadButton from "Home/components/Button/DownloadButton";
import Image from 'next/image';
import Logo from "../../../Common/assets/imgs/headerlogo.svg";
import NavMenu from "Home/components/NavBar";


const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className= {styles.logo}>
        <Image 
            src={Logo}
            width={117}
            height={35}
          />
        </div>
        <div className= {styles.nav}>
          <NavMenu />
        </div>
        <div className= {styles.button}>
          <DownloadButton />
        </div>
      </div>
    </header>
  );
};

export default Header;