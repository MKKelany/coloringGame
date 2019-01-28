var tiles = document.querySelectorAll(".tile");
var colors = generateColors();
assignColor(colors);

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
            tiles[i].style.backgroundColor = colorsArray[i];
    }
}
