let currMoleTile;
let currSonicTile;
let score = 0;
let gameOver = false;


window.onload = function(){
    setGame();
}

function setGame(){
    //set up the grid for game board in html
    for (let i=0; i<9; i++){
        //<div id="0-8"></div>
        let title = document.createElement("div");
        title.id = i.toString();
        title.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(title);
    }

    setInterval(setMole, 1000); //1000 milliseconds = 1 seconds
    setInterval(setSonic, 2000) //2000 milliseconds = 2 seconds
}

function getRandomTile(){
    // math.random --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole(){
    if (gameOver) {
        return;
    }
    
    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./motobug.png";

    let num = getRandomTile()
    if (currSonicTile && currSonicTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setSonic() {
    if(gameOver) {
        return;
    }

    if(currSonicTile){
        currSonicTile.innerHTML = "";
    }

    let sonic = document.createElement("img");
    sonic.src = "./sonic-1.png";

    let num = getRandomTile()
    if(currMoleTile && currMoleTile.id == num) {
        return;
    }
    currSonicTile = document.getElementById(num);
    currSonicTile.appendChild(sonic);
}

function selectTile() {
if (gameOver) {
    return;
}

    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score

    }
    else if (this == currSonicTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}



