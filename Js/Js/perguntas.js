export const perguntas = {
    inicio: {
        titulo: "O começo da jornada",
        historia: "Você faz parte de um grupo de estudantes que precisa investigar como a inteligência artificial pode afetar a escola. Qual caminho deseja seguir?",
        opcoes: [
            { texto: "A - Usar IA em um trabalho escolar", destino: "A1" },
            { texto: "B - Investigar um áudio suspeito", destino: "B1" }
        ]
    },

    A1: {
        titulo: "Uma nova ferramenta",
        historia: "Seu grupo decide utilizar uma inteligência artificial para ajudar em um trabalho escolar. Você acredita que ela pode facilitar a pesquisa.",
        opcoes: [
            { texto: "Usar a IA como apoio", destino: "A2" },
            { texto: "Deixar a IA fazer todo o trabalho", destino: "A2" }
        ]
    },

    A2: {
        titulo: "A pesquisa",
        historia: "A ferramenta apresenta várias informações. Algumas parecem corretas, mas você não sabe se todas são verdadeiras.",
        opcoes: [
            { texto: "Conferir as informações em fontes confiáveis", destino: "A3" },
            { texto: "Aceitar as informações sem verificar", destino: "A3" }
        ]
    },

    A3: {
        titulo: "O trabalho em equipe",
        historia: "Um colega diz que não é necessário participar, pois a IA pode fazer todo o trabalho.",
        opcoes: [
            { texto: "Explicar que a IA deve ser usada com responsabilidade", destino: "A4" },
            { texto: "Deixar a IA fazer tudo", destino: "A4" }
        ]
    },

    A4: {
        titulo: "A apresentação",
        historia: "Chegou o momento de apresentar o trabalho. O professor pergunta como vocês utilizaram a inteligência artificial.",
        opcoes: [
            { texto: "Explicar como a ferramenta foi usada", destino: "A5" },
            { texto: "Esconder o uso da inteligência artificial", destino: "A5" }
        ]
    },

    A5: {
        titulo: "A reflexão",
        historia: "O grupo percebe que a inteligência artificial pode ajudar muito, mas precisa ser utilizada com consciência e senso crítico.",
        opcoes: [
            { texto: "Finalizar a história", destino: "fimA" }
        ]
    },

    B1: {
        titulo: "O áudio misterioso",
        historia: "Um áudio começa a circular nos grupos da escola. Nele, uma voz supostamente da direção anuncia uma mudança importante.",
        opcoes: [
            { texto: "Investigar a origem do áudio", destino: "B2" },
            { texto: "Compartilhar o áudio imediatamente", destino: "B2" }
        ]
    },

    B2: {
        titulo: "A dúvida",
        historia: "Alguns estudantes acreditam que o áudio é verdadeiro. Outros dizem que pode ter sido criado por inteligência artificial.",
        opcoes: [
            { texto: "Procurar um comunicado oficial da escola", destino: "B3" },
            { texto: "Acreditar apenas nos colegas", destino: "B3" }
        ]
    },

    B3: {
        titulo: "A investigação",
        historia: "Você descobre que existem ferramentas capazes de criar áudios falsos muito convincentes.",
        opcoes: [
            { texto: "Pesquisar sobre áudios manipulados por IA", destino: "B4" },
            { texto: "Ignorar as informações encontradas", destino: "B4" }
        ]
    },

    B4: {
        titulo: "A descoberta",
        historia: "A direção informa que não fez o anúncio. O áudio não era uma comunicação oficial.",
        opcoes: [
            { texto: "Avisar os colegas para não espalharem o áudio", destino: "B5" },
            { texto: "Continuar compartilhando o áudio", destino: "B5" }
        ]
    },

    B5: {
        titulo: "A conclusão",
        historia: "Você percebe que é importante verificar a origem das informações antes de acreditar ou compartilhar qualquer conteúdo.",
        opcoes: [
            { texto: "Finalizar a história", destino: "fimB" }
        ]
    },

    fimA: {
        titulo: "FIM DA HISTÓRIA!",
        historia: "Você concluiu o caminho da inteligência artificial na educação. A tecnologia pode ser uma grande aliada quando usada com responsabilidade.",
        opcoes: []
    },

    fimB: {
        titulo: "FIM DA HISTÓRIA!",
        historia: "Você concluiu o caminho da investigação. Antes de compartilhar informações, é importante verificar se elas são verdadeiras.",
        opcoes: []
    }
};