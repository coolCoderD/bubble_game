

let score=0;
let hit=0;
let timerint;
let lvl=10;
let timerValue=0;

//  // Get a reference to the level selection dropdown
//  const levelDropdown = document.getElementById("lvl");

//  // Add an event listener to detect changes in the dropdown selection
//  levelDropdown.addEventListener("change", function () {
//      // Get the selected level value
//      const selectedLevel = levelDropdown.value;

//      // Perform an action based on the selected level
//      switch (selectedLevel) {
//          case "1":
//              // Set the game to Easy mode
//                 lvl=10;
//              break;
//          case "2":
//              // Set the game to Medium mode
//              lvl=20
//              break;
//          case "3":
//              // Set the game to Hard mode
//              lvl=50;
//              break;
//          case "4":
//              // Set the game to Very Hard mode
//              lvl=100;
//              break;
//          default:
//              // Handle the default case (e.g., no level selected)
//              lvl=10;
//              break;
//      }


//  });

function setScore(){
    score=0;
    document.querySelector("#scoreval").textContent=score;
}

function incScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function decScore(){
    if(score>0){
        score-=10;
        document.querySelector("#scoreval").textContent=score;
    }
    else {
        clearInterval(timerint);
        gameOver();
    }
    
}

function gameOver(){
    document.querySelector("#pbtm").innerHTML=`
    <h1 style="color:red">GAME OVER</h1>
    <p>Your Score: ${score}</p>
    <p>Reload to Restart</p>
    <p> or press "Enter"`;


}

function getHit(){
    hit=Math.floor(Math.random()*10)+1;
    document.querySelector("#hitval").textContent=hit;
}

function makeBubble(){
    var clutter="";
    for(let i=1;i<=114;i++){
        clutter+=`<div class="bubble">${Math.floor(Math.random()*10)+1}</div>`;
    }

    document.querySelector('#pbtm').innerHTML=clutter;
}

document.querySelector("#pbtm").addEventListener("click",function(e){
    let clickedNumber=Number(e.target.textContent);
    if(clickedNumber===hit){
        incScore();
        newGameWhenSelectedRight();
    }
    else {
        decScore();
    }
});

function runTimer(){
    let timer=6;
    if(timerint) clearInterval(timerint);
    timerint=setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            gameOver();
            
        }
    },1000);

}


document.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        newGame();
    }
})



function newGameWhenSelectedRight(){
    makeBubble();
    runTimer();
    getHit();
}

function newGame(){
    newGameWhenSelectedRight();
    setScore();
    getTimerVal();
}

newGame();
