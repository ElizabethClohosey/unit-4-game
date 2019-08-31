

// ------------------GLOBAL VARIABLES----------------------
// snowflake variables 



// var snowflake1 = randomNumber(12, 1)
// console.log(snowflake1);
// var snowflake2 = Math.floor(Math.random() * 10) + 2];
// console.log(snowflake2);
// var snowflake3 = [Math.floor(Math.random() * 10) + 2];
// console.log(snowflake3);
// var snowflake4 = [Math.floor(Math.random() * 10) + 2];
// console.log(snowflake4);

// stat variables 
var wins = 0;
var losses = 0;
var score = 0;
var numberToMatch;

// variables to get element from html in order to log stats 
var winsText = $('#wins');
var lossesText = $('#losses');
var scoreText = $('#score');
var numberToMatchText = $('#number-to-match');
// var crystalImage = $('#crystal-image');

// variable to generate random number between 18 and 120
var cpuChoice = Math.floor(Math.random() * 120) + 1;
    console.log("CPU CHOICE " + cpuChoice);

// variable to generate random number between 1 and 12 (for crystals)
// var crystals = [Math.floor(Math.random() * 10) + 2];
    // console.log(crystals);

var state = {

    imageSrcs : [
    "https://media.npr.org/assets/img/2010/10/26/03_kiruna1_custom-5143d4c45be0c6a8da5f8ece7337b1d4efc177cd-s800-c15.jpg",
    "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2009/1/6/1231252559400/Gallery-Snowflakes-A-Doub-003.jpg?width=700&quality=85&auto=format&fit=max&s=c99679139bc0ccd3e599bf6b78f02897",
    "http://www.snowcrystals.com/designer/IMG_9634-A1.jpg",
    "https://media.wnyc.org/i/800/0/c/85/photologue/images/79/snowflake_tout.jpg"
    ]

}

function renderImages() {
    state.imageSrcs.forEach(function(src, index) {
        var imageHtml = `
        <img id="snowFlake-${index + 1}" alt="" src="${src}" number=${randomNumber(12, 1)} />`;
        $('#snowflake-images').append(imageHtml);
    })
}


function randomNumber(range, bound) {
    return Math.floor(Math.random() * range) + bound;
} console.log(randomNumber());

function reset() {
    wins = 0;
    losses = 0;
    score = 0;
    randomNumber();
}
    

  renderImages();  

$(document).ready(function(){
    
    
    
        // initiates game on crystal click 
    $('#snowflake-images').click(function() {
        reset();
        console.log("ON CLICK RESET " + reset());
        randomNumber();
        console.log(randomNumber());
        alert("Snowflake clicked");   
        
    


    
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

