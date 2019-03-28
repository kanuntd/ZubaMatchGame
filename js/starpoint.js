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
        document.getElementById("star").src = `image/${3}Satr.png`
    }else if(totalpoint >= 10){
        document.getElementById("star").src = `image/${2}Satr.png`
    }else if(totalpoint >= 5){
        document.getElementById("star").src = `image/${1}Satr.png`
    }else{

    }
    console.log(totalpoint)
    console.log(star)
}
