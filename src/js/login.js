// /src/js/Login.js
export const handleLogin = (email, senha) => {
    // Obtém os registros do localStorage
    const registros = JSON.parse(localStorage.getItem('registros')) || [];

    // Verifica se o email e senha correspondem a algum registro
    const usuario = registros.find(registro => registro.email === email && registro.senha === senha);

    if (usuario) {
        alert(`Bem-vindo(a), ${usuario.nome}!`);
        return true; // Login bem-sucedido
    } else {
        alert('Email ou senha incorretos.');
        return false; // Login falhou
    }
};
