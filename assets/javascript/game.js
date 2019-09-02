

// ------------------GLOBAL VARIABLES----------------------
// snowflake variables 
var snowflake1 = randomNumber(12, 1);
var snowflake2 = randomNumber(12, 1);
var snowflake3 = randomNumber(12, 1);
var snowflake4 = randomNumber(12, 1);

// stat variables 
var wins = 0;
var losses = 0;
var score = 0;
var numberToMatch;

// variables to get element from html in order to log stats 
// var winsText = $('#wins');
// var lossesText = $('#losses');
// var scoreText = $('#score');
// var numberToMatchText = $('#number-to-match');

// variable to generate random number between 18 and 120
var cpuChoice = Math.floor(Math.random() * 120) + 1;
    console.log("CPU CHOICE " + cpuChoice);

function randomNumber(range, bound) {
    return Math.floor(Math.random() * range) + bound;
}

function gameReset () {
    wins = 0;
    // console.log("GAME RESET WINS " + wins)
    losses = 0;
    // console.log("GAME LOSSES RESET " + losses);
    winsLossesReset();
    // score = 0;
    // // console.log("GAME SCORE RESET " + score);
    // cpuChoice = Math.floor(Math.random() * 120) + 1;
    // // console.log("CPU CHOICE " + cpuChoice);
    // snowflake1 = randomNumber(12, 1);
    // // console.log("GAME RESET SF 1 " + snowflake1);
    // snowflake2 = randomNumber(12, 1);
    // // console.log("GAME RESET SF 2 " + snowflake2);
    // snowflake3 = randomNumber(12, 1);
    // // console.log("GAME RESET SF 3 " + snowflake3);
    // snowflake4 = randomNumber(12, 1);
    // // console.log("GAME RESET SF 4 " + snowflake4);
}

function winsLossesReset () {
    score = 0;
    console.log("WINS/LOSSES RESET " + losses)
    cpuChoice = Math.floor(Math.random() * 120) + 1;
    // console.log("WINS/LOSSES RESET CPU CHOICE " + cpuChoice);
    snowflake1 = randomNumber(12, 1);
    // console.log("WINS/LOSSES RESET SF 1 " + snowflake1);
    snowflake2 = randomNumber(12, 1);
    // console.log("WINS/LOSSES RESET SF 2 " + snowflake2);
    snowflake3 = randomNumber(12, 1);
    // console.log("WINS/LOSSES RESET SF 3 " + snowflake3);
    snowflake4 = randomNumber(12, 1);
    // console.log("WINS/LOSSES RESET SF 4 " + snowflake4);
}

    function gameCheck () {
        if (numberToMatch === score) {
            wins++
            winsLossesReset();
        } 
     }   
        
        // else if (score > numberToMatch) {
        //     losses++
        //     winsLossesReset();
        // }
    

    function start () {
        
    }
$(document).ready(function(){

// Initiates game on any snowflake click 
    $('#snowflake-1').click(function() {
        console.log("SF ONE ON CLICK " + snowflake1);
        score += snowflake1;
        $("#score").html("Total Snowflakes Collected: " + score);
        gameCheck();
        // $(snowflake1).prepend(score);
    });

    $('#snowflake-2').click(function() {
        console.log("SF TWO ON CLICK " + snowflake2);
        score += snowflake2;
        $("#score").html("Total Snowflakes Collected: " + score);
        gameCheck();
    });

    $('#snowflake-3').click(function() {
        console.log("SF THREE ON CLICK " + snowflake3);
        score += snowflake3;
        $("#score").html("Total Snowflakes Collected: " + score);
        gameCheck();
    });

    $('#snowflake-4').click(function() {
        console.log("SF FOUR ON CLICK " + snowflake4);
        score += snowflake4;
        $("#score").html("Total Snowflakes Collected: " + score);
        gameCheck();
    });

    

    
    $("#wins").html("Wins: " + wins)
        // console.log(winsText);
    $("#losses").html("Losses: " + losses);
        // console.log(lossesText);
    $("#score").html("Total Snowflakes Collected: " + score);
        // console.log(scoreText);
    $("#number-to-match").html("Snowflakes To Collect: " + cpuChoice);
        // console.log(numberToMatchText); not working in console but I get correct output
});
                        // Git Commit
    // crystals working onclick.  Made reset function - console logs as undefined                      

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

// function renderImages() {
//     state.imageSrcs.forEach(function(src, index) {
//         var imageHtml = `
//         <img id="snowFlake-${index + 1}" alt="" src="${src}" number=${randomNumber(12, 1)} />`;
//         $('#snowflake-images').append(imageHtml);
//     })
// }console.log("IMAGE RENDERING " + renderImages());

// variable to generate random number between 1 and 12 (for crystals)
// var crystals = [Math.floor(Math.random() * 10) + 2];
    // console.log(crystals);

// var state = {

//     imageSrcs : [
//     "https://media.npr.org/assets/img/2010/10/26/03_kiruna1_custom-5143d4c45be0c6a8da5f8ece7337b1d4efc177cd-s800-c15.jpg",
//     "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2009/1/6/1231252559400/Gallery-Snowflakes-A-Doub-003.jpg?width=700&quality=85&auto=format&fit=max&s=c99679139bc0ccd3e599bf6b78f02897",
//     "http://www.snowcrystals.com/designer/IMG_9634-A1.jpg",
//     "https://media.wnyc.org/i/800/0/c/85/photologue/images/79/snowflake_tout.jpg"
//     ]

// }