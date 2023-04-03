import { useEffect, useState } from "react";
import { Badge, Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getEmprestimos } from "../../firebase/emprestimos";
import { Loader } from "../../components/Loader/Loader";

export function Emprestimos() {
    const [emprestimos, setEmprestimos] = useState(null);

    useEffect(() => {
        getEmprestimos().then((busca) => {
            setEmprestimos(busca);
        });
    }, []);

    

    return (
        <div className="emprestimos">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Emprestimos</h1>
                    <Button as={Link} to="/emprestimos/adicionar" variant="success">
                        Adicionar emprestimo
                    </Button>
                </div>
                <hr />
                {
                    emprestimos === null ?
                        <Loader />
                        :
                        <Table striped bordered hover>
                            <thead>
                                <tr>
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
                            <tbody>
                                {emprestimos.map(emprestimo => {
                                    const dataEmprest = emprestimo.dataEmprestimo?.toDate()?.toLocaleDateString('pt-br');
                                    const dataEntr = emprestimo.dataEntrega?.toDate()?.toLocaleDateString('pt-br');
                                    let dataAtual = new Date().toLocaleDateString('ko-KR')
                                    let dataHoje = new Date(dataAtual)
                                    let dataPrazo = new Date(emprestimo.dataEntrega?.toDate()?.toLocaleDateString('ko-KR'))
                                    let cor; 
                                    if (dataHoje > dataPrazo) {
                                        emprestimo.status = "Atrasado"
                                        cor = "danger"
                                    } else {
                                        emprestimo.status = emprestimo.status
                                        if(emprestimo.status === "Pendente"){
                                            cor = "warning"
                                        } else if (emprestimo.status === "Entregue") {
                                            cor = "success"
                                        } else {
                                            cor = "danger"
                                        }
                                    }                                    
                                    return (
                                        <tr key={emprestimo.id}>
                                            <td>{emprestimo.leitor}</td>
                                            <td>{emprestimo.email}</td>
                                            <td>{emprestimo.telefone}</td>
                                            <td>{emprestimo.livro ? emprestimo.livro.titulo : 'Livro não encontrado'}</td>
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
                                    )
                                })}
                            </tbody>
                        </Table>
                }
            </Container>
        </div>
    );
}
