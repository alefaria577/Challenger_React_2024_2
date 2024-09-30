import React, { useState } from "react"; 
import "../css/Register.css";
import { handleRegister } from "../js/register";
import { Link, useNavigate } from 'react-router-dom'; // Importar useNavigate

const Register = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const navigate = useNavigate(); // Inicializar useNavigate

    const handleSubmit = (event) => {
        event.preventDefault();
        const success = handleRegister(nome, email, senha, confirmaSenha);
        if (success) {
            navigate("/"); // Redireciona para a página Home
        }
    };

    return (
        <div className="container_reg">
            <div className="botao-voltar_reg">
                <Link to="/">Voltar</Link>
            </div>
            <h1 className="titulo_reg">Cadastro</h1>
            <form id="form-contato" className="form-contato_reg" onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="senha">Senha</label>
                <input
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Digite sua senha"
                    required
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <label htmlFor="confirma-senha">Confirme sua Senha</label>
                <input
                    type="password"
                    id="confirma-senha"
                    name="confirma-senha"
                    placeholder="Confirme sua senha"
                    required
                    value={confirmaSenha}
                    onChange={(e) => setConfirmaSenha(e.target.value)}
                />

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Register;
