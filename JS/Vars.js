let gameMode;
let screen;
let pScreen;

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