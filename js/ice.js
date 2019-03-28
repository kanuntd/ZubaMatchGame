var click;
var sign;
var num1,num2,reLocation,result,result1,result2,result3;
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


  if(document.getElementById(ev.target.id).src !="file:///D:/work/ZubaMatch/image/number/question.png"){
    var bag1 = document.getElementById("bag1");
    bag1.src = "image/number/" + num1 + ".png";

    var bag2 = document.getElementById("bag2");
    bag2.src = "image/number/" + num2 + ".png";

    var bag3 = document.getElementById("bag3");
    bag3.src = document.getElementById(ev.target.id).src;
  }
  setTime()
  
  //console.log(document.getElementById(ev.target.id).src)
}
function onload() {
  sign = Math.floor(Math.random() * 2 + 1);
  num1 = Math.floor(Math.random() * 20 + 1);
  reLocation = Math.floor(Math.random() * 4 + 1);
  result;
  var signImage = document.getElementById("sign");

  //Random sign plus OR minus
  if (sign == 2) {
    num2 = Math.floor(Math.random() * num1 + 1);
  } else {
    num2 = Math.floor(Math.random() * 20 + 1);
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
  if(result==0){
    result1 = 1;
    result2 = 2;
    result3 = 3;

  }else if(result==1){
    result1 = 0;
    result2 = 2;
    result3 = 3;
  }else if(result==24){
    result1 = 21;
    result2 = 22;
    result3 = 23;
  }else if(result==23){
    result1 = 21;
    result2 = 22;
    result3 = 24;
  }else{
    result1 = result+1;
    result2 = result-1;
    result3 = result+2;
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
function setTime(){
  setTimeout(function(){
    onload()
  },1000)
}

