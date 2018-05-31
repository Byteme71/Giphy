
$(document).ready(function () {
  // console.log( "document loaded" );

  // var api =  "WolFArV1wDY5IstQyDJcacM8yKv9ImN7";
  // var userSearch = "dogs";
  // var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=" + api + "&limit=5";
  var topics = ["dogs", "cats", "jaguars", "chipmunks", "cheetahs"];

  function displayGiphy() {

    var api = "WolFArV1wDY5IstQyDJcacM8yKv9ImN7";
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=" + api + "&limit=10";


    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      $("#gifs-appear-here").empty();
      // console.log(response.data);
      var results = response.data;

      for (i = 0; i < results.length; i++) {
        var animalDiv = $("#gifs-appear-here");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var animalImage = $("<img>");

        animalImage.attr("src", results[i].images.fixed_height_small_still.url);
        animalImage.attr("data-still", results[i].images.fixed_height_small_still.url);
        animalImage.attr("data-animate", results[i].images.fixed_height_small.url)
        animalImage.attr("data-state", "still");
        animalImage.attr("class", "gif")
        animalDiv.append(animalImage);
        animalDiv.append(p);
      }

      $(".gif").on("click", function () {
        var state = $(this).attr("data-state");

        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }

      });
    });
  }

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

  $("#add-animal").on("click", function (event) {
    event.preventDefault();
    var topic = $("#animal-input").val().trim();

    // if (topics.indexOf(topic) === -1) {
      topics.push(topic);
      // function clearField(){
    //     $("#animal-input").val("");
    //   } clearField();
    // }
    // else if (topic === "") {
    //   return false;
    // }
    // else {
    //   alert("Already put it in!");
    //   return false;
    // }

    renderButtons();
  });

  $(document).on("click", ".animal", displayGiphy);

  renderButtons();
});


// $(document).ready(function () {
//   $('.sendButton').attr('disabled', true);
//   $('#message').keyup(function () {
//     if ($(this).val().length != 0)
//       $('.sendButton').attr('disabled', false);
//     else
//       $('.sendButton').attr('disabled', true);
//   })
// });