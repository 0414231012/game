function start(){
    console.log("Game starting!")
    setTimeout(createCircle, 500, 1);
    setTimeout(createCircle, 1000, 2);
    setTimeout(createCircle, 1500, 3);

}

function createCircle(num){
    //div = circle!
    let circle = document.createElement("div");

    //styles
    circle.innerText = num;
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

    //make it clickable
    circle.addEventListener("click", checkForRemove);


}

function getRandomX() {
    let randX = Math.random() * window.innerWidth;
    return randX;
}

function getRandomY() {
    let randY = Math.random() * window.innerHeight;
    return randY;
}

//checks for right circle and removes 

function checkForRemove(event) {
    let circle = event.target;
    console.log(circle.innerText)
}