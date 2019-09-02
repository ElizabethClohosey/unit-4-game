

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

// variable to generate random number between 18 and 120 for Total Snowflakes To Collect 
var cpuChoice = Math.floor(Math.random() * 120) + 1;
    console.log("CPU CHOICE " + cpuChoice);

// variable to generate random number between 1 and 12 for Total Snowflakes Collected 
function randomNumber(range, bound) {
    return Math.floor(Math.random() * range) + bound;
}
// Another way to acheive this 
// var crystals = [Math.floor(Math.random() * 10) + 2];

function reset () {
    score = 0;
    cpuChoice = Math.floor(Math.random() * 120) + 1;
    $("#number-to-match").html("Snowflakes To Collect: " + cpuChoice);
    $("#score").html("Total Snowflakes Collected: " + score);
    snowflake1 = randomNumber(12, 1);
    snowflake2 = randomNumber(12, 1);
    snowflake3 = randomNumber(12, 1);
    snowflake4 = randomNumber(12, 1);
}

    function gameCheck () {
        if (cpuChoice === score) {
            wins++;
            $("#wins").html("Wins: " + wins);
            alert("YOU WON");
            reset();
        } else if (score > cpuChoice) {
            losses++
            $("#losses").html("Losses: " + losses);
            alert("YOU LOST");
            reset();
        }
    } 

    function start () {
        reset();
        wins = 0;
        losses = 0;
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
        $("#number-to-match").html("Snowflakes To Collect: " + cpuChoice);
        $("#score").html("Total Snowflakes Collected: " + score);
    }

    $(document).ready(function(){

// Initiates game on any snowflake click and chooses random number to match
start();

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
});

                         // Notes

// Function variable to generate random Number between 19 and 120 
// *****Should I use this or a global variable?***** 
// var cpuChoice = function() {
//     cpuChoice = [Math.floor(Math.random() * 102) + 19];
// }
// console.log(cpuChoice);  


                        // To Do

// make responsive on smaller screen 
// make object for snowflake 1-4 variables 
// add timer 
// change instructions after time is added 
// Make it snow 

                        // Tutor example - ask TA about this 
// function renderImages() {
//     state.imageSrcs.forEach(function(src, index) {
//         var imageHtml = `
//         <img id="snowFlake-${index + 1}" alt="" src="${src}" number=${randomNumber(12, 1)} />`;
//         $('#snowflake-images').append(imageHtml);
//     })
// }

                // tutor example - adding images dynamically - I didn't understand how to use this in my future code 
// var state = {

//     imageSrcs : [
//     "https://media.npr.org/assets/img/2010/10/26/03_kiruna1_custom-5143d4c45be0c6a8da5f8ece7337b1d4efc177cd-s800-c15.jpg",
//     "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2009/1/6/1231252559400/Gallery-Snowflakes-A-Doub-003.jpg?width=700&quality=85&auto=format&fit=max&s=c99679139bc0ccd3e599bf6b78f02897",
//     "http://www.snowcrystals.com/designer/IMG_9634-A1.jpg",
//     "https://media.wnyc.org/i/800/0/c/85/photologue/images/79/snowflake_tout.jpg"
//     ]
// }