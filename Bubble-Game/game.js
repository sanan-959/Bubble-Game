var timer = 30;
var scroe = 0;
var hitrn = 0;
function increasescroe(){
    scroe += 10;
    document.querySelector("#scroeval").textContent = scroe;
}
function makeBubble(){
    var calluter = "";
for(var i = 1; i<=160; i++){
    var rn = Math.floor(Math.random()*10);
    calluter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = calluter;
}
function runtimer(){
    var timeint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum == hitrn){
        increasescroe();
        makeBubble();
        getNewHit();
    }
})

makeBubble();
runtimer();
getNewHit();
