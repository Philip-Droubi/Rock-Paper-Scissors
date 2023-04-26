let gameMode;
let screen;
let pScreen;
let score;
let userChoice;
let PCChoice;

export function setMode(mode) {
    gameMode = mode;
    return true;
}

export function getMode() {
    return gameMode;
}

export function setScreen(s) {
    screen = s;
    return true;
}

export function getScreen() {
    return screen;
}

export function setPScreen(s) {
    pScreen = s;
    return true;
}

export function getPScreen() {
    return pScreen;
}

export function addScore(s) {
    score = score + s;
    return true;
}

export function getScore() {
    return score;
}

export function setUserChoice(ch) {
    userChoice = ch;
    return true;
}

export function getUserChoice() {
    return userChoice;
}

export function setPCChoice(ch) {
    PCChoice = ch;
    return true;
}

export function getPCChoice() {
    return PCChoice;
}