// CREATED BY PHILIP DROUBI
import * as vars from "./Vars.js";
import * as helper from "./helper.js";

//PWA
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/Rock-Paper-Scissors/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    });
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
});

const installApp = document.querySelectorAll('.download');
if (installApp)
    installApp.forEach(element => {
        element.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    deferredPrompt = null;
                }
            }
        });
    });

//INIT the game
helper.changeScreen(1);
document.querySelector(".scoreNav .score p span").textContent = vars.getScore();

let backBtn = document.querySelectorAll(".backToPreviousScreenBTN");
let nRules = document.querySelectorAll('.normalRules');
let bRules = document.querySelectorAll('.bounsRules');
let popupExit = document.querySelector('.helpPopup .exit');
let aboutMe = document.querySelectorAll('.about');
let resetScore = document.querySelector('.scoreNav .score .reset');
let berg = document.querySelector('.berg');
let mobileMenu = document.querySelector('.mainMenu');
let menuOpen = false;

window.addEventListener('keydown', e => {
    if (e.key == 'Backspace' && vars.getScreen() != 1) {
        if (vars.getPScreen() == 1) {
            document.querySelector('.scoreNav').classList.add('hidden');
        }
        helper.changeScreen(vars.getPScreen());
    }
});

backBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (vars.getPScreen() == 1) {
            document.querySelector('.scoreNav').classList.add('hidden');
        }
        helper.changeScreen(vars.getPScreen());
    });
});

document.body.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains('choice') || e.target.classList.contains('choice')) {
        if (e.target.getAttribute('data-mode'))
            vars.setMode(e.target.getAttribute('data-mode'));
        else
            vars.setMode(e.target.parentNode.getAttribute('data-mode'));
        helper.changeScreen(2);
    }
    else if (e.target.classList.contains('backdrop'))
        helper.closePopUp();
    else if (e.target.parentNode.classList.contains('playRoleBTN') || e.target.classList.contains('playRoleBTN')) {
        if (e.target.parentNode.classList.contains('playRoleBTN'))
            vars.setUserChoice(e.target.parentNode.getAttribute("data-num"));
        else if (e.target.classList.contains('playRoleBTN'))
            vars.setUserChoice(e.target.getAttribute("data-num"));
        helper.changeScreen(3);
    }
    else if (e.target.classList.contains('playAgain') && vars.getScreen() == 3) {
        helper.changeScreen(vars.getPScreen());
    } else if (menuOpen && !e.target.classList.contains('mainMenu')) {
        berg.classList.remove('bergClicked');
        mobileMenu.classList.add('hidden');
        setTimeout(() => {
            menuOpen = false;
        }, 20);
    }
});

nRules.forEach(r => {
    r.addEventListener('click', () => {
        helper.showRules();
    });
});

bRules.forEach(r => {
    r.addEventListener('click', () => {
        helper.showRules();
    });
});

popupExit.addEventListener('click', () => {
    helper.closePopUp();
});

aboutMe.forEach(e => {
    e.addEventListener('click', () => {
        helper.showAboutMe();
    });
});

resetScore.addEventListener('click', () => {
    vars.setScore(0);
    document.querySelector('.scoreNav .score p span').textContent = 0
});

berg.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    berg.classList.add('bergClicked');
    setTimeout(() => {
        menuOpen = true;
    }, 20);
});