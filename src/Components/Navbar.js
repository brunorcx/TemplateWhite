import "../Styles/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = (props) => {
  const [slideMenu, setSlideMenu] = useState(false);
  return (
    <div className={props.transparent ? "transparent" : "totalNav"}>
      <div className="Nav1">
        <img className="logo" src="/Logo.png" alt="logo"></img>
        <div className={slideMenu ? "Slide" : "MobHamburger"}>
          <GiHamburgerMenu onClick={() => setSlideMenu(!slideMenu)} />
        </div>
      </div>
      <div className={slideMenu ? "translateInX" : "Nav2"}>
        <ul>
          <li
            onClick={() => {
              props.setNavbarClick("Sobre");
              if (slideMenu) setSlideMenu(!slideMenu); //Check for conflict with PC
            }}
          >
            Sobre
          </li>
          <li
            onClick={() => {
              props.setNavbarClick("Planos");
              if (slideMenu) setSlideMenu(!slideMenu);
            }}
          >
            Planos
          </li>
          <li
            onClick={() => {
              props.setNavbarClick("Modelos");
              if (slideMenu) setSlideMenu(!slideMenu);
            }}
          >
            Modelos
          </li>
          <li
            onClick={() => {
              props.setNavbarClick("Contatos");
              if (slideMenu) setSlideMenu(!slideMenu);
            }}
          >
            Contato
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
