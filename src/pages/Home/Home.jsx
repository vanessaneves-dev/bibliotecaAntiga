import { Card, CardGroup, Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getLivros } from "../../firebase/livros";
import { getEmprest, getEmprestimos } from "../../firebase/emprestimos";
import './Home.css'
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import TimeAgo from 'timeago-react';
import * as timeago from 'timeago.js';
import pt_BR from 'timeago.js/lib/lang/pt_BR'
//import { RingLoader } from "react-spinners";
import Lottie from "lottie-react";
import * as imagem from '../../assets/animation/books.json'



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

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
      setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  
  return isLoading ? 
  <Container className="d-flex align-items-center justify-content-center w-100 h-100" style={{height: "100vh", color: "#4A67DF"}}>
    <h1>Bem-vindo ao mundo do conhecimento!!!
    {/* <RingLoader className="mx-auto" isLoading={isLoading} size={350} color={"#4A67DF"}/> */}
    <Lottie animationData={imagem} autoPlay />
    </h1>
    </Container> :

  (    
    <div className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}>
      <Container className={`shadow p-5 mb-5 bg-body-tertiary rounded ${temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}`} >
      <Container className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}>
      <div style={{color: 'var(--color-darkBlue)'}}>
      <h1 style={{content: "", borderBottom: "2px solid var(--color-blue)", width: "15%", marginBottom:"16px" }} className={temaEscuro ? "dark-mode-custom text-light" : "bg-white text-dark"}><strong>Dashboard</strong></h1>
      </div>
    
    <CardGroup>

    <Card  style={{ width: '18rem',backgroundColor:"#D9D9D9", border:"none" }} >
    <Card.Body>
        <Card.Title style={{ color: 'var(--color-darkBlue)', fontWeight:'bold', fontSize: '24px', textAlign: 'center', margin:"15%"}}>Total de Livros Cadastrados</Card.Title>
        <Card.Text style={{color: 'var(--color-blue)', fontWeight:'bold', fontSize: '32px', textAlign: 'center'}}>
          {livros.length}
    </Card.Text>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:"#ebebeb", border:"none" }}>
    <Card.Body>
        <Card.Title style={{color: 'var(--color-darkBlue)', fontWeight:'bold', fontSize: '24px', textAlign: 'center', margin:"15%"}}>Total de Empréstimos</Card.Title>
        <Card.Text style={{color: 'var(--color-blue)', fontWeight:'bold', fontSize: '32px', textAlign: 'center'}}>
          {emprestimos.length} <br/>
    </Card.Text>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem',backgroundColor:"#D9D9D9", border:"none" }}>
    <Card.Body>
        <Card.Title style={{color: 'var(--color-darkBlue)', fontWeight:'bold', fontSize: '24px', textAlign: 'center', margin:"15%"}}>Status dos Empréstimos</Card.Title>
          <Card.Text style={{color: 'var(--color-blue)', fontWeight:'bold', fontSize: '26px', textAlign: 'center'}}>
          {emprestimos.filter(book=>book.status === 'Entregue').length} entregues
        </Card.Text>
        <Card.Text className='text-warning' style={{fontWeight:'bold', fontSize: '30px', textAlign: 'center'}}>
          {emprestimos.filter(book=>book.status === 'Pendente').length} pendentes
        </Card.Text>
    </Card.Body>
    </Card>
    </CardGroup>
    </Container>

    <Container className="mt-5 mb-3">
    <h1 className="titulo d-inline "><strong>Últimos empréstimos 📖</strong></h1> 

    <Table striped hover className="table-blue rounded mt-3">
    <thead>
      <tr>
          <th className="fs-5">Leitor</th> 
          <th className="fs-5">Livro</th>
          <th className="fs-5">Período</th>
      </tr>
  </thead>
 
  <tbody>
  {emprest.map(emprest => {
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


