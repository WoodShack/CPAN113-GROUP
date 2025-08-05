// Imports
import { addScore, subtractScore } from './score.js';

// Assign selected DOM elements to variables
let objects = [];
let currentObjectPos = 0;
let currentImageNumber = 1;
const gameImage = document.getElementById("game-img");
const objectQuestion = document.getElementById("object-question");
const objectInQuestion = document.getElementById("object-in-question");

// Check if the click is on the current object
function checkClick(clickX,clickY){
    //Check if objects array is empty
    if (objects.length === 0) {
        return;
    }

    let currentObject = objects[currentObjectPos];
    if (clickX >= currentObject.topLeft[0] && clickX <= currentObject.bottomRight[0] && 
        clickY >= currentObject.topLeft[1] && clickY <= currentObject.bottomRight[1]) {

        //Current object was clicked, remove it from objects array
        addScore(2);
        console.log("Clicked "+currentObject.name);
        objects.splice(currentObjectPos,1);
        changeCurrentObject();
    } else {
        subtractScore(1);
    }
}

// Add object to the object list
function addObject(imageNum,topLeft,bottomRight,name){
    objects.push({
        imageNum:imageNum,
        topLeft:topLeft,
        bottomRight:bottomRight,
        name:name
    });
}

// Update the current object
function changeCurrentObject(){
    if (objects.length === 0) {
        objectQuestion.innerHTML = "You found everything!";
        return;
    }

    currentObjectPos = Math.floor(Math.random() * objects.length);
    let currentObject = objects[currentObjectPos];
    objectInQuestion.innerHTML = currentObject.name;
}

// Add objects
addObject(1,[125,82],[268,132],"a tiger");
addObject(1,[273,7],[336,65],"a bat");
addObject(1,[297,68],[325,175],"a pink baloon");
addObject(1,[81,370],[128,438],"a mushroom");
addObject(1,[189,413],[220,432],"a spool of green thread");
addObject(1,[299,398],[336,448],"a blue airplane");
addObject(1,[33,340],[72,391],"a blue star");
addObject(1,[75,51],[121,96],"a red die (dice)");
addObject(1,[223,355],[264,412],"a purple four");
addObject(1,[139,191],[215,285],"a pair of red scissors");
addObject(2,[240,81],[273,122],"a basketball net");
addObject(2,[10,198],[64,241],"a drum");
addObject(2,[201,336],[234,351],"a yellow four");
addObject(2,[0,372],[74,488],"a pink bike");
addObject(2,[252,434],[278,489],"a strawberry ice cream cone");
addObject(2,[1,44],[110,172],"a play house");
addObject(2,[101,311],[131,326],"a green D");
addObject(3,[163,221],[200,288],"a teddy bear");
addObject(3,[233,455],[334,541],"a rocking horse");
addObject(3,[17,94],[78,133],"a yellow airplane");
addObject(3,[182,300],[233,333],"a toy dino");
addObject(3,[244,130],[335,303],"a play tent");
addObject(3,[2,165],[70,199],"a yellow truck");
addObject(3,[248,74],[336,201],"a toy castle");
addObject(3,[0,433],[110,534],"a fire truck");
addObject(3,[70,536],[115,595],"a yellow bucket");
addObject(4,[161,209],[205,283],"an anchor");
addObject(4,[279,75],[324,116],"a camera");
addObject(4,[186,350],[256,453],"a treasure chest");
addObject(4,[26,90],[160,143],"a shark");
addObject(5,[207,432],[280,469],"a ufo");
addObject(5,[227,303],[254,339],"a butterfly");
addObject(5,[61,153],[101,186],"a frisbee");
addObject(5,[181,168],[228,231],"a paraglider");
addObject(5,[276,479],[335,597],"a chimney");
addObject(5,[295,324],[323,361],"a blue baloon");
addObject(5,[146,190],[177,212],"a paper airplane");
addObject(5,[34,32],[96,96],"the moon");
addObject(5,[20,160],[130,252],"an eagle");
addObject(6,[100,463],[155,527],"a pair of sandles");
addObject(6,[136,232],[182,241],"a pair of red sunglasses");
addObject(6,[247,146],[305,207],"a blue cooler");
addObject(6,[106,194],[134,220],"an orange bucket");
addObject(6,[136,250],[222,319],"a sand castle");
addObject(6,[228,533],[332,596],"a beach hat");
addObject(6,[235,308],[333,407],"a tshirt");
changeCurrentObject();

// Attach event listener
gameImage.addEventListener('click', function(event) {
    const rect = this.getBoundingClientRect(); // position of the image
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    console.log("User clicked x:"+Math.trunc(x)+" y:"+Math.trunc(y));
    checkClick(x,y);
});

// Image navigation
document.getElementById("back-btn").addEventListener('click', function(event) {
    if(currentImageNumber == 1){
        currentImageNumber = 6;
    } else {
        currentImageNumber -= 1;
    }

    gameImage.src = "img/game-"+currentImageNumber+".webp";
});

document.getElementById("forward-btn").addEventListener('click', function(event) {
    if(currentImageNumber == 6){
        currentImageNumber = 1;
    } else {
        currentImageNumber += 1;
    }

    gameImage.src = "img/game-"+currentImageNumber+".webp";
});