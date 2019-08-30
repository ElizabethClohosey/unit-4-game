// alert("Testing Bitch");



var wins = 0;
var losses = 0;
var score = 0;
var numberToMatch = [];

// variables to get element from html in order to log stats 
var winsText = $('#wins');
var lossesText = $('#losses');
var scoreText = $('#score');
var numberToMatchText = $('#number-to-match');
// var crystalImage = $('#crystal-image');

// variable to generate random number between 18 and 120
var cpuChoice = [Math.floor(Math.random() * 102) + 19];
    console.log(cpuChoice);

// variable to generate random number between 1 and 12 (for crystals)
var crystals = [Math.floor(Math.random() * 10) + 2];
    console.log(crystals);

function reset() {
    wins = 0;
    losses = 0;
    score = 0;
    numberToMatch = [];
    crystals = [Math.floor(Math.random() * 10) + 2];
}

function crystalNumbers() {

}
    

// for (var i = 0; i < crystals.length; i++) {

//     crystalImage.attr("data-crystalValue", crystals[i]);
    
$(document).ready(function(){
    reset();
    console.log(reset());
    
        // initiates game on crystal click 
    $('.crystals').click(function() {
            alert("Crystal clicked bitch");
        
        // var crystalValue = ($(this).attr("data-crystalvalue"));
        // crystalValue = parseInt(crystalValue);
        // score += crystalValue;
        // console.log(score);
    


    
    });
});

    $(winsText).html("Wins: " + wins)
        // console.log(winsText);
    $(lossesText).html("Losses: " + losses);
        // console.log(lossesText);
    $(scoreText).html("Total Snowflakes Collected: " + score);
        // console.log(scoreText);
    $(numberToMatchText).html("Snowflakes To Collect: " + cpuChoice);
        // console.log(numberToMatchText); not working in console but I get correct output

                        // Git Commit
    // crystals working onclick.  Made reset function - won't console log                         

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

