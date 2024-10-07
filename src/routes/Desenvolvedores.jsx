import React, { useEffect, useState } from 'react';
import '../css/Desenvolvedores.css';
import evellyn from '../imgs_desenvolvedor/pic-evellyn.jpg';
import alexandre from '../imgs_desenvolvedor/pic-alexandre.jpg';
import carolina from '../imgs_desenvolvedor/pic-lina.png';
import milena from '../imgs_desenvolvedor/pic-milena.png';
import { createSlideshow } from '../js/desenvolvedores';

const Desenvolvedores = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const developers = [
        {
            name: 'Alexandre',
            age: 24,
            img: alexandre,
            linkedin: 'https://www.linkedin.com/in/alexandrefariadev/',
            github: 'https://github.com/alefaria577',
        },
        //..
    ];

    useEffect(() => {
        const stopSlideshow = createSlideshow(setCurrentIndex, developers.length);
        return () => {
            stopSlideshow();
        };
    }, [developers.length]);

    return (
        <div className="main">
            <div className="titulo_desenvolvedores">Desenvolvedores:</div>
            <div className="slideshow-container_dev">
                {developers.map((developer, index) => (
                    <div
                        key={index}
                        className={`slide_dev ${index === currentIndex ? 'show' : ''}`}
                    >
                        <div className="slide-content_dev">
                            <img src={developer.img} alt={`Desenvolvedor ${developer.name}`} />
                            <div className="info_dev">
                                <h3 style={{ color: 'white' }}>{developer.name}</h3>
                                <p>Idade: {developer.age}</p>
                                <div className="redes_sociais_dev">
                                    <a href={developer.linkedin} target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href={developer.github} target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Desenvolvedores;
