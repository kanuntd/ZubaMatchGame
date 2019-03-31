var cardMax = 7;
var checkPoint = 1;
var cards = [];
var ansCards = [];
var score = 0;
var solve = [];

var now = window.location.href;
now = now.split("/lil/")
now = now[2]
checkPoint = now;

//Start
function start() {
    if (checkPoint < 0 || checkPoint > 3) {
        window.location = "./ice1.html"
    } else {
        beforeGame();
    }
}

//Load
function load() {

    //reset array
    resetArray();

    //เปิดปุ่ม OK
    document.getElementById("okClick").disabled = false;

    //เช็คว่าเป็นด่านไหน
    if (checkPoint == 1) {
        document.getElementById("checkPoint").innerHTML = "Checkpoint &nbsp;" + checkPoint + "&nbsp; คำสั่ง &nbsp; : &nbsp;จงเรียงตัวเลขจากน้อยไปมาก"
        randomCard();
    } else if (checkPoint == 2) {
        document.getElementById("checkPoint").innerHTML = "Checkpoint &nbsp;" + checkPoint + "&nbsp; คำสั่ง &nbsp; : &nbsp;จงเรียงตัวเลขจากน้อยไปมาก"
        randomCardNormal();
    }
    else if (checkPoint == 3) {
        document.getElementById("checkPoint").innerHTML = "Checkpoint &nbsp;" + checkPoint + "&nbsp; คำสั่ง &nbsp; : &nbsp;จงเรียงตัวเลขจากน้อยไปมาก"
        randomCardHard();
    }


    //*********************************************  Time  *********************************************/
    var timeleft = 30;
    var sound = document.getElementById("time"); 

    //ก่อนนับ
    document.getElementById("timeCs").innerHTML = timeleft;

    //เริ่มนับ
    var overTimer = setInterval(function () {
        timeleft--;
        document.getElementById("timeCs").innerHTML = timeleft;
        if (timeleft <= 0) {
            clearInterval(overTimer);
            sound.pause();
            gameStop();
        }else if(timeleft == 10){
            sound.play();
        }

    }, 1000);
}

//Random and settext button
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
        ans.removeAttribute("data-score");
        ans.disabled = true;
        ans.innerHTML = "<span class='card-score'>" + "&nbsp" + "</span>";
    }
}


//randomClick
function randomClick(obj) {
    var cardScore = parseInt(obj.dataset.score);
    var sound = document.getElementById("card");
    // console.log(obj);
    // console.log(cardScore);

    for (i = 0; i < cardMax; i++) {
        if (ansCards[i] === undefined) {
            //ให้ans[i] = obj
            ansCards[i] = cardScore;
            var ans = document.getElementById(String("ans" + (i + 1)));
            ans.setAttribute("data-score", ansCards[i]);
            ans.innerHTML = "<span class='card-score'>" + ansCards[i] + "</span>";
            ans.disabled = false;

            //ให้ตัวที่กดซ่อนตัวเลข
            var random = document.getElementById(obj.id);
            //console.log(random);
            //console.log(obj.id);
            random.innerHTML = "<span class='card-score'>" + "&nbsp" + "</span>";
            random.disabled = true;
            break;
        }
    }
    sound.play();
}


//ansClick
function ansClick(obj) {
    var cardScore = parseInt(obj.dataset.score);
    var sound = document.getElementById("card");

    for (i = 0; i < cardMax; i++) {
        if (cards[i] === cardScore) {
            //ให้random[i] = obj
            var random = document.getElementById(String("random" + (i + 1)));
            random.innerHTML = "<span class='card-score'>" + cardScore + "</span>";
            random.disabled = false;

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
            ans.disabled = true;
            break;
        }
    }
    sound.play();
}

//OK Click button
function checkAns() {
    //check ans is empty
    var bool = false;

    //sound
    var sound = document.getElementById("correct");
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
        sound.play();
        setTextScore();
        nextGame();
    }
    //console.log(solve);
    //console.log(ansCards);
}


//setTextScore
function setTextScore() {
    document.getElementById("scoreboard").innerHTML = "&nbsp;&nbsp;Your Score : " + score + "&nbsp;&nbsp;"
}


//nextGame (checkpointเดิม)
function nextGame() {

    resetArray();

    //เช็คว่าเป็นด่านไหน
    if (checkPoint == 1) {
        randomCard();
    } else if (checkPoint == 2) {
        randomCardNormal();
    }
    else if (checkPoint == 3) {
        randomCardHard();
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
        random.innerHTML = "<span class='card-score'>" + "&nbsp" + "</span>";
        random.disabled = true;
        //console.log(random);
    }

    //set disabled=true button ans
    for (i = 0; i < cardMax; i++) {
        var ans = document.getElementById(String("ans" + (i + 1)));
        ans.innerHTML = "<span class='card-score'>" + "&nbsp" + "</span>";
        ans.removeAttribute("data-score");
        ans.disabled = true;
        //console.log(ans);
    }

    //สรุปคะแนน
    setTextScore();

    //ไป check Star
    checkStar();
}

//Check Star
function checkStar() {
    var maxlevel = window.location.href
    maxlevel = maxlevel.split("/lil/")
    window.location.href = "star.html?" + score + "?lava" + "?" + maxlevel[1].charAt(0) + "?" + now
}

//before Game
function beforeGame() {

    //แสดง checkpoint & numClock
    document.getElementById("checkPoint").innerHTML = "Checkpoint &nbsp;" + checkPoint + "&nbsp; คำสั่ง &nbsp; : &nbsp;จงเรียงตัวเลขจากน้อยไปมาก"
    document.getElementById("timeCs").innerHTML = 30;

    //ปิดปุ่ม OK
    document.getElementById("okClick").disabled = true;

    //set disabled=true button random
    for (i = 0; i < cardMax; i++) {
        var random = document.getElementById(String("random" + (i + 1)));
        random.disabled = true;
        //console.log(random);
    }

    //time
    var timeleft = 3;
    document.getElementById("alertPoint").innerHTML = "&nbsp&nbsp Game starts in &nbsp;" + timeleft + "&nbsp&nbsp";

    var overTimer = setInterval(function () {
        timeleft--;
        document.getElementById("alertPoint").innerHTML = "&nbsp&nbsp Game starts in &nbsp;" + timeleft + "&nbsp&nbsp";
        if (timeleft < 0) {
            clearInterval(overTimer);
            document.getElementById("alertPoint").innerHTML = "";
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
        ans.removeAttribute("data-score");
        ans.disabled = true;
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
        ans.removeAttribute("data-score");
        ans.disabled = true;
        ans.innerHTML = "<span class='card-score'>" + "&nbsp" + "</span>";

    }
}