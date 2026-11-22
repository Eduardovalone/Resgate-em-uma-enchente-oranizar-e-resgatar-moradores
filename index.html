// NOMES ALEATÓRIOS DOS AGENTES
const nomes = [
    "Alex", "Lia", "Ravi", "Bia",
    "Noah", "Duda", "Caio", "Maya",
    "Theo", "Julia"
];

// SITUAÇÕES DA MISSÃO
const perguntas = [

    {
        tipo: "PRIMEIRA SITUAÇÃO",
        pergunta: "A água começou a subir nas ruas do bairro. Qual deve ser sua primeira atitude?",
        opcoes: [
            {
                texto: "Ir para um local alto e seguro e avisar as equipes de emergência.",
                correta: true,
                explicacao: "Muito bem! A prioridade é proteger as pessoas e informar as equipes responsáveis."
            },
            {
                texto: "Entrar na água para tentar atravessar a rua.",
                correta: false,
                explicacao: "Não entre na água da enchente. Ela pode esconder perigos e colocar sua vida em risco."
            },
            {
                texto: "Ficar perto do rio observando o nível da água.",
                correta: false,
                explicacao: "Afaste-se de rios e áreas alagadas e procure um local seguro."
            }
        ]
    },

    {
        tipo: "SEGURANÇA",
        pergunta: "Um morador afirma que consegue atravessar uma rua alagada porque a água parece rasa. O que você responde?",
        opcoes: [
            {
                texto: "Pode atravessar, desde que vá devagar.",
                correta: false,
                explicacao: "A água pode ter correnteza e esconder buracos. Não atravesse áreas alagadas."
            },
            {
                texto: "Não atravesse. Procure uma rota segura e siga os avisos oficiais.",
                correta: true,
                explicacao: "Correto! A aparência da água não mostra todos os perigos."
            },
            {
                texto: "Atravesse somente se estiver acompanhado.",
                correta: false,
                explicacao: "A companhia de outra pessoa não torna uma área alagada segura."
            }
        ]
    },

    {
        tipo: "ORGANIZAÇÃO DO RESGATE",
        pergunta: "Uma pessoa está isolada pela água e pede ajuda. Qual é a atitude mais segura?",
        opcoes: [
            {
                texto: "Entrar na água para tentar alcançá-la.",
                correta: false,
                explicacao: "Não entre na água. Você também pode ficar em perigo."
            },
            {
                texto: "Pedir que a pessoa nade até você.",
                correta: false,
                explicacao: "Não incentive ninguém a entrar na correnteza."
            },
            {
                texto: "Informar a localização às equipes de emergência e seguir as orientações delas.",
                correta: true,
                explicacao: "Muito bem! Informe a localização e deixe o resgate para profissionais preparados."
            }
        ]
    },

    {
        tipo: "TRABALHO EM EQUIPE",
        pergunta: "Como ajudar a organizar os moradores que precisam deixar suas casas?",
        opcoes: [
            {
                texto: "Compartilhar informações confirmadas e orientar todos a seguir os avisos oficiais.",
                correta: true,
                explicacao: "Ótima decisão! Informações confiáveis ajudam a organizar a comunidade."
            },
            {
                texto: "Espalhar mensagens recebidas sem verificar se são verdadeiras.",
                correta: false,
                explicacao: "Informações falsas podem causar confusão e atrapalhar o atendimento."
            },
            {
                texto: "Bloquear as ruas para reunir curiosos.",
                correta: false,
                explicacao: "As rotas precisam ficar livres para as equipes de emergência."
            }
        ]
    },

    {
        tipo: "APOIO AOS MORADORES",
        pergunta: "Uma família precisa sair de casa e pergunta o que deve levar. O que você recomenda?",
        opcoes: [
            {
                texto: "Voltar para buscar todos os objetos da casa.",
                correta: false,
                explicacao: "Não arrisque a segurança para recuperar objetos."
            },
            {
                texto: "Se for seguro, levar documentos, telefone e medicamentos necessários, sem atrasar a saída.",
                correta: true,
                explicacao: "Correto! Itens essenciais podem ajudar, mas a segurança vem primeiro."
            },
            {
                texto: "Esperar a água baixar dentro de uma área de risco.",
                correta: false,
                explicacao: "Siga as orientações oficiais e procure um local seguro."
            }
        ]
    },

    {
        tipo: "MISSÃO FINAL",
        pergunta: "Você precisa ajudar a equipe a identificar moradores que precisam de apoio especial. Como agir?",
        opcoes: [
            {
                texto: "Tentar realizar todos os resgates sozinho.",
                correta: false,
                explicacao: "Não tente realizar resgates perigosos por conta própria."
            },
            {
                texto: "Ignorar os moradores que precisam de ajuda.",
                correta: false,
                explicacao: "A organização comunitária deve considerar as necessidades de todos."
            },
            {
                texto: "Informar às equipes quais moradores precisam de apoio e colaborar de um local seguro.",
                correta: true,
                explicacao: "Excelente! A comunicação e o trabalho em equipe ajudam a organizar o atendimento."
            }
        ]
    }

];

