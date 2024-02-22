var loader;
var cucc = 0;

function Start(){
loader = setInterval(function()
{
    document.getElementById("loading_msg").style.visibility = "visible";
    document.getElementById("load").style.width = `${cucc}%`;
    cucc += 1;  
    if(cucc == 100){
        clearInterval(loader);
        document.getElementById("loading_msg").style.visibility = "hidden";
        document.getElementById("msg").style.visibility = "visible";
    }
    
}, 10)
}

function Clear(){
    window.location.reload();
}