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

let hossz = terulet.getAttribute("maxlength");
console.log(hossz);

terulet.addEventListener("input", () => {

});