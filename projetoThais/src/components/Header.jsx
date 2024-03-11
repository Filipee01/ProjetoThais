import {Link} from "react-router-dom"

export default function Header(){
  return (

      <header className="navegation">
    <div className="logo">
      <img src="#" alt="fsafsafsafafsa" />
    </div>
      <nav>
        <ul>
          <Link to = {'/'} className="nav-link"> Inicio </Link> 
          <Link to = {'/career'} className="nav-link"> Carreiras </Link> 
          <Link to = {'/game'} className="nav-link"> Game</Link> 
        </ul>
      </nav>             
  </header>

    )
}
