import { Container } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import { useEffect, useState } from "react";
import { getLivros } from "../../firebase/livros";
import { getEmprestimos } from "../../firebase/emprestimos";
import './Home.css'



export function Home() {
  const [livros, setLivros] = useState([]);
  const [emprestimos, setEmprestimos] = useState([]);

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

  

  return <div>
    
    <Container>
      <div style={{color: 'var(--color-darkBlue)'}}>
      <h1 style={{textAlign:'center', margin: '17px'}}><strong>Dashboard</strong></h1>
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
    
  </div>;
}
