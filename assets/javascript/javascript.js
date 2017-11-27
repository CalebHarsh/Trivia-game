$(document).ready(function () {

    // variables 
    var questions = [];
    var catPick;
    var correct = 0;
    var numOfQuest = 0;
    // functions
    //getting trivia question
    var getTrivia = function () {
        triviAPI = "https://opentdb.com/api.php?amount=10&category=" + catPick + "&type=multiple"
        return triviAPI
    }
    var ajaxFunction = function () {
        $.ajax({
            url: getTrivia(),
            method: 'GET'
        }).done(function (response) {
            console.log(response.results);
           questions = response.results;
           loadQuestPage();
        });
    }
    // loading questions
    var loadQuestPage = function () {
        $("#question").html(questions[numOfQuest].question);
        var selections = questions[numOfQuest].incorrect_answers;
        selections.push(questions[numOfQuest].correct_answer);
        selections.sort(function () { return 0.5 - Math.random() });
        for (var i = 0; i < 4; i++) {
            $(".ans" + i).html(selections[i]);
            if (selections[i] === questions[numOfQuest].correct_answer) {
                $(".ans" + i).attr("id", "correct");
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
        $("#results").text("You got " + correct + " out of 10. You can play again or quit.");
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
        ajaxFunction();
    });
    // question selections
    $(".container").on("click", ".answers", function () {
        var select = $(this);
        if (select.text().trim() === questions[numOfQuest].correct_answer) {
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
            if (numOfQuest > 9) {
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
        "<div class='card category' value='11'>" +
        "<h4 class='card-header'>Movies & TV</h4>" +
        "<div class='card-body'>" +
        "<img src='assets/images/movie.jpg' alt='' class='img-fluid'>" +
        "</div></div></div>" +
        "<div class='col-xl-3 col-sm-6 mt-3'>" +
        "<div class='card category' value='23'>" +
        "<h4 class='card-header'>History Facts</h4>" +
        "<div class='card-body'>" +
        "<img src='assets/images/history.jpg' alt='' class='img-fluid'>" +
        "</div></div></div>" +
        "<div class='col-xl-3 col-sm-6 mt-3'>" +
        "<div class='card category' value='20'>" +
        "<h4 class='card-header'>Mythology</h4>" +
        "<div class='card-body'>" +
        "<img src='assets/images/myth.jpg' alt='' class='img-fluid'>" +
        "</div></div></div>" +
        "<div class='col-xl-3 col-sm-6 my-3'>" +
        "<div class='card category' value='9'>" +
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
