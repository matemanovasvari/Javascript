const submitBnt = document.getElementById("submit");
const loginPage = document.getElementById("loginpage");
const mainPage = document.getElementById("mainpage");
const backBnt = document.getElementById("back");

submitBnt.addEventListener("click", () => {
    loginPage.style.display = "none";
    mainPage.style.display = "block";
})

backBnt.addEventListener("click", () => {
    loginPage.style.display = "block";
    mainPage.style.display = "none";
})