export const perguntas = [
    // POSIÇÃO 0: pergunta comum aos dois caminhos.
    {
        enunciado:
            "Ao sair da escola, você descobre uma inteligência " +
            "artificial capaz de criar textos, imagens e vozes. " +
            "Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Quero experimentar e descobrir o que ela consegue fazer.",
                afirmacao: [
                    "Decidiu experimentar a inteligência artificial."
                ],
                proxima: 1
            },
            {
                texto: "Quero entender os riscos antes de utilizar.",
                afirmacao: [
                    "Decidiu investigar os riscos da inteligência artificial."
                ],
                proxima: 2
            }
        ]
    },
    // POSIÇÃO 1: começo da narrativa de experimentação.
    {
        enunciado:
            "Você decide experimentar a ferramenta. Na mesma semana, " +
            "a professora solicita um trabalho sobre inteligência " +
            "artificial. Como você pretende começar?",
        alternativas: []
    },
    // POSIÇÃO 2: começo da narrativa de investigação.
    {
        enunciado:
            "Antes de experimentar a ferramenta, você procura entender " +
            "seus riscos. Nesse momento, recebe um áudio suspeito " +
            "atribuído à diretora da escola. O que você pretende fazer?",
        alternativas: []
    },
    {
        tipo: "PRIMEIRA SITUAÇÃO",
        pergunta: "A água começou a subir nas ruas do bairro. Qual deve ser sua primeira atitude?",
        opcoes: [
            {
                texto: "Ir para um local alto e seguro e avisar as equipes de emergência.",
                correta: true,
                explicacao: "Muito bem! A prioridade é proteger as pessoas."
            },
            {
                texto: "Entrar na água para tentar atravessar a rua.",
                correta: false,
                explicacao: "Nunca entre na água da enchente."
            },
            {
                texto: "Ficar perto do rio observando o nível da água.",
                correta: false,
                explicacao: "Afaste-se de rios e áreas alagadas."
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
                explicacao: "A água pode esconder buracos e ter correnteza."
            },
            {
                texto: "Não atravesse. Procure uma rota segura.",
                correta: true,
                explicacao: "Correto! Áreas alagadas são perigosas."
            },
            {
                texto: "Atravesse somente se estiver acompanhado.",
                correta: false,
                explicacao: "Estar acompanhado não torna a travessia segura."
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
                explicacao: "Você também pode ficar em perigo."
            },
            {
                texto: "Pedir que a pessoa nade até você.",
                correta: false,
                explicacao: "Não incentive ninguém a entrar na correnteza."
            },
            {
                texto: "Informar a localização às equipes de emergência.",
                correta: true,
                explicacao: "Muito bem! O resgate deve ser feito por profissionais."
            }
        ]
    },
    {
        tipo: "TRABALHO EM EQUIPE",
        pergunta: "Como ajudar a organizar os moradores que precisam deixar suas casas?",
        opcoes: [
            {
                texto: "Compartilhar informações confirmadas e orientar todos.",
                correta: true,
                explicacao: "Ótima decisão! Informações confiáveis ajudam a comunidade."
            },
            {
                texto: "Espalhar mensagens sem verificar se são verdadeiras.",
                correta: false,
                explicacao: "Informações falsas podem causar confusão."
            },
            {
                texto: "Bloquear as ruas para reunir curiosos.",
                correta: false,
                explicacao: "As rotas devem ficar livres para as equipes."
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
                texto: "Se for seguro, levar documentos, telefone e medicamentos necessários.",
                correta: true,
                explicacao: "Correto! A segurança vem primeiro."
            },
            {
                texto: "Esperar a água baixar dentro de uma área de risco.",
                correta: false,
                explicacao: "Procure um local seguro e siga as orientações oficiais."
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
                explicacao: "Todos devem receber atenção."
            },
            {
                texto: "Informar às equipes quais moradores precisam de apoio.",
                correta: true,
                explicacao: "Excelente! A comunicação ajuda a organizar o atendimento."
            }
        ]
    }
];