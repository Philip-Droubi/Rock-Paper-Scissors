// CREATED BY PHILIP DROUBI
import * as vars from "./Vars.js";
let leftSideUL = document.querySelector('.leftSideButtons');
let nRules = document.querySelector('.normalRules');
let bRules = document.querySelector('.bounsRules');
let about = document.querySelector('.about');
let backdrop = document.querySelector('.backdrop');
let helpPopup = document.querySelector('.helpPopup');
let helpPopupImg = document.querySelector('.helpPopup .img img');


export function changeScreen(screen = 1) {
  switch (screen) {
    case 1:
      getFirstScreen();
      break;
    case 2:
      getSecScreen();
      break;
    case 3:
      getThirdScreen();
      break;
    default:
      console.log('Noooo, please nooooo, please');
      break;
  }
}

function getFirstScreen() {
  vars.setScreen(1);
  vars.setPScreen(1);
  let main = document.querySelector('main');
  main.className = "";
  main.classList.add('choose');
  main.innerHTML = getFirstPageHTML();
  leftSideUL.classList.add('hidden');
  nRules.classList.add('hidden');
  bRules.classList.add('hidden');
}

function getFirstPageHTML() {
  return `
    <div class="container">
        <h1>Welcome To <span>Rock, Paper & scissors</span> Game! </h1>
        <p>Choose Your Game</p>
        <div class="userChoice">
            <div class="normal choice" data-mode="1">
            Normal <span class="text">rock - paper - scissors</span>
            <div class="after"><span class="topE">✊</span><span class="downE">🖐</span><span class="topE">✌️</span></div>
            </div>
            <div class="bouns choice" data-mode="2">
            Hard <span class="text">rock - paper - scissors - lizard - spock</span>
            <div class="after"><span class="topE">✊</span><span class="downE">🖐</span><span class="topE">✌️</span><span
                class="downE">🦎</span><span class="topE">🖖</span></div>
            </div>
        </div>
    </div>
    `;
}

function getSecScreen() {
  vars.setScreen(2);
  vars.setPScreen(1);
  let main = document.querySelector('main');
  main.className = "";
  main.classList.add('secScreen');
  leftSideUL.classList.remove('hidden');
  vars.getMode() == 1 ? main.classList.add('normalSecScreen') : main.classList.add('bounsSecScreen');
  vars.getMode() == 1 ? main.innerHTML = getNormalSecPageHTML() : main.innerHTML = getBounsSecPageHTML();
  vars.getMode() == 1 ? nRules.classList.remove('hidden') : bRules.classList.remove('hidden');
}

function getNormalSecPageHTML() {
  return `
    <div class="container">
      <div class="normalScoreNav scoreNav">
        <ul>
          <li>Rock</li>
          <li>paper</li>
          <li>scissors</li>
        </ul>
        <div class="score">
          <p>Score<span>0</span></p>
        </div>
      </div>
    </div>
    <div class="game">
      <div class="img">
        <img class="line" src="images/bg-triangle.svg" alt="" aria-hidden="true">
        <ul>
          <li>
            <button aria-label="Play scissors" class="scissorsBTN playRoleBTN" data-num="0"><img src="images/icon-scissors.svg"
                alt="" aria-hidden="true"></button>
          </li>
          <li>
            <button aria-label="Play Paper" class="paperBTN playRoleBTN" data-num="1"><img src="images/icon-paper.svg" alt=""
                aria-hidden="true"></button>
          </li>
          <li>
            <button aria-label="Play Rock" class="rockBTN playRoleBTN" data-num="2"><img src="images/icon-rock.svg" alt=""
                aria-hidden="true"></button>
          </li>
        </ul>
      </div>
    </div>
    `;
}

