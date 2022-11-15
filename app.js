//  update loop
import Ball from "./ball.js";
import Paddel from "./paddel.js";

const ball = new Ball(document.querySelector("#ball"));
const pleyerpaddel = new Paddel(document.querySelector("#pleyer-padddel"));
const Pcpaddel = new Paddel(document.querySelector("#computer-padddel"));
const playerScore = document.querySelector(".player-score");
const PcScore = document.querySelector(".computer-score");
let lastTime;


function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    // update code
    ball.update(delta,[pleyerpaddel.rect(),Pcpaddel.rect()]);
    Pcpaddel.update(delta, ball.y);
   const hue= parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hue'))
   
   document.documentElement.style.setProperty('--hue',hue+delta* 0.01)

    
    if (isLose()) habdleLose();
  }

  lastTime = time;
  window.requestAnimationFrame(update);
}



function isLose() {
  const rect = ball.rect();
  return rect.right >= window.innerWidth || rect.left <= 0;
}


function habdleLose() {
  const rect = ball.rect();
  if (rect.right >= window.innerWidth) {
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  } else {
    PcScore.textContent = parseInt(PcScore.textContent) + 1;
  }
  ball.reset();
  Pcpaddel.resat();
}


document.addEventListener("mousemove", (e) => {
  pleyerpaddel.position = (e.y / window.innerHeight) * 100;
});


window.requestAnimationFrame(update);
