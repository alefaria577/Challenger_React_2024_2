import '../css/Home.css'
import carro_inicio from '../imagens/carro-inicio.png'

const Home = () => {
    return (
        <>
            <main>
                <div className="barra1"></div>
                <div className="barra2"></div>
                <div className="grid_container"> {/*container de grid */}
                    <div className="corpo_home">                
                        <p>FormulaE a corrida com carros</p>
                        <p>elétricos de alta</p>
                        <p>performance</p>
                        <p className="saber_mais">Saber Mais</p>               
                    </div>
                    <aside>
                        <img src={carro_inicio} alt="imagem do carro" />
                    </aside>
                </div>
            </main>
        </>
    );
};

export default Home;
