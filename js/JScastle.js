var now = window.location.href;
now = now.split("/lil/")
now = now[2]

function allowDrop(ev) {
    ev.preventDefault();
}
var click;
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    click = ev.target.id
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));
    // console.log(`${data} ---`)
    if (ev.target.id.length != 1) {
        var x = ev.target.id
        var src = document.getElementById(click).src;
        var src2 = document.getElementById(x).src;
        console.log(`รูปที่ ${click} ไปใส่ ${x}`)
        console.log(`รูปที่ ${x} ไปใส่ ${click}`)
        document.getElementById(x).src = src
        document.getElementById(click).src = src2
        // document.getElementById("ev.target.id").src = "image/clock3.png";
        // console.log(`from ${click} to ${ev.target.id.src}`)
    } else {
        console.log(55)
    }
}
function init() {
    console.log(now + "  ----> ด่านปัจจุบัน")
    var timeleft = 29;
    var x = document.getElementById("time"); 
    var downloadTimer = setInterval(function () {
        document.getElementById("timeCs").innerHTML = timeleft;
        timeleft -= 1;
        if (timeleft == 0) {
            x.pause();
            clearInterval(downloadTimer);
            document.getElementById("timeCs").innerHTML = "0"
            Timeout();
        }else if(timeleft == 9){
            x.play();
        }
    }, 700);

    random();
}
function random() {
    var lev;
    if(now == 7){
        lev = 1
    }else if(now == 8){
        lev = 2
    }else if(now == 9){
        lev = 3
    }
    var i = Math.floor(Math.random() * 9) + 1;
    var d1 = `image/clock/level${lev}/${i}clock.png`;
    var j = Math.floor(Math.random() * 9) + 1;
    while(j == i) j = Math.floor(Math.random() * 9) + 1;
    var d2 = `image/clock/level${lev}/${j}clock.png`;
    var k = Math.floor(Math.random(lev) * 9) + 1;
    while (k == j || k == i) k = Math.floor(Math.random() * 9) + 1;
    var d3 = `image/clock/level${lev}/${k}clock.png`;
    document.getElementById("drag1").src = d1;
    document.getElementById("drag2").src = d2;
    document.getElementById("drag3").src = d3;
}
var result1;
var result2;
var result3;
var point = 0;
function next() {
    var path1 = (document.getElementById("drag1").src);
    var path2 = (document.getElementById("drag2").src);
    var path3 = (document.getElementById("drag3").src);
    var num1 = (document.getElementById("drag1").src).indexOf("clock.png");
    var num2 = (document.getElementById("drag2").src).indexOf("clock.png");
    var num3 = (document.getElementById("drag3").src).indexOf("clock.png");
    result1 = path1.charAt(num1 - 1);
    result2 = path2.charAt(num2 - 1);
    result3 = path3.charAt(num3 - 1);
    console.log(`${result1} -- ${result2} -- ${result3} --result--`)
    var time = document.getElementById("timeCs").textContent
    console.log(time + "-time-")

    if ((result1 < result2) && (result2 < result3)) {
        point += 100;
        var score = document.getElementById("scoreCs")
        score.innerHTML = `Your Score : ${point}`
        console.log(point + "point")
        var x = document.getElementById("correct"); 
        x.play(); 
     
    } else {
        if (point > 55) {
            point -= 55;
            var score = document.getElementById("scoreCs")
            score.innerHTML = `Your Score : ${point}`
            var x = document.getElementById("incorrect"); 
        x.play();
        }else{
            point = 0;
            var score = document.getElementById("scoreCs")
            score.innerHTML = `Your Score : ${point}`
            var x = document.getElementById("incorrect"); 
            x.play();
        }
    }
    random()
}
function Timeout() {
    var maxlevel = window.location.href
    maxlevel = maxlevel.split("/lil/")
    maxlevel = maxlevel[1].split("?")
    console.log(maxlevel[0]+"<---------")
    window.location.href = "star.html?"+point+"?cs"+"?"+maxlevel[0]+"?"+now
}