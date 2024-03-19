import React, { useState } from 'react';
import TimeLine from "../assets/images/timeLine1.png"
import "./timeLine.css"
import Abaco from "../assets/images/abacos.gif"
import Napier from "../assets/images/napier.jpg"
import Pascalina from "../assets/images/pascalina.jpg"

export default function Main() {
    const [showAbacoImage, setShowAbacoImage] = useState(false);
    const [showNapierImage, setShowNapierImage] = useState(false);
    const [showPascalinaImage, setShowPascalinaImage] = useState(false);

    // Funções para alternar o estado de exibição de cada imagem
    const toggleAbacoImage = () => {
        setShowAbacoImage(!showAbacoImage);
    };

    const toggleNapierImage = () => {
        setShowNapierImage(!showNapierImage);
    };

    const togglePascalinaImage = () => {
        setShowPascalinaImage(!showPascalinaImage);
    };

    return(
        <main>
          <div className="timeLine2">
            <img src={TimeLine} alt="" />
          </div>
            <div class="main">
            <h3 id='page' class="head">Linha do tempo</h3>
            <div class="container">
                <ul>
                    <li>
                        <h3 class="heading">Ábaco</h3>
                        <p>O ábaco, surgido por volta de 1100 a.C., representa o mais
                        antigo dispositivo de cálculo conhecido. Ainda utilizado em
                        algumas regiões da Ásia, esse instrumento mecânico simples
                        permitia a realização de operações aritméticas básicas,
                        desempenhando um papel fundamental no desenvolvimento do
                        raciocínio matemático desde a antiguidade.
                        </p>
                        <button className='mainBtn' onClick={toggleAbacoImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showAbacoImage && (
                                <div className="image-containerh">
                                    <img src={Abaco} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Ossos de Napier e Logaritmos</h3>
                        <p>John Napier, no século XVII, desenvolveu os ossos
                        de Napier, uma técnica para multiplicação de grandes
                        números. Além disso, introduziu o conceito de
                        logaritmo, ampliando as ferramentas disponíveis para
                        cálculos complexos e influenciando o pensamento
                        matemático.
                        </p>
                        <button className='mainBtn' onClick={toggleNapierImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showNapierImage && (
                                <div className="image-containerh">
                                    <img src={Napier} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Pascalina</h3>
                        <p>Blaise Pascal criou a Pascalina em 1642, considerada a
                        primeira calculadora mecânica. Desenvolvida para auxiliar
                        seu pai, que era contador de impostos, a Pascalina foi um
                        avanço na automação de cálculos aritméticos.
                        </p>
                        <button className='mainBtn' onClick={togglePascalinaImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showPascalinaImage && (
                                <div className="image-containerh">
                                    <img src={Pascalina} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Ossos de Napier e Logaritmos</h3>
                        <p>John Napier, no século XVII, desenvolveu os ossos
                        de Napier, uma técnica para multiplicação de grandes
                        números. Além disso, introduziu o conceito de
                        logaritmo, ampliando as ferramentas disponíveis para
                        cálculos complexos e influenciando o pensamento
                        matemático.
                        </p>
                        <button className='mainBtn' onClick={toggleNapierImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showNapierImage && (
                                <div className="image-containerh">
                                    <img src={Napier} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Ossos de Napier e Logaritmos</h3>
                        <p>John Napier, no século XVII, desenvolveu os ossos
                        de Napier, uma técnica para multiplicação de grandes
                        números. Além disso, introduziu o conceito de
                        logaritmo, ampliando as ferramentas disponíveis para
                        cálculos complexos e influenciando o pensamento
                        matemático.
                        </p>
                        <button className='mainBtn' onClick={toggleNapierImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showNapierImage && (
                                <div className="image-containerh">
                                    <img src={Napier} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Ossos de Napier e Logaritmos</h3>
                        <p>John Napier, no século XVII, desenvolveu os ossos
                        de Napier, uma técnica para multiplicação de grandes
                        números. Além disso, introduziu o conceito de
                        logaritmo, ampliando as ferramentas disponíveis para
                        cálculos complexos e influenciando o pensamento
                        matemático.
                        </p>
                        <button className='mainBtn' onClick={toggleNapierImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showNapierImage && (
                                <div className="image-containerh">
                                    <img src={Napier} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Ossos de Napier e Logaritmos</h3>
                        <p>John Napier, no século XVII, desenvolveu os ossos
                        de Napier, uma técnica para multiplicação de grandes
                        números. Além disso, introduziu o conceito de
                        logaritmo, ampliando as ferramentas disponíveis para
                        cálculos complexos e influenciando o pensamento
                        matemático.
                        </p>
                        <button className='mainBtn' onClick={toggleNapierImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showNapierImage && (
                                <div className="image-containerh">
                                    <img src={Napier} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                </ul>
            </div>
        </div>
        </main>

    )

}
