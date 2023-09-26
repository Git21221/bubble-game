var timer = 60;
var score = 0;
var rn =0;
function makeBubble(){
    var clutter = "";
    for(var i=0;i<154;i++){
        var ran = Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${ran}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
function runTime(){
    var timeInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timeVal").textContent = timer;
        }else{
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}
function hitMaker(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = rn;
}
function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clicked = Number(dets.target.textContent);
    if(clicked === rn){
        increaseScore();
        hitMaker();
        makeBubble();
    }
})
makeBubble();
runTime();
hitMaker();