// Perguntas das duas narrativas sobre organização e segurança em enchentes.
export const perguntas = [
    { // 0 — pergunta inicial
        caminho: "inicio",
        enunciado:
            "Depois de uma chuva forte, a água começa a subir no bairro. " +
            "Qual é a primeira atitude segura?",
        alternativas: [
            {
                texto: "Ir para um local seguro e avisar as equipes de emergência.",
                afirmacao: ["Procurou um local seguro e avisou as equipes de emergência."],
                tipo: "entrada",
                proxima: 1
            },
            {
                texto: "De um local seco, informar à Defesa Civil quem pode precisar de ajuda.",
                afirmacao: ["Informou às equipes quem poderia precisar de ajuda."],
                tipo: "entrada",
                proxima: 2
            }
        ]
    },
    { // 1 — A1: organizar o ponto de apoio
        caminho: "A",
        enunciado:
            "No ponto de apoio seguro, a equipe precisa organizar a saída " +
            "dos moradores. Como você pode ajudar?",
        alternativas: [
            {
                texto: "Ajudar a listar, junto à equipe, quem precisa de apoio especial.",
                afirmacao: ["Ajudou a equipe a identificar moradores que precisam de apoio."],
                tipo: "avancar",
                proxima: 3
            },
            {
                texto: "Repassar as rotas oficiais já confirmadas aos moradores.",
                afirmacao: ["Compartilhou as rotas oficiais confirmadas."],
                tipo: "salto",
                proxima: 4
            },
            {
                texto: "Informar às equipes a localização de moradores isolados.",
                afirmacao: ["Informou às equipes a localização de moradores isolados."],
                tipo: "trocar",
                proxima: 2,
                disponivel: true
            }
        ]
    },
    { // 2 — B1: informar as equipes
        caminho: "B",
        enunciado:
            "Você está em um local seco e seguro. Que informação é mais útil " +
            "para comunicar às equipes de emergência?",
        alternativas: [
            {
                texto: "A localização, quantas pessoas precisam de ajuda e suas necessidades.",
                afirmacao: ["Comunicou a localização e as necessidades dos moradores."],
                tipo: "avancar",
                proxima: 7
            },
            {
                texto: "A rota oficial bloqueada, depois de confirmar o aviso.",
                afirmacao: ["Confirmou e informou uma rota bloqueada."],
                tipo: "salto",
                proxima: 8
            },
            {
                texto: "Levar essas informações ao ponto de apoio para organizar os moradores.",
                afirmacao: ["Levou informações ao ponto de apoio para ajudar na organização."],
                tipo: "trocar",
                proxima: 1,
                disponivel: true
            }
        ]
    },
    { // 3 — A2: evitar travessias alagadas
        caminho: "A",
        enunciado:
            "Um morador quer atravessar uma rua alagada porque a água parece rasa. " +
            "O que você recomenda?",
        alternativas: [
            {
                texto: "Não atravessar; buscar um local seguro e avisar as equipes.",
                afirmacao: ["Orientou o morador a não atravessar e avisou as equipes."],
                tipo: "avancar",
                proxima: 4
            },
            {
                texto: "Repassar somente a orientação oficial de uma rota segura.",
                afirmacao: ["Repassou a orientação oficial sobre uma rota segura."],
                tipo: "salto",
                proxima: 1
            },
            {
                texto: "Entrar na água para tentar puxar o morador.",
                afirmacao: ["Entrou na água e colocou a si mesmo e o morador em risco."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "A correnteza e os perigos submersos colocaram vocês em risco. " +
                    "As equipes precisaram interromper a ação. Você precisa recomeçar."
            }
        ]
    },
    { // 4 — A3: compartilhar necessidades com a equipe
        caminho: "A",
        enunciado:
            "As equipes pedem ajuda para identificar moradores que podem precisar " +
            "de mais apoio durante a saída. Como agir?",
        alternativas: [
            {
                texto: "Informar à equipe, de um local seguro, as necessidades conhecidas.",
                afirmacao: ["Informou às equipes, de um local seguro, as necessidades dos moradores."],
                tipo: "avancar",
                proxima: 5
            },
            {
                texto: "Usar a lista já conferida no ponto de apoio.",
                afirmacao: ["Usou a lista de moradores conferida no ponto de apoio."],
                tipo: "salto",
                proxima: 6
            },
            {
                texto: "Comunicar às equipes a localização de moradores isolados.",
                afirmacao: ["Comunicou a localização de moradores isolados às equipes."],
                tipo: "trocar",
                proxima: 8,
                disponivel: true
            }
        ]
    },
    { // 5 — A4: organizar o abrigo
        caminho: "A",
        enunciado:
            "Famílias estão chegando a um abrigo temporário. Como ajudar a equipe " +
            "a organizar o atendimento?",
        alternativas: [
            {
                texto: "Registrar a chegada e as necessidades com discrição, junto à equipe.",
                afirmacao: ["Ajudou a registrar chegadas e necessidades com discrição."],
                tipo: "avancar",
                proxima: 6
            },
            {
                texto: "Revisar a lista de moradores para confirmar quem ainda precisa de ajuda.",
                afirmacao: ["Revisou a lista para confirmar quem ainda precisava de ajuda."],
                tipo: "salto",
                proxima: 3
            },
            {
                texto: "Publicar nomes e dados pessoais das famílias nas redes sociais.",
                afirmacao: ["Divulgou dados pessoais das famílias sem autorização."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "A divulgação expôs moradores em situação vulnerável. " +
                    "A equipe interrompeu o compartilhamento dos dados. Você precisa recomeçar."
            }
        ]
    },
    { // 6 — A5: preparar a saída do ponto de apoio
        caminho: "A",
        enunciado:
            "Antes de uma equipe conduzir os moradores para outro local seguro, " +
            "como você pode colaborar?",
        alternativas: [
            {
                texto: "Conferir a lista com a equipe e manter a passagem livre.",
                afirmacao: ["Conferiu a lista com a equipe e manteve a passagem livre."],
                tipo: "avancar",
                proxima: 11
            },
            {
                texto: "Voltar à lista de necessidades para corrigir informações.",
                afirmacao: ["Revisou as necessidades registradas dos moradores."],
                tipo: "salto",
                proxima: 5
            },
            {
                texto: "Levar as informações ao grupo que acompanha moradores isolados.",
                afirmacao: ["Compartilhou informações com a equipe que acompanha moradores isolados."],
                tipo: "trocar",
                proxima: 10,
                disponivel: true
            }
        ]
    },
    { // 7 — B2: verificar o pedido de ajuda
        caminho: "B",
        enunciado:
            "Uma pessoa informa que uma família está isolada pela água. O que fazer?",
        alternativas: [
            {
                texto: "Confirmar a localização e repassá-la às equipes de resgate.",
                afirmacao: ["Confirmou e repassou a localização às equipes de resgate."],
                tipo: "avancar",
                proxima: 8
            },
            {
                texto: "Pedir detalhes úteis sem se aproximar da área alagada.",
                afirmacao: ["Reuniu detalhes úteis de um local seguro."],
                tipo: "salto",
                proxima: 2
            },
            {
                texto: "Aproximar-se da água para tentar localizar a família por conta própria.",
                afirmacao: ["Aproximou-se da área alagada sem apoio profissional."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "A aproximação colocou você em perigo e desviou recursos das equipes. " +
                    "O resgate deve ser feito por profissionais. Você precisa recomeçar."
            }
        ]
    },
    { // 8 — B3: coordenar informações no ponto seguro
        caminho: "B",
        enunciado:
            "As equipes pedem informações sobre moradores que ainda precisam de apoio. " +
            "Como organizar a comunicação?",
        alternativas: [
            {
                texto: "Repassar dados confirmados e necessidades diretamente à equipe.",
                afirmacao: ["Repassou dados confirmados e necessidades diretamente à equipe."],
                tipo: "avancar",
                proxima: 9
            },
            {
                texto: "Usar a lista conferida no ponto de apoio.",
                afirmacao: ["Usou a lista conferida no ponto de apoio."],
                tipo: "salto",
                proxima: 10
            },
            {
                texto: "Ajudar no abrigo a organizar as famílias que chegaram.",
                afirmacao: ["Ajudou a organizar as famílias no abrigo temporário."],
                tipo: "trocar",
                proxima: 4,
                disponivel: true
            }
        ]
    },
    { // 9 — B4: conferir um aviso sobre abrigo
        caminho: "B",
        enunciado:
            "Circula uma mensagem dizendo que o abrigo mudou de endereço. " +
            "Como você deve agir?",
        alternativas: [
            {
                texto: "Confirmar a informação nos canais oficiais antes de repassá-la.",
                afirmacao: ["Conferiu o aviso nos canais oficiais antes de compartilhá-lo."],
                tipo: "avancar",
                proxima: 10
            },
            {
                texto: "Perguntar diretamente à equipe responsável pelo abrigo.",
                afirmacao: ["Confirmou o endereço do abrigo com a equipe responsável."],
                tipo: "salto",
                proxima: 7
            },
            {
                texto: "Repassar a mensagem sem verificar se é verdadeira.",
                afirmacao: ["Compartilhou um aviso não confirmado sobre o abrigo."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "O aviso incorreto confundiu moradores e dificultou a organização. " +
                    "Você precisa recomeçar e compartilhar somente informações confirmadas."
            }
        ]
    },
    { // 10 — B5: organizar informações para as equipes
        caminho: "B",
        enunciado:
            "No ponto seguro, moradores relatam que outras pessoas ainda precisam de ajuda. " +
            "O que fazer antes de comunicar às equipes?",
        alternativas: [
            {
                texto: "Conferir as informações e informar a localização às equipes.",
                afirmacao: ["Conferiu as informações e comunicou a localização às equipes."],
                tipo: "avancar",
                proxima: 13
            },
            {
                texto: "Atualizar a lista com a equipe do abrigo.",
                afirmacao: ["Atualizou a lista junto à equipe do abrigo."],
                tipo: "salto",
                proxima: 9
            },
            {
                texto: "Publicar conversas privadas dos moradores para pedir ajuda.",
                afirmacao: ["Divulgou conversas privadas de moradores sem autorização."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "A exposição das conversas privadas violou a segurança dos moradores. " +
                    "Você precisa recomeçar e comunicar as equipes diretamente."
            }
        ]
    },
    { // 11 — A6: identificar necessidades no ponto seguro
        caminho: "A",
        enunciado:
            "No ponto de apoio, as equipes precisam identificar quem necessita de " +
            "transporte ou cuidados específicos. Como ajudar?",
        alternativas: [
            {
                texto: "Conferir as necessidades com os moradores e repassá-las à equipe.",
                afirmacao: ["Ajudou a equipe a organizar as necessidades no ponto seguro."],
                tipo: "avancar",
                proxima: 12
            },
            {
                texto: "Revisar a lista de moradores que chegaram ao abrigo.",
                afirmacao: ["Revisou a lista dos moradores no abrigo."],
                tipo: "salto",
                proxima: 6
            },
            {
                texto: "Informar à equipe sobre moradores ainda isolados no outro setor.",
                afirmacao: ["Informou às equipes sobre moradores isolados em outro setor."],
                tipo: "trocar",
                proxima: 13,
                disponivel: true
            }
        ]
    },
    { // 12 — A7: confirmar a organização da saída
        caminho: "A",
        enunciado:
            "A equipe prepara a saída dos moradores para outro local seguro. " +
            "Qual é a melhor forma de colaborar?",
        alternativas: [
            {
                texto: "Conferir a lista com a equipe e aguardar as instruções oficiais.",
                afirmacao: ["Conferiu a lista e seguiu as instruções da equipe."],
                tipo: "avancar",
                proxima: 14
            },
            {
                texto: "Voltar à organização das necessidades para corrigir a lista.",
                afirmacao: ["Revisou as necessidades antes da saída."],
                tipo: "salto",
                proxima: 11
            },
            {
                texto: "Entrar na água para buscar moradores sem esperar a equipe.",
                afirmacao: ["Entrou na água e colocou a si mesmo e outras pessoas em risco."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "A tentativa de resgate por conta própria colocou pessoas em perigo. " +
                    "Afaste-se da água e deixe o resgate para profissionais. Você precisa recomeçar."
            }
        ]
    },
    { // 13 — B6: repassar o pedido de resgate
        caminho: "B",
        enunciado:
            "Uma equipe solicita a localização de moradores que continuam isolados. " +
            "Como agir?",
        alternativas: [
            {
                texto: "Repassar a localização e as necessidades à equipe, de um local seguro.",
                afirmacao: ["Repassou às equipes a localização e as necessidades dos moradores."],
                tipo: "avancar",
                proxima: 15
            },
            {
                texto: "Revisar com o abrigo a lista de pessoas ainda não localizadas.",
                afirmacao: ["Conferiu com a equipe quem ainda precisava ser localizado."],
                tipo: "salto",
                proxima: 10
            },
            {
                texto: "Entrar na área alagada para tentar fazer o resgate pessoalmente.",
                afirmacao: ["Tentou realizar um resgate perigoso sem treinamento."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "Entrar na água colocou você e outras pessoas em risco. " +
                    "Informe a localização às equipes e deixe o resgate para profissionais. " +
                    "Você precisa recomeçar."
            }
        ]
    },
    { // 14 — final da narrativa A
        caminho: "A",
        final: "vitoria",
        enunciado:
            "Você ajudou a equipe a organizar os moradores em um local seguro, " +
            "informou suas necessidades e manteve as passagens livres. " +
            "As equipes profissionais coordenaram os resgates. Missão concluída! Você venceu!",
        alternativas: []
    },
    { // 15 — final da narrativa B
        caminho: "B",
        final: "vitoria",
        enunciado:
            "Você compartilhou informações confirmadas e comunicou às equipes " +
            "onde havia moradores precisando de ajuda, sempre de um local seguro. " +
            "As equipes profissionais coordenaram os resgates. Missão concluída! Você venceu!",
        alternativas: []
    }
];
