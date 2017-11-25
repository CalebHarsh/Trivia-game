$(document).ready(function () {
    var trivia = [
        //movies
        [
            quest0 = {
                question: "Who was the longest running character on TV?",
                selection: ["Frasier Crane -Frasier", "Cliff Huxtable -Cosby Show", "Thomas Magnum -Magnum PI", "Hawkeye Pier -MASH"],
                answer: "Frasier Crane -Frasier"
            },
            quest1 = {
                question: "In 'Back to the Future' how fast does the Delorean have to travel through time?",
                selection: ["88 mph", "100 mph", "77 mph", "66 mph"],
                answer: "88 mph"
            },
            quest2 = {
                question: "How many Friday the 13th movies are there in the franchise?",
                selection: ["12", "13", "6", "10"],
                answer: "12"
            },
            quest3 = {
                question: "What holiday classic was a flop at the box office?",
                selection: ["Miracle on 34th Street", "Christmas Story", "White Christmas", "It's a Wonderful Life"],
                answer: "It's a Wonderful Life"
            },
            quest4 = {
                question: 'In what movie is this from, "' + "And that's the way the cookie crumbles" + '"?',
                selection: ["Blades of Glory", "Anchorman", "Ace Ventura Pet Detective", "Bruce Almighty"],
                answer: "Bruce Almighty"
            }
        ],
        //History
        [
            quest0 = {
                question: "Who is known for saying, 'Speak softly, but carry a big stick.'?",
                selection: ["Theodore Roosevelt", "William Churchill", "George Washington", "Andrew Jackson"],
                answer: "Theodore Roosevelt"
            },
            quest1 = {
                question: "How long was the French & Indian War fought?",
                selection: ["7 years", "3 years", "1 year", "5 years"],
                answer: "7 years"
            },
            quest2 = {
                question: "When was the Decraltion of Indpendence accepted by Congress?",
                selection: ["July 4th", "December 25th", "September 11th", "February 29th"],
                answer: "July 4th"
            },
            quest3 = {
                question: "What state was the last to join the United States?",
                selection: ["Hawaii", "Alaska", "Arizona", "Oklahoma"],
                answer: "Hawaii"
            },
            quest4 = {
                question: "'Common Sense' was writtien by whihc person?",
                selection: ["Thomas Paine", "Benjamin Franklin", "John Adems", "Thomas Jefferson"],
                answer: "Thomas Paine"
            }
        ],
        //Mythology
        [
            quest0 = {
                question: "In Greek mythology who is the god of love?",
                selection: ["Venus", "Cupid", "Aphrodite", "Hestia"],
                answer: "Aphrodite"
            },
            quest1 = {
                question: "According to Norse myth, who is Thor's father?",
                selection: ["Odin", "Loki", "Balder", "Frey"],
                answer: "Odin"
            },
            quest2 = {
                question: "What does the god of Ra reign over in Egypt mythology?",
                selection: ["The Underworld", "The Desert", "The Nile", "The Sun"],
                answer: "The Sun"
            },
            quest3 = {
                question: "Of these gods which one did not change it's name from Greek to Roman?",
                selection: ["Jupiter", "Neptune", "Apollo", "Mercury"],
                answer: "Apollo"
            },
            quest4 = {
                question: "Which one is not part of the Big Three, in Greek mythology?",
                selection: ["Zeus", "Posidon", "Hades", "Ares"],
                answer: "Ares"
            }
        ],
        //Miscellanous
        [
            quest0 = {
                question: "What is the scientific term for a group of crows?",
                selection: ["A Murder", "A Flock", "A Pack", "A Fool"],
                answer: "A Murder"
            },
            quest1 = {
                question: "Born Marion Mitchell Morrison, this famous actor has stared in many movies?",
                selection: ["Clint Eastwood", "Johnny Depp", "Marilyn Monroe", "John Wayne"],
                answer: "John Wayne"
            },
            quest2 = {
                question: "What state is known as the Valentine State?",
                selection: ["Florida", "Arizona", "New York", "Hawaii"],
                answer: "Arizona"
            },
            quest3 = {
                question: "How many paintings did Vincent Van Gogh sell in his life?",
                selection: ["10", "12", "1", "23"],
                answer: "1"
            },
            quest4 = {
                question: "How fast can a honeybee bee fly?",
                selection: ["15 mph", "3 mph", "10 mph", "7 mph"],
                answer: "15 mph"
            }
        ]
    ]
    var randQuest = [0, 1, 2, 3, 4];
    var catPick;
    var numOfQuest = 0;
    var correct = 0;
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
    //Start Game 
    $(".container").on("click", "#start", function () {
        $(".container").empty();
        $(".container").html(categoryPage);
    });
    //Pick your category
    $(".container").on("click", ".category", function () {
        $(".container").empty();
        $(".container").html(triviaPage);
        catPick = $(this).attr("value");
        randQuest.sort(function () { return 0.5 - Math.random() });
        loadQuestPage();

    });
    //New Game button
    $(".container").on("click", "#newGame", function () {
        $(".container").empty();
        $(".container").html(categoryPage);
        correct = 0;
        numOfQuest = 0;
    });
    //Answer selection
    $(".container").on("click", ".answers", function () {
        var select = $(this);
        if (select.text().trim() === trivia[catPick][randQuest[numOfQuest]].answer) {
            select.css("background-color", "#06df06");
            correct++;
        } else {
            select.css("background-color", "red");
            $(".answers:has(#correct)").css("background-color", "#06df06");
        }
        stop();
    });
    //Transition to next page
    $(".container").on("click", "#next", function () {
        $(".main-pg").addClass("bounceOutRight");
        setTimeout(function () {
            $(".main-pg").hide();
            $("#loading-img").show();
        }, 600);
        numOfQuest++;
        setTimeout(function () {
            $(".main-pg").removeClass("bounceOutRight");
            $("#correct").removeAttr("id");
            $("#loading-img").hide();
            $(".main-pg").show();
            if (numOfQuest > 4) {
                loadResultsPage();
            } else {
                loadQuestPage();
            }
        },2800);
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
        if (time <= 0) {
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
    //Quit button
    $(".container").on("click", "#quit", function () {
        console.log("You should of Quit")
        location.reload();
    });
    var loadResultsPage = function () {
        $(".container").empty();
        $(".container").html(resultsPage);
        $("#results").text("You got " + correct + " out of 5. You can play again or quit.");
    }

});
var categoryPage = "<h1 class='text-center'>Pick Your Categories:</h1>" +
    "<div class='row text-center'>" +
    "<div class='col-xl-3 col-sm-6 mt-3'>" +
    "<div class='card category' value='0'>" +
    "<h4 class='card-header'>Movies & TV</h4>" +
    "<div class='card-body'>" +
    "<img src='assets/images/movie.jpg' alt='' class='img-fluid'>" +
    "</div></div></div>" +
    "<div class='col-xl-3 col-sm-6 mt-3'>" +
    "<div class='card category' value='1'>" +
    "<h4 class='card-header'>History Facts</h4>" +
    "<div class='card-body'>" +
    "<img src='assets/images/history.jpg' alt='' class='img-fluid'>" +
    "</div></div></div>" +
    "<div class='col-xl-3 col-sm-6 mt-3'>" +
    "<div class='card category' value='2'>" +
    "<h4 class='card-header'>Mythology</h4>" +
    "<div class='card-body'>" +
    "<img src='assets/images/myth.jpg' alt='' class='img-fluid'>" +
    "</div></div></div>" +
    "<div class='col-xl-3 col-sm-6 my-3'>" +
    "<div class='card category' value='3'>" +
    "<h4 class='card-header'>Miscellaneous</h4>" +
    "<div class='card-body'>" +
    "<img src='assets/images/misc.jpeg' alt='' class='img-fluid'>" +
    "</div></div></div></div>"


var triviaPage = "<div class='row'>" +
    "<div class='col-12'>" +
    "<div class='card my-3 main-pg animated bounceInLeft'>" +
    "<div class ='card-header'>" +
    "<h2>Question</h2>" +
    "<p id='question'></p></div>" +
    "<div class='card-body'>" +
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
    "<div class='card-footer'>" +
    "<button type='button' class='btn btn-primary float-right' id='next'>Next</button>" +
    "<h5 id='time'> Time Left: <span id='timer'>00</span></h5>" +
    "</div></div></div><img style='display: none;' id='loading-img' src='assets/images/loading.gif'></div></div>"

var resultsPage = "<div class='card text-center my-3 animated'>" +
    "<h2 class='card-header text-left'>Results:</h2>" +
    "<div class='card-body'>" +
    "<div class='row'><div class='col-12'>" +
    "<p id='results'></p></div></div></div>" +
    "<div class='card-footer'>" +
    "<button id='newGame' type = 'button' class='btn btn-primary float-right'>New Game</button>" +
    "<button id='quit' type='button' class='btn btn-quit float-left'>Quit</button>" +
    "</div></div>"