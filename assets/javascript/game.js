$(document).ready(function () {
    var trivia = [
        //movies
        {
            question: "Who was the longest running character on TV?",
            selection: ["Frasier Crane -Frasier", "Cliff Huxtable -Cosby Show", "Thomas Magnum -Magnum PI", "Hawkeye Pier -MASH"],
            answer: "Frasier Crane -Frasier",
            category: "Movies & TV"
        },
        {
            question: "In 'Back to the Future' how fast does the Delorean have to go to travel through time?",
            selection: ["88 mph", "100 mph", "77 mph", "66 mph"],
            answer: "88 mph",
            category: "Movies & TV"
        },
        {
            question: "How many Friday the 13th movies are there in the franchise?",
            selection: ["12", "13", "6", "10"],
            answer: "12",
            category: "Movies & TV"
        },
        {
            question: "What holiday classic was a flop at the box office?",
            selection: ["Miracle on 34th Street", "Christmas Story", "White Christmas", "It's a Wonderful Life"],
            answer: "It's a Wonderful Life",
            category: "Movies & TV"
        },
        {
            question: 'In what movie is this from, "' + "And that's the way the cookie crumbles" + '"?',
            selection: ["Blades of Glory", "Anchorman", "Ace Ventura Pet Detective", "Bruce Almighty"],
            answer: "Bruce Almighty",
            category: "Movies & TV"
        },
        //History
        {
            question: "Who is known for saying, 'Speak softly, but carry a big stick'?",
            selection: ["Theodore Roosevelt", "William Churchill", "George Washington", "Andrew Jackson"],
            answer: "Theodore Roosevelt",
            category: "History"
        },
        {
            question: "How long was the French & Indian War fought?",
            selection: ["7 years", "3 years", "1 year", "5 years"],
            answer: "7 years",
            category: "History"
        },
        {
            question: "When was the Declaration of Indpendence accepted by Congress?",
            selection: ["July 4th", "December 25th", "September 11th", "February 29th"],
            answer: "July 4th",
            category: "History"
        },
        {
            question: "What state was the last to join the United States?",
            selection: ["Hawaii", "Alaska", "Arizona", "Oklahoma"],
            answer: "Hawaii",
            category: "History"
        },
        {
            question: "'Common Sense' was writtien by which person?",
            selection: ["Thomas Paine", "Benjamin Franklin", "John Adams", "Thomas Jefferson"],
            answer: "Thomas Paine",
            category: "History"
        },
        //Mythology
        {
            question: "In Greek mythology who is the god of love?",
            selection: ["Venus", "Cupid", "Aphrodite", "Hestia"],
            answer: "Aphrodite",
            category: "Mythology"
        },
        {
            question: "According to Norse myth, who is Thor's father?",
            selection: ["Odin", "Loki", "Balder", "Frey"],
            answer: "Odin",
            category: "Mythology"
        },
        {
            question: "What does the god of Ra reign over in Egypt mythology?",
            selection: ["The Underworld", "The Desert", "The Nile", "The Sun"],
            answer: "The Sun",
            category: "Mythology"
        },
        {
            question: "Of these gods which one did not change it's name from Greek to Roman?",
            selection: ["Jupiter", "Neptune", "Apollo", "Mercury"],
            answer: "Apollo",
            category: "Mythology"
        },
        {
            question: "Which one is not part of the Big Three, in Greek mythology?",
            selection: ["Zeus", "Posidon", "Hades", "Ares"],
            answer: "Ares",
            category: "Mythology"
        },
        //Miscellanous
        {
            question: "What is the scientific term for a group of crows?",
            selection: ["A Murder", "A Flock", "A Pack", "A Fool"],
            answer: "A Murder",
            category: "Miscellaneous"
        },
        {
            question: "Born Marion Mitchell Morrison, this famous actor has stared in many movies?",
            selection: ["Clint Eastwood", "Johnny Depp", "Marilyn Monroe", "John Wayne"],
            answer: "John Wayne",
            category: "Miscellaneous"
        },
        {
            question: "What state is known as the Valentine State?",
            selection: ["Florida", "Arizona", "New York", "Hawaii"],
            answer: "Arizona",
            category: "Miscellaneous"
        },
        {
            question: "How many paintings did Vincent Van Gogh sell in his life?",
            selection: ["10", "12", "1", "23"],
            answer: "1",
            category: "Miscellaneous"
        },
        {
            question: "How fast can a honeybee bee fly?",
            selection: ["15 mph", "3 mph", "10 mph", "7 mph"],
            answer: "15 mph",
            category: "Miscellaneous"
        }
    ];
    // variables 
    var questions = [];
    var catPick;
    var correct = 0;
    var numOfQuest = 0;
    // functions
    //getting trivia question
    var getCatQuest = function () {
        trivia.forEach(element => {
            if (element.category === catPick) {
                questions.push(element);
            }
        });
        questions.sort(function () { return 0.5 - Math.random() });
        console.log(questions);
    }
    // loading questions
    var loadQuestPage = function () {
        var shuffle = questions[numOfQuest].selection;
        shuffle.sort(function () { return 0.5 - Math.random() });
        $("#question").text(questions[numOfQuest].question);
        for (var i = 0; i < 4; i++) {
            $(".ans" + i).text(shuffle[i]);
            if (shuffle[i] === questions[numOfQuest].answer) {
                $(".ans" + i).attr("id", "correct");
                console.log("The Answer is: " + shuffle[i]);
            }
        }
        $("#next").hide();
        start();
        $(".answers").css("background-color", "white");
    }
    // loading results
    var loadResultsPage = function () {
        $(".container").empty();
        $(".container").html(resultsPage);
        $("#results").text("You got " + correct + " out of 5. You can play again or quit.");
    }
    // click events
    // start button
    $(".container").on("click", "#start", function () {
        $(".container").empty();
        $(".container").html(categoryPage);
    });
    // category selections
    $(".container").on("click", ".category", function () {
        $(".container").empty();
        $(".container").html(triviaPage);
        catPick = $(this).attr("value");
        getCatQuest();
        loadQuestPage();
    });
    // question selections
    $(".container").on("click", ".answers", function () {
        var select = $(this);
        if (select.text().trim() === questions[numOfQuest].answer) {
            select.css("background-color", "#06df06");
            correct++;
        } else {
            select.css("background-color", "red");
            $(".answers:has(#correct)").css("background-color", "#06df06");
        }
        stop();
    });
    // Next Button - Transistion to next-page
    $(".container").on("click", "#next", function () {
        $(".main-pg").addClass("bounceOutRight");
        numOfQuest++;
        setTimeout(function () {
            $(".main-pg").hide();
            $("#loading-img").show();
        }, 600);
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
        }, 2800);
    });
    // New Game button
    $(".container").on("click", "#newGame", function () {
        $(".container").empty();
        $(".container").html(categoryPage);
        questions = [];
        correct = 0;
        numOfQuest = 0;
    });
    // Quit button
    $(".container").on("click", "#quit", function () {
        location.reload();
    });
    // timer setup 
    var time = 20;
    var intveralID;
    var start = function () {
        intveralID = setInterval(count, 1000);
        $("#time").css("color", "black")
        $("#timer").text("20");
    }
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
    var stop = function () {
        clearInterval(intveralID);
        time = 20;
        $("#timer").text("00");
        $("#next").show();
        $(".answers:has(#correct)").css("background-color", "#06df06");
    }
    // Web Page HTML
    var categoryPage = "<h1 class='text-center'>Pick Your Categories:</h1>" +
        "<div class='row text-center'>" +
        "<div class='col-xl-3 col-sm-6 mt-3'>" +
        "<div class='card category' value='Movies & TV'>" +
        "<h4 class='card-header'>Movies & TV</h4>" +
        "<div class='card-body'>" +
        "<img src='assets/images/movie.jpg' alt='' class='img-fluid'>" +
        "</div></div></div>" +
        "<div class='col-xl-3 col-sm-6 mt-3'>" +
        "<div class='card category' value='History'>" +
        "<h4 class='card-header'>History Facts</h4>" +
        "<div class='card-body'>" +
        "<img src='assets/images/history.jpg' alt='' class='img-fluid'>" +
        "</div></div></div>" +
        "<div class='col-xl-3 col-sm-6 mt-3'>" +
        "<div class='card category' value='Mythology'>" +
        "<h4 class='card-header'>Mythology</h4>" +
        "<div class='card-body'>" +
        "<img src='assets/images/myth.jpg' alt='' class='img-fluid'>" +
        "</div></div></div>" +
        "<div class='col-xl-3 col-sm-6 my-3'>" +
        "<div class='card category' value='Miscellaneous'>" +
        "<h4 class='card-header'>Miscellaneous</h4>" +
        "<div class='card-body'>" +
        "<img src='assets/images/misc.jpeg' alt='' class='img-fluid'>" +
        "</div></div></div></div>";


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
        "</div></div></div><img style='display: none;' id='loading-img' src='assets/images/loading.gif'></div></div>";

    var resultsPage = "<div class='card text-center my-3 animated'>" +
        "<h2 class='card-header text-left'>Results:</h2>" +
        "<div class='card-body'>" +
        "<div class='row'><div class='col-12'>" +
        "<p id='results'></p></div></div></div>" +
        "<div class='card-footer'>" +
        "<button id='newGame' type = 'button' class='btn btn-primary float-right'>New Game</button>" +
        "<button id='quit' type='button' class='btn btn-quit float-left'>Quit</button>" +
        "</div></div>";
});
