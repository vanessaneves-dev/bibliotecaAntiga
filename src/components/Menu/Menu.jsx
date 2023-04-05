import "./Menu.css";

import logoIcon from "./../../assets/images/BIBLIOTECH-removebg-preview.png";
import { Container, Nav, NavItem, Navbar } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../firebase/auth";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ImagemPerfil } from "../ImagemPerfil/ImagemPerfil";
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
    <Navbar bg="light" variant="light" expand="lg" className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={logoIcon} width="90" alt="Logo" className={temaEscuro ? "bg-dark" : "bg-light"} style={{marginLeft: "25%"}}/>
          </Link> 
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse style={{marginRight: "5%"}}>
          <Nav className="ms-auto">
            <Nav.Link className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}  as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"} as={Link} to="/livros">
              Livros
            </Nav.Link>
            <Nav.Link className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"} as={Link} to="/emprestimos">
              Emprestimos
            </Nav.Link>
            <Nav.Link as={Link} to="/perfilUsuario" className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
              Meu Perfil
            </Nav.Link>

            <NavItem>            
            <FotoPerfilNav />      
            </NavItem>

            <Button className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"} style={{ border: "none" }} onClick={mudar}>
              <img src={iconeBtn} width="16" />
            </Button>

            <Nav.Link onClick={onLogout} className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
              <i className="bi bi-box-arrow-right"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
