import '../css/Sobre.css';
import carro_sobre from '../imagens/car-sobre.png';
import box1_sobre from '../imagens/box1-sobre.png';
import box2_sobre from '../imagens/box2-sobre.png';
import box3_sobre from '../imagens/box3-sobre.png';

const Sobre = () => {
    return (
        <>
            <div className='main_sobre'>
                <div className="texto_intro_sobre">
                    <p>O que é a Fórmula E:</p>
                </div>

                <div className='corpo_sobre'>
                    <div className="texto_corpo_sobre">                
                        <p>A Fórmula E é uma categoria de corridas automobilísticas que se destaca por sua abordagem pioneira e
                            sustentável. Desde o seu lançamento em 2014, a Fórmula E tem desafiado as convenções do
                            automobilismo tradicional ao utilizar exclusivamente veículos elétricos de alta performance. Essa
                            iniciativa não apenas promove a conscientização sobre a importância da mobilidade elétrica, mas
                            também impulsiona a inovação tecnológica, servindo como um campo de testes para o desenvolvimento de
                            tecnologias de propulsão limpa.
                        </p>         
                    </div>
                    <div className="aside_sobre">
                        <img src={carro_sobre} alt="carro sobre"/>
                    </div>
                </div>

                <div className="texto_corpo2_sobre">
                    <p>AS CORRIDAS DE FÓRMULA E SÃO CORRIDAS DE ALTA VELOCIDADE COM...</p>
                </div>

                <div className="texto_corpo3_sobre">
                    <div className="box_sobre">
                        <div className="imagem-box_sobre">
                            <img src={box1_sobre} alt=""/>
                        </div>
                        <div className="texto-box_sobre">
                            <h3>Inovação e aceleração recorde</h3>
                            <p>Pináculo do desempenho.</p>
                        </div>
                    </div>

                    <div className="box_sobre">
                        <div className="imagem-box_sobre">
                            <img src={box2_sobre} alt=""/>
                        </div>
                        <div className="texto-box_sobre">
                            <h3>Entretenimento eletrizante nas maiores cidades</h3>
                            <p>11 locais globais.</p>
                        </div>
                    </div>

                    <div className="box_sobre">
                        <div className="imagem-box_sobre">
                            <img src={box3_sobre} alt=""/>
                        </div>
                        <div className="texto-box_sobre">
                            <h3>A corrida em direção a um futuro mais limpo e mais rápido</h3>
                            <p>Sem emissões de gases desde o dia zero.</p>
                        </div>        
                    </div>   
                </div>
            </div>
        </>
    );
};

export default Sobre;
