
function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('cartoes-container');
    
    const cartao = document.createElement('article');
    cartao.classList.add('cartao');
    
    cartao.innerHTML = `
    <h3>${categoria}</h3>
    <p><strong>Pergunta:</strong> ${pergunta}</p>
    <p><strong>Resposta:</strong> ${resposta}</p>
    `;
    
    container.appendChild(cartao);
    }
    
    criaCartao("História", "Quem descobriu o Brasil?", "Pedro Álvares Cabral");
    criaCartao("Matemática", "Quanto é 7 x 8?", "56");
    criaCartao("Ciências", "Qual é o estado da água a 100°C?", "Gasoso");
    