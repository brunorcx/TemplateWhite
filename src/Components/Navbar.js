import "../Styles/Navbar.css";
const Navbar = (props) => {
  return (
    <div className={props.transparent ? "transparent" : "totalNav"}>
      <img src="/Logo.png" alt="logo"></img>
      <ul>
        <li onClick={() => props.setNavbarClick("Sobre")}>Sobre</li>
        <li onClick={() => props.setNavbarClick("Planos")}>Planos</li>
        <li onClick={() => props.setNavbarClick("Modelos")}>Modelos</li>
        <li onClick={() => props.setNavbarClick("Contatos")}>Contato</li>
      </ul>
    </div>
  );
};
export default Navbar;
