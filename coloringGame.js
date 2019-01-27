//Color the tiles
var colors = [];
var tiles = document.getElementsByClassName("tile");
assignColor(tiles,null);

//pick a random tile
var pickedColor = colors[generateRandom(tiles.length, 0)];
document.querySelector("#pickedColor").textContent = pickedColor;//show it on screen

//clicking a tile handeling
tilesEvevntListeners(tiles,pickedColor);

//clicking newGame handeling
newGameEventListener(tiles);

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

function assignColor(tiles, choosenColor){
    //generate a number of colors equal to number of tiles and assign them t the tiles
    for(var i = 0; i< tiles.length ; i++){
        if(choosenColor == null){
            color = generateColor();
            colors.push(color);
            tiles[i].style.backgroundColor = color;
        }else{
            tiles[i].style.backgroundColor = choosenColor;
        }
    }
}

function tilesEvevntListeners(tiles, pickedColor){
    //clicking on a tile and the consequences if true guess or false
    for(var i  = 0 ; i < tiles.length ; i++ ){
        tiles[i].addEventListener('click',function(){
                if(pickedColor == this.style.backgroundColor){
                    assignColor(tiles,pickedColor);
                    document.querySelector("#result").textContent = "Correct";
                    document.querySelector("#subheader").style.backgroundColor = pickedColor;
                    document.querySelector("#reset").textContent = "Try Again ?"
                }else{
                    this.style.backgroundColor = document.querySelector("body").style.backgroundColor;
                    document.querySelector("#result").textContent = "Try Again";
                }
        })
    }
}

function newGameEventListener(tiles){
    var reset = document.querySelector("#reset");
    reset.addEventListener('click',function(){
        assignColor(tiles,null);
        document.querySelector("#result").textContent = "";
        var pickedColor = colors[generateRandom(tiles.length, 0)];
        document.querySelector("#pickedColor").textContent = pickedColor;
        document.querySelector("#reset").textContent = "New Game"
    })
}