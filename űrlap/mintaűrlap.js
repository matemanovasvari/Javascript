// kezdésnél a Vezetéknév mező legyen fókuszba helyezve
// objektum.focus()

let veznev = document.getElementById("vnev");
veznev.focus();

// elem elveszti a fókuszt, elhagyjuk a mezőt = blur
// eseménykezelője: onblur
// változott-e a mező tartalma: change - onchange
// történt-e adatbevitel: input - oninput

// veznev.onblur = () => {}
veznev.addEventListener("blur",
 () => {
    if (veznev.value == "") {
        veznev.focus();
        veznev.setAttribute("placeholder", "Adja meg a vezetéknevét");
        veznev.select();
    }
  });

//input eseménykezelő
//számolni fogjuk a beírt karaktereket
let terulet = document.getElementById("k2");

let maxLength = terulet.getAttribute("maxlength");

document.getElementById("actualsize").innerHTML = "0";
document.getElementById("maxsize").innerHTML = maxLength;

terulet.addEventListener("input", () => {
  let actualLength = terulet.value.length;

  document.getElementById("actualsize").innerHTML = actualLength;
  document.getElementById("maxsize").innerHTML = maxLength;
});

//find select options

document.getElementById("k3").addEventListener("change", () =>{
  let k3options = document.querySelectorAll("#k3 option");

  for (i in k3options){
    if(k3options[i].selected && k3options[i].value === "3"){
      window.alert("Correct");
    }
    else{
      window.alert("Uncorrect");
    }
  }
});