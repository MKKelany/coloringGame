var tiles = document.querySelectorAll(".tile");
var picked = document.querySelector("#pickedColor");
var result = document.querySelector("#result");
var header = document.querySelector("#subheader");
var resetButton = document.querySelector("#reset");
var colors = generateColors();
var pickedColor = colors[generateRandom(6,0)];
picked.textContent = pickedColor; 
assignColor(colors);

resetButton.addEventListener('click',function(){
    //generate all new colors
    colors = generateColors();
    //pick a new random color 
    pickedColor = colors[generateRandom(6,0)];
    //change color of tiles
    assignColor(colors);

    result.textContent = "";
});

for(var i = 0 ; i < tiles.length ; i++){
    tiles[i].addEventListener('click',function(){
        if(this.style.backgroundColor == pickedColor){
            assignColor(pickedColor);
            result.textContent = "Correct !";
            header.style.backgroundColor = pickedColor;
        }else{
            this.style.backgroundColor = document.querySelector("body").style.background;
            result.textContent = "Try Again !";
        }
    });
}

function generateRandom(upperBound, lowerBound){
    //Given the range of the random number generate one
    return  Math.floor((Math.random()*(upperBound-lowerBound)))+lowerBound; 
}

function generateColors(){
    //generate a new random color 
    var colorsArray = [];
    var color="";
    for (var i = 0; i < tiles.length ; i++){
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
        }
    }
}
