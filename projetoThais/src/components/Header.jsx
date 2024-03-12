import {Link} from "react-router-dom"
import Logo from "../assets/logo/logo.png"

export default function Header(){
  return (
      <header className="navegation">
    <div className="logo">
      <img className="logoP" src={Logo} alt="Logo" />
    </div>
      <nav>
        <ul className="container-nav">
          <Link to = {'/'} className="nav-link"> Inicio </Link> 
          <Link to = {'/timeline'} className="nav-link"> Linha do Tempo </Link> 
          <Link to = {'/career'} className="nav-link"> Carreiras </Link> 
          <Link to = {'/game'} className="nav-link"> Game</Link> 
        </ul>
      </nav> 
  </header>
    )
}
