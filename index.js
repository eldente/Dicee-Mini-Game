
// IGRAČ 1 - KOCKA
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

// IGRAČ 2 - KOCKA
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//RAZULTATI
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩  Pobjeda prvog igrača!";
  document.querySelector("p").innerHTML = "(Osvježi stranicu)";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Pobjeda drugog igrača! 🚩";
  document.querySelector("p").innerHTML = "(Osvježi stranicu)";
}
else {
  document.querySelector("h1").innerHTML = "Izjednačenje!";
  document.querySelector("p").innerHTML = "(Osvježi stranicu)";
}
