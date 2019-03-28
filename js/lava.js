var cardMax = 7;
var checkPoint = 1;
var cards = [];
var ansCards = [];
var score = 0;
var solve = [];


function load() {

    //reset array
    resetArray();

    //เปิดปุ่ม OK
    document.getElementById("okClick").disabled = false;

    //เช็คว่าเป็นด่านไหน
    if (checkPoint === 1) {
        document.getElementById("checkPoint").innerHTML = "Checkpoinr &nbsp;" + checkPoint + "&nbsp; คำสั่ง &nbsp; : &nbsp;จงเรียงตัวเลขจากน้อยไปมาก"
        randomCard();
    } else if (checkPoint === 2) {
        document.getElementById("checkPoint").innerHTML = "Checkpoinr &nbsp;" + checkPoint + "&nbsp; คำสั่ง &nbsp; : &nbsp;จงเรียงตัวเลขจากน้อยไปมาก"
        randomCardNormal();
    }
    else if (checkPoint === 3) {
        document.getElementById("checkPoint").innerHTML = "Checkpoinr &nbsp;" + checkPoint + "&nbsp; คำสั่ง &nbsp; : &nbsp;จงเรียงตัวเลขจากน้อยไปมาก"
        randomCardHard();
    }
    //alert("Are you ready!!");


    //*********************************************  Time  *********************************************/
    var timeleft = 30;

    //ก่อนนับ
    document.getElementById("countdowntimer").innerHTML = "Game over in &nbsp;" +timeleft+ "&nbsp; Seconds";
    document.getElementById("countdowntimer").style.color = "#000000";

    var overTimer = setInterval(function () {
        timeleft--;
        document.getElementById("countdowntimer").innerHTML = "Game over in &nbsp;" +timeleft+ "&nbsp; Seconds";
        if (timeleft <= 0) {
            clearInterval(overTimer);
            document.getElementById("countdowntimer").innerHTML = "Game Over.";
            document.getElementById("countdowntimer").style.color = "#ff0000";
            gameStop();
        }
    }, 1000);
}

//random and settext button
function randomCard() {

    //cards[i] = random
    while (cards.length < cardMax) {
        var random = Math.floor(Math.random() * 10) + 1;
        // console.log("random: "+random);
        // console.log("indexOf"+cards.indexOf(random));

        // indexOf ใช้หาว่ามีค่า random ใน cards ไหม?
        if (cards.indexOf(random) === -1) {
            cards.push(random);
            solve.push(random);
        }
    }
    //console.log(cards);

    //ให้ solve เรียงคำตอบ
    solve.sort(function (a, b) { return a - b });


    //set text to button random
    for (i = 0; i < cardMax; i++) {
        var button = document.getElementById(String("random" + (i + 1)));
        //button.setAttribute("class", "card");
        button.disabled = false;
        button.setAttribute("data-score", cards[i]);
        button.innerHTML = "<span class='card-score'>" + cards[i] + "</span>";

    }

    //set text to button ans
    for (i = 0; i < cardMax; i++) {
        var ans = document.getElementById(String("ans" + (i + 1)));
        //ans.setAttribute("class", "card");
        //ans.setAttribute("data-score", undefined);
        ans.innerHTML = "<span class='card-score'>" + "&nbsp" + "</span>";

    }

}


//randomClick
function randomClick(obj) {
    var cardScore = parseInt(obj.dataset.score);
    // console.log(obj);
    // console.log(cardScore);

    for (i = 0; i < cardMax; i++) {
        if (ansCards[i] === undefined) {
            //ให้ans[i] = obj
            ansCards[i] = cardScore;
            var ans = document.getElementById(String("ans" + (i + 1)));
            ans.setAttribute("data-score", ansCards[i]);
            ans.innerHTML = "<span class='card-score'>" + ansCards[i] + "</span>";
            ans.disabled = "";

            //ให้ตัวที่กดซ่อนตัวเลข
            var random = document.getElementById(obj.id);
            //console.log(random);
            //console.log(obj.id);
            random.innerHTML = "<span class='card-score'>" + "&nbsp" + "</span>";
            random.disabled = "true";
            break;
        }
    }

}


//ansClick
function ansClick(obj) {
    var cardScore = parseInt(obj.dataset.score);

    for (i = 0; i < cardMax; i++) {
        if (cards[i] === cardScore) {
            //ให้random[i] = obj
            var random = document.getElementById(String("random" + (i + 1)));
            random.innerHTML = "<span class='card-score'>" + cardScore + "</span>";
            random.disabled = "";

            //ให้ตัวที่กดลบค่าและว่าง
            for (i = 0; i < cardMax; i++) {
                if (ansCards[i] === cardScore) {
                    ansCards[i] = undefined;
                }
            }
            var ans = document.getElementById(obj.id);
            //console.log(ans);
            //console.log(obj.id);
            ans.setAttribute("data-score", undefined);
            ans.innerHTML = "<span class='card-score'>" + "&nbsp" + "</span>";
            ans.disabled = "true";

            break;
        }
    }
}


//OK Click button
function checkAns() {
    //check ans is empty
    var bool = false;
    for (i = 0; i < cardMax; i++) {
        if (ansCards[i] === undefined) {
            bool = true;
            break;
        }
    }

    if (bool) {
        window.alert("กรุณาเลือกคำตอบให้ครบถ้วน");
    }
    else {
        for (i = 0; i < cardMax; i++) {
            if (solve[i] === ansCards[i]) {
                score = score + 20;
            }
        }
        setTextScore();
        nextGame();
    }
    //console.log(solve);
    //console.log(ansCards);
}


