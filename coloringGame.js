//Color the tiles
var colors = [];
var tiles = document.getElementsByClassName("tile");
assignColor(tiles);

//pick a random tile
var pickedColor = colors[generateRandom(tiles.length, 0)];
document.querySelector("#pickedColor").textContent = pickedColor;//show it on screen


function generateRandom(upperBound, lowerBound){
    //Given the range of the random number generate one
    return  Math.floor((Math.random()*(upperBound-lowerBound)))+lowerBound; 
}

function generateColor(){
    //generate a new random color 
    var redPercent = generateRandom(255, 0);
    var greenPercent = generateRandom(255, 0);
    var bluePercent = generateRandom(255, 0);
    return "rgb("+redPercent+", "+greenPercent+", "+bluePercent+")";
}

function assignColor(tiles){
    //generate a number of colors equal to number of tiles and assign them t the tiles
    for(var i = 0; i< tiles.length ; i++){
        var color = generateColor();
        colors.push(color);
        tiles[i].style.backgroundColor = color;
    }
}