function getBounsSecPageHTML() {
  return `
    <div class="container">
      <div class="bounsScoreNav scoreNav">
        <ul>
          <li>Rock</li>
          <li>paper</li>
          <li>scissors</li>
          <li>lizard</li>
          <li>spock</li>
        </ul>
        <div class="score">
          <p>Score<span>0</span></p>
        </div>
      </div>
    </div>
    <div class="game">
      <div class="img">
        <img class="line" src="images/bg-pentagon.svg" alt="" aria-hidden="true">
        <ul>
          <li>
            <button aria-label="Play scissors" class="scissorsBTN playRoleBTN" data-num="0"><img src="images/icon-scissors.svg"
                alt="" aria-hidden="true"></button>
          </li>
          <li>
            <button aria-label="Play Paper" class="paperBTN playRoleBTN" data-num="1"><img src="images/icon-paper.svg" alt=""
                aria-hidden="true"></button>
          </li>
          <li>
            <button aria-label="Play Rock" class="rockBTN playRoleBTN" data-num="2"><img src="images/icon-rock.svg" alt=""
                aria-hidden="true"></button>
          </li>
          <li>
            <button aria-label="Play Lizard" class="lizardBTN playRoleBTN" data-num="3"><img src="images/icon-lizard.svg" alt=""
                aria-hidden="true"></button>
          </li>
          <li>
            <button aria-label="Play Spock" class="spockBTN playRoleBTN" data-num="4"><img src="images/icon-spock.svg" alt=""
                aria-hidden="true"></button>
          </li>
        </ul>
      </div>
    </div>
    `;
}

function getThirdScreen() {
  vars.setScreen(3);
  vars.setPScreen(2);
  let main = document.querySelector('main');
  main.className = "";
  main.classList.add('thirdScreen');
  leftSideUL.classList.remove('hidden');
  vars.getMode() == 1 ? main.classList.add('normalThirdScreen') : main.classList.add('bounsThirdScreen');
  vars.getMode() == 1 ? main.innerHTML = getThirdPageHTML('normalScoreNav', getRole(+ vars.getUserChoice()), vars.getUserChoice())
    : main.innerHTML = getThirdPageHTML('bounsScoreNav', getRole(+ vars.getUserChoice()), vars.getUserChoice(), 'lizard', 'spock');
  vars.getMode() == 1 ? nRules.classList.remove('hidden') : bRules.classList.remove('hidden');
}

function getThirdPageHTML(nav = 'normalScoreNav', userType, userID, lizard = "", spock = "") {
  return `
  <div class="container">
  <div class="${nav} scoreNav">
    <ul>
      <li>Rock</li>
      <li>paper</li>
      <li>scissors</li>
      <li>${lizard}</li>
      <li>${spock}</li>
    </ul>
    <div class="score">
      <p>Score<span>0</span></p>
    </div>
  </div>
</div>
<div class="inGameFlex">
  <div class="userChoice playChoice">
    <p>you picked</p>
    <div class="choiceCircle ${userType}BTN" data-num="${userID}">
      <div class="img">
        <img src="images/icon-${userType}.svg" alt="You picked ${userType}">
      </div>
    </div>
  </div>
  <div class="state hidden">
    <p>You lose</p>
    <button class="playAgain">play again</button>
  </div>
  <div class="pcChoice playChoice">
    <p>the house picked</p>
    <div class="emptyChoiceCircle" data-num="">
      <div class="img">
        <img src="" alt="">
      </div>
    </div>
  </div>
</div>
</div>
    `;
}

function getRole(id) {
  switch (id) {
    case 0:
      return 'scissors';
    case 1:
      return 'paper';
    case 2:
      return 'rock';
    case 3:
      return 'lizard';
    case 4:
      return 'spock';

    default:
      console.log("no no no no no");
      break;
  }
}

export function getRandomChoice() {
  return Math.floor(Math.random() * (4 + 1));
}

export function showRules(mode) {
  backdrop.classList.remove('hidden');
  helpPopup.classList.remove('hidden');
  if (mode == 1) {
    helpPopupImg.setAttribute('src', 'images/image-rules.svg');
    helpPopupImg.setAttribute('alt', 'Normal game rules');
  } else if (mode == 2) {
    helpPopupImg.setAttribute('src', 'images/image-rules-bonus.svg');
    helpPopupImg.setAttribute('alt', 'bouns game rules');
  }
}

export function closePopUp() {
  backdrop.classList.add('hidden');
  helpPopup.classList.add('hidden');
}