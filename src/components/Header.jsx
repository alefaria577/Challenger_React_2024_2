import '../css/Header.css';
import { Link } from 'react-router-dom';
import logo from '../imagens/logo_formulae.png';

const Header=()=>{


    return(
    
    
        <>
        <header>
      
            <div className='logo'><img src={logo} alt="logo" /></div>
    
            <nav>
                <div className="home"><Link to="/">Home</Link></div>
                <div className="sobre"><Link to="/sobre">Sobre</Link></div>
                <div className="circuitos"><Link to="/Circuitos">Circuitos</Link></div>
                <div className="desenvolvedores"><Link to="/Desenvolvedores">Desenvolvedores</Link></div>
                <div className="login">                   
                    <i class="fa-solid fa-user"></i>

                    <Link to="/Login">Login</Link>
                </div>
            </nav>
        </header>

        
        </>
    
    
    )
    }
    
    export default Header