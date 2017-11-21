$(document).ready(function () {
    var trivia = [
        [
            quest0 = {
                question: "Who plays on this movie?",
                selection: ["Bill Murray", "Will Smith", "Kevin James", "Brad Pitt"],
                answer: "Will Smith"
            },
            quest1 = {
                question: "Who plays on this TV show?",
                selection: ["Jennifer Lawrence", "Chris Evans", "Chris Pratt", "Matt Damon"],
                answer: "Chris Evans"
            },
            quest2 = {
                question: "Name this movie?",
                selection: ["Star Wars", "Lord of the Rings", "Back to the Future", "Guardian of the Galaxy"],
                answer: "Lord of the Rings"
            },
            quest3 = {
                question: "Who is the main character in this movie?",
                selection: ["Master Chief", "Capt. America", "Thor", "Wonder Woman"],
                answer: "Thor"
            },
            quest4 = {
                question: "Who is the enemy?",
                selection: ["Darth Vador", "Green Goblin", "Joker", "Zombies"],
                answer: "Darth Vador"
            }
        ],
        [
            quest0 = {
                question: "what war happened in the early 1800's?",
                selection: ["War of 1812", "Revolutionary War", "Civil War", "World War II"],
                answer: "War of 1812"
            },
            quest1 = {
                question: "What started World War II for America?",
                selection: ["Assination of a Duke", "Pearl Habor Bombing", "Nazi invading Poland", "Matt Damon"],
                answer: "Pearl Habor Bombing"
            },
            quest2 = {
                question: "When was the Decraltion of Indpendence written?",
                selection: ["July 4th", "December 25th", "September 11th", "February 29th"],
                answer: "July 4th"
            },
            quest3 = {
                question: "What state was the last to join the US?",
                selection: ["Hawaii", "Alaska", "Arizona", "Oklahoma"],
                answer: "Hawaii"
            },
            quest4 = {
                question: "Who is the enemy?",
                selection: ["Nazis", "Confeteres", "French", "England"],
                answer: "Nazis"
            }
        ]
    ]
    var randQuest = [0, 1, 2, 3, 4];
    var catPick;
    var numOfQuest = 0;
    var loadQuestPage = function () {

        var shuffle = trivia[catPick][randQuest[numOfQuest]].selection;
        shuffle.sort(function () { return 0.5 - Math.random() });
        $("#question").text(trivia[catPick][randQuest[numOfQuest]].question);
        for (var i = 0; i < 4; i++) {
            $(".ans" + i).text(shuffle[i]);
            if (shuffle[i] === trivia[catPick][randQuest[numOfQuest]].answer) {
                $(".ans" + i).attr("id", "correct");
            }
        }
        $("#next").hide();
        start();
        $(".answers").css("background-color", "white");
    }
    $(".container").on("click", ".category", function () {
        $(".container").empty();
        $(".container").html(triviaPage);
        catPick = $(this).attr("value");
        randQuest.sort(function () { return 0.5 - Math.random() });
        loadQuestPage();

    });
    $(".container").on("click", ".answers", function () {
        var select = $(this);
        if (select.text().trim() === trivia[catPick][randQuest[numOfQuest]].answer) {
            select.css("background-color", "#06df06");
        } else {
            select.css("background-color", "red");
            $(".answers:has(#correct)").css("background-color", "#06df06");
        }
        stop();
    });
    $(".container").on("click", "#next", function () {
        $(".main-pg").addClass("bounceOutRight");
        numOfQuest++;
        setTimeout(function () {
            $(".main-pg").removeClass("bounceOutRight");
            $("#correct").removeAttr("id");
            loadQuestPage();
        }, 3000);
    });
    // Timer SetUp
    var time = 20;
    var intveralID;
    var count = function () {
        time--;
        var show = time;
        if (time < 10) {
            show = "0" + time
        }
        if (time < 6) {
            $("#time").css('color', 'red');
        }
        if(time <= 0) {
            stop();
        }
        $("#timer").text(show);
    }
    var start = function () {
        intveralID = setInterval(count, 1000);
        $("#time").css("color", "black")
        $("#timer").text("20");
    }
    var stop = function () {
        clearInterval(intveralID);
        console.log(intveralID);
        time = 20;
        $("#timer").text("00");
        $("#next").show();
        $(".answers:has(#correct)").css("background-color", "#06df06");
    }


});
var triviaPage = "<div class='row'>" +
    "<div class='col-12'>" +
    "<div class='card my-3 main-pg animated bounceInLeft'>" +
    "<div class='card-body'>" +
    "<h2>Question</h2>" +
    "<div class='row'>" +
    "<div class='col-12'>" +
    "<div class='card'>" +
    "<div class='card-body'>" +
    "<p id='question'></p>" +
    "</div></div></div></div><hr>" +
    "<div class='row'>" +
    "<div class='col-md-6 mt-3'>" +
    "<div class='card answers'>" +
    "<div class='card-body'>" +
    "<p class='ans0'></p>" +
    "</div></div></div>" +
    "<div class='col-md-6 mt-3'>" +
    "<div class='card answers'>" +
    "<div class='card-body'>" +
    "<p class='ans1'></p>" +
    "</div></div></div></div>" +
    "<div class='row'>" +
    "<div class='col-md-6 mt-3'>" +
    "<div class='card answers'>" +
    "<div class='card-body'>" +
    "<p class='ans2'></p>" +
    "</div></div></div>" +
    "<div class='col-md-6 mt-3'>" +
    "<div class='card answers'>" +
    "<div class='card-body'>" +
    "<p class='ans3'></p>" +
    "</div></div></div></div></div>" +
    "<div class='row'>" +
    "<div class='col-12 text-center'>" +
    "<button type='button' class='btn btn-primary float-right mb-3 mr-3' id='next'>Next</button>" +
    "<h5 id='time'> Time Left: <span id='timer'>00</span></h5>" +
    "</div></div></div></div></div>"