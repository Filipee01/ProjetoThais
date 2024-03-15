import Filipe from "../assets/images/Filipe.png"
import Joao from "../assets/images/joao.png"
import Gabriel from "../assets/images/gabriel.png"
import Felipe from "../assets/images/Felipe.png"
import Git from "../assets/images/github.png"
export default function Footer() {

    return (
      <footer id="contacte">
      <h3 className="footer-finish">Desenvolvido por:</h3>
      <div className="contacte">
        <a href="https://github.com/Filipee01" target="_blank">
          <img src={Filipe} alt="filipedev" />
          <div className="developer">
            <img className="git-icon" src={Git} alt="" />
            <p>Filipee01</p>
          </div>
        </a>
        <a href="https://github.com/JoaoVitorSampaio" target="_blank">
          <img src={Joao} alt="joaodev" />
          <div className="developer">
            <img className="git-icon" src={Git} alt="" />
            <p>JvSampaio</p>
          </div>
        </a>
        <a href="https://github.com/gabrielbribeiroo" target="_blank">
          <img src={Gabriel} alt="gabrieldev" />
          <div className="developer">
            <img className="git-icon" src={Git} alt="" />
            <p>GbRibeiro</p>
          </div>
        </a>
        <a href="https://github.com/FelipeSVB" target="_blank">
          <img src={Felipe} alt="felipedev" />
          <div className="developer">
            <img className="git-icon" src={Git} alt="" />
            <p>FelipeSVB</p>
          </div>
        </a>
      </div>
    </footer>
  );
}