//setTextScore
function setTextScore() {
    document.getElementById("scoreboard").innerHTML = "&nbsp;&nbsp;Score : &nbsp;&nbsp;" + score
}


//nextGame
function nextGame() {

    resetArray();

    //เช็คว่าเป็นด่านไหน
    if (checkPoint === 1) {
        randomCard();
    } else if (checkPoint === 2) {
        randomCardNormal();
    }
    else if (checkPoint === 3) {
        randomCardHard();
    }

    //set disabled=true button random
    for (i = 0; i < cardMax; i++) {
        var random = document.getElementById(String("random" + (i + 1)));
        random.disabled = false;
        //console.log(random);
    }

    //set disabled=false button ans
    for (i = 0; i < cardMax; i++) {
        var ans = document.getElementById(String("ans" + (i + 1)));
        ans.removeAttribute("data-score");
        ans.disabled = true;
        //console.log(ans);
    }
}


//resetArray
function resetArray() {
    cards = [];
    ansCards = [];
    solve = [];
}

//Game Stop
function gameStop() {
    resetArray();

    //ปิดปุ่ม OK
    document.getElementById("okClick").disabled = true;

    //set disabled=true button random
    for (i = 0; i < cardMax; i++) {
        var random = document.getElementById(String("random" + (i + 1)));
        random.disabled = true;
        //console.log(random);
    }

    //set disabled=true button ans
    for (i = 0; i < cardMax; i++) {
        var ans = document.getElementById(String("ans" + (i + 1)));
        ans.removeAttribute("data-score");
        ans.disabled = true;
        //console.log(ans);
    }

    //สรุปคะแนน
    setTextScore();

    //เพิ่มค่าเพื่อจะเปลี่ยนด่าน
    checkPoint = checkPoint + 1;

    //ถ้าครบ 3 ด่านแล้วไปหน้าถัดไป
    if(checkPoint === 4){
        window.location = "./ice.html"
    }

    //จบเกมเตรียมไปหน้าต่อไป
    alertNext();
}


//alert to next checkpoint
function alertNext() {
    var timeleft = 10;
    var overTimer = setInterval(function () {
        timeleft--;
        document.getElementById("alertPoint").innerHTML ="next checkpoint in" +timeleft;
        if (timeleft < 0) {
            clearInterval(overTimer);
            document.getElementById("alertPoint").innerHTML ="";
            load();
        }
    }, 1000);
}

function pause10s(){
    var timeleft = 10;
    var overTimer = setInterval(function () {
        timeleft--;
        if (timeleft < 0) {
            clearInterval(overTimer);
            load();
        }
    }, 1000);
}



//------------------------------------------------Checkpoint 2-----------------------------------------------------------

function randomCardNormal() {

    //cards[i] = random
    while (cards.length < cardMax) {
        var random = (Math.floor(Math.random() * 10) + (Math.floor(Math.random() * 10)) + (Math.floor(Math.random() * 10)));

        // indexOf ใช้หาว่ามีค่า random ใน cards ไหม?
        if (cards.indexOf(random) === -1) {
            cards.push(random);
            solve.push(random);
        }
    }
    //console.log(cards);

    //ให้ solve เรียงคำตอบ
    solve.sort(function (a, b) { return a - b });


    //set text to button random
    for (i = 0; i < cardMax; i++) {
        var button = document.getElementById(String("random" + (i + 1)));
        //button.setAttribute("class", "card");
        button.disabled = false;
        button.setAttribute("data-score", cards[i]);
        button.innerHTML = "<span class='card-score'>" + cards[i] + "</span>";

    }

    //set text to button ans
    for (i = 0; i < cardMax; i++) {
        var ans = document.getElementById(String("ans" + (i + 1)));
        //ans.setAttribute("class", "card");
        //ans.setAttribute("data-score", undefined);
        ans.innerHTML = "<span class='card-score'>" + "&nbsp" + "</span>";

    }

}




//------------------------------------------------Checkpoint 3-----------------------------------------------------------

function randomCardHard() {

    //cards[i] = random
    while (cards.length < cardMax) {
        var random = Math.floor(Math.random() * 100) + 1;;

        // indexOf ใช้หาว่ามีค่า random ใน cards ไหม?
        if (cards.indexOf(random) === -1) {
            cards.push(random);
            solve.push(random);
        }
    }
    //console.log(cards);

    //ให้ solve เรียงคำตอบ
    solve.sort(function (a, b) { return a - b });


    //set text to button random
    for (i = 0; i < cardMax; i++) {
        var button = document.getElementById(String("random" + (i + 1)));
        //button.setAttribute("class", "card");
        button.disabled = false;
        button.setAttribute("data-score", cards[i]);
        button.innerHTML = "<span class='card-score'>" + cards[i] + "</span>";

    }

    //set text to button ans
    for (i = 0; i < cardMax; i++) {
        var ans = document.getElementById(String("ans" + (i + 1)));
        //ans.setAttribute("class", "card");
        //ans.setAttribute("data-score", undefined);
        ans.innerHTML = "<span class='card-score'>" + "&nbsp" + "</span>";

    }

}