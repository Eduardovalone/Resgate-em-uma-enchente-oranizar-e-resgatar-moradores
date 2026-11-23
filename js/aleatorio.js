const nomes = [
    "Alex", "Lia", "Ravi", "Bia", "Noah",
    "Duda", "Caio", "Maya", "Theo", "Julia"
];

export function aleatorio(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

export function nome() {
    return aleatorio(nomes);
}
