import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Root } from "./pages/Root/Root";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { AuthContext } from "./contexts/AuthContext";
import { AdicionarLivro } from "./pages/AdicionarLivro/AdicionarLivro";
import { Livros } from "./pages/Livros/Livros";
import { EditarLivro } from "./pages/EditarLivro/EditarLivro";
import { AdicionarEmprestimo } from "./pages/AdicionarEmprestimo/AdicionarEmprestimo";
import { Emprestimos } from "./pages/Emprestimos/Emprestimos";
import { EditarEmprestimo } from "./pages/EditarEmprestimo/EditarEmprestimo";
import { Ajuda } from "./pages/Ajuda/Ajuda";
import { PoliticaDePrivacidade} from "./pages/PoliticaDePrivacidade/PoliticaDePrivacidade";
import { PerfilUsuario } from "./pages/PerfilUsuario/PerfilUsuario";
import { FotoPerfilNav } from "./components/FotoPerfilNav/FotoPerfilNav";
import { ThemeContext } from "./contexts/ThemeContext";
import { TermosECondicoes } from "./pages/TermosECondicoes/TermosECondicoes";
import { Cookies } from "./pages/Cookies/Cookies";

export function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    // Monitorar/detectar o usuário conectado
    // Fica sabendo quando loga/desloga
    onAuthStateChanged(auth, (user) => {
      // user é nulo = deslogado
      // user tem objeto = logado
      setUsuarioLogado(user);
    });

    // Esse efeito irá rodar apenas uma vez
    // Quando o App for renderizado/inicializado
  }, []);


    const [temaEscuro, setTemaEscuro] = useState(false);
  
     function mudar() {
      if (temaEscuro === true) {
        setTemaEscuro(false);
      } else {
        setTemaEscuro(true);
      }
    }

    useEffect(() => {
      if (temaEscuro) {
        document.body.classList.add("dark-mode-custom", "text-white");
      } else {
        document.body.classList.remove("dark-mode-custom", "text-white")
      }
    }, [temaEscuro]);
  return (
    <ThemeContext.Provider
      value={{ temaEscuro: temaEscuro, mudar: mudar }}
    >
      <AuthContext.Provider value={usuarioLogado}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route path="/" element={<Home />} />
              <Route path="/livros" element={<Livros />} />
              <Route path="/livros/adicionar" element={<AdicionarLivro />} />
              <Route path="/livros/editar/:id" element={<EditarLivro />} />
              <Route path="/emprestimos" element={<Emprestimos />} />
              <Route path="/emprestimos/adicionar" element={<AdicionarEmprestimo />} />
              <Route path="/emprestimos/editar/:id" element={<EditarEmprestimo />} />
              <Route path="/perfilUsuario" element={<PerfilUsuario/> } />
              <Route path="/termosECondicoes" element={<TermosECondicoes/> }/>
               <Route path="/fotoPerfilNav" element=
               {< FotoPerfilNav /> } />
              <Route path="/ajuda" element={<Ajuda/> } />
              <Route path="/politicas-de-privacidade" element={<PoliticaDePrivacidade/> } />
              <Route path="/cookies" element={<Cookies/>} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
      
      <Toaster />
      </ThemeContext.Provider>

  );
}