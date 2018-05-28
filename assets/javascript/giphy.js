//makde a an array of topics
//a for loop through the topics
//


$(document).ready ( function() { 
    // console.log( "document loaded" );

// var api =  "WolFArV1wDY5IstQyDJcacM8yKv9ImN7";
// var userSearch = "dogs";
// var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=" + api + "&limit=5";
var topics = ["dogs", "cats", "jaguars", "chipmunks", "cheetahs"]


function renderButtons() {
    $("#animal-view").empty();
    for (var i = 0; i < topics.length; i++) {
      var a = $("<button>");
    //   console.log(topics[i]);
      a.addClass("animal");
      a.attr("data-name", topics[i]);
      a.text(topics[i]);
      $("#animal-view").append(a);
    }
  }

$("#add-animal").on("click", function(event) {
event.preventDefault();
var topic = $("#animal-input").val().trim();
topics.push(topic);
renderButtons();
});

renderButtons();

function captureAnimalName() {
var animalName = $(this).attr("data-name");

    alert(animalName);
}
$(document).on("click", ".animal", captureAnimalName);









function displayGiphy() {

    var api = "WolFArV1wDY5IstQyDJcacM8yKv9ImN7";
    var topic = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=" + api + "&limit=5";
    

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response.data);
        var results = response.data;

        for (i = 0; i < results.length; i++){
            var animalDiv = $("<div>");
            var animalImage = $("<img>");

            animalImage.attr("src", results[i].images.fixed_height.url);
            animalDiv.append(animalImage);

            $("#gifs-appear-here").prepend(animalDiv);
        }
    //   $("#animal-view").text(JSON.stringify(response));
      renderButtons();
    });
  }



  $(document).on("click", ".animal", displayGiphy);









// $.ajax({
//     url: queryUrl,
//     method: "GET"
//     })  
//     .then(function(response) {
//         console.log(response);
//         var images = response.data;

//         for(i=0;i<images.length;i++){
//             console.log(images[i].images.fixed_width.url)
//             $('body').append("<img src=" + images[i].images.fixed_width.url + ">");

//             // put into a function to execute when i need it to
//         }
//     })
//     .catch(function(err) {
//         console.log(err);
//     });
        


// console.log('I bet I will happen first');
});

