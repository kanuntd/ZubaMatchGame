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
    var timeleft = 20;
    var downloadTimer = setInterval(function () {
        document.getElementById("time").innerHTML = timeleft + " seconds remaining";
        timeleft -= 1;
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("time").innerHTML = "Finished"
        }
    }, 1000);

    random();
}
function random() {
    var i = Math.floor(Math.random() * 9) + 1;
    var d1 = `image/clock/level1/${i}clock.png`;
    var j = Math.floor(Math.random() * 9) + 1;
    if (j == i) j = Math.floor(Math.random() * 9) + 1;
    var d2 = `image/clock/level1/${j}clock.png`;
    var k = Math.floor(Math.random() * 9) + 1;
    if (k == j || k == i) k = Math.floor(Math.random() * 9) + 1;
    var d3 = `image/clock/level1/${k}clock.png`;
    document.getElementById("drag1").src = d1;
    document.getElementById("drag2").src = d2;
    document.getElementById("drag3").src = d3;
}
function next() {
    var path1 = (document.getElementById("drag1").src);
    var path2 = (document.getElementById("drag2").src);
    var path3 = (document.getElementById("drag3").src);
    var num1 = (document.getElementById("drag1").src).indexOf("clock.png");
    var num2 = (document.getElementById("drag2").src).indexOf("clock.png");
    var num3 = (document.getElementById("drag3").src).indexOf("clock.png");
    var result1 = path1.charAt(num1-1);
    var result2 = path2.charAt(num2-1);
    var result3 = path3.charAt(num3-1);
    console.log(`${result1} -- ${result2} -- ${result3}`)
}