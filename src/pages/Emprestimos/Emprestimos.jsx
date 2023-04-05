import { useEffect, useState } from "react";
import { Badge, Button, Container, Pagination, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getEmprestimos } from "../../firebase/emprestimos";
import { Loader } from "../../components/Loader/Loader";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Emprestimos() {
  const [emprestimos, setEmprestimos] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const itemPorPagina = 9;

  useEffect(() => {
    getEmprestimos().then((busca) => {
      setEmprestimos(busca);
    });
  }, []);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const listaEmprestimos = () => {
    if (!emprestimos) {
      return <Loader />;
    }

    const startIndex = (activePage - 1) * itemPorPagina;
    const selectedEmprestimos = emprestimos.slice(
      startIndex,
      startIndex + itemPorPagina
    );

    return selectedEmprestimos.map((emprestimo) => {
      const dataEmprest = emprestimo.dataEmprestimo
        ?.toDate()
        ?.toLocaleDateString("pt-br");
      const dataEntr = emprestimo.dataEntrega
        ?.toDate()
        ?.toLocaleDateString("pt-br");
      let dataAtual = new Date().toLocaleDateString("ko-KR");
      let dataHoje = new Date(dataAtual);
      let dataPrazo = new Date(
        emprestimo.dataEntrega?.toDate()?.toLocaleDateString("ko-KR")
      );
      let cor;
      if (dataHoje > dataPrazo) {
        emprestimo.status = "Atrasado";
        cor = "danger";
      } else {
        emprestimo.status = emprestimo.status;
        if (emprestimo.status === "Pendente") {
          cor = "warning";
        } else if (emprestimo.status === "Entregue") {
          cor = "success";
        } else {
          cor = "danger";
        }
      }
      return (
        <tr className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"} key={emprestimo.id}>
          <td>{emprestimo.leitor}</td>
          <td>{emprestimo.email}</td>
          <td>{emprestimo.telefone}</td>
          <td>
            {emprestimo.livro
              ? emprestimo.livro.titulo
              : "Livro não encontrado"}
          </td>
          <td>
            <Badge bg={cor}>{emprestimo.status}</Badge>
          </td>
          <td>{dataEmprest}</td>
          <td>{dataEntr}</td>
          <td>
            <Button
              as={Link}
              to={`/emprestimos/editar/${emprestimo.id}`}
              variant="warning"
              size="sm"
            >
              <i className="bi bi-pencil-fill"></i>
            </Button>
          </td>
        </tr>
      );
    });
  };
  const renderPagination = () => {
    const totalPages = Math.ceil(emprestimos?.length / itemPorPagina);

    let items = [];
    for (let num = 1; num <= totalPages; num++) {
      items.push(
        <Pagination.Item
          key={num}
          active={num === activePage}
          onClick={() => handlePageChange(num)}
        >
          {num}
        </Pagination.Item>
      );
    }

    return (
        <div className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}>
      <Pagination className="d-flex justify-content-center align-items-center">
        <Pagination.First
          disabled={activePage === 1}
          onClick={() => handlePageChange(1)}
        />
        <Pagination.Prev
          disabled={activePage === 1}
          onClick={() => handlePageChange(activePage - 1)}
        />
        {items}
        <Pagination.Next
          disabled={activePage === totalPages}
          onClick={() => handlePageChange(activePage + 1)}
        />
        <Pagination.Last
          disabled={activePage === totalPages}
          onClick={() => handlePageChange(totalPages)}
        />
      </Pagination>
      </div>
    );
  };
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;

  return (
    <div className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}>
      <Container className={`shadow p-5 mb-5 bg-body-tertiary rounded ${temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}`}>
        <div className=" d-flex justify-content-between align-items-center mt-2">
          <h1>Empréstimos</h1>
          <Button
            as={Link}
            to="/emprestimos/adicionar"
            style={{ backgroundColor: "#248dad" }}
          >
            Adicionar empréstimo
          </Button>
        </div>
        <hr />

        <Table className="mb-0" bordered>
          <thead>
            <tr
              className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}
              align="center"
              Valign="center"
            >
              <th>Leitor</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Livro</th>
              <th>Status</th>
              <th>Data de Empréstimo</th>
              <th>Data de Entrega</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{listaEmprestimos()}</tbody>
        </Table>
        {renderPagination()}
      </Container>
    </div>
    
  );
}
