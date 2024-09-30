// Array para armazenar os registros
let registros = JSON.parse(localStorage.getItem('registros')) || [];

// Função para enviar o formulário
export const handleRegister = (nome, email, senha, confirmaSenha) => {
    // Validação da senha
    if (senha !== confirmaSenha) {
        alert('As senhas não coincidem.');
        return false; // Retorna false se as senhas não coincidirem
    }

    // Verifica se o email já está cadastrado
    if (registros.some(registro => registro.email === email)) {
        alert('Esse email já está cadastrado.');
        return false; // Retorna false se o email já estiver cadastrado
    }

    // Adiciona o registro
    registros.push({ nome, email, senha });
    localStorage.setItem('registros', JSON.stringify(registros));

    alert('Cadastro realizado com sucesso!');
    return true; // Retorna true se o registro for bem-sucedido
};