// ELEMENTOS DA PÁGINA
const telaInicial = document.getElementById("tela-inicial");
const telaJogo = document.getElementById("tela-jogo");
const telaFinal = document.getElementById("tela-final");

const botaoIniciar = document.getElementById("botao-iniciar");
const botaoProxima = document.getElementById("botao-proxima");
const botaoReiniciar = document.getElementById("botao-reiniciar");

let indice = 0;
let pontos = 0;
let nomeAgente = "";
let respondeu = false;

// EMBARALHAR UMA LISTA
function embaralhar(lista) {
    const copia = [...lista];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}

// MOSTRAR UMA TELA
function mostrarTela(telaEscolhida) {
    telaInicial.classList.add("escondido");
    telaJogo.classList.add("escondido");
    telaFinal.classList.add("escondido");

    telaEscolhida.classList.remove("escondido");
}

// INICIAR A MISSÃO
function iniciarJogo() {
    indice = 0;
    pontos = 0;

    nomeAgente = nomes[
        Math.floor(Math.random() * nomes.length)
    ];

    document.getElementById("nome-agente").textContent = nomeAgente;
    document.getElementById("pontuacao").textContent = pontos;

    mostrarTela(telaJogo);
    mostrarPergunta();
}

// MOSTRAR A PERGUNTA
function mostrarPergunta() {
    respondeu = false;

    const atual = perguntas[indice];

    document.getElementById("etapa-atual").textContent = indice + 1;

    document.getElementById("tipo-pergunta").textContent =
        atual.tipo;

    document.getElementById("texto-pergunta").textContent =
        atual.pergunta;

    document.getElementById("mensagem").textContent = "";

    document.getElementById("mensagem").className = "";

    document.getElementById("barra-progresso").style.width =
        (indice / perguntas.length * 100) + "%";

    botaoProxima.classList.add("escondido");

    const areaAlternativas =
        document.getElementById("alternativas");

    areaAlternativas.replaceChildren();

    // EMBARALHAR AS ALTERNATIVAS
    embaralhar(atual.opcoes).forEach(opcao => {

        const botao = document.createElement("button");

        botao.className = "alternativa";
        botao.textContent = opcao.texto;

        botao.addEventListener("click", function() {
            verificarResposta(opcao);
        });

        areaAlternativas.appendChild(botao);

    });
}

// CONFERIR A RESPOSTA
function verificarResposta(opcao) {
    if (respondeu) return;

    respondeu = true;

    const mensagem = document.getElementById("mensagem");

    if (opcao.correta) {
        pontos += 10;

        mensagem.textContent =
            "✅ Resposta correta! " + opcao.explicacao;

        mensagem.className = "correta";

    } else {

        mensagem.textContent =
            "⚠️ Atenção! " + opcao.explicacao;

        mensagem.className = "incorreta";
    }

    document.getElementById("pontuacao").textContent = pontos;

    document.getElementById("barra-progresso").style.width =
        ((indice + 1) / perguntas.length * 100) + "%";

    // BLOQUEAR AS OUTRAS ALTERNATIVAS
    document.querySelectorAll(".alternativa").forEach(botao => {
        botao.disabled = true;
    });

    botaoProxima.textContent =
        indice === perguntas.length - 1
            ? "VER RESULTADO"
            : "PRÓXIMA ETAPA";

    botaoProxima.classList.remove("escondido");
}

// IR PARA A PRÓXIMA ETAPA
function proximaEtapa() {
    indice++;

    if (indice < perguntas.length) {
        mostrarPergunta();
    } else {
        finalizarJogo();
    }
}

// FINALIZAR A MISSÃO
function finalizarJogo() {
    mostrarTela(telaFinal);

    let titulo = "";

    if (pontos === 60) {
        titulo = "🏆 Excelente trabalho! Você foi essencial para a equipe!";
    } else if (pontos >= 40) {
        titulo = "👏 Muito bem! Você ajudou bastante a comunidade!";
    } else if (pontos >= 20) {
        titulo = "👍 Treinamento concluído! Continue aprendendo!";
    } else {
        titulo = "📚 Missão concluída! Revise as orientações de segurança!";
    }

    document.getElementById("titulo-final").textContent = titulo;

    document.getElementById("historia-final").textContent =
        "O agente " + nomeAgente +
        " participou da missão de organização do resgate. " +
        "Ao longo das etapas, tomou decisões sobre segurança, " +
        "comunicação e apoio aos moradores. " +
        "A missão mostrou que a colaboração e o trabalho das " +
        "equipes de emergência são fundamentais durante uma enchente.";

    document.getElementById("resultado-final").textContent =
        pontos + " de 60 pontos";
}

// REINICIAR A MISSÃO
function reiniciarJogo() {
    indice = 0;
    pontos = 0;
    respondeu = false;

    mostrarTela(telaInicial);
}

// EVENTOS DOS BOTÕES
botaoIniciar.addEventListener("click", iniciarJogo);

botaoProxima.addEventListener("click", proximaEtapa);

botaoReiniciar.addEventListener("click", reiniciarJogo);