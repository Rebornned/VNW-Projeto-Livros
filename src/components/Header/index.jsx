import './design_header.scss';
import { Link } from "react-router-dom";

function Header() {
  
    return (
        <header className="header">
            <div>
                <figure>
                    <img src="assets/icons/logo.png" alt="Logo do site" class=""/>
                </figure>
                <p>Livros Vai na Web</p>
            </div>
            <nav>
                <ul>
                    <li><Link to="VNW-Projeto-Livros/"> Início</Link> </li>
                    <li><Link to="VNW-Projeto-Livros/donatedbooks"> Livros Doados</Link></li>
                    <li><Link to="VNW-Projeto-Livros/donation"> Doação</Link></li>
                </ul>
            </nav>
            <div className='search_input'>
                <input type="text" placeholder='O que você procura?'/>
                <button name="search_button" alt="" class="">
                </button>
            </div>
        </header>
    )
  }
  
  export default Header;