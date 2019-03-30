var totalpoint;
var star;

function getPoint() {
    var url = window.location.href
    // console.log(url)
    var point = url.split("?");
    totalpoint = point[1]
    document.getElementById("totalpoint").textContent = `Your Score : ${totalpoint}`
    var lv = point[2]
    if (lv == "cs") {
        castlePoint()
    } else if (lv == "ice") {
        icePoint()
    } else if (lv == "lava") {
        lavaPoint()
    }
    console.log(lv)
}
function castlePoint() {
    star = document.getElementById("star").src
    star = star.split("image/")
    star = star[1]
    star = star.charAt(0);
    if (totalpoint >= 15) {
        document.getElementById("star").src = `image/${3}Satr.png`
        star = 3
    } else if (totalpoint >= 10) {
        document.getElementById("star").src = `image/${2}Satr.png`
        star = 2
    } else if (totalpoint >= 5) {
        document.getElementById("star").src = `image/${1}Satr.png`
        star = 1
    } else {
        document.getElementById("star").src = `image/${0}Satr.png`
        star = 0
    }
    console.log("point " + totalpoint)
    console.log("star " + star)
}
function icePoint() {
    star = document.getElementById("star").src
    star = star.split("image/")
    star = star[1]
    star = star.charAt(0);
    if (totalpoint >= 800) {
        document.getElementById("star").src = `image/${3}Satr.png`
        star = 3
    } else if (totalpoint >= 600) {
        document.getElementById("star").src = `image/${2}Satr.png`
        star = 2
    } else if (totalpoint >= 400) {
        document.getElementById("star").src = `image/${1}Satr.png`
        star = 1
    } else {
        document.getElementById("star").src = `image/${0}Satr.png`
        star = 0
    }
    // console.log("point " + totalpoint)
    // console.log("star " + star)
}


function lavaPoint() {
    star = document.getElementById("star").src
    star = star.split("image/")
    star = star[1]
    star = star.charAt(0);
    if (totalpoint >= 360) {
        document.getElementById("star").src = `image/${3}Satr.png`
        star = 3
    } else if (totalpoint >= 280) {
        document.getElementById("star").src = `image/${2}Satr.png`
        star = 2
    } else if (totalpoint >= 140) {
        document.getElementById("star").src = `image/${1}Satr.png`
        star = 1
    } else {
        document.getElementById("star").src = `image/${0}Satr.png`
        star = 0
    }
    // console.log("point " + totalpoint)
    // console.log("star " + star)
}


// ----ถัดไป ----- ไว้ล่างสุด
function next() {
    var now = window.location.href;
    now = now.split("?")
    now = now[4]
    var max = window.location.href;
    max = max.split("?")
    max = max[3]
    if ((star > 0 && max != 9) && (now == max)) {
        max++
    }
    console.log(`max---- ${max}`)
    console.log(`star ${star}`)
    console.log("--ปจบ--->" + now)
    window.location.href = "city.html?" + max
}