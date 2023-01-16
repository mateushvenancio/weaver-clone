// Verifica quantas alterações sofreu entre palavras

function quantasAlts(p1, p2) {
    let qtdd = 0;

    for (let i = 0; i < 4; i++) {
        if (p1[i].toUpperCase() !== p2[i].toUpperCase()) {
            qtdd++;
        }
    }

    return qtdd;
}

export default quantasAlts;
