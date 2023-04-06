import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { deleteLivro, getLivros } from "../../firebase/livros";
import "./Livros.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Lottie from "lottie-react";
import * as imagem from '../../assets/animation/books.json'

export function Livros() {
  const [livros, setLivros] = useState(null);

  useEffect(() => {
    initializeTable();
  }, []);

  function initializeTable() {
    getLivros().then((resultados) => {
      setLivros(resultados);
    });
  }
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
      setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  function onDeleteLivro(id, titulo) {
    const deletar = window.confirm(
      `Tem certeza que deseja excluir o livro ${titulo}?`
    );
    if (deletar) {
      deleteLivro(id).then(() => {
        toast.success(`${titulo} apagado com sucesso!`, {
          duration: 2000,
          position: "bottom-right",
        });
        initializeTable();
      });
    }
  }
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;

  return isLoading ? <Container className="shadow p-5 mb-5 bg-body-tertiary rounded d-flex align-items-center justify-content-center container-ls" >
  <p> <Lottie animationData={imagem} autoPlay /></p> 
</Container>  : (
    <div className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}>
    <div className="livros">
      <Container className="shadow p-5 mb-5 bg-body-tertiary rounded" >
        <div className="d-flex justify-content-between align-items-center">
          <h1>Livros</h1>
          <Button
            as={Link}
            to="/livros/adicionar"
            style={{ backgroundColor: "#248dad" }}
          >
            Adicionar Livro
          </Button>
        </div>
        <hr />
        {livros === null ? (
          <Loader />
        ) : (
          <Table className="mb-0 rounded" >
            <thead>
              <tr className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}>
                <th>Título</th>
                <th>Autor</th>
                <th>Categoria</th>
                <th>ISBN</th>
                <th>Imagem</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}>
              {livros.map((livro) => {
                return (
                  <tr key={livro.id}>
                    <td>{livro.titulo}</td>
                    <td>{livro.autor}</td>
                    <td>{livro.categoria}</td>
                    <td>{livro.isbn}</td>
                    <td>
                      <img src={livro.urlCapa} alt={livro.titulo} />
                    </td>
                    <td>
                      <Button
                        as={Link}
                        to={`/livros/editar/${livro.id}`}
                        variant="warning"
                        size="sm"
                        className="mb-2"
                      >
                        <i className="bi bi-pencil-fill "></i>
                      </Button>

                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => onDeleteLivro(livro.id, livro.titulo)}
                      >
                        <i className="  bi bi-trash3-fill "></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Container>

    </div>
    </div>
  );
}
