import { perguntas } from "./Js/perguntas.js";

// ELEMENTOS DA PÁGINA
const telaInicial = document.getElementById("tela-inicial");
const telaComoJogar = document.getElementById("tela-como-jogar");
const telaCreditos = document.getElementById("tela-creditos");
const telaJogo = document.getElementById("tela-jogo");
const telaFinal = document.getElementById("tela-final");

const botaoIniciar = document.getElementById("botao-iniciar");
const botaoComoJogar = document.getElementById("botao-como-jogar");
const botaoCreditos = document.getElementById("botao-creditos");
const botaoReiniciar = document.getElementById("botao-reiniciar");
const botoesVoltar = document.querySelectorAll(".botao-voltar");

let atual = 0;
let historiaFinal = "";

function aleatorio(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

// MOSTRAR UMA TELA
function mostrarTela(telaEscolhida) {
    [
        telaInicial,
        telaComoJogar,
        telaCreditos,
        telaJogo,
        telaFinal
    ].forEach(tela => tela.classList.add("escondido"));

    telaEscolhida.classList.remove("escondido");
}

// INICIAR A MISSÃO
function iniciarJogo() {
    atual = 0;
    historiaFinal = "";
    mostrarTela(telaJogo);
    mostrarPergunta();
}

// MOSTRAR A PERGUNTA
function mostrarPergunta() {
    document.getElementById("texto-pergunta").textContent =
        perguntas[atual].enunciado;

    const areaAlternativas = document.getElementById("alternativas");
    areaAlternativas.replaceChildren();

    perguntas[atual].alternativas.forEach(opcao => {
        const botao = document.createElement("button");
        botao.className = "alternativa";
        botao.textContent = opcao.texto;
        botao.addEventListener("click", () => respostaSelecionada(opcao));
        areaAlternativas.appendChild(botao);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacao + " ";

    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
        mostrarPergunta();
    }
}

// REINICIAR O JOGO
function reiniciarJogo() {
    atual = 0;
    historiaFinal = "";
    mostrarTela(telaInicial);
}

// EVENTOS DOS BOTÕES
botaoIniciar.addEventListener("click", iniciarJogo);

botaoComoJogar.addEventListener("click", () => mostrarTela(telaComoJogar));

botaoCreditos.addEventListener("click", () => mostrarTela(telaCreditos));

botoesVoltar.forEach(botao => {
    botao.addEventListener("click", () => mostrarTela(telaInicial));
});

botaoReiniciar.addEventListener("click", reiniciarJogo);