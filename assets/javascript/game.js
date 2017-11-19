$(document).ready(function () {
    gameObj = {
        category: ["Movie & TV", "Miscellenous", "Mythology", "History Facts"],
        movies: [
            quest0 = {
                question: "Who plays on this movie?",
                selection: ["Bill Murray", "Will Smith", "Kevin James", "Brad Pitt"],
                answer: "Will Smith"
            } ,
            quest1 = {
                question: "Who plays on this TV show?",
                selection: ["Jennifer Lawrence", "Chris Evans", "Chris Evans", "Matt Damon"],
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
        ]
    }
    var randQuest;
     var loadPage = function () {
          randQuest = Math.floor(Math.random() * 5);
        var shuffle = gameObj.movies[randQuest].selection;
        shuffle.sort(function() { return 0.5 - Math.random() });
       
        for (var i = 0; i < 4; i++) {
            $("#answers" + i).text(shuffle[i]);
            console.log(shuffle[i]);

        }
       // console.log(gameObj)
    }
    $(".answers").on('click', function () {
        console.log($(this).text());
        if($(this).text().trim() == gameObj.movies[randQuest].answer) {
            $(this).css("background-color", "green");
        }
        else {
            $(this).css("background-color", "red");
        }
    });
    console.log("Ready");
    loadPage();
});