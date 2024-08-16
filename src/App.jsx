import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    // Função para buscar um conselho
    const fetchAdvice = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice' );
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const data = await response.json();
        setAdvice(data.slip.advice);
      } catch (error) {
        console.error('Erro ao buscar conselho:', error);
      }
     
    };
    fetchAdvice();
  }, []);

  const translateUrl = `https://translate.google.com/?hl=pt-BR&sl=en&tl=pt&op=translate&text=${encodeURIComponent(advice)}`;

  return (
    <div className="advice-container">
      <h1>Conselho do Dia</h1>
      <div className='frase'>
      <p><strong></strong> {advice}</p>
      {advice && (
        <p>
          <a href={translateUrl} target="_blank" rel="noopener noreferrer">
            Click para Traduzir
          </a>
        </p>
      )}
    </div>
    </div>
  );
};

export default App
