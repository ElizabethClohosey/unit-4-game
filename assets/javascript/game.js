// alert("Testing Bitch");



var wins = 0;
var losses = 0;
var score = 0;
var numberToMatch = [];
var imageCrystal = $("<img>");

// variables to get element from html in order to log stats 
var winsText = $('#wins');
    // console.log("wins text "+ winsText);
var lossesText = $('#losses');
    // console.log("losses text " + lossesText);
var scoreText = $('#score');
    // console.log(winsText);
var numberToMatchText = $('#number-to-match');


// variable to generate random number between 18 and 120
var cpuChoice = [Math.floor(Math.random() * 102) + 19];
    console.log(cpuChoice);

// variable to generate random number between 1 and 12 (for crystals)
var crystalNumber = [Math.floor(Math.random() * 10) + 2];
// var crystalNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    console.log(crystalNumber);

// function crystalNumber () {
//     [Math.floor(Math.random() * 10) + 2];
// }

function crystalClick() {
    var imgOne = $('#img-1');
}

$(document).ready(function(){

        // initiates game on crystal click 
    $('img').click(function(){
        
        
      




    
    });
});

    $(winsText).html("Wins: " + wins)
        // console.log(winsText);
    $(lossesText).html("Losses: " + losses);
        // console.log(lossesText);
    $(scoreText).html("Score: " + score);
        // console.log(scoreText);
    $(numberToMatchText).html(cpuChoice);
        // console.log(numberToMatchText); not working in console but I get correct output

                        // Git Commit
        // Created crystal random number and img variable for crystals
                        

                         // Notes

// Function variable to generate random Number between 19 and 120 
// *****Should I use this or a global variable?***** 
// var cpuChoice = function() {
//     cpuChoice = [Math.floor(Math.random() * 102) + 19];
// }
// console.log(cpuChoice);  


//  Alternative to generate random number between 18 and 120    
// var max = 120;
// var min = 19;
// var cpuChoice = [Math.floor(Math.random() * (max - min + 1)) + min];
// console.log(cpuChoice);

                        // To Do
// check video to see if CPU number to reach is there when game starts or on crytal click 

