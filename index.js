//shuffle cards
function shuffle() {
  for (var i = 0; i < 4; i++) {
    var n = Math.floor(Math.random() * 13) + 1;
    var x = Math.floor(Math.random() * 4) + 1;
    switch (n) {
      case 1:
        n = "A";
        break;

      case 11:
        n = "J";
        break;

      case 12:
        n = "Q";
        break;

      case 13:
        n = "K";
        break;

    }

    switch (x) {
      case 1:
        x = "C";
        break;

      case 2:
        x = "D";
        break;

      case 3:
        x = "H";
        break;

      case 4:
        x = "S";
        break;

    }

    document.querySelectorAll(".play-card")[i].setAttribute("src", "images/cards/" + n + x + ".png");
    document.querySelectorAll("input")[i].checked = false;
    document.querySelectorAll("input")[i].setAttribute("value", n+x);
    document.querySelector(".selected-card").style.visibility = "hidden";
  }

}

function play(){
  var flag = 0;
  for (var i = 0; i < 4; i++){
    debugger
    var checked = document.querySelectorAll("input")[i].checked;
    if(checked == true){
        animateCards();
        flag = 1;
        var selectedcard = document.querySelectorAll("input")[i].getAttribute("value");
        document.querySelector(".selected-card img").setAttribute("src", "images/cards/" + selectedcard + ".png");
        document.querySelector(".selected-card").style.visibility = "visible";
        document.querySelector(".sub-heading").innerHTML = "2. Guess your card";
        document.querySelectorAll("input")[i].checked = false;
    }
  }
if (flag == 0){
  alert("Please select a card to play");
}
}

function animateCards(){
  document.querySelector(".flip-card-inner").classList.add("rotate");
  // var i = 0;
  // do {
  //     // document.querySelector(".play-card.card"+i).setAttribute("src", "images/cards/red_back.png");
  //
  //     i++;
  // } while (i < 4);
}
