// CREATED BY PHILIP DROUBI
import * as vars from "./Vars.js";
let leftSideUL = document.querySelectorAll('.leftSideButtons');
let rightSideUL = document.querySelector('.rightSideButtons');
let nRules = document.querySelectorAll('.normalRules');
let bRules = document.querySelectorAll('.bounsRules');
let about = document.querySelector('.about');
let backdrop = document.querySelector('.backdrop');
let helpPopup = document.querySelector('.helpPopup');
let helpPopupImg = document.querySelector('.helpPopup .img');
let scoreNav = document.querySelector('.scoreNav');
let score = document.querySelector('.scoreNav .score p span');
let timer;
let stateTimer;

export function changeScreen(screen = 1) {
  clearTimeout(timer);
  clearTimeout(stateTimer);
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
  leftSideUL.forEach(e => e.classList.add('hidden'));
  nRules.forEach(e => e.classList.add('hidden'));
  bRules.forEach(e => e.classList.add('hidden'));
  document.body.style.padding = "0 20px";
  rightSideUL.style.height = 'fit-content';
}

function getFirstPageHTML() {
  return `
    <div class="container">
        <h1>Welcome To <span>Rock, Paper & scissors</span> Game! </h1>
        <p>Choose Your Game</p>
        <div class="userChoice">
            <div class="normal choice" data-mode="1" tabindex="0">
            Normal <span class="text">rock - paper - scissors</span>
            <div class="after"><span class="topE">✊</span><span class="downE">🖐</span><span class="topE">✌️</span></div>
            </div>
            <div class="bouns choice" data-mode="2" tabindex="0">
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
  leftSideUL.forEach(e => e.classList.remove('hidden'));
  vars.getMode() == 1 ? main.classList.add('normalSecScreen') : main.classList.add('bounsSecScreen');
  vars.getMode() == 1 ? main.innerHTML = getNormalSecPageHTML() : main.innerHTML = getBounsSecPageHTML();
  vars.getMode() == 1 ? nRules.forEach(e => e.classList.remove('hidden'))
    : nRules.forEach(e => e.classList.remove('hidden'));
  vars.getMode() == 1 ? showScoreNav(1) : showScoreNav(2);
  document.body.style.padding = "20px 20px 0";
  if (window.innerWidth <= 1256)
    rightSideUL.style.height = '93vh';

}

function showScoreNav(type) {
  if (type == 1) {
    scoreNav.classList.remove('hidden');
    scoreNav.classList.add('normalScoreNav');
    document.querySelector('.scoreNav ul').innerHTML =
      `
      <li>Rock</li>
      <li>paper</li>
      <li>scissors</li>
    `;
  } else {
    scoreNav.classList.remove('hidden');
    scoreNav.classList.add('bounsScoreNav');
    document.querySelector('.scoreNav ul').innerHTML =
      `
      <li>Rock</li>
      <li>paper</li>
      <li>scissors</li>
      <li>lizard</li>
      <li>spock</li>
    `;
  }
}

function getNormalSecPageHTML() {
  return `
  <div class="container">
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
    </div>
    `;
}

function getThirdScreen() {
  vars.setScreen(3);
  vars.setPScreen(2);
  let main = document.querySelector('main');
  main.className = "";
  main.classList.add('thirdScreen');
  leftSideUL.forEach(e => e.classList.remove('hidden'));
  vars.getMode() == 1 ? main.classList.add('normalThirdScreen') : main.classList.add('bounsThirdScreen');
  vars.getMode() == 1 ? main.innerHTML = getThirdPageHTML(getRole(+ vars.getUserChoice()), vars.getUserChoice())
    : main.innerHTML = getThirdPageHTML(getRole(+ vars.getUserChoice()), vars.getUserChoice());
  vars.getMode() == 1 ? nRules.forEach(e => e.classList.remove('hidden'))
    : bRules.forEach(e => e.classList.add('hidden'));
  timer = setTimeout(() => {
    PCTurn();
  }, 500);
  stateTimer = setTimeout(() => {
    let state;
    if (vars.getMode() == 1)
      state = makeDecision();
    else if (vars.getMode() == 2)
      state = makeDecision();
    if (state == 1 || state == 0)
      makeWinner(state);
  }, 900);
}

function getThirdPageHTML(userType, userID) {
  return `
  <div class="container">
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
          <i class="fa fa-spinner fa-spin" aria-hidden="true"></i>
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

function PCTurn() {
  let PCChoice = getRandomChoice();
  vars.setPCChoice(PCChoice);
  createPCChoiceElement(PCChoice);
}

export function getRandomChoice() {
  let max;
  vars.getMode() == 1 ? max = 2 : max = 4;
  return Math.floor(Math.random() * (max + 1));
}

function createPCChoiceElement(ch) {
  let empty = document.querySelector('.emptyChoiceCircle');
  let img = document.querySelector('.emptyChoiceCircle .img img');
  let icon = document.querySelector('.emptyChoiceCircle i');
  let role = getRole(ch);
  icon.classList.add('hidden');
  empty.classList.remove('emptyChoiceCircle');
  empty.classList.add('choiceCircle', `${role}BTN`);
  empty.setAttribute('data-num', ch);
  img.setAttribute('src', `images/icon-${role}.svg`);
  img.setAttribute('alt', `the house picked ${role}`);
}

function makeDecision() {
  let userCh = vars.getUserChoice();
  let pcCh = vars.getPCChoice();
  let state;
  if (userCh == pcCh) {
    state = 2;
    showState(state)
  } else if (userCh == 0) {
    if (pcCh == 1 || pcCh == 3) {
      state = 1;
      showState(state);
    } else {
      state = 0;
      showState(state);
    }
  } else if (userCh == 1) {
    if (pcCh == 2 || pcCh == 4) {
      state = 1;
      showState(state);
    } else {
      state = 0;
      showState(state);
    }
  } else if (userCh == 2) {
    if (pcCh == 3 || pcCh == 0) {
      state = 1;
      showState(state);
    } else {
      state = 0;
      showState(state);
    }
    score.innerHTML = vars.getScore();
    return state;
  } else if (userCh == 3) {
    if (pcCh == 4 || pcCh == 1) {
      state = 1;
      showState(state);
    } else {
      state = 0;
      showState(state);
    }
  } else if (userCh == 4) {
    if (pcCh == 0 || pcCh == 2) {
      state = 1;
      showState(state);
    } else {
      state = 0;
      showState(state);
    }
  }
  score.innerHTML = vars.getScore();
  return state;
}

export function showRules() {
  backdrop.classList.remove('hidden');
  helpPopup.classList.remove('hidden');
  document.querySelector('.helpPopup .top p').textContent = 'Rules';
  const mode = vars.getMode();
  let img = document.createElement('img');
  if (mode == 1) {
    img.setAttribute('src', 'images/image-rules.svg');
    img.setAttribute('alt', 'Normal game rules');
  } else if (mode == 2) {
    img.setAttribute('src', 'images/image-rules-bonus.svg');
    img.setAttribute('alt', 'bouns game rules');
  }
  helpPopupImg.appendChild(img);
}

export function closePopUp() {
  backdrop.classList.add('hidden');
  helpPopup.classList.add('hidden');
  helpPopup.classList.remove('aboutHelpPopup');
  document.querySelector('.helpPopup .about').classList.add('hidden');
  let img = helpPopupImg.lastElementChild;
  if (img) img.remove();
}

export function showAboutMe() {
  backdrop.classList.remove('hidden');
  helpPopup.classList.remove('hidden');
  helpPopup.classList.add('aboutHelpPopup');
  document.querySelector('.aboutHelpPopup .about').classList.remove('hidden');
  document.querySelector('.aboutHelpPopup .top p').textContent = 'ABOUT'

}

function showState(s) {
  let state = document.querySelector('.state');
  let p = document.querySelector('.state p');
  if (s == 0) {
    vars.addScore(-1);
    p.textContent = "you lose";
  }
  if (s == 1) {
    vars.addScore(1);
    p.textContent = "you win";
  }
  if (s == 2) {
    p.textContent = "tie";
  }
  state.classList.remove('hidden');
}

function makeWinner(state) {
  if (state == 1) {
    document.querySelector('.userChoice .choiceCircle').classList.add('win');
  } else {
    document.querySelector('.pcChoice .choiceCircle').classList.add('win');
  }
}