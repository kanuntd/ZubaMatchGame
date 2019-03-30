/*id 1-9 เป็น id รูปปกติ(YELLOW)
id 1load-9load เป็น id รูปโหลดเรียงตามปุ่ม
id 1gray-9gray เป็น id รูปสีเทา ไม่สามารถกดเล่นได้*/

var max = window.location.href;
max = max.split("?")
max = max[1]/////edit to 1
if(max === "ten"){
    max = 10
}
function onload() {
    
    for (i = 1; i <= 9; i++) {
        document.getElementById("text").style.visibility = "hidden";
        document.getElementById("zuba").style.visibility = "hidden";
       // console.log(max)
        if (i <= max) {
            document.getElementById(i).style.visibility = "visible";
            document.getElementById(`${i}load`).style.visibility = "hidden";
            document.getElementById(`${i}gray`).style.visibility = "hidden";
           
            if (i == max) {
                document.getElementById(`${i}load`).style.visibility = "visible";
                document.getElementById(`${i}gray`).style.visibility = "hidden";
                document.getElementById(i).style.visibility = "hidden";
               
            }if(max == 10){
                document.getElementById("text").style.visibility = "visible";
                document.getElementById("zuba").style.visibility = "visible";
            }
        } else {
            document.getElementById("text").style.visibility = "hidden";
            document.getElementById("zuba").style.visibility = "hidden";
            document.getElementById(`${i}gray`).style.visibility = "visible";
            document.getElementById(i).style.visibility = "hidden";
            document.getElementById(`${i}load`).style.visibility = "hidden";
        }
    }
}
function clicknow(id) {
    
    for (i = 1; i <= 9; i++) {
        if (i <= max) {
            document.getElementById(i).style.visibility = "visible";
        } else {
            document.getElementById(i).style.visibility = "hidden";
        }
    }
    for (i = 1; i <= 9; i++) {
        if (i == id) {
            document.getElementById(`${i}load`).style.visibility = "visible";
            document.getElementById(i).style.visibility = "hidden";
            document.getElementById(`${i}gray`).style.visibility = "hidden";
        } else {
            document.getElementById(`${i}load`).style.visibility = "hidden";
            //document.getElementById(`${i}gray`).style.visibility = "visible";
        }
    }
}

function go(lv) {
    //alert(lv)
    switch (lv) {
        case 1:
            window.location.href = "lava.html?" + `max/lil/${max}?cli/lil/${lv}`
            break;
        case 2:
            window.location.href = "lava.html?" + `max/lil/${max}?cli/lil/${lv}`
            break;
        case 3:
            window.location.href = "lava.html?" + `max/lil/${max}?cli/lil/${lv}`
            break;
        case 4:
            window.location.href = "ice1.html?" + `max/lil/${max}?cli/lil/${lv}`
            break;
        case 5:
            window.location.href = "ice2.html?" + `max/lil/${max}?cli/lil/${lv}`
            break;
        case 6:
            window.location.href = "ice3.html?" + `max/lil/${max}?cli/lil/${lv}`
            break;
        case 7:
            window.location.href = "castle.html?" + `max/lil/${max}?cli/lil/${lv}`
            break;
        case 8:
            window.location.href = "castle.html?" + `max/lil/${max}?cli/lil/${lv}`
            break;
        case 9:
            window.location.href = "castle.html?" + `max/lil/${max}?cli/lil/${lv}`
            break;
    }
}
