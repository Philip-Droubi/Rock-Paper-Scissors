// CREATED BY PHILIP DROUBI
import * as vars from "./Vars.js";
import * as helper from "./helper.js";

//INIT the game
helper.changeScreen(1);
//
// let z = 0;
// let one = 0;
// let tow = 0;
// let three = 0;
// let four = 0;
// for (let index = 0; index < 10000; index++) {
//     let num = helper.getRandomChoice();
//     if (num == 0)
//         z++;
//     if (num == 1)
//         one += 1;
//     if (num == 2)
//         tow += 1;
//     if (num == 3)
//         three += 1;
//     if (num == 4)
//         four += 1;
// }
// console.log("zero = " + z);
// console.log("one = " + one);
// console.log("tow = " + tow);
// console.log("three = " + three);
// console.log("four = " + four);

let backBtn = document.querySelector(".backToPreviousScreenBTN");
let nRules = document.querySelector('.normalRules');
let bRules = document.querySelector('.bounsRules');
let popupExit = document.querySelector('.helpPopup .exit');
let aboutMe = document.querySelector('.about');

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
    else if (e.target.classList.contains('backdrop'))
        helper.closePopUp();
    else if (e.target.parentNode.classList.contains('playRoleBTN') || e.target.classList.contains('playRoleBTN')) {
        if (e.target.parentNode.classList.contains('playRoleBTN'))
            vars.setUserChoice(e.target.parentNode.getAttribute("data-num"));
        else if (e.target.classList.contains('playRoleBTN'))
            vars.setUserChoice(e.target.getAttribute("data-num"));
        helper.changeScreen(3);
    }
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

aboutMe.addEventListener('click', () => {
    helper.showAboutMe();
});


