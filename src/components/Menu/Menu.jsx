import logoIcon from "./../../assets/images/Logo4.svg";
import { Container, Nav, NavItem, Navbar } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../firebase/auth";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FotoPerfilNav } from "../FotoPerfilNav/FotoPerfilNav";

export function Menu() {
  const navigate = useNavigate();

  const { usuarioLogado } = useContext(AuthContext);

  function onLogout() {
    logout().then(() => {
      navigate("/login");
    });
  }
    const resultado = useContext(ThemeContext);
    const temaEscuro = resultado.temaEscuro;
    const mudar = resultado.mudar;
  
    let iconeBtn = "https://cdn-icons-png.flaticon.com/512/3073/3073665.png";
    if (temaEscuro) {
      iconeBtn = "https://cdn-icons-png.flaticon.com/512/581/581601.png";
    }
  
  return (
    <Navbar bg="light" variant="light" expand="lg" className={` mb-3  ${temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}`}>
      <Container fluid >
        <Navbar.Brand>
          <Link to="/">
            <img src={logoIcon} width="120" alt="Logo" className={` ms-5 ${temaEscuro ? "dark-mode-custom" : "bg-white"}`} style={{marginLeft: "25%"}}/>
          </Link> 
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse style={{marginRight: "5%"}}>
          <Nav className="ms-auto">
            <Nav.Link className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}  as={Link} to=
            "/">
              Home
            </Nav.Link>
            <Nav.Link className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"} as={Link} to="/livros">
              Livros
            </Nav.Link>
            <Nav.Link className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"} as={Link} to="/emprestimos">
              Emprestimos
            </Nav.Link>
            <Nav.Link className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"} as={Link} to="/perfilUsuario">
              Meu Perfil
            </Nav.Link>

            <NavItem>            
            <FotoPerfilNav />      
            </NavItem>

            <Nav.Link className={`me-3 ${temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}`} onClick={onLogout}>
              <i className="bi bi-box-arrow-right"></i>
            </Nav.Link>

            <Button className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"} style={{ border: "none" }} onClick={mudar}>
              <img src={iconeBtn} width="22" />
            </Button>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
