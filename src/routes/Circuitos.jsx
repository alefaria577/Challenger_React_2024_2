import '../css/Circuitos.css';

import berlin from '../imgs_circuito/berlin-bandeira.png';
import berlin_corrida from '../imgs_circuito/berlin-corrida.png';
import londres from '../imgs_circuito/londres-bandeira.png';
import londres_corrida from '../imgs_circuito/londres-corrida.png';
import monaco from '../imgs_circuito/monaco-bandeira.png';
import monaco_corrida from '../imgs_circuito/monaco-corrida.png';
import portland from '../imgs_circuito/portland-corrida.png';
import portland_corrida from '../imgs_circuito/portland-corrida.png';
import shangai from '../imgs_circuito/shangai-bandeira.png';
import shangai_corrida from '../imgs_circuito/shangai-corrida.png';

const Circuitos = () => {
    return (
        <>
            <div className="titulo_circuitos">Circuitos</div>

            <div className="box_c">
                <div className="box_circuito">
                    <div className="titulo_box_circuito">Próxima corrida</div>
                    <div className="traco_circuitos"></div>
                    <div className="imagem_circuitos"><img src={portland} alt=""/></div>
                </div>

                <div className="box_circuito">
                    <div className="titulo_box_circuito">
                        <div className="bandeiras_circuito"><img src={berlin} alt=""/></div>
                        Berlim
                    </div>
                    <div className="traco_circuitos"></div>
                    <div className="imagem_circuitos"><img src={berlin_corrida} alt=""/></div>
                </div>

                <div className="box_circuito">
                    <div className="titulo_box_circuito">
                        <div className="bandeiras_circuito"><img src={londres} alt=""/></div>
                        Londres
                    </div>
                    <div className="traco_circuitos"></div>
                    <div className="imagem_circuitos"><img src={londres_corrida} alt=""/></div>
                </div>
            </div>

            <div className="box_c">
                <div className="box_circuito">
                    <div className="titulo_box_circuito">
                        <div className="bandeiras_circuito"><img src={monaco} alt=""/></div>
                        Mônaco
                    </div>
                    <div className="traco_circuitos"></div>
                    <div className="imagem_circuitos"><img src={monaco_corrida} alt=""/></div>
                </div>

                <div className="box_circuito">
                    <div className="titulo_box_circuito">
                        <div className="bandeiras_circuito"><img src={portland} alt=""/></div>
                        Portland
                    </div>
                    <div className="traco_circuitos"></div>
                    <div className="imagem_circuitos"><img src={portland_corrida} alt=""/></div>
                </div>

                <div className="box_circuito">
                    <div className="titulo_box_circuito">
                        <div className="bandeiras_circuito"><img src={shangai} alt=""/></div>
                        Xangai
                    </div>
                    <div className="traco_circuitos"></div>
                    <div className="imagem_circuitos"><img src={shangai_corrida} alt=""/></div>
                </div>
            </div>
        </>
    );
};

export default Circuitos;
