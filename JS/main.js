// CREATED BY PHILIP DROUBI
import * as vars from "./Vars.js";
import * as helper from "./helper.js";

//INIT the game
helper.changeScreen(1);
//
let backBtn = document.querySelector(".backToPreviousScreenBTN");
let nRules = document.querySelector('.normalRules');
let bRules = document.querySelector('.bounsRules');
let popupExit = document.querySelector('.helpPopup .exit');

backBtn.addEventListener('click', () => {
    helper.changeScreen(vars.getPScreen());
});

document.body.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains('choice') || e.target.classList.contains('choice')) {
        if (e.target.getAttribute('data-mode'))
            vars.setMode(e.target.getAttribute('data-mode'));
        else
            vars.setMode(e.target.parentNode.getAttribute('data-mode'));
        helper.changeScreen(2);
    }
    if (e.target.classList.contains('backdrop'))
        helper.closePopUp();
});

nRules.addEventListener('click', () => {
    helper.showRules(1);
});

bRules.addEventListener('click', () => {
    helper.showRules(2);
});

popupExit.addEventListener('click', () => {
    helper.closePopUp();
});


