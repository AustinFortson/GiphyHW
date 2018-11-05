src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"


// Starting Array
var movies = ["shrek", "lego batman", "toy story"]

function displaygif(){
//event listener
$("button").on("click", function() {
// Grabbing data value
var movie = $(this).attr("data-name");
//Query URL
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        movie + "&api_key=xA7InVkc13W2uYUWiDX6Wkd3uaRF7w5f&limit=10"
//Ajax
$.ajax({
    url: queryURL,
    method: "GET"
  })
// Data from request
.then(function(response) {
    console.log(queryURL);

    console.log(response);
    
var results=response.data;

//div to create gif and rating
for (var i = 0; i < results.length; i++) {

    // Creating and storing a div tag
    var gifDiv = $("<div>");

    // Creating a paragraph tag with the result item's rating
    var p = $("<p>").text("Rating: " + results[i].rating);

    // Creating and storing an image tag
    var movieImage = $("<img>");
    // Setting the src attribute of the image to a property pulled off the result item
    movieImage.attr("src", results[i].images.fixed_height.url);

    // Appending the paragraph and image tag to the animalDiv
    gifDiv.append(p);
    gifDiv.append(movieImage);

    // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
    $("#gifs-view").prepend(gifDiv);
        }
    });
});
}
