import React from "react";
import { Navbar} from "reactstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.css";
import logo from "../../assets/manifest-icon-192.png";

const NavMenu = () => {
  return (
    <header className={styles.header}>
      
        <Navbar>
          <label className ={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImg}/>
          </label>
          <NavLink
            
            className={styles.button}
            activeClassName={styles.buttonActive}
            exact
            to="/listaracuna"
          >
            Računi
          </NavLink>
          <NavLink
            
            className={styles.button}
            activeClassName={styles.buttonActive}
            exact
            to="/listabriseva"
          >
            Lista briseva
          </NavLink>

          <NavLink
            
            className={styles.button}
            activeClassName={styles.buttonActive}
            exact
            to="/"
          >
            Novi bris
          </NavLink>
          
        </Navbar>
     
    </header>
  );
};
export default NavMenu;
