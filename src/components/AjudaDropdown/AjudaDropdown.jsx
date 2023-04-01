import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

 const AjudaDropdown = () => {
  const perguntas = [
    {
      pergunta: 'Posso renovar meu empréstimo de livros online?',
      resposta: 'Sim, você pode renovar seus empréstimos online. Basta fazer login em sua conta e selecionar os livros que deseja renovar.'
    },
    {
      pergunta: 'Como faço para encontrar um livro específico?',
      resposta: 'Você pode usar nossa barra de pesquisa para encontrar um livro por título, autor ou assunto. Também é possível navegar por nossas categorias para encontrar livros relacionados.'
    },
    {
      pergunta: 'Posso reservar um livro que está emprestado?',
      resposta: 'Sim, você pode reservar um livro que está emprestado. Basta fazer login em sua conta e selecionar o livro que deseja reservar. Quando o livro estiver disponível, você receberá um e-mail de confirmação.'
    },
    {
      pergunta: 'Como faço para saber se um livro está disponível?',
      resposta: 'Você pode verificar a disponibilidade de um livro fazendo uma busca em nossa biblioteca online. Se o livro estiver disponível, você poderá fazer a reserva ou solicitar o empréstimo.'
    },
    {
      pergunta: 'Posso solicitar a compra de um livro que não está disponível na biblioteca?',
      resposta: 'Sim, você pode solicitar a compra de um livro que não está disponível em nossa biblioteca. Basta entrar em contato conosco e fornecer as informações sobre o livro que deseja adquirir.'
    },
    {
      pergunta: 'Qual é o prazo de empréstimo de um livro?',
      resposta: 'O prazo de empréstimo de um livro é de 15 dias, podendo ser renovado por mais duas vezes, desde que não haja reserva para o mesmo título.'
    },
    {
      pergunta: 'Posso fazer uma doação de livros para a biblioteca?',
      resposta: 'Sim, aceitamos doações de livros em bom estado de conservação. Basta entrar em contato conosco para verificar a disponibilidade de espaço e os critérios de seleção de livros.'
    }
  ];

  const [perguntaSelecionada, setPerguntaSelecionada] = useState(null);

  const handleSelecionarPergunta = (pergunta) => {
    setPerguntaSelecionada(pergunta);
  }

  return (
    <section style={{ padding: '20px', marginTop: '80px'}} >
      <Dropdown  >
        <Dropdown.Toggle variant="primary" id="dropdown-perguntas" style={{ padding: '10px', borderRadius: '12px'}}>
          {perguntaSelecionada ? perguntaSelecionada.pergunta : '<<< Selecione uma pergunta >>>'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {perguntas.map((pergunta, index) => (
            <Dropdown.Item 
              key={index}
              onClick={() => handleSelecionarPergunta(pergunta)}
            >
              {pergunta.pergunta}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {perguntaSelecionada && (
         <p><br/> <hr /> <br/>
          <strong>Resposta:</strong> {perguntaSelecionada.resposta}
        </p>
      )}
    </section>
  );
};

export default AjudaDropdown;