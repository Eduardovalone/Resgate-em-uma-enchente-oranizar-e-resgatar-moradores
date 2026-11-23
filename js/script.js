import { perguntas } from "./perguntas.js";
import { aleatorio } from "./aleatorio.js";

const telaInicial = document.getElementById("tela-inicial");
const telaComoJogar = document.getElementById("tela-como-jogar");
const telaCreditos = document.getElementById("tela-creditos");
const telaJogo = document.getElementById("tela-jogo");

const botaoIniciar = document.getElementById("botao-iniciar");
const botaoComoJogar = document.getElementById("botao-como-jogar");
const botaoCreditos = document.getElementById("botao-creditos");
const botoesVoltar = document.querySelectorAll(".botao-voltar");

let atual = 0;
let historiaFinal = "";

function mostrarTela(telaEscolhida) {
    [
        telaInicial,
        telaComoJogar,
        telaCreditos,
        telaJogo
    ].forEach(tela => tela.classList.add("escondido"));

    telaEscolhida.classList.remove("escondido");
}

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    mostrarTela(telaJogo);
    mostraPergunta();
}

function mostraPergunta() {
    const pergunta = perguntas[atual];
    document.getElementById("texto-pergunta").textContent =
        pergunta.enunciado;

    const areaAlternativas = document.getElementById("alternativas");
    areaAlternativas.replaceChildren();

    pergunta.alternativas.forEach(opcao => {
        const botao = document.createElement("button");
        botao.className = "alternativa";
        botao.textContent = opcao.texto;
        botao.disabled = opcao.disponivel === false;

        if (!botao.disabled) {
            botao.addEventListener("click", () => respostaSelecionada(opcao));
        }

        areaAlternativas.appendChild(botao);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    if (opcaoSelecionada.disponivel === false) return;

    const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacao + " ";

    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
        mostraPergunta();
    }
}

botaoIniciar.addEventListener("click", iniciaJogo);
botaoComoJogar.addEventListener("click", () => mostrarTela(telaComoJogar));
botaoCreditos.addEventListener("click", () => mostrarTela(telaCreditos));

botoesVoltar.forEach(botao => {
    botao.addEventListener("click", () => mostrarTela(telaInicial));
});
