
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
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=" + api + "&limit=10";
    

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        // console.log(response.data);
        var results = response.data;

        for (i = 0; i < results.length; i++){
            var animalDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var animalImage = $("<img>");

            animalImage.attr("src", results[i].images.fixed_height_small_still.url);
            $(animalImage).attr("data-state", "still");
            animalDiv.append(animalImage);
            animalDiv.append(p);
            $("#gifs-appear-here").prepend(animalDiv);

            // console.log(results[i].images.fixed_height_small.url);
        

            $(animalImage).on("click", function() {
              // console.log("click");
              results = response.data;
              // console.log(response.data)
            for (i = 0; i < results.length; i++){
              // console.log(results[i]);
            var state = $(this).attr("data-state");
        
            if (state === "still") {
             
                results = response.data;
                // console.log(state)
                $(animalImage).attr("data-state", "animate");
                animalImage.attr("src", results[i].images.fixed_height_small.url);
                // console.log(results[i].images.fixed_height_small.url);
               
              } else if (state === "animate"){
                results = response.data;
                // console.log(state)
                $(animalImage).attr(state, "still");
                animalImage.attr("src", results[i].images.fixed_height_small_still.url);
              }
            }
            });
            //   fixed_height_small

        
        }

      renderButtons();
    });
  }



  $(document).on("click", ".animal", displayGiphy);









});

