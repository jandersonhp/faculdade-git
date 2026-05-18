const display = document.getElementById("display");
const listaHistorico = document.getElementById("listaHistorico");

// Adiciona valores no display
function adicionar(valor) {
    display.value += valor;
}

// Limpa display
function limpar() {
    display.value = "";
}

// Apaga último caractere
function apagar() {
    display.value = display.value.slice(0, -1);
}

// Calcula resultado
function calcular() {

    if(display.value === "") {
        return;
    }

    try {

        let expressao = display.value;
        let resultado = eval(expressao);

        adicionarHistorico(expressao, resultado);

        display.value = resultado;

    } catch(error) {

        display.value = "Erro";

        setTimeout(() => {
            display.value = "";
        }, 1000);
    }
}

// Adiciona no histórico
function adicionarHistorico(expressao, resultado) {

    const li = document.createElement("li");
    li.classList.add("itemHistorico");

    li.innerHTML = `
        <span>${expressao} = ${resultado}</span>
        <button class="btnApagar">X</button>
    `;

    // Botão apagar item
    li.querySelector(".btnApagar").addEventListener("click", () => {
        li.remove();
    });

    listaHistorico.prepend(li);
}

// Limpa histórico inteiro
function limparHistorico() {
    listaHistorico.innerHTML = "";
}