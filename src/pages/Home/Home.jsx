import { Card, CardGroup, Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getLivros } from "../../firebase/livros";
import { getEmprest, getEmprestimos } from "../../firebase/emprestimos";
import './Home.css'
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';
import pt_BR from 'timeago.js/lib/lang/pt_BR'


export function Home() { 
  const [livros, setLivros] = useState([]);
  const [emprestimos, setEmprestimos] = useState([]);
  const [emprest, setEmprest] = useState([]);

  useEffect(() => {
    getLivros().then(resultados => {
      setLivros(resultados)
  })
}, []);

  useEffect(() => {
    getEmprestimos().then(busca => {
        setEmprestimos(busca);
    })
    }, [])

    useEffect(() => {
      getEmprest().then(busca => {
          setEmprest(busca);
      })
      }, [])

  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;

  return (
     <div className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}>
      <Container className={`shadow p-5 mb-5 bg-body-tertiary rounded ${temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}`} >
    <Container className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}>
      <div style={{color: 'var(--color-darkBlue)'}}>
      <h1 style={{textAlign:'center'}} className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}><strong>Dashboard</strong></h1>
      </div>
    
    <CardGroup>

    <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title style={{ color: 'var(--color-darkBlue)', fontWeight:'bold', fontSize: '30px', textAlign: 'center'}}>Total de Livros Cadastrados</Card.Title>
        <Card.Text style={{color: 'var(--color-blue)', fontWeight:'bold', fontSize: '50px', textAlign: 'center'}}>
          {livros.length}
    </Card.Text>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title style={{color: 'var(--color-darkBlue)', fontWeight:'bold', fontSize: '30px', textAlign: 'center'}}>Total de Empréstimos</Card.Title>
        <Card.Text style={{color: 'var(--color-blue)', fontWeight:'bold', fontSize: '50px', textAlign: 'center'}}>
          {emprestimos.length} <br/>
    </Card.Text>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title style={{color: 'var(--color-darkBlue)', fontWeight:'bold', fontSize: '30px', textAlign: 'center'}}>Status dos Empréstimos</Card.Title>
          <Card.Text style={{color: 'var(--color-blue)', fontWeight:'bold', fontSize: '30px', textAlign: 'center'}}>
          {emprestimos.filter(book=>book.status === 'Entregue').length} entregues
        </Card.Text>
        <Card.Text className='text-warning' style={{fontWeight:'bold', fontSize: '30px', textAlign: 'center'}}>
          {emprestimos.filter(book=>book.status === 'Pendente').length} pendentes
        </Card.Text>
    </Card.Body>
    </Card>
    </CardGroup>
    </Container>

    <Container>
    <h1 className =  "text-center mb-1" ><b>Histórico de Livros Emprestados</b> </h1> 

    <Table striped bordered hover className="table-blue">
    <thead>
      <tr>
          <th className="fs-5" > Leitor</th> 
          <th className="fs-5">Livro</th>
          <th className="fs-5">Período</th>
      </tr>
  </thead>
 
  <tbody>
  {emprest.map(emprest => {
      const dataEmprestimo = emprest.dataEmprestimo?.toDate()?.toLocaleDateString('pt-br');
      let dataPrazo = emprest.dataEmprestimo?.toDate()
      console.log(dataPrazo)
      timeago.register('pt_BR', pt_BR);

      return(
       
          <tr key={emprest.id}>
              <td>{emprest.leitor}</td>
              <td>{emprest.livro ? emprest.livro.titulo : 'Livro não encontrado'}</td>
              
             
              <td><TimeAgo
              datetime={dataPrazo}
              locale='pt_BR'
            /> </td>
                          
                      </tr>
                      )
              })}
            </tbody>
                </Table>
                </Container>
              
            
                </Container>
              </div>
              );
}


