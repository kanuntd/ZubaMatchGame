var click;
var sign;
var num1, num2, reLocation, result, result1, result2, result3;
var select;
var scoreValue = 0;

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
function multiORdiv() {
  var array = [];
  sign = Math.floor(Math.random() * 2 + 1);
  num1 = Math.floor(Math.random() * 9 + 1);

  reLocation = Math.floor(Math.random() * 4 + 1);
  result;

  //Random sign plus OR minus
  

  var bag1 = document.getElementById("bag1");
  bag1.src = "image/number/" + num1 + ".png";

  var bag2 = document.getElementById("bag2");
  bag2.src = "image/number/" + num2 + ".png";

  var bag3 = document.getElementById("bag3");
  bag3.src = "image/number/question.png";


  //Result
  var signImage = document.getElementById("sign");
  if (sign == 1) {
    num2 = Math.floor(Math.random() * 9 + 1);
    signImage.src = "image/number/multiply.png";
    result = num1 * num2;
  } else {
    for (i = 1; i <= num1; i++) {
      if (num1 % i == 0) {
        array.push(i);
      }
    }
    num2 = array[Math.floor(Math.random() * array.length)];
    signImage.src = "image/number/division.png";
    result = num1 / num2;
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
    result3 = result - 2;
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
function remix() {
  var array = [];
  sign = Math.floor(Math.random() * 4 + 1);

  //Result
  var signImage = document.getElementById("sign");
  if (sign == 1 || sign == 2) {
    num1 = Math.floor(Math.random() * 30 + 1);
    if (sign == 1) {
      num2 = Math.floor(Math.random() * 30 + 1);
      signImage.src = "image/number/plus.png";
      result = num1 + num2;
    } else {
      num2 = Math.floor(Math.random() * num1 + 1);
      signImage.src = "image/number/minus.png";
      result = num1 - num2;
    }
  } else {
    if (sign == 3) {
      num1 = Math.floor(Math.random() * 8 + 1);
      num2 = Math.floor(Math.random() * 12 + 1);
      signImage.src = "image/number/multiply.png";
      result = num1 * num2;
    } else {
      num1 = Math.floor(Math.random() * 40 + 1);
      for (i = 1; i <= num1; i++) {
        if (num1 % i == 0) {
          array.push(i);
        }
      }
      num2 = array[Math.floor(Math.random() * array.length)];
      signImage.src = "image/number/division.png";
      result = num1 / num2;
      signImage.src = "image/number/division.png";
    }
  }


  reLocation = Math.floor(Math.random() * 4 + 1);


  //Random sign plus OR minus
  
  var bag1 = document.getElementById("bag1");
  bag1.src = "image/number/" + num1 + ".png";

  var bag2 = document.getElementById("bag2");
  bag2.src = "image/number/" + num2 + ".png";

  var bag3 = document.getElementById("bag3");
  bag3.src = "image/number/question.png";




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
    result3 = result - 2;
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
    }
  } else if (reLocation == 2) {
    if (select == "bag5") {
      scoreValue = scoreValue + 100;
    }
  } else if (reLocation == 3) {
    if (select == "bag6") {
      scoreValue = scoreValue + 100;
    }
  } else {
    if (select == "bag7") {
      scoreValue = scoreValue + 100;
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
    plusORminus()()
  }, 500)
  setTimeout(function () {
    multiORdiv()
  }, 500)
  setTimeout(function () {
    remix()
  }, 500)
}



