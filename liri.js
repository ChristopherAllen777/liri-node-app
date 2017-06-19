var keys = require("./keys.js");
var request = require("request");
var inquirer = require("inquirer");

// Store all of the arguments in an array
var nodeArgs = process.argv;

// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

	if (i > 2 && i < nodeArgs.length){

		movieName = movieName + "+" + nodeArgs[i];

}

	else	{

		movieName += nodeArgs[i];

	}
}

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?apikey=40e9cece&t=" + movieName + "&y=&plot=short&r=json";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request was successful...
  if (!error && response.statusCode === 200) {

    // Then log the body from the site!
    console.log("");
    console.log("-------------------------------------");
    console.log("The Title of the movie: " + JSON.parse(body).Title);
    console.log("-------------------------------------");
    console.log("The release year of the movie: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).IMDBRating);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Movie Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("Rotten Tomatoes URL: " + JSON.parse(body).URL);

    console.log("Genre: " + JSON.parse(body).Genre);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("Awards: " + JSON.parse(body).Awards);
    console.log("-------------------------------------");
    console.log("");


  }
});