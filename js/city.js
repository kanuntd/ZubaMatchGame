/*id 1-9 เป็น id รูปปกติ
id 1load-9load เป็น id รูปโหลดเรียงตามปุ่ม
id 1gray-9gray เป็น id รูปสีเทา ไม่สามารถกดเล่นได้*/ 


function onload(){
    // document.getElementById("1").style.visibility = "hidden";
    document.getElementById("2").style.visibility = "hidden";
    document.getElementById("3").style.visibility = "hidden";
    document.getElementById("4").style.visibility = "hidden";
    document.getElementById("5").style.visibility = "hidden";
    document.getElementById("6").style.visibility = "hidden";
    document.getElementById("7").style.visibility = "hidden";
    document.getElementById("8").style.visibility = "hidden";
    document.getElementById("9").style.visibility = "hidden";
    
    document.getElementById("1load").style.visibility = "hidden";
    document.getElementById("3load").style.visibility = "hidden";
    document.getElementById("4load").style.visibility = "hidden";
    document.getElementById("5load").style.visibility = "hidden";
    document.getElementById("6load").style.visibility = "hidden";
    document.getElementById("7load").style.visibility = "hidden";
    document.getElementById("8load").style.visibility = "hidden";
    document.getElementById("9load").style.visibility = "hidden";

    document.getElementById("2gray").style.visibility = "hidden";



}
function click1(){
    document.getElementById("1").style.visibility = "hidden";
    document.getElementById("2").style.visibility = "hidden";
    document.getElementById("3").style.visibility = "hidden";
    document.getElementById("4").style.visibility = "hidden";
    document.getElementById("5").style.visibility = "hidden";
    document.getElementById("6").style.visibility = "hidden";
    document.getElementById("7").style.visibility = "hidden";
    document.getElementById("8").style.visibility = "hidden";
    document.getElementById("9").style.visibility = "hidden";

    document.getElementById("1load").style.visibility = "visible";
    document.getElementById("2load").style.visibility = "hidden";
    document.getElementById("3load").style.visibility = "hidden";
    document.getElementById("4load").style.visibility = "hidden";
    document.getElementById("5load").style.visibility = "hidden";
    document.getElementById("6load").style.visibility = "hidden";
    document.getElementById("7load").style.visibility = "hidden";
    document.getElementById("8load").style.visibility = "hidden";
    document.getElementById("9load").style.visibility = "hidden";

    document.getElementById("2gray").style.visibility = "visible";
    document.getElementById("3gray").style.visibility = "visible";
    document.getElementById("4gray").style.visibility = "visible";
    document.getElementById("5gray").style.visibility = "visible";
    document.getElementById("6gray").style.visibility = "visible";
    document.getElementById("7gray").style.visibility = "visible";
    document.getElementById("8gray").style.visibility = "visible";
    document.getElementById("9gray").style.visibility = "visible";
}
