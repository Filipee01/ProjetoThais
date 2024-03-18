import {Link} from "react-router-dom"
import Logo from "../assets/logo/logo.png"

export default function Header(){

  const handleScroll = () => {
    const element = document.querySelector('.timeLineh');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <header className="navegation">
    <div className="logo">
      <img className="logoP" src={Logo} alt="Logo" />
    </div>
      <nav>
        <ul className="container-nav">
          <Link to = {'/'} className="nav-link"> Inicio </Link> 
          <Link to = {'/TimeLine'} className="nav-link"> Linha do Tempo</Link> 
          <Link to = {'/career'} className="nav-link"> Carreiras </Link> 
          <Link to = {'/game'} className="nav-link">Quiz</Link> 
        </ul>
      </nav> 
  </header>
    )
}
