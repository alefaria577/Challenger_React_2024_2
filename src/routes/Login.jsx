import React, { useEffect, useState } from 'react';
import '../css/Login.css';
import logoLogin from '../imgs_login/logo.png';
import bgLogin1 from '../imgs_login/bg-login-1.png';
import bgLogin2 from '../imgs_login/bg-login-2.png';
import bgLogin3 from '../imgs_login/bg-login-3.jpg';
import { Link, useNavigate } from 'react-router-dom'; // Adicionar useNavigate
import { handleLogin } from '../js/Login'; // Importar função handleLogin

const Login = () => {
    const imagens = [bgLogin1, bgLogin2, bgLogin3];
    const [currentImage, setCurrentImage] = useState(0);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate(); // Inicializar useNavigate

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % imagens.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [imagens.length]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const success = handleLogin(email, senha);
        if (success) {
            navigate("/"); // Redireciona para a página Home
        }
    };

    return (
        <div className="container">
            <main className="main_login">
                <div className="container_login">
                    <div className="slideshow_login" id="banner_login"> 
                        <img id="imgbanner_login" src={imagens[currentImage]} alt="Slideshow Image" />
                    </div>

                    <div className="formulario_login" onSubmit={handleSubmit}>
                        <div className="titulo_login">
                            <img src={logoLogin} alt="logo do login" />
                            <div className="nome_login">Login</div>
                        </div>
                        <form>
                            <div className="email_login">
                                <span className="icon_user_login"><i className="fa-solid fa-user"></i></span>
                                <input
                                    className="input_login"
                                    id="email"
                                    type="text"
                                    placeholder="Email"
                                    autoComplete="off"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="senha_login">
                                <span className="icon_senha_login"><i className="fa-solid fa-lock"></i></span>
                                <input
                                    className="input_login"
                                    id="senha"
                                    type="password"
                                    placeholder="Senha"
                                    autoComplete="off"
                                    required
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>
                            <button className="btn_entrar_login" type="submit">Entrar</button>
                        </form>
                        <div className="registro_login">
                            <Link to="/Register">Register</Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;
