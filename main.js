// event listener
let button = document.getElementById("btn1");
button.addEventListener("click", eightBall);
document.getElementById("output");
//  function
function eightBall() {
  let statement = document.getElementById("input").value.toLowerCase();
  let randNum = Math.random();
  if (statement == "") {
    document.getElementById("output").innerHTML = " ENTER SOMETHING!";
  } else if (statement == "Is JavaScript awesome") {
    document.getElementById("output").innerHTML = " Of Course!";
  } else if (randNum < 0.2) {
    document.getElementById("output").innerHTML = " Without a Doubt.";
  } else if (randNum < 0.4) {
    document.getElementById("output").innerHTML = " As I see it, yes.";
  } else if (randNum < 0.6) {
    document.getElementById("output").innerHTML = " Concentrate and ask again.";
  } else if (randNum < 0.8) {
    document.getElementById("output").innerHTML = " Don't count on it.";
  } else {
    document.getElementById("output").innerHTML = " Outlook not so good.";
  }
}
