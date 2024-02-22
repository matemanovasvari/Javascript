var loader;
var cucc = 0;

function Start(){
loader = setInterval(function()
{
    document.getElementById("load").style.width = `${cucc}%`
    cucc += 1;  
    if(cucc == 100){
        clearInterval(loader)
    }
    
}, 10)
}

function Clear(){
    window.location.reload()
}