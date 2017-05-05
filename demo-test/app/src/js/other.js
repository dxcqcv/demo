import '../css/other.styl';

// other js
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const start = document.querySelector('#startGame');
const moles = [...document.querySelectorAll('.mole')];
let lastHole;
let timeUp = false;
let score;
start.addEventListener('click', startGame);
function randomTime(min,max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHoles(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if(lastHole === hole) {
    return randomHoles(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHoles(holes);
  hole.classList.add('up');
  setTimeout(()=>{
    hole.classList.remove('up');
    if(!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(()=>timeUp=true, 10000);
}

function bonk(e) {
  console.log(e)
  if(!e.isTrusted) return; // cheater
  score++;
  scoreBoard.textContent = score;
}

moles.map(mole=>mole.addEventListener('click',bonk));


