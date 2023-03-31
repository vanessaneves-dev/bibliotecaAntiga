import { Container } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import { useEffect, useState } from "react";
import { getLivros } from "../../firebase/livros";
import { getEmprestimos } from "../../firebase/emprestimos";


export function Home() {
  const [livros, setLivros] = useState([]);
  const [emprestimos, setEmprestimos] = useState([]);

  useEffect(() => {
    initializeTable();
}, []);

function initializeTable() {
    getLivros().then(resultados => {
        setLivros(resultados)
    })
}

  useEffect(() => {
    getEmprestimos().then(busca => {
        setEmprestimos(busca);
    })
    }, [])

  

  return <div>
    
    <Container>
    <h1 style={{textAlign:'center', margin: '17px'}}><strong>Dashboard</strong></h1>
    <CardGroup>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title style={{fontWeight:'bold', fontSize: '30px', textAlign: 'center'}}>Total de Livros Cadastrados</Card.Title>
        <Card.Text className='text-success'style={{fontWeight:'bold', fontSize: '30px', textAlign: 'center'}}>
          {livros.length}
    </Card.Text>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title style={{fontWeight:'bold', fontSize: '30px', textAlign: 'center'}}>Total de Empréstimos</Card.Title>
        <Card.Text className='text-success' style={{fontWeight:'bold', fontSize: '30px', textAlign: 'center'}}>
          {emprestimos.length} <br/>
    </Card.Text>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title style={{fontWeight:'bold', fontSize: '30px', textAlign: 'center'}}>Status dos Empréstimos</Card.Title>
        <Card.Text className='text-warning' style={{fontWeight:'bold', fontSize: '30px', textAlign: 'center'}}>
          {emprestimos.filter(book=>book.status === 'Pendente').length} pendentes
        </Card.Text>
        <Card.Text className='text-success'style={{fontWeight:'bold', fontSize: '30px', textAlign: 'center'}}>
          {emprestimos.filter(book=>book.status === 'Entregue').length} entregues

    </Card.Text>
    </Card.Body>
    </Card>
    </CardGroup>
    </Container>
    
  </div>;
}
