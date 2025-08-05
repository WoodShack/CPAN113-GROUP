// Assign selected DOM elements to variables
let currentImageNumber = 1;
const gameImage = document.getElementById("game-img");
const objectTable = document.getElementById("object-table-body");
let objects = [];

// Check if the click is on an object
function checkClick(clickX,clickY){
    for (let i = 0; i < objects.length; i++) {
        if (clickX >= objects[i].topLeft[0] && clickX <= objects[i].bottomRight[0] && 
            clickY >= objects[i].topLeft[1] && clickY <= objects[i].bottomRight[1]) {
            objects[i].clicked = true;
            console.log("Clicked "+objects[i].name);
        }
    }
    
    updateObjectTable();
}

// Add object to the object list
function addObject(topLeft,bottomRight,name){
    objects.push({
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
addObject([168,81],[315,134],"Tiger");
addObject([13,17],[88,75],"Star");
addObject([125,374],[173,437],"Mushroom");
updateObjectTable();

// Attach event listener
gameImage.addEventListener('click', function(event) {
    const rect = this.getBoundingClientRect(); // position of the image
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
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