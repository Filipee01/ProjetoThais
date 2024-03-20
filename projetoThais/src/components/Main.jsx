import React, { useState } from 'react';
import TimeLine from "../assets/images/timeLine1.png"
import "./timeLine.css"
import Abaco from "../assets/images/abacos.gif"
import Napier from "../assets/images/napier.jpg"
import Pascalina from "../assets/images/pascalina.jpg"
import Calculadora from "../assets/images/calculadora.jpg"
import Tear from "../assets/images/tear.jpg"
import Trump from "../assets/images/trump.jpg"
import Turing from "../assets/images/turing.jpg"
import Diferenca from "../assets/images/diferenca.jpg"
import Ada from "../assets/images/ada.jpg"
import Analisador from "../assets/images/analisador.jpg"
import Calcd from "../assets/images/calcd.gif"
import Aritometro from "../assets/images/ari.jpg"
import Atana from "../assets/images/atanasof.gif"
import Kon from "../assets/images/kon.jpg"
import Colossus from "../assets/images/colossus.jpg"
import Z4 from "../assets/images/z4.jpg"
import Eniac from "../assets/images/eniac.jpg"
import Edvac from "../assets/images/edvac.jpg"

export default function Main() {
    const [showAbacoImage, setShowAbacoImage] = useState(false);
    const [showNapierImage, setShowNapierImage] = useState(false);
    const [showPascalinaImage, setShowPascalinaImage] = useState(false);
    const [showCalculadoraImage, setShowCalculadoraImage] = useState(false);
    const [showTearImage, setShowTearImage] = useState(false);
    const [showTuringImage, setShowTuringImage] = useState(false);
    const [showDiferencaImage, setShowDiferencaImage] = useState(false);
    const [showAdaImage, setShowAdaImage] = useState(false);
    const [showAnalisadorImage, setShowAnalisadorImage] = useState(false);
    const [showCalcdImage, setShowCalcdImage] = useState(false);
    const [showAriImage, setShowAriImage] = useState(false);
    const [showAtanaImage, setShowAtanaImage] = useState(false);
    const [showTrumpImage, setShowTrumpImage] = useState(false);
    const [showKonImage, setShowKonImage] = useState(false);
    const [showColossusImage, setShowColossusImage] = useState(false);
    const [showZ4Image, setShowZ4Image] = useState(false);
    const [showEniacImage, setShowEniacImage] = useState(false);
    const [showEdvacImage, setShowEdvacImage] = useState(false);



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

    const toggleCalculadoraImage = () => {
        setShowCalculadoraImage(!showCalculadoraImage);
    };

    const toggleTearImage = () => {
        setShowTearImage(!showTearImage);
    };

    const toggleTuringImage = () => {
        setShowTuringImage(!showTuringImage);
    };

    const toggleDiferencaImage = () => {
        setShowDiferencaImage(!showDiferencaImage);
    };

    const toggleAdaImage = () => {
        setShowAdaImage(!showAdaImage);
    };

    const toggleAnalisadorImage = () => {
        setShowAnalisadorImage(!showAnalisadorImage);
    };

    const toggleCalcdImage = () => {
        setShowCalcdImage(!showCalcdImage);
    };

    const toggleAriImage = () => {
        setShowAriImage(!showAriImage);
    };

    const toggleAtanaImage = () => {
        setShowAtanaImage(!showAtanaImage);
    };

    const toggleTrumpImage = () => {
        setShowTrumpImage(!showTrumpImage);
    };

    const toggleKonImage = () => {
        setShowKonImage(!showKonImage);
    };

    const toggleColossusImage = () => {
        setShowColossusImage(!showColossusImage);
    };

    const toggleZ4Image = () => {
        setShowZ4Image(!showZ4Image);
    };

    const toggleEniacImage = () => {
        setShowEniacImage(!showEniacImage);
    };

    const toggleEdvacImage = () => {
        setShowEdvacImage(!showEdvacImage);
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
                        <button className='mainBtn' onClick={toggleAbacoImage}>Clique para ver</button>
                        <span class="date">Antiguidade</span>
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
                        <button className='mainBtn' onClick={toggleNapierImage}>Clique para ver</button>
                        <span class="date">Pré-Insdustrial</span>
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
                        <button className='mainBtn' onClick={togglePascalinaImage}>Clique para ver</button>
                        <span class="circle"></span>
                        {showPascalinaImage && (
                                <div className="image-containerh">
                                    <img src={Pascalina} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Calculadora de Leibniz</h3>
                        <p>Gottfried Wilhelm von Leibniz, em 1673,
                        projetou uma máquina de calcular que
                        expandia as ideias de Pascal. Este
                        dispositivo mecânico visava automatizar
                        uma gama mais ampla de operações
                        matemáticas, como a multiplicação por
                        adição e deslocamentos repetidos.
                        </p>
                        <button className='mainBtn' onClick={toggleCalculadoraImage}>Clique para ver</button>
                        <span class="circle"></span>
                        {showCalculadoraImage && (
                                <div className="image-containerh">
                                    <img src={Calculadora} alt="Calculadora" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Tear de Jacquard</h3>
                        <p>Joseph Marie Jacquard inventou o tear de Jacquard, um
                        dispositivo pioneiro de processamento de informações. Esse
                        tear utilizava cartões perfurados para controlar a tecelagem,
                        introduzindo o conceito de programação mecânica.
                        </p>
                        <button className='mainBtn' onClick={toggleTearImage}>Clique para ver</button>
                        <span id='rev' class="date">Rev. Industrial </span>
                        <span class="circle"></span>
                        {showTearImage && (
                                <div className="image-containerh">
                                    <img src={Tear} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Aritmômetro</h3>
                        <p>Charles Xavier Thomas de Colmar construiu o aritmômetro em 1820, a primeira
                        calculadora comercial de produção em massa, e ela podia fazer contas de adição,
                        subtração, multiplicação e, com um envolvimento maior do usuário, poderia realizar contas
                        de divisão. Isso facilitou o acesso a ferramentas de cálculo para uma variedade maior de
                        pessoas.
                        </p>
                        <button className='mainBtn' onClick={toggleAriImage}>Clique para ver</button>
                        <span class="circle"></span>
                        {showAriImage && (
                                <div className="image-containerh">
                                    <img src={Aritometro} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Máquinas de Babbage</h3>
                        <p> Na década de 1820, Charles Babbage propôs a Máquina de Diferenças, uma tentativa de
                        automatizar tabelas matemáticas, influenciando suas futuras criações. Em 1822, apresentou
                        a Máquina Diferencial, marcando um avanço na direção de máquinas de cálculo
                        automáticas. Em 1837, concebeu a Máquina Analítica, um precursor dos computadores
                        modernos, embora nunca tenha sido completamente construída.
                        </p>
                        <button className='mainBtn' onClick={toggleDiferencaImage}>Clique para ver</button>
                        <span class="circle"></span>
                        {showDiferencaImage && (
                                <div className="image-containerh">
                                    <img src={Diferenca} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                    <h3 class="heading">Ada Lovelace</h3>
                        <p> Ada Lovelace, colaborando com Babbage, tornou-se a primeira programadora de
                        computador a trabalhar com a Máquina Analítica. Suas anotações incluíram um algoritmo
                        para a máquina, considerado o primeiro programa de computador.
                        </p>
                        <button className='mainBtn' onClick={toggleAdaImage}>Clique para ver</button>
                        <span class="circle"></span>
                        {showAdaImage && (
                                <div className="image-containerh">
                                    <img src={Ada} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                    <h3 class="heading">Máquinas Comerciais</h3>
                        <p> Na década de 1820, calculadoras mecânicas tornaram-se ferramentas comerciais
                        disponíveis, melhorando a eficiência dos cálculos em ambientes empresariais. A Remington
                        Arms Company lançou a primeira máquina de escrever comercialmente viável em 1874,
                        revolucionando a maneira como as informações eram registradas e processadas.
                        </p>
                        <span class="circle"></span>
                    </li>
                    <li>
                    <h3 class="heading">Máquina de Cartões Perfurados</h3>
                        <p>Herman Hollerith patenteou uma máquina para
                        perfurar e contar cartões em 1884. Essa invenção foi
                        crucial para o processamento eficiente de grandes
                        conjuntos de dados.
                        </p>
                        <span class="circle"></span>
                    </li>
                    <li>
                    <h3 class="heading">Censo dos EUA de 1890</h3>
                        <p>Hollerith ganhou o contrato para tabular o Censo dos
                        EUA de 1890, utilizando sua máquina de cartões
                        perfurados. Isso marcou um avanço significativo na
                        automação do processamento de dados censitários
                        </p>
                        <button className='mainBtn' onClick={toggleTrumpImage}>Clique para ver</button>
                        <span class="circle"></span>
                        {showTrumpImage && (
                        <div className="image-containerh">
                                    <img src={Trump} alt="Ábaco" />
                        </div>
                                )}
                    </li>
                    <li>
                    <h3 class="heading">Analisador Diferencial</h3>
                        <p>Em 1930, Vannevar Bush desenvolveu o Analisador Diferencial, o primeiro computador
                        analógico moderno que podia resolver certas classes de equações diferenciais. O
                        analisador diferencial foi muito útil e utilizado em várias universidades.
                        </p>
                        <button className='mainBtn' onClick={toggleAnalisadorImage}>Clique para ver</button>
                        <span class="date">Pré 2° Gerra Mundial</span>
                        <span class="circle"></span>
                        {showAnalisadorImage && (
                        <div className="image-containerh">
                                    <img src={Analisador} alt="Ábaco" />
                                </div>
                        )}     
                    </li>
                    <li>
                    <h3 class="heading">Calculadora Digital</h3>
                        <p>Howard Aiken, professor de Harvard, concebeu quatro máquinas de calcular inspiradas na
                        Máquina Analítica de Babbage. Desenvolveu, em colaboração com a IBM, a Harvard Mark I
                        (1939-1944), o primeiro computador funcional, e mais três modelos subsequentes (Mark
                        II-IV). Ele simplificou a programação e é creditado pelo pioneirismo na primeira calculadora
                        de grande escala totalmente automática.
                        </p>
                        <button className='mainBtn' onClick={toggleCalcdImage}>Clique para ver</button>
                        <span class="circle"></span>
                        {showCalcdImage && (
                        <div className="image-containerh">
                                    <img src={Calcd} alt="Ábaco" />
                                </div>
                        )}   
                    </li>
                    <li>
                        <h3 class="heading">Alan Turing</h3>
                        <p>Alan Turing publica "On Computable Numbers,"
                        estabelecendo a teoria da computação e propondo a ideia de
                        uma máquina de computação universal que seria capaz de
                        resolver qualquer problema matemático. Turing não construiu
                        uma máquina fisicamente, mas foi de suma importância para
                        o desenvolvimento teórico da computação sendo, inclusive,
                        considerado por alguns como o pai da computação.
                        </p>
                        <button className='mainBtn' onClick={toggleTuringImage}>Clique para ver</button>
                        <span class="circle"></span>
                        {showTuringImage && (
                                <div className="image-containerh">
                                    <img src={Turing} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Computador Atanasoff-Berry</h3>
                        <p>John Vincent Atanasoff possivelmente inventou o primeiro
                        computador eletrônico especializado, o Computador Atanasoff-Berry (ABC), entre
                        1937-1942, em parceria com Clifford Berry. O ABC usava capacitores e circuitos lógicos
                        eletrônicos. Apesar de interrompido pela Segunda Guerra Mundial, o ABC tinha cerca de
                        300 tubos de vácuo e cartões perfurados para entrada e saída. Essa contribuição desafia a
                        ideia de que o Colossus e o ENIAC foram os primeiros computadores eletrônicos.
                        </p>
                        <button className='mainBtn' onClick={toggleAtanaImage}>Clique para ver</button>
                        <span class="circle"></span>
                        {showAtanaImage && (
                                <div className="image-containerh">
                                    <img src={Atana} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Konrad Zuse</h3>
                        <p>Na Alemanha, Konrad Zuse desenvolveu máquinas de calcular, focando no sistema binário
                        para melhor clareza na conexão com a lógica. Ignorando a crença de que todos os
                        problemas de computação já haviam sido resolvidos, Zuse dedicou tempo ao
                        desenvolvimento de software e seu Z3, concluído em 1941, foi o primeiro processador
                        controlado por programa. Porém, o isolamento durante a guerra limitou seu conhecimento
                        sobre avanços em computação nos EUA e na Inglaterra.
                        </p>
                        <button className='mainBtn' onClick={toggleKonImage}>Clique para ver</button>
                        <span class="circle"></span>
                        {showKonImage && (
                                <div className="image-containerh">
                                    <img src={Kon} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Colossus</h3>
                        <p>Durante a Segunda Guerra Mundial, o projeto Ultra na
                        Grã-Bretanha liderou a pesquisa em computadores para
                        decifrar códigos alemães. A Colossus, construída em 1943,
                        foi crucial para esse propósito, utilizando eletrônicos em
                        grande escala. Apoiado por Alan Turing, o Colossus não
                        apenas decodificou mensagens alemãs, fornecendo
                        informações vitais sobre batalhas e operações, mas
                        também inovou ao antecipar o armazenamento eletrônico
                        de dados. Após a guerra, a série de computadores
                        Colossus permaneceu confidencial até a década de 1990,
                        quando a máquina foi reconstruída em Bletchley Park em
                        1996.
                        </p>
                        <button className='mainBtn' onClick={toggleColossusImage}>Clique para ver</button>
                        <span class="date">2° Gerra Mundial</span>
                        <span class="circle"></span>
                        {showColossusImage && (
                                <div className="image-containerh">
                                    <img src={Colossus} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Z4 de Zuse</h3>
                        <p>O Z4, criado por Konrad Zuse, foi desenvolvido durante a
                        Segunda Guerra Mundial com financiamento do Ministério da
                        Aeronáutica alemão. Utilizando relés eletromecânicos devido
                        à escassez de tubos de vácuo, o Z4 tinha como objetivo
                        principal realizar cálculos científicos e técnicos. Evacuado de
                        Berlim em 1945, foi reformado em Zurique em 1950. Apesar
                        de suas limitações, o Z4 foi uma máquina confiável,
                        contribuindo para avanços no design de software e
                        estabelecendo fundamentos para o desenvolvimento futuro
                        da computação.
                        </p>
                        <button className='mainBtn' onClick={toggleZ4Image}>Clique para ver</button>
                        <span class="circle"></span>
                        {showZ4Image && (
                                <div className="image-containerh">
                                    <img src={Z4} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Eniac</h3>
                        <p>O ENIAC era uma máquina colossal concebida para
                        calcular alcance de artilharia e destacava-se por sua
                        complexidade, incorporando 18.000 válvulas
                        eletrônicas. Seu funcionamento, impulsionado por
                        plugboards, conferia-lhe uma notável velocidade
                        eletrônica, embora a reinicialização demandasse
                        dias. Distribuído em 40 painéis, ocupava um amplo
                        porão de 15x9 metros, envolvendo um investimento
                        considerável de US$ 400 mil e sendo finalizado em
                        1946. Apesar de ter sido inicialmente empregado no
                        cálculo para a criação de uma bomba de hidrogênio,
                        o ENIAC foi concluído após o término da guerra.
                        </p>
                        <button className='mainBtn' onClick={toggleEniacImage}>Clique para ver</button>
                        <span class="circle"></span>
                        {showEniacImage && (
                                <div className="image-containerh">
                                    <img src={Eniac} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <h3 class="heading">Edvac</h3>
                        <p>Em 1945, antes da conclusão do ENIAC, começou o
                        planejamento do seu sucessor, o EDVAC, na Escola Moore.
                        Ao contrário do ENIAC, o EDVAC utilizava uma linha de
                        atraso de mercúrio e 10 válvulas a vácuo para armazenar
                        1.000 bits, proporcionando maior capacidade de
                        armazenamento e confiabilidade. Isso ocorreu antes do
                        desenvolvimento da memória de núcleo magnético e do
                        transistor, que eliminariam a necessidade de válvulas a
                        vácuo.
                        </p>
                        <button className='mainBtn' onClick={toggleEdvacImage}>Clique para ver</button>
                        <span class="circle"></span>
                        {showEdvacImage && (
                                <div className="image-containerh">
                                    <img src={Edvac} alt="Ábaco" />
                                </div>
                            )}
                    </li>
                    <li>
                        <p>As gerações de computadores evoluíram significativamente ao longo do tempo. Na
                        primeira geração (1943-1955), as máquinas utilizavam válvulas, eram grandes, aqueciam
                        bastante e consumiam muita energia, com aplicações científicas e militares predominantes.
                        Na segunda geração (1955-1964), a substituição das válvulas por transistores trouxe
                        benefícios como menor tamanho, consumo elétrico reduzido e maior durabilidade,
                        resultando em computadores mais acessíveis e rápidos. A terceira geração (1964-1975)
                        testemunhou avanços em velocidade, tamanho e confiabilidade, com a corrida espacial
                        impulsionando a necessidade de computadores leves e poderosos. A criação do PDP-8 e a
                        introdução do Altair 8800 marcaram este período. Por fim, a quarta geração (após 1975)
                        destacou-se pelo surgimento do microprocessador, miniaturização dos computadores,
                        proliferação dos microcomputadores PC, linguagens de alto nível e a capacidade de
                        transmissão de dados entre computadores por meio de redes, marcando uma nova era na
                        conectividade.
                        </p>
                        <span class="date">Era Moderna</span>
                        <span class="circle"></span>
                    </li>
                </ul>
            </div>
        </div>
        </main>

    )

}
