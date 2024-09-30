import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/Footer.css';


const Footer=()=>{


    return(
    
    
        <>
    
        <footer>

            <div className="email">
            <i class="fa-regular fa-envelope"></i>
            <p>support@lemmatech.com</p>
            </div>

            <div className="info">
            <p>lemmatech solutions</p>
            </div>

            <div className="contato">
                    <a  className="fab fa-whatsapp whatsapp-icon"  rel="noopener noreferrer"></a>
                    <a  className="fab fa-facebook facebook-icon"  rel="noopener noreferrer"></a>
                    <a  className="fab fa-linkedin linkedin-icon"  rel="noopener noreferrer"></a>
            </div>
        </footer>
        
        </>
    
    
    )
    }
    
    export default Footer