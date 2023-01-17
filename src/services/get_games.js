import Games from "../games.json";

export function getGames() {
    return [...Games];
}

export function getRandomGame() {
    const arrayGames = [...Games];
    const game = arrayGames[Math.floor(Math.random() * arrayGames.length)];
    return game;
}
