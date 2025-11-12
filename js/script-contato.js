const form = document.getElementById("formContato");
const mensagemDiv = document.getElementById("mensagem-confirmacao");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    const nome = document.getElementById("nome").value;

    // Mensagem personalizada
    mensagemDiv.textContent = `Obrigado, ${nome}! Sua sugestão foi enviada com sucesso.`;
    mensagemDiv.classList.add("visivel");
    
    // Limpa os campos do formulário
    form.reset();
    
    // Remove a mensagem após alguns segundos (opcional)
    setTimeout(() => {
        mensagemDiv.classList.remove("visivel");
        mensagemDiv.textContent = '';
    }, 4000);
});

document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("mensagem");
    const contador = document.getElementById("contador");

    textarea.addEventListener("input", () => {
    // Remove espaços extras e divide por espaços
    const texto = textarea.value.trim();
    const palavras = texto === "" ? 0 : texto.split(/\s+/).length;

    // Atualiza o contador
    contador.textContent = `${palavras} palavra${palavras !== 1 ? 's' : ''}`;
    });
});