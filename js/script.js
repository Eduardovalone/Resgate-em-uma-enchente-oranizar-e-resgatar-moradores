import { perguntas } from "./perguntas.js";
import { aleatorio, nome } from "./aleatorio.js";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const tituloResultado = document.querySelector(".titulo-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const telaInicial = document.querySelector(".tela-inicial");
const telaComoJogar = document.getElementById("tela-como-jogar");
const telaCreditos = document.getElementById("tela-creditos");
const telaJogo = document.getElementById("tela-jogo");

const botaoIniciar = document.querySelector(".iniciar-btn");
const botaoComoJogar = document.getElementById("botao-como-jogar");
const botaoCreditos = document.getElementById("botao-creditos");
const botoesVoltar = document.querySelectorAll(".botao-voltar");

let atual = 0;
let historiaFinal = "";
let faseDaPartida = "inicio";

function mostrarTela(telaEscolhida) {
    [telaInicial, telaComoJogar, telaCreditos, telaJogo].forEach(tela => {
        tela.classList.add("escondido");
        tela.style.display = "";
    });

    telaEscolhida.classList.remove("escondido");
}

botaoIniciar.addEventListener("click", iniciaJogo);
botaoJogarNovamente.addEventListener("click", reiniciaJogo);

function iniciaJogo() {
    reiniciaJogo();
    faseDaPartida = "jogando";
    telaInicial.style.display = "none";
    telaJogo.classList.remove("escondido");
    telaJogo.style.display = "block";
    caixaPerguntas.style.display = "block";
    caixaAlternativas.style.display = "flex";
    mostraPergunta();
}

function reiniciaJogo() {
    atual = 0;
    historiaFinal = "";
    faseDaPartida = "inicio";
    caixaPerguntas.textContent = "";
    caixaAlternativas.replaceChildren();
    tituloResultado.textContent = "";
    textoResultado.textContent = "";
    telaInicial.style.display = "block";
    telaJogo.style.display = "none";
    caixaPerguntas.style.display = "none";
    caixaAlternativas.style.display = "none";
    caixaResultado.style.display = "none";
}

function mostraPergunta() {
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado.replace(/você/gi, nome);
    caixaAlternativas.replaceChildren();

    if (perguntaAtual.pausa === true) {
        return;
    }

    for (const alternativa of perguntaAtual.alternativas) {
        const botao = document.createElement("button");
        botao.className = "alternativa";
        botao.textContent = alternativa.texto;
        botao.disabled = alternativa.disponivel === false;
        botao.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botao);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    if (faseDaPartida !== "jogando") {
        return;
    }

    if (opcaoSelecionada.disponivel === false) {
        return;
    }

    if (opcaoSelecionada.tipo === "gameover") {
        const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
        historiaFinal += afirmacao + " ";
        mostraGameOver(opcaoSelecionada.mensagem);
        return;
    }

    const destino = opcaoSelecionada.proxima;

    if (!Number.isInteger(destino) || perguntas[destino] === undefined) {
        console.error("Destino inválido:", destino);
        return;
    }

    const origem = perguntas[atual];
    const chegada = perguntas[destino];
    const mudouDeCaminho = origem.caminho !== chegada.caminho;

    if (atual !== 0 && mudouDeCaminho && opcaoSelecionada.tipo !== "trocar") {
        console.error("Mudança de caminho sem o tipo trocar.");
        return;
    }

    if (opcaoSelecionada.tipo === "trocar" && !mudouDeCaminho) {
        console.error("A troca deve levar a outro caminho.");
        return;
    }

    const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacao + " ";
    atual = destino;
    mostraPergunta();
}

function mostraGameOver(mensagem) {
    faseDaPartida = "gameover";
    caixaPerguntas.style.display = "none";
    caixaAlternativas.replaceChildren();
    caixaAlternativas.style.display = "none";
    caixaResultado.style.display = "block";
    tituloResultado.textContent = "GAME OVER";
    textoResultado.textContent =
        mensagem + "\n\nSuas escolhas nesta tentativa:\n" + historiaFinal;
    botaoJogarNovamente.textContent = "Recomeçar do início";
}

botaoComoJogar.addEventListener("click", () => mostrarTela(telaComoJogar));
botaoCreditos.addEventListener("click", () => mostrarTela(telaCreditos));

botoesVoltar.forEach(botao => {
    botao.addEventListener("click", () => mostrarTela(telaInicial));
});

reiniciaJogo();
