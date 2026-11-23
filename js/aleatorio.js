const nomes = [
    "Ana", "Fernanda", "Marcelo", "Amanda", "Gabriel"
];

export function aleatorio(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

export const nome = aleatorio(nomes);
