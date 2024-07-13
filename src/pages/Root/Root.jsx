import { useContext } from "react";
import { useNavigate, Navigate, Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Menu } from "../../components/Menu/Menu";
import { AuthContext } from "../../contexts/AuthContext";

import "./root.css"


// Layout principal do App com Navbar Fixa
// As páginas com Navbar fixa: home, livros, empréstimos, etc
export function Root() {
  const usuarioLogado = useContext(AuthContext);
  const navigate = useNavigate();

  if (usuarioLogado === null) {
    // se está deslogado
    // redireciona para a página de login
    return navigate("/");
  } else if(!usuarioLogado.emailVerified) {
    return <Navigate to="/confirmacao-email"/>
  }

  return (
    <>
      <header  >
        <Menu />
      </header>
      <main >
        <Outlet />
      <footer> 
        <Footer />
      </footer>
      </main>
      
    </>
  );
}
