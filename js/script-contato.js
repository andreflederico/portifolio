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