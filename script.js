function start(){
    console.log("Game starting!")
    createCircle();
}

function createCircle(){
    //div = circle!
    let circle = document.createElement("div");

    //styles
    circle.innerText = "1";;
    circle.style.width = "180px";
    circle.style.height = "180px";
    circle.style.backgroundColor = "Red";
    circle.style.borderRadius = "50%";
    circle.style.textAlign = "center";
    circle.style.alignContent = "center";
    circle.style.color = "white";
    circle.style.fontSize = "30px";

    circle.style.position = "absolute";
    circle.style.left = getRandomX() + "px";
    circle.style.top = getRandomY() + "px";


    //add to page
    document.body.appendChild(circle);
}

function getRandomX() {
    let randX = Math.random() * window.innerWidth;
    return randX;
}

function getRandomY() {
    let randY = Math.random() * window.innerHeight;
    return randY;
}