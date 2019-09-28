import 'bootstrap/dist/css/bootstrap.css'
/*import jokes from "./jokes";

document.getElementById("getjokebtn").addEventListener("click", function() {
    var foundJoke = jokes.getJokeById(document.getElementById("jokeid").value);
    document.getElementById("foundJoke").innerHTML = foundJoke;
});

document.getElementById("addjokebtn").addEventListener("click", function() {
    var addedJoke = document.getElementById("jokeid").value;
    jokes.addJoke(addedJoke);

    var allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
    document.getElementById("jokes").innerHTML = allJokes.join("");

});

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");
*/
document.getElementById("thebtn").addEventListener("click", function() {
    fetch('https://studypoints.info/jokes/api/jokes/period/hour')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.getElementById("thediv").innerHTML = "<p>" + data.joke + "</p>";
   });
});

setInterval(function() {
    fetch('https://studypoints.info/jokes/api/jokes/period/hour')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.getElementById("thediv").innerHTML = "<p>" + data.joke + "</p>";
   });
}, 3600000)

window.onload=function(){
    document.getElementById("north").addEventListener("click", function() {
        alert("north")
    });
    document.getElementById("south").addEventListener("click", function() {
        alert("south")
    });
    document.getElementById("west").addEventListener("click", function() {
        alert("west")
    });
    document.getElementById("east").addEventListener("click", function() {
        alert("east")
    });
}