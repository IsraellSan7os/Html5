// Função que será chamada ao clicar no botão "Enviar"
function enviar() {
    // Pegar os elementos do HTML e seus valores
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;  

    // Exibir os valores no elemento resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;

    // Evita que o formulário seja enviado e a página recarregue
    return false;
}

// Capturar o evento de envio do formulário
document.querySelector('form').onsubmit = function() {
    return enviar();
};
