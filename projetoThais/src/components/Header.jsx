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
          <a href="#timeline" onClick={handleScroll} className="nav-link">Linha do Tempo</a>
          <Link to = {'/career'} className="nav-link"> Carreiras </Link> 
          <Link to = {'/game'} className="nav-link">Quiz</Link> 
        </ul>
      </nav> 
  </header>
    )
}


// export default function Header() {
//   const handleScroll = () => {
//     const element = document.querySelector('.timeLineh');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <header className="navegation">
//       <div className="logo">
//         <img className="logoP" src={Logo} alt="Logo" />
//       </div>
//       <nav>
//         <ul className="container-nav">
//           <li><a href="#timeline" onClick={handleScroll} className="nav-link">Linha do Tempo</a></li>
//           {/* Adicione um identificador (id) à sua classe timeLineh */}
//           {/* <Link to={'/TimeLine'} className="nav-link">Linha do Tempo</Link> */}
//           {/* Os outros links aqui */}
//         </ul>
//       </nav>
//     </header>
//   );
// }