var min = 1;
var max = 6;
var content1 = document.getElementById("content1")
var content2 = document.getElementById("content2")
var content3 = document.getElementById("content3")
var content4 = document.getElementById("content4")
var content5 = document.getElementById("content5")

var id;

let changeTime = setInterval(function()
{
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";

    var randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if(randomNumber == 1){
        id = "content1";
    }
    if(randomNumber == 2){
        id = "content2";
    }
    if(randomNumber == 3){
        id = "content3";
    }
    if(randomNumber == 4){
        id = "content4";
    }
    if(randomNumber == 5){
        id = "content5";
    }
        
    document.getElementById(`${id}`).style.display = "block";
}, 5000)