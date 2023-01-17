export function salvarJogo(game) {
    localStorage.setItem("currentGame", JSON.stringify(game));
}

export function getJogoSalvo() {
    return JSON.parse(localStorage.getItem("currentGame"));
}

export function salvarTentativas(tentativas) {
    localStorage.setItem("tentativas", JSON.stringify(tentativas));
}

export function getTentativasSalvas() {
    return JSON.parse(localStorage.getItem("tentativas"));
}
