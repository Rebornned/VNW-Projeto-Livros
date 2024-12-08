import './design_header.scss';

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
                    <li><a href="/">Início </a></li>
                    <li><a href="donatedbooks">Livros Doados</a></li>
                    <li><a href="donation">Quero Doar</a></li>
                </ul>
            </nav>
            <div className='search_input'>
                <input type="text" placeholder='O que você procura?'/>
                <button name="search_button" alt="" class="">
                    <img src="assets/ui_imgs/search_button.png" alt="" />
                </button>
            </div>
        </header>
    )
  }
  
  export default Header;