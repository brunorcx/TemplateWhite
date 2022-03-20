import "../src/Styles/App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useEffect, useState, useRef } from "react";
import { BsPiggyBank, BsLinkedin } from "react-icons/bs";
import { AiOutlineCloudServer } from "react-icons/ai";
import { GiGoldBar } from "react-icons/gi";

const App = () => {
  const [grid3Class, setGrid3Class] = useState("grid-3-invsible");
  const [easyIn, setEasyIn] = useState("");
  const [models, setModels] = useState("");
  const [navbarClick, setNavbarClick] = useState("");
  const [transparent, setTransparent] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const divRef = useRef([]);
  const [btnSobre, setBtnSobre] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scrollPosition < 40) {
      setTransparent(true);
    } else {
      setTransparent(false);
    }
    if (grid3Class !== "grid-3") {
      if (scrollPosition > divRef.current[1]?.offsetTop && scrollPosition < divRef.current[2]?.offsetTop) {
        setGrid3Class("grid-3");
      }
    }
    if (easyIn !== "easy-in") {
      if (scrollPosition > divRef.current[2]?.offsetTop - 500 && scrollPosition < divRef.current[3]?.offsetTop) {
        setModels("translate");
        setEasyIn("easy-in");
      }
    }
  }, [scrollPosition]);

  useEffect(() => {
    scrollToDiv(navbarClick);
    setNavbarClick("");
  }, [navbarClick]);

  function scrollToDiv(props) {
    if (props === "Sobre") divRef.current[0]?.scrollIntoView({ behavior: "smooth" });
    else if (props === "Planos") divRef.current[1]?.scrollIntoView({ behavior: "smooth", block: "center" });
    else if (props === "Modelos") divRef.current[2]?.scrollIntoView({ behavior: "smooth", block: "center" });
    else if (props === "Contatos") divRef.current[3]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="App">
      <div className="App-header">
        <Navbar transparent={transparent} setNavbarClick={setNavbarClick} />
      </div>
      <div
        className="Sobre"
        ref={(item) => {
          if (divRef.current.length === 0) {
            divRef.current.push(item);
          }
        }}
      >
        <img src="/Laptop-pexels-kevin-ku.jpg" alt="laptop"></img>
        {/* <img src="/light-bulb.jpg" alt="laptop"></img> */}
        <div className="CentralizedText">
          <h1>Sites modernos e rápidos</h1>
          <h1>Especializados para você</h1>
          <button onClick={() => scrollToDiv("Planos")}>Saiba mais</button>
        </div>
      </div>
      <div
        className="Planos"
        ref={(item) => {
          if (divRef.current.length === 1) divRef.current.push(item);
        }}
      >
        {/* <img src="/Laptop-pexels-kevin-ku.jpg" alt="laptop"></img> */}
        <h1>Nossos planos</h1>
        <p>Escolha o plano que mais se encaixa com a sua necessidade</p>
        <div className={grid3Class}>
          <div className="area-1">
            <div className="icon">
              <BsPiggyBank size="6.5vh" />
            </div>
            <div>Bronze</div>
            <h2>
              R$ 69,90<span>/mês</span>
            </h2>
            <ul>
              <li>Site seguindo modelo pronto</li>
              <li>Ajustado para o seu produto</li>
              <li>Um usuário adminstrador</li>
              <li>Até 5gb para armazenamento</li>
              <li>Somente uma página(SPA)</li>
            </ul>
          </div>
          <div className="area-2">
            <AiOutlineCloudServer size="6.5vh" />
            <div>Silver</div>
            <h2>
              R$ 99,90<span>/mês</span>
            </h2>
            <ul>
              <li>Site seguindo modelo pronto</li>
              <li>Ajustado para o seu produto</li>
              <li>5 usuários administradores</li>
              <li>Até 10gb para armazenamento</li>
              <li>Até 2 sites por cliente</li>
              <li>Até 3 páginas por site</li>
            </ul>
          </div>
          <div className="area-3">
            <GiGoldBar size="6.5vh" />
            <div>Gold</div>
            <h2>R$ 999,90+</h2>
            <ul>
              <li>Site totalmente personalizado</li>
              <li>Design e layout exclusivos</li>
              <li>Controle de conteúdo por painel</li>
              <li>Armazenamento cobrado com o uso</li>
              <li>Treinamento operacional gratuito</li>
              <li>Páginas ilimitadas</li>
            </ul>
          </div>
        </div>
        <button onClick={() => scrollToDiv("Modelos")}>Saiba mais</button>
      </div>
      <div
        className="Modelos"
        ref={(item) => {
          if (divRef.current.length === 2) divRef.current.push(item);
        }}
      >
        {/* <img src="/Laptop-pexels-kevin-ku.jpg" alt="laptop"></img> */}
        {/* <div className="CentralizedText"> */}
        <div className="grid-2">
          <div className="area-1">
            <h1>Veja nossos modelos</h1>
            <p className={easyIn}>Temas claros e escuros com visual moderno e profissional </p>
          </div>
          <div className="area-2">
            <img className={models} src="/HomeE-commerce.png" alt="laptop"></img>
          </div>
        </div>
        <div className="grid-21">
          <div className="area-2">
            <img className={models} src="/HomeE-commerce.png" alt="laptop"></img>
          </div>
          <div className="area-1">
            <h1>Basta escolher</h1>
            <p className={easyIn}>Definido o tema, já iniciamos o seu site e entregamos com rapidez</p>
          </div>
        </div>
        <div className="grid-2">
          <div className="area-1">
            <h1>Gostou deste?</h1>
            <p className={easyIn}>Um valor que cabe no seu bolso </p>
          </div>
          <div className="area-2">
            <img className={models} src="/HomeE-commerce.png" alt="laptop"></img>
          </div>
        </div>
        <button onClick={() => scrollToDiv("Contatos")}>Saiba mais</button>
      </div>
      {/* </div> */}
      <div
        className="Contatos"
        ref={(item) => {
          if (divRef.current.length === 3) divRef.current.push(item);
        }}
      >
        <h1>Equipe</h1>
        <img src="/lightBulb.jpg" alt="laptop"></img>
        <div className="CentralizedText">
          <div className="area-1">
            <img src="/Bruno.jpeg" alt="laptop"></img>
            <p>Bruno Caputo</p>
            <span>Cofundador & CEO</span>
            <a href="https://www.linkedin.com/in/bruno-caputo-dev/">
              <BsLinkedin className="linkedin" />
            </a>
          </div>
          <div className="area-2">
            <img src="/Gabriel.png" alt="laptop"></img>
            <p>Gabriel Machado</p>
            <span>Cofundador & CEO</span>
            <a href="https://www.linkedin.com/in/gabriel-machado-dev/">
              <BsLinkedin className="linkedin" />
            </a>
          </div>
        </div>
        {/* <button onClick={() => scrollToDiv("Sobre")}>Retornar</button> */}
        <div className="service">
          <div className="grid-1">
            <h1>Quer um site? </h1>
            <span>Entre em contato!</span>
            <h3>Whatsapp</h3>
            <span>(95) 99174-2326</span>
            <span>(95) 98122-0021</span>
            <h3>E-mail</h3>
            <span>rodriguesdev@hotmail.com</span>
            <h3>Central de Atendimento</h3>
            <span>Seg - Sex 8 am - 20 pm</span>
            <span>Feriados 14 am - 18 pm</span>
          </div>
          <div className="grid-2">
            <div className="subgrid-1">
              <h2>Produção de conteúdo!</h2>
              <strong>Capacitação</strong>
              <p>Escolha uma equipe que será treinada para alimentar o seu site toda semana.</p>
            </div>
            <div className="subgrid-2">
              <h2>Aplicativos móveis!</h2>
              <strong>Android & iOS</strong>
              <p>Também fazemos aplicativos para dispositivos móveis.</p>
            </div>
            <div className="subgrid-3">
              <h2>Sistemas exclusivos!</h2>
              <strong>Windows & Linux</strong>
              <p>Utilizamos bibliotecas de ponta e atuais, criamos o sistema da sua escolha.</p>
            </div>
            <div className="subgrid-4">
              <h2>Indicações e mais!</h2>
              <strong>Descontos</strong>
              <p>A cada indicação feita você ganha um bom desconto no próximo site.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer setNavbarClick={setNavbarClick} />
    </div>
  );
};
export default App;
//Site exemplo https://capture-html.webflow.io/#About-Me
//https://webflow.com/blog/one-page-website-template
//https://www.npmjs.com/package/react-scroll
//https://github.com/do-community/React-With-Smooth-Scrolling/blob/master/src/Components/Navbar.js
