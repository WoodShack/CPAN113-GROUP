// Assign selected DOM elements to variables
let currentImageNumber = 1;
const gameImage = document.getElementById("game-img");
const objectTable = document.getElementById("object-table-body");
let objects = [];

// Check if the click is on an object
function checkClick(clickX,clickY){
    for (let i = 0; i < objects.length; i++) {

        //Skip objects not on the current image
        if(objects[i].imageNum != currentImageNumber){
            continue;
        }

        if (clickX >= objects[i].topLeft[0] && clickX <= objects[i].bottomRight[0] && 
            clickY >= objects[i].topLeft[1] && clickY <= objects[i].bottomRight[1]) {
            objects[i].clicked = true;
            console.log("Clicked "+objects[i].name);
        }
    }
    
    updateObjectTable();
}

// Add object to the object list
function addObject(imageNum,topLeft,bottomRight,name){
    objects.push({
        imageNum:imageNum,
        topLeft:topLeft,
        bottomRight:bottomRight,
        name:name,
        clicked:false
    });
}

// Update the object table
function updateObjectTable(){
    let html = "";
    for(object of objects){
        html += "<tr><td>"+object.name+"</td><td>"+object.clicked+"</td></tr>";
    }
    objectTable.innerHTML = html;
}

// Add objects
addObject(1,[125,82],[268,132],"tiger");
addObject(1,[273,7],[336,65],"bat");
addObject(1,[297,68],[325,175],"pink baloon");
addObject(1,[81,370],[128,438],"mushroom");
addObject(1,[189,413],[220,432],"green thread");
addObject(1,[299,398],[336,448],"blue airplane");
addObject(1,[33,340],[72,391],"blue star");
addObject(1,[75,51],[121,96],"red dice");
addObject(1,[223,355],[264,412],"purple four");
addObject(1,[139,191],[215,285],"red scissors");
addObject(2,[240,81],[273,122],"basketball net");
addObject(2,[10,198],[64,241],"drum");
addObject(2,[201,336],[234,351],"yellow four");
addObject(2,[0,372],[74,488],"pink bike");
addObject(2,[252,434],[278,489],"strawberry ice cream cone");
addObject(2,[1,44],[110,172],"play house");
addObject(2,[101,311],[131,326],"green D");
addObject(3,[163,221],[200,288],"teddy bear");
addObject(3,[233,455],[334,541],"rocking horse");
addObject(3,[17,94],[78,133],"yellow airplane");
addObject(3,[182,300],[233,333],"toy dino");
addObject(3,[244,130],[335,303],"play tent");
addObject(3,[2,165],[70,199],"yellow truck");
addObject(3,[248,74],[336,201],"toy castle");
addObject(3,[0,433],[110,534],"fire truck");
addObject(3,[70,536],[115,595],"yellow bucket");
addObject(4,[161,209],[205,283],"anchor");
addObject(4,[279,75],[324,116],"camera");
addObject(4,[186,350],[256,453],"treasure chest");
addObject(4,[26,90],[160,143],"shark");
addObject(5,[207,432],[280,469],"ufo");
addObject(5,[227,303],[254,339],"butterfly");
addObject(5,[61,153],[101,186],"frisbee");
addObject(5,[181,168],[228,231],"paraglider");
addObject(5,[276,479],[335,597],"chimney");
addObject(5,[295,324],[323,361],"blue baloon");
addObject(5,[146,190],[177,212],"paper airplane");
addObject(5,[34,32],[96,96],"moon");
addObject(5,[20,160],[130,252],"eagle");
addObject(6,[100,463],[155,527],"sandles");
addObject(6,[136,232],[182,241],"red sunglasses");
addObject(6,[247,146],[305,207],"blue cooler");
addObject(6,[106,194],[134,220],"orange bucket");
addObject(6,[136,250],[222,319],"sand castle");
addObject(6,[228,533],[332,596],"beach hat");
addObject(6,[235,308],[333,407],"tshirt");
updateObjectTable();

// Attach event listener
gameImage.addEventListener('click', function(event) {
    const rect = this.getBoundingClientRect(); // position of the image
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    console.log("User clicked x:"+Math.trunc(x)+" y:"+Math.trunc(y));
    checkClick(x,y);
});

/* Image navigation */
document.getElementById("back-btn").addEventListener('click', function(event) {
    if(currentImageNumber == 1){
        currentImageNumber = 6;
    } else {
        currentImageNumber -= 1;
    }

    updateGameImage();
});

document.getElementById("forward-btn").addEventListener('click', function(event) {
    if(currentImageNumber == 6){
        currentImageNumber = 1;
    } else {
        currentImageNumber += 1;
    }

    updateGameImage();
});

function updateGameImage(){
    gameImage.src = "img/game-"+currentImageNumber+".webp";
}