

// ------------------GLOBAL VARIABLES----------------------
// snowflake variables 
var snowflake1 = [Math.floor(Math.random() * 10) + 2];
console.log(snowflake1);
var snowflake2 = [Math.floor(Math.random() * 10) + 2];
console.log(snowflake2);
var snowflake3 = [Math.floor(Math.random() * 10) + 2];
console.log(snowflake3);
var snowflake4 = [Math.floor(Math.random() * 10) + 2];
console.log(snowflake4);

// stat variables 
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
    console.log("CPU CHOICE " + cpuChoice);

// variable to generate random number between 1 and 12 (for crystals)
// var crystals = [Math.floor(Math.random() * 10) + 2];
    // console.log(crystals);

function reset() {
    wins = 0;
    losses = 0;
    score = 0;
    numberToMatch = [];
    // snowflakes = [Math.floor(Math.random() * 10) + 2];
    
}console.log("RESET " + reset());
    

// for (var i = 0; i < crystals.length; i++) {

//     crystalImage.attr("data-crystalValue", crystals[i]);
    
$(document).ready(function(){
    
    
        // initiates game on crystal click 
    $('.snowflakes').click(function() {
        reset();
        console.log(reset());
        alert("Crystal clicked");   
        
    


    
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


                        // To Do
// style instructions page and add demo 
// Make it snow 
// Add timer 
