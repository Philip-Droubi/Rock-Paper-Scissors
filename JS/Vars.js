let gameMode;
let screen;
let pScreen;
let score = +(localStorage.getItem("score") || 0);
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

export function setScore(s) {
    score = s;
    localStorage.setItem("score", s);
    return true;
}

export function addScore(s) {
    score = score + s;
    localStorage.setItem("score", score);
    return true;
}

export function getScore() {
    return Number(score);
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