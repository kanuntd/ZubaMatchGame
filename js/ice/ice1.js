var click;
var sign;
var num1, num2, reLocation, result, result1, result2, result3;
var select;
var scoreValue = 0;
var now = window.location.href;
now = now.split("/lil/")
now = now[2]


function init(){
  var timeleft = 29;
  var x = document.getElementById("time"); 
  var downloadTimer = setInterval(function () {
      document.getElementById("timeIce").innerHTML = timeleft;
      timeleft -= 1;
      if (timeleft == 0) {
        x.pause();
          clearInterval(downloadTimer);
          document.getElementById("timeIce").innerHTML = "0"
          Timeout();
      }else if(timeleft == 9){
        x.play();
      }
  }, 1000);
  plusORminus()

}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  click = ev.target.id;
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var src = document.getElementById(click).src;
  document.getElementById(ev.target.id).src = src;
  select = data;
  setTime()

}
function plusORminus() {
  
  sign = Math.floor(Math.random() * 2 + 1);
  num1 = Math.floor(Math.random() * 10 + 1);
  reLocation = Math.floor(Math.random() * 4 + 1);
  result;
  var signImage = document.getElementById("sign");

  //Random sign plus OR minus
  if (sign == 2) {
    num2 = Math.floor(Math.random() * num1 + 1);
  } else {
    num2 = Math.floor(Math.random() * 10 + 1);
  }
  var bag1 = document.getElementById("bag1");
  bag1.src = "image/number/" + num1 + ".png";

  var bag2 = document.getElementById("bag2");
  bag2.src = "image/number/" + num2 + ".png";

  var bag3 = document.getElementById("bag3");
  bag3.src = "image/number/question.png";


  //Result
  if (sign == 1) {
    signImage.src = "image/number/plus.png";
    result = num1 + num2;
  } else {
    signImage.src = "image/number/minus.png";
    result = num1 - num2;
  }

  //Result incorrect!
  if (result == 0) {
    result1 = 1;
    result2 = 2;
    result3 = 3;

  } else if (result == 1) {
    result1 = 0;
    result2 = 2;
    result3 = 3;
  } else {
    result1 = result + 1;
    result2 = result - 1;
    result3 = result + 2;
  }


  //Set image bag


  if (reLocation == 1) {
    var bag4 = document.getElementById("bag4");
    bag4.src = "image/number/" + result + ".png";

    var bag5 = document.getElementById("bag5");
    bag5.src = "image/number/" + result1 + ".png";

    var bag6 = document.getElementById("bag6");
    bag6.src = "image/number/" + result2 + ".png";

    var bag7 = document.getElementById("bag7");
    bag7.src = "image/number/" + result3 + ".png";

  } else if (reLocation == 2) {
    var bag4 = document.getElementById("bag4");
    bag4.src = "image/number/" + result1 + ".png";

    var bag5 = document.getElementById("bag5");
    bag5.src = "image/number/" + result + ".png";

    var bag6 = document.getElementById("bag6");
    bag6.src = "image/number/" + result2 + ".png";

    var bag7 = document.getElementById("bag7");
    bag7.src = "image/number/" + result3 + ".png";

  } else if (reLocation == 3) {
    var bag4 = document.getElementById("bag4");
    bag4.src = "image/number/" + result1 + ".png";

    var bag5 = document.getElementById("bag5");
    bag5.src = "image/number/" + result2 + ".png";

    var bag6 = document.getElementById("bag6");
    bag6.src = "image/number/" + result + ".png";

    var bag7 = document.getElementById("bag7");
    bag7.src = "image/number/" + result3 + ".png";
  } else {
    var bag4 = document.getElementById("bag4");
    bag4.src = "image/number/" + result1 + ".png";

    var bag5 = document.getElementById("bag5");
    bag5.src = "image/number/" + result2 + ".png";

    var bag6 = document.getElementById("bag6");
    bag6.src = "image/number/" + result3 + ".png";

    var bag7 = document.getElementById("bag7");
    bag7.src = "image/number/" + result + ".png";
  }

}

function score() {
  if (reLocation == 1) {
    if (select == "bag4") {
      scoreValue = scoreValue + 100;
      var x = document.getElementById("correct"); 
      x.play(); 
    }else{
      var x = document.getElementById("incorrect"); 
      x.play();
    }
  } else if (reLocation == 2) {
    if (select == "bag5") {
      scoreValue = scoreValue + 100;
      var x = document.getElementById("correct"); 
      x.play(); 
    }else{
      var x = document.getElementById("incorrect"); 
      x.play();
    }
  } else if (reLocation == 3) {
    if (select == "bag6") {
      scoreValue = scoreValue + 100;
      var x = document.getElementById("correct"); 
      x.play(); 
    }else{
      var x = document.getElementById("incorrect"); 
      x.play();
    }
  } else {
    if (select == "bag7") {
      scoreValue = scoreValue + 100;
      var x = document.getElementById("correct"); 
      x.play(); 
    }else{
      var x = document.getElementById("incorrect"); 
      x.play();
    }
  }
  console.log(scoreValue);
  document.getElementById("score").innerHTML = "Your Score:  " + scoreValue
}

function setTime() {
  setTimeout(function () {
    score()
  }, 500)
  setTimeout(function () {
    plusORminus()
  }, 500)
}
function Timeout() {
  console.log("*******")
  var maxlevel = window.location.href
    maxlevel = maxlevel.split("/lil/")
    window.location.href = "star.html?"+scoreValue+"?ice"+"?"+maxlevel[1].charAt(0)+"?"+now
}

