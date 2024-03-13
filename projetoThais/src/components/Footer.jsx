import Filipe from "../assets/images/Filipe.png"
import Joao from "../assets/images/joao.png"
import Gabriel from "../assets/images/gabriel.png"
import Felipe from "../assets/images/Felipe.png"
export default function Footer() {

    return (
      <footer id="contacte">
        <h3 class="footer-finish">Desenvolvido por:</h3>
        <div class="contact">
          <a href="https://github.com/Filipee01" target="_blank"><img src={Filipe} alt="filipedev" /></a>
          <p>Filipee01</p>
          <a href="https://github.com/JoaoVitorSampaio" target="_blank"><img src={Joao} alt="joaodev" /></a>
          <p>JoaoVitorSampaio</p>
          <a href="#"><img src={Gabriel} alt="gabrieldev" /></a>
          <p>GBRO1000</p>
          <a href="https://github.com/GBRO1000" target="_blank"><img src={Felipe} alt="felipedev" /></a>
        </div>
    </footer>
    )

}