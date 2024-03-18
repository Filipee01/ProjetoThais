import React, { useState } from 'react';
import TimeLine from "../assets/images/timeLine1.png"
import "./timeLine.css"
import Abaco from "../assets/images/abacos.gif"
import Napier from "../assets/images/napier.jpg"

export default function Main() {
    const [showImage, setShowImage] = useState(false);

    const toggleImage = () => {
        setShowImage(!showImage);
    };


    return(
        <main>
          <div className="timeLine2">
            <img src={TimeLine} alt="" />
          </div>
            <div class="main">
            <h3 class="head">Linha do tempo</h3>
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
                        <button className='mainBtn' onClick={toggleImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showImage && (
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
                        <button className='mainBtn' onClick={toggleImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showImage && (
                                <div className="image-containerh">
                                    <img src={Napier} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Ábaco</h3>
                        <p>O ábaco, surgido por volta de 1100 a.C., representa o mais
                        antigo dispositivo de cálculo conhecido. Ainda utilizado em
                        algumas regiões da Ásia, esse instrumento mecânico simples
                        permitia a realização de operações aritméticas básicas,
                        desempenhando um papel fundamental no desenvolvimento do
                        raciocínio matemático desde a antiguidade.
                        </p>
                        <button className='mainBtn' onClick={toggleImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showImage && (
                                <div className="image-containerh">
                                    <img src={Abaco} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Ábaco</h3>
                        <p>O ábaco, surgido por volta de 1100 a.C., representa o mais
                        antigo dispositivo de cálculo conhecido. Ainda utilizado em
                        algumas regiões da Ásia, esse instrumento mecânico simples
                        permitia a realização de operações aritméticas básicas,
                        desempenhando um papel fundamental no desenvolvimento do
                        raciocínio matemático desde a antiguidade.
                        </p>
                        <button className='mainBtn' onClick={toggleImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showImage && (
                                <div className="image-containerh">
                                    <img src={Abaco} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Ábaco</h3>
                        <p>O ábaco, surgido por volta de 1100 a.C., representa o mais
                        antigo dispositivo de cálculo conhecido. Ainda utilizado em
                        algumas regiões da Ásia, esse instrumento mecânico simples
                        permitia a realização de operações aritméticas básicas,
                        desempenhando um papel fundamental no desenvolvimento do
                        raciocínio matemático desde a antiguidade.
                        </p>
                        <button className='mainBtn' onClick={toggleImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showImage && (
                                <div className="image-containerh">
                                    <img src={Abaco} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Ábaco</h3>
                        <p>O ábaco, surgido por volta de 1100 a.C., representa o mais
                        antigo dispositivo de cálculo conhecido. Ainda utilizado em
                        algumas regiões da Ásia, esse instrumento mecânico simples
                        permitia a realização de operações aritméticas básicas,
                        desempenhando um papel fundamental no desenvolvimento do
                        raciocínio matemático desde a antiguidade.
                        </p>
                        <button className='mainBtn' onClick={toggleImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showImage && (
                                <div className="image-containerh">
                                    <img src={Abaco} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Ábaco</h3>
                        <p>O ábaco, surgido por volta de 1100 a.C., representa o mais
                        antigo dispositivo de cálculo conhecido. Ainda utilizado em
                        algumas regiões da Ásia, esse instrumento mecânico simples
                        permitia a realização de operações aritméticas básicas,
                        desempenhando um papel fundamental no desenvolvimento do
                        raciocínio matemático desde a antiguidade.
                        </p>
                        <button className='mainBtn' onClick={toggleImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showImage && (
                                <div className="image-containerh">
                                    <img src={Abaco} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Ábaco</h3>
                        <p>O ábaco, surgido por volta de 1100 a.C., representa o mais
                        antigo dispositivo de cálculo conhecido. Ainda utilizado em
                        algumas regiões da Ásia, esse instrumento mecânico simples
                        permitia a realização de operações aritméticas básicas,
                        desempenhando um papel fundamental no desenvolvimento do
                        raciocínio matemático desde a antiguidade.
                        </p>
                        <button className='mainBtn' onClick={toggleImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showImage && (
                                <div className="image-containerh">
                                    <img src={Abaco} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Ábaco</h3>
                        <p>O ábaco, surgido por volta de 1100 a.C., representa o mais
                        antigo dispositivo de cálculo conhecido. Ainda utilizado em
                        algumas regiões da Ásia, esse instrumento mecânico simples
                        permitia a realização de operações aritméticas básicas,
                        desempenhando um papel fundamental no desenvolvimento do
                        raciocínio matemático desde a antiguidade.
                        </p>
                        <button className='mainBtn' onClick={toggleImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showImage && (
                                <div className="image-containerh">
                                    <img src={Abaco} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Ábaco</h3>
                        <p>O ábaco, surgido por volta de 1100 a.C., representa o mais
                        antigo dispositivo de cálculo conhecido. Ainda utilizado em
                        algumas regiões da Ásia, esse instrumento mecânico simples
                        permitia a realização de operações aritméticas básicas,
                        desempenhando um papel fundamental no desenvolvimento do
                        raciocínio matemático desde a antiguidade.
                        </p>
                        <button className='mainBtn' onClick={toggleImage}>Ábaco aqui</button>
                        <span class="date">January 2021</span>
                        <span class="circle"></span>
                        {showImage && (
                                <div className="image-containerh">
                                    <img src={Abaco} alt="Ábaco" />
                                </div>
                            )}
                    </li>

                    <li>
                        <h3 class="heading">BackEnd Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                        totam </p>
                        <a href="#">Read More </a>
                        <span class="date">February 2021</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">Full Stack Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                        totam </p>
                        <a href="#">Read More </a>
                        <span class="date">March 2021</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">App Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                        totam </p>
                        <a href="#">Read More </a>
                        <span class="date">April 2021</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">App Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                        totam </p>
                        <a href="#">Read More </a>
                        <span class="date">April 2021</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">App Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                        totam </p>
                        <a href="#">Read More </a>
                        <span class="date">April 2021</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">App Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                        totam </p>
                        <a href="#">Read More </a>
                        <span class="date">April 2021</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">App Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                        totam </p>
                        <a href="#">Read More </a>
                        <span class="date">April 2021</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">App Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                        totam </p>
                        <a href="#">Read More </a>
                        <span class="date">April 2021</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">App Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                        totam </p>
                        <a href="#">Read More </a>
                        <span class="date">April 2021</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">App Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                        totam </p>
                        <a href="#">Read More </a>
                        <span class="date">April 2021</span>
                        <span class="circle"></span>
                    </li>
                    <li>
                        <h3 class="heading">App Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                        totam </p>
                        <a href="#">Read More </a>
                        <span class="date">April 2021</span>
                        <span class="circle"></span>
                    </li>
                </ul>
            </div>
        </div>
        </main>

    )

}
