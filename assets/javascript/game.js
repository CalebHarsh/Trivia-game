$(document).ready(function () {
    gameObj = {
        category: [
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
    }
    var randQuest;
    var picked;

    var loadPage = function () {
        randQuest = Math.floor(Math.random() * 5);
        var shuffle = gameObj.category[picked][randQuest].selection;
        shuffle.sort(function () { return 0.5 - Math.random() });
        $("#question").text(gameObj.category[picked][randQuest].question);
        for (var i = 0; i < 4; i++) {
            $("#answers" + i).text(shuffle[i]);
            
        }
    }
    
    $(document).on('click', '.answers', function () {
        console.log($(this).text());
        if ($(this).text().trim() == gameObj.category[picked][randQuest].answer) {
            $(this).css("background-color", "06df06");
        }
        else {
            $(this).css("background-color", "red");
        }

    });
    $(".category").on("click", function () {
        alert($(this).attr("value"));
        picked = $(this).attr("value");
        console.log("Catergory Selected");
        $(".container").empty();
        $(".container").html(triviaPage);
        loadPage()
    });
    console.log("Ready");
    console.log(picked);
});
var triviaPage = "<div class='row'>" +
                    "<div class='col-12'>" +
                        "<div class='card my-3 main-pg animated'>" +
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
                                                "<p id='answers0'></p>" +
                                            "</div></div></div>" +
                                    "<div class='col-md-6 mt-3'>" +
                                        "<div class='card answers'>" +
                                            "<div class='card-body'>" +
                                                "<p id='answers1'></p>" +
                                            "</div></div></div></div>" +
                                "<div class='row'>" +
                                    "<div class='col-md-6 mt-3'>" +
                                        "<div class='card answers'>" +
                                            "<div class='card-body'>" +
                                                "<p id='answers2'></p>" +
                                            "</div></div></div>" +
                                    "<div class='col-md-6 mt-3'>" +
                                        "<div class='card answers'>" +
                                            "<div class='card-body'>" +
                                                "<p id='answers3'></p>" +
                                            "</div></div></div></div></div>" +
                            "<div class='row'>" +
                                "<div class='col-12 text-center'>" +
                                    "<button type='button' class='btn btn-primary float-left mb-3 ml-3' data-toggle='modal' data-target='#exampleModal'>Menu</button>" +
                                    "<h5 id='time'> Time Left:<span id='timer'>00</span></h5>" +
                                "</div></div></div></div></div>"