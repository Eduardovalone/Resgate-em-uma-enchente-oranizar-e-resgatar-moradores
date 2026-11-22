import { perguntas } from "./perguntas.js";
import { aleatorio } from "./aleatorio.js";

const titulo = document.getElementById("titulo");
const historia = document.getElementById("historia");
const opcoes = document.getElementById("opcoes");
const mensagem = document.getElementById("mensagem");

function mostrarPergunta(id) {
    const pergunta = perguntas[id];

    titulo.textContent = pergunta.titulo;
    historia.textContent = pergunta.historia;

    opcoes.replaceChildren();
    mensagem.textContent = "";

    if (pergunta.opcoes.length === 0) {
        const botao = document.createElement("button");

        botao.textContent = "JOGAR NOVAMENTE";
        botao.addEventListener("click", iniciarJogo);

        opcoes.appendChild(botao);
        return;
    }

    pergunta.opcoes.forEach(function(opcao) {
        const botao = document.createElement("button");

        botao.textContent = opcao.texto;

        botao.addEventListener("click", function() {
            mensagem.textContent = aleatorio([
                "Sua decisão foi registrada!",
                "Vamos descobrir o que acontece!",
                "Essa escolha muda o rumo da história!"
            ]);

            mostrarPergunta(opcao.destino);
        });

        opcoes.appendChild(botao);
    });
}

function iniciarJogo() {
    mostrarPergunta("inicio");
}

document.getElementById("iniciar").addEventListener("click", iniciarJogo);