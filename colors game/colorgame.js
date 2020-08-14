var numSquare = 6;
var colors = [];
var colorPicked;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var displayRgb = document.getElementById("displayRgb");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");
// displayRgb.textContent = colorPicked;

init();

function init(){
    setUpModeSelector();
    setUpSquares();
    reset();
}

function setUpModeSelector(){
    for(var i=0; i<modeButton.length; i++){
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquare = 3 : numSquare = 6 ;
            reset();
        });
    }
}

function setUpSquares(){
    for(var i=0; i<squares.length; i++){
        // squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            clickedColor = this.style.backgroundColor;
            // console.log(clickedColor, colorPicked, "outside");
            if(clickedColor === colorPicked){
                for(var i=0; i<squares.length; i++){
                    messageDisplay.textContent = "Correct!";
                    changeColor(clickedColor);
                    resetButton.textContent = "PLAY AGAIN?";
                    h1.style.backgroundColor = clickedColor;            
                }
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent  = "Try again!";
            }
        });
    }
}

function reset(){
    //select a list of new random color
    colors = randomColorSelector(numSquare);
    //pick a new color 
    colorPicked = colorPicker();
    //change h1 rgb color
    displayRgb.textContent = colorPicked;
    //display empty 
    messageDisplay.textContent = "";
    //change all square color
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    //change the heading back to background color
    h1.style.backgroundColor = "steelblue";
    //set button to new color 
    resetButton.textContent = "NEW COLOR";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColor(clickedColor){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = clickedColor;
    }
}

function colorPicker(){
    var random = Math.floor(Math.random()*numSquare);
    return colors[random];
}

function randomColorSelector(num){
// define array 
    var arr = []
// push random rgb color
    for(var i=0; i<num; i++){
        // randomColor(i);
        arr.push(randomColor(i));
    }
// return array
    return arr;
}

function randomColor(){
    //random color for red
    var r = Math.floor(Math.random()*256);
    //random color for blue 
    var g = Math.floor(Math.random()*256);
    //random color for blue
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r +", " + g + ", " + b + ")";  
}

// hardBtn.addEventListener("click", function(){
// hardBtn.classList.add("selected");
// easyBtn.classList.remove("selected");
// numSquare = 6;
// colors = randomColorSelector(numSquare);
// colorPicked = colorPicker();
// displayRgb.textContent = colorPicked;
// for(var i=0; i<squares.length; i++){
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
// }
// });

// easyBtn.addEventListener("click", function(){
// easyBtn.classList.add("selected");
// hardBtn.classList.remove("selected");
// numSquare = 3;
// colors = randomColorSelector(numSquare);
// colorPicked = colorPicker();
// displayRgb.textContent = colorPicked;
// for(var i=0; i<squares.length; i++){
//     if(colors[i]){
//         squares[i].style.backgroundColor = colors[i];
//     }else{
//         squares[i].style.display = "none";
//     }
// }
// });

// resetButton.addEventListener("click", function(){
//     reset();
//     //select a list of new random color
//     colors = randomColorSelector(numSquare);
//     //pick a new color 
//     colorPicked = colorPicker();
//     //change h1 rgb color
//     displayRgb.textContent = colorPicked;
//     //display empty 
//     messageDisplay.textContent = "";
//     // console.log(colorPicked);
//     //change all square color
//     for(var i=0; i<squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];

//     }
//     //change the heading back to background color
//     h1.style.backgroundColor = "steelblue";
//     //set button to new color 
//     resetButton.textContent = "NEW COLOR";
// });