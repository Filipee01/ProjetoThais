import Filipe from "../assets/images/Filipe.png"
import Joao from "../assets/images/joao.png"
import Gabriel from "../assets/images/gabriel.png"
import Felipe from "../assets/images/Felipe.png"
import Git from "../assets/images/github.png"
export default function Footer() {

    return (
      <footer id="contacte">
        <h3 class="footer-finish">Desenvolvido por:</h3>
        <div class="contacte">
          <a href="https://github.com/Filipee01" target="_blank"><img src={Filipe} alt="filipedev" /></a>
          <a href="https://github.com/JoaoVitorSampaio" target="_blank"><img src={Joao} alt="joaodev" /></a>
          <a href="https://github.com/GBRO1000"><img src={Gabriel} alt="gabrieldev" /></a>
          <a href="#" target="_blank"><img src={Felipe} alt="felipedev" /></a>
        </div>
          <div className="git">
          <div className="footerImg"><img src={Git} alt="" /></div>
            <a href="https://github.com/Filipee01" target="_blank">
              <p>Filipee01</p>
            </a>
            <div className="footerImg"><img src={Git} alt="" /></div>
            <a href="https://github.com/JoaoVitorSampaio" target="_blank">
              <p>JVSampaio</p>
            </a>
            <div className="footerImg"><img src={Git} alt="" /></div>
            <a href="https://github.com/GBRO1000" target="_blank">
              <p>GBRO1000</p>
            </a>
            <div className="footerImg"><img src={Git} alt="" /></div>
            <p>Felipesvb</p>
          </div>
    </footer>
    )

}