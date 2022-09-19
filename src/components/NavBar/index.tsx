import styles from "./styles.module.scss";


const Navigation = [
  {name: 'Home', href:'#', current:'true'},
  {name: 'Features', href:'#', current:'false'},
  {name: 'Testimonial', href:'#', current:'false'},
  {name: 'Advantages', href:'#', current:'false'},
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
};


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
  );
};

export default NavMenu;