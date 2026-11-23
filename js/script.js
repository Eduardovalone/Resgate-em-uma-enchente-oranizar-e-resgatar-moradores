import { perguntas } from "./perguntas.js";
import { aleatorio } from "./aleatorio.js";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const tituloResultado = document.querySelector(".titulo-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoCreditos = document.querySelector(".creditos-btn");
const telaInicial = document.querySelector(".tela-inicial");
const telaCreditos = document.querySelector(".tela-creditos");
const botaoVoltarInicio = document.querySelector(".voltar-inicio-btn");
const telaComoJogar = document.getElementById("tela-como-jogar");
const botaoCreditosMenu = document.getElementById("botao-creditos");
const telaJogo = document.getElementById("tela-jogo");

const botaoIniciar = document.querySelector(".iniciar-btn");
const botaoComoJogar = document.getElementById("botao-como-jogar");
const botoesVoltar = document.querySelectorAll(".botao-voltar");
const campoNickname = document.getElementById("nickname");
const erroNickname = document.getElementById("erro-nickname");

let atual = 0;
let historiaFinal = "";
let faseDaPartida = "inicio";
let posicaoAlternativaAvancada = 0;
let nickname = "";

function mostrarTela(telaEscolhida) {
    [telaInicial, telaComoJogar, telaCreditos, telaJogo].forEach(tela => {
        tela.classList.add("escondido");
        tela.style.display = "";
    });

    telaEscolhida.classList.remove("escondido");
}

botaoIniciar.addEventListener("click", iniciaJogo);
botaoJogarNovamente.addEventListener("click", reiniciaJogo);
botaoCreditos.addEventListener("click", mostraCreditos);
botaoVoltarInicio.addEventListener("click", reiniciaJogo);
campoNickname.addEventListener("input", () => {
    if (campoNickname.value.trim()) {
        erroNickname.textContent = "";
    }
});
campoNickname.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        iniciaJogo();
    }
});

function iniciaJogo() {
    nickname = campoNickname.value.trim();
    if (!nickname) {
        erroNickname.textContent = "Digite seu apelido para iniciar.";
        campoNickname.focus();
        return;
    }

    erroNickname.textContent = "";
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
    posicaoAlternativaAvancada = 0;
    caixaPerguntas.textContent = "";
    caixaAlternativas.replaceChildren();
    tituloResultado.textContent = "";
    textoResultado.textContent = "";
    telaInicial.style.display = "block";
    telaJogo.style.display = "none";
    caixaPerguntas.style.display = "none";
    caixaAlternativas.style.display = "none";
    caixaResultado.style.display = "none";
    telaCreditos.style.display = "none";
    botaoCreditos.style.display = "none";
    botaoJogarNovamente.style.display = "inline-block";
}

function mostraPergunta() {
    const perguntaAtual = perguntas[atual];

    if (perguntaAtual.final === "vitoria") {
        mostraVitoria(perguntaAtual.enunciado);
        return;
    }

    caixaPerguntas.textContent = perguntaAtual.enunciado.replace(/você/gi, nickname);
    caixaAlternativas.replaceChildren();

    const alternativasOrdenadas = [...perguntaAtual.alternativas];
    const indiceAvancar = alternativasOrdenadas.findIndex(
        alternativa => alternativa.tipo === "avancar"
    );

    if (indiceAvancar !== -1) {
        const indiceDestino = posicaoAlternativaAvancada % 2;
        if (indiceAvancar !== indiceDestino) {
            [alternativasOrdenadas[indiceAvancar], alternativasOrdenadas[indiceDestino]] =
                [alternativasOrdenadas[indiceDestino], alternativasOrdenadas[indiceAvancar]];
        }
        posicaoAlternativaAvancada++;
    }

    for (const alternativa of alternativasOrdenadas) {
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
        mensagem + "\n\nJogador: " + nickname +
        "\n\nSuas escolhas nesta tentativa:\n" + historiaFinal;
    botaoJogarNovamente.textContent = "Recomeçar do início";
    botaoJogarNovamente.style.display = "inline-block";
    botaoCreditos.style.display = "none";
    telaCreditos.style.display = "none";
}

function mostraVitoria(mensagem) {
    if (faseDaPartida !== "jogando" || perguntas[atual].final !== "vitoria") {
        return;
    }

    faseDaPartida = "vitoria";
    caixaPerguntas.style.display = "none";
    caixaAlternativas.replaceChildren();
    caixaAlternativas.style.display = "none";
    caixaResultado.style.display = "block";
    tituloResultado.textContent = "THE END";
    textoResultado.textContent =
        mensagem + "\n\nJogador: " + nickname +
        "\n\nSeu percurso nesta partida:\n" + historiaFinal;
    botaoJogarNovamente.style.display = "none";
    botaoCreditos.style.display = "inline-block";
    telaCreditos.style.display = "none";
}

function mostraCreditos() {
    if (faseDaPartida !== "vitoria") {
        return;
    }

    faseDaPartida = "creditos";
    telaInicial.style.display = "none";
    caixaPerguntas.style.display = "none";
    caixaAlternativas.style.display = "none";
    caixaResultado.style.display = "none";
    telaCreditos.style.display = "block";
}

botaoComoJogar.addEventListener("click", () => mostrarTela(telaComoJogar));
botaoCreditosMenu.addEventListener("click", () => {
    mostrarTela(telaCreditos);
    telaCreditos.style.display = "block";
});

botoesVoltar.forEach(botao => {
    botao.addEventListener("click", () => mostrarTela(telaInicial));
});

reiniciaJogo();
