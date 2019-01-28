var tiles = document.querySelectorAll(".tile");
var picked = document.querySelector("#pickedColor");
var result = document.querySelector("#result");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var body = document.querySelector("body");
var numColors = 6;
var colors = generateColors(numColors);
var pickedColor = colors[generateRandom(numColors,0)];
picked.textContent = pickedColor; 
assignColor(colors);

resetButton.addEventListener('click',function(){
    //generate all new colors
    colors = generateColors(numColors);    
    //pick a new random color 
    pickedColor = colors[generateRandom(numColors,0)];

    picked.textContent = pickedColor;
    //change color of tiles
    assignColor(colors);

    result.textContent = ""; 
    resetButton.textContent = "New Game";
    header.style.background = "steelblue";
});

easybtn.addEventListener('click',function(){
    numColors = 3;
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    colors = generateColors(3);
    pickedColor = colors[generateRandom(3,0)];
    for (var i = 0 ; i < tiles.length ; i++){
        if (i < 3 ){
            tiles[i].style.background = colors[i];
        }else{
            tiles[i].style.display = 'none';
        }
    }
});

hardbtn.addEventListener('click',function(){
    numColors = 6;
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    colors = generateColors(tiles.length);
    pickedColor = colors[generateRandom(6,0)];
    assignColor(colors);
});

for(var i = 0 ; i < tiles.length ; i++){
    tiles[i].addEventListener('click',function(){
        if(this.style.backgroundColor == pickedColor){
            assignColor(pickedColor);
            result.textContent = "Correct !";
            header.style.backgroundColor = pickedColor;
            resetButton.textContent = "Try Again";
        }else{
            this.style.backgroundColor = body.style.background;
            result.textContent = "Try Again !";
        }
    });
}

function generateRandom(upperBound, lowerBound){
    //Given the range of the random number generate one
    return  Math.floor((Math.random()*(upperBound-lowerBound)))+lowerBound; 
}

function generateColors(numOfTiles){
    //generate a new random color 
    var colorsArray = [];
    var color="";
    for (var i = 0; i < numOfTiles ; i++){
        var redPercent = generateRandom(255, 0);
        var greenPercent = generateRandom(255, 0);
        var bluePercent = generateRandom(255, 0);
        color = "rgb("+redPercent+", "+greenPercent+", "+bluePercent+")";
        colorsArray.push(color);
    }
    return colorsArray;
}

function assignColor(colorsArray){
    for(var i = 0; i < tiles.length ; i++){
        if (typeof colorsArray == "string"){
            tiles[i].style.backgroundColor = colorsArray;
        }
        else{
            tiles[i].style.backgroundColor = colorsArray[i];
            if(numColors == 6){
                tiles[i].style.display = 'block';
            }
        }
    }
}
