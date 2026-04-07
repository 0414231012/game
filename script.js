/*Other stuff to do 
make settings to make the circles bigger/smaller
fix circles not being on screen and going off screen
make press start button delete after being clicked
*/

console.log("Hello World!");

let currentNum = 1;
let level = 1;

function start(){
    console.log("Game starting!")
    startLevel1();
}

function startLevel1 () {
    level = 1;
    currentNum = 1;
    setTimeout(createCircle, 500, 1);
    setTimeout(createCircle, 1000, 2);
    setTimeout(createCircle, 1500, 3);
}

function startLevel2 () {
    level = 2;
    currentNum = 1;
    setTimeout(createCircle, 500, 1);
    setTimeout(createCircle, 1000, 2);
    setTimeout(createCircle, 1500, 3);
    setTimeout(createCircle, 2000, 4);
    setTimeout(createCircle, 2500, 5);
}

function createCircle(num){
    //div = circle!
    let circle = document.createElement("div");

    //styles
    circle.innerText = num;
    circle.style.width = "100px";
    circle.style.height = "100px";
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
    if (circle.innerText == currentNum) {
        circle.remove();
        currentNum++;
        if (currentNum == 4 && level == 1)  {
            startLevel2();
        }
        else if (currentNum == 5 && level == 2){
            startLevel3();
        }
    }
}

