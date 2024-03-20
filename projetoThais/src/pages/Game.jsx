import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Game.css';

export default function Game() {
   const questions = [
        {
          question: '1° - Qual dessas áreas de carreira envolve a criação de software e aplicativos para dispositivos móveis?',
          options: ['Desenvolvimento Mobile', 'Segurança da Informação', 'Desenvolvimento Front-End', 'Análise de Dados'],
          correctAnswer: 'a',
        },
        {
          question: '2° - Em qual dessas áreas um cientista da computação trabalharia principalmente com algoritmos e estruturas de dados para otimizar processos?',
          options: ['Inteligência Artificial', 'Computação em Nuvem', 'Ciência de Dados', 'Análise de Algoritmos'],
          correctAnswer: 'd',
        },
        {
          question: '3° - Qual campo de carreira envolve a construção e manutenção de redes de computadores?',
          options: ['Segurança da Informação', 'Engenharia de Redes', 'Desenvolvimento Web', 'Realidade Virtual e Aumentada'],
          correctAnswer: 'b',
        },
        {
          question: '4° - Em qual dessas áreas um cientista da computação trabalharia principalmente com a construção de interfaces de usuário interativas e acessíveis?',
          options: ['Desenvolvimento Front-end', 'Desenvolvimento Back-End', 'Administração de Banco de Dados', 'Desenvolvimento Mobile'],
          correctAnswer: 'a',
        },
        {
          question: '5° -Qual dessas opções representa uma área de carreira em que um cientista da computação pode trabalhar com análise de grandes volumes de dados para obter insights valiosos?',
          options: ['Engenharia de Software', 'Desenvolvimento de Jogos', 'Ciência de Dados', 'Computação Gráfica'],
          correctAnswer: 'c',
        },
        {
          question: '6° - Em qual dessas áreas um cientista da computação trabalharia principalmente com o desenvolvimento e manutenção de sistemas de gestão de banco de dados?',
          options: ['Desenvolvimento Web', 'Análise de Algoritmos', 'Administração de Banco de Dados', 'Realidade Virtual e Aumentada'],
          correctAnswer: 'c',
        },
        {
          question: '7° - Qual desses campos de carreira envolve a criação de algoritmos e sistemas que imitam a capacidade humana de aprendizado e tomada de decisão?',
          options: ['Inteligência Artificial', 'Engenharia de Software', 'Computação em Nuvem', 'Desenvolvimento Front-end'],
          correctAnswer: 'a',
        },
        {
          question: '8° - Em qual dessas áreas um cientista da computação trabalharia principalmente com a proteção de sistemas e dados contra acessos não autorizados?',
          options: ['Desenvolvimento Front-end', 'Segurança Cibernética', 'Computação Gráfica', 'Análise de Dados'],
          correctAnswer: 'b',
        },
        {
          question: '9° - Qual dessas opções representa uma área de carreira em que um cientista da computação pode trabalhar com a criação e manutenção de ambientes virtuais imersivos?',
          options: ['Engenharia de Redes', 'Desenvolvimento de Jogos', 'Segurança da Informação', 'Administração de Banco de Dados'],
          correctAnswer: 'b',
        },
        {
          question: '10° -Em qual dessas áreas um cientista da computação trabalharia principalmente com o desenvolvimento de algoritmos para simular processos físicos e criar efeitos visuais?',
          options: ['Realidade Virtual e Aumentada', 'Inteligência Artificial', 'Análise de Algoritmos', 'Ciência de Dados'],
          correctAnswer: 'a',
        },
      ];

      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [selectedOption, setSelectedOption] = useState(null);
      const [result, setResult] = useState(null);
      const [correctAnswer, setCorrectAnswer] = useState(null);
      const [score, setScore] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [answeredQuestions, setAnsweredQuestions] = useState([]);
      
    
      const handleOptionClick = (option) => {
        setSelectedOption(option);
      };
    
      const handleConfirmAnswer = () => {
        const correctAnswer = questions[currentQuestion].correctAnswer;
        const isCorrect = selectedOption === correctAnswer;
    
        setResult(isCorrect ? 'green' : 'red');

        const isAlreadyCorrect = answeredQuestions.includes(currentQuestion);
  
        if (!isAlreadyCorrect && isCorrect) {
          setScore(score + 1);
        } else {
          setCorrectAnswer(correctAnswer);
        }
    
        // if (isCorrect) {
        //   setScore(score + 1);
        // } else {
        //   setCorrectAnswer(correctAnswer);
        // }
    
        // Passar para a próxima pergunta após um breve intervalo
        setTimeout(() => {
          if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
            setResult(null);
            setCorrectAnswer(null);
            setAnsweredQuestions([...answeredQuestions, currentQuestion]); // Adiciona o índice da questão respondida ao histórico
          } else {
            setShowScore(true);
          }
        }, 2000);
      };
    
      const handleGoBack = () => {
        if (answeredQuestions.length > 0) {
          const lastAnsweredQuestionIndex = answeredQuestions.pop(); // Remove o último índice do histórico
          setCurrentQuestion(lastAnsweredQuestionIndex);
          setSelectedOption(null);
          setResult(null);
          setCorrectAnswer(null);
          setAnsweredQuestions([...answeredQuestions]); // Atualiza o histórico sem o último índice removido
        }
      };

      const handleRestart = () => {
        setCurrentQuestion(0);
        setSelectedOption(null);
        setResult(null);
        setCorrectAnswer(null);
        setScore(0);
        setShowScore(false);
        setAnsweredQuestions([]);
      };
      
      
      
    
      return (
        <> 
           <Header />
           <main className='mainGame'>
             <div>
              {!showScore ? (
                <div>
                  <h3 className='gameQuestions'>{questions[currentQuestion].question}</h3>
                  <ul className='listStyle'>
                    {questions[currentQuestion].options.map((option, index) => (
                      <li className='listForm'
                        key={index}
                        style={{
                          cursor: 'pointer',
                          backgroundColor: selectedOption === String.fromCharCode(97 + index) ? result : 'white',
                        }}
                        onClick={() => handleOptionClick(String.fromCharCode(97 + index))}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                  <div className="btns">
                    <button className='confirm-button' onClick={handleConfirmAnswer}>Confirmar resposta</button>
                    {answeredQuestions.length > 0 && (
                      <button className='back-button' onClick={handleGoBack}>Voltar</button>
                    )}
                  </div>
                  {result === 'red' && (
                    <div className="correct-answer">
                      A resposta correta é: {String.fromCharCode(97 + questions[currentQuestion].correctAnswer.charCodeAt(0) - 97)}.{' '}
                      {correctAnswer && `Você escolheu: ${String.fromCharCode(97 + selectedOption.charCodeAt(0) - 97)}`}
                    </div>
                  )}
                </div>
              ) : (
                <div className='finishGame'>
                  <h3 className='gameQuestions'>Parabéns! Você completou o quiz.</h3>
                  <h3 className='gameQuestions'>Sua pontuação: {score}/{questions.length}</h3>
                  <div className="btnF"><button className='confirm-button' onClick={handleRestart}>Recomeçar</button></div>
                </div>
              )}
             </div>
           </main>
          <Footer/>
        </>
      )
    }
    



