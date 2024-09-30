import '../css/Header.css';
import logo from '../imagens/logo_formulae.png';

const Header=()=>{


    return(
    
    
        <>
        <header>
      
            <div className='logo'><img src={logo} alt="logo" /></div>
    
            <nav>
                <div className="home">Home</div>
                <div className="sobre">Sobre</div>
                <div className="circuitos">Circuitos</div>
                <div className="desenvolvedores">Desenvolvedores</div>
                <div className="login">                   
                    <i class="fa-solid fa-user"></i>

                    Login
                </div>
            </nav>
        </header>

        
        </>
    
    
    )
    }
    
    export default Header