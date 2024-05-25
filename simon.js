let gameSeq = [];
let userSeq = [];
let highScore = 0;
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = [ "red", "yellow", "green", 'purple'];

document.addEventListener("keypress", () => {
 if (started == false){
    console.log("game is started");
    started = true;
    levelUp();
 }
});

function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");},250
    );
}

function flashuser(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");},250
    );
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randInd = Math.floor(Math.random()*3);
    let randColour = btns[randInd];
    let randBtn = document.querySelector(`.${randColour}`);
    flashBtn(randBtn);
    gameSeq.push(randColour);
    console.log(gameSeq);
}

function btnPress() {
 console.log(this);
 let btn = this;
 flashuser(btn);

 userColour = btn.getAttribute("id");
 console.log(userColour);
 userSeq.push(userColour);

 checkAns(userSeq.length-1);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
        
    } 
    else {
        h2.innerHTML = ` GAME OVER !!! Your score is <b>${level}</b> <br> Press any key to restart`
        let body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(() => {
            body.style.backgroundColor = "white"     
         },500
        )
        highScorex();
        reset();
       
    }
}

let allBtns = document.querySelectorAll(".btns");
for( btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function highScorex() { 
    let highScoren = document.querySelector("#highscore");
    if( highScore < level){
        highScoren.innerText = `High Score = ${level}`;
        highScore = level;
    } else {
        console.log("nochange");
    }
}
function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}
 
