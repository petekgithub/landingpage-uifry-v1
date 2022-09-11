import styles from "./styles.module.scss";
import menuItems from "../../constants/menuItems";
import DownloadButton from "../Button/DownloadButton"
import Logo from "../../assets/logo.svg";


const Navbar = () => {

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          {/* <img src={Logo} alt="Uifry-logo" /> */}
          <Logo />
        </div>

        <ul className={styles.items}>
          {menuItems.map(item => {
            return (
              <li key={item.id}>
                {item.label}
              </li>
            );
            })}
        </ul>

        <div className={styles.downloadButton}>
          {/* <DownloadButton /> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar;