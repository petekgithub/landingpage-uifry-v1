import styles from "./styles.module.scss";
import menuItems from "../../constants/menuItems";


const NavMenu = () => {

  const handleOnClick = (event:string) => {
      const target= document.getElementById(event);
      window.scrollTo({
        top:target?.offsetTop, 
        behavior:"smooth"
      });
  };


  return (
    <>
      <div className={styles.nav}>
        <ul className={styles.items}>
          {menuItems.map(item => {
            return (
              <li
                key={item.label} 
                onClick={() => handleOnClick(item.label)}
              >
                {item.path}
              </li>
            );
            })}
        </ul>
      </div>
    </>
  )
}

export default NavMenu;