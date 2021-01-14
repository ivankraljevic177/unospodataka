import React from "react";
import { Navbar, NavbarBrand} from "reactstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.css";

const NavMenu = () => {
  return (
    <header className={styles.header}>
      
        <Navbar>
          <NavbarBrand  className={styles.logo} to="/">
            Unos briseva
          </NavbarBrand>
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
