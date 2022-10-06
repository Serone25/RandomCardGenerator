const numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const palos =["♠","♣","♥","♦"];

function randomNumber(arr){
    return Math.floor(Math.random()*arr.length);
}
function randomCard(){
    const palo = palos[randomNumber(palos)];
    const numero = numbers[randomNumber(numbers)];
    document.querySelector(".icon").innerHTML = palo;
    document.querySelector(".icon2").innerHTML = palo;
    document.querySelector(".cardImage").innerHTML = numero;

    if(palo =="♥" || palo == "♦"){
        document.querySelector(".cardContainer").style.color="red";
    }
}
randomCard();

//window.onload = updateClock;
var totalTime = 10;

function updateClock() {
    document.getElementById('countdown').innerHTML = totalTime;
    if(totalTime==0){
        randomCard();
    }else{
        totalTime-=1;
        setTimeout("updateClock()",1000);
        
    }
    if(totalTime<=2){
        document.querySelector("#countdown").style.color="red";
    }else{
        document.querySelector("#countdown").style.color="black";
    }
}

function setTotalTime(){
    totalTime=10;
    updateClock();
}
