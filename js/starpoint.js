var totalpoint;
function getPoint(){
    var url = window.location.href
    // console.log(url)
    var point = url.split("?");
    totalpoint = point[1]
    document.getElementById("totalpoint").textContent = `Your Score : ${totalpoint}`
    castlePoint()
}
function castlePoint(){
    var star = document.getElementById("star").src
    star = star.split("image/")
    star = star[1]
    star = star.charAt(0);
    if(totalpoint >= 15){
        
    }else if(totalpoint >= 10){

    }else if(totalpoint >= 5){

    }else{

    }
    console.log(totalpoint)
    console.log(star)
}
