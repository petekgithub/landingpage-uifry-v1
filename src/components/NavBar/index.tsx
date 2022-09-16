import styles from "./styles.module.scss";
import menuItems from "../../constants/menuItems";
//import {Link} from 'react-scroll';


const Navigation = [
  {name: 'Home', href:'#', current:'true'},
  {name: 'Features', href:'#', current:'false'},
  {name: 'Testimonial', href:'#', current:'false'},
  {name: 'Advantages', href:'#', current:'false'},
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}


const NavMenu = () => {

  const handleOnClick = (event:string) => {
      const target= document.getElementById(event);
      window.scrollTo({
        top:target?.offsetTop, 
        behavior:"smooth"
      });
  };


  return (
      <div className={styles.nav}>
        {/* <ul className={styles.items}>
          { {menuItems.map(item => ( 
            
              <li
                key={item.label} 
                onClick={() => handleOnClick(item.label)}
              >
                {item.path}
              </li>
            
            ))} }
        </ul> */}
         <div className={styles.items}>
          {Navigation.map((item) => (
            <a
              href = {item.href}
              key = {item.name}
              onClick={() => handleOnClick(item.name)}
              className={classNames(item.current)}
            >
              {item.name}
            </a>
          ))}
        </div> 
      </div>
  )
}

export default NavMenu;