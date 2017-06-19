var keys = require("./keys.js");
var request = require("request");
var request = require("request");
var Twitter = require('twitter');
var inquirer = require("inquirer");
var Spotify = require('node-spotify-api');
var fs = require("fs");
 
// Twitter API 
var client = new Twitter({
  consumer_key: 'BxVh3G6IHIuoFJjQcRmh6nAJr',
  consumer_secret: 'FTltXmPSN2zncNxw86r5yUTXtwNepI5QCx4XQQg7t8mYiTE1S1',
  access_token_key: '1107657140-6wPTGV972Rs5EC21g8M7qfyiZAQHV0EcPQ4Qkn7',
  access_token_secret: 'LK6JJcsJRnyTY9L4FzRUu7VBfzSnERvIboe24w4sYFLNS'
});
 
var params = {screen_name: 'chrisallen777'};
client.get('search/tweets', {q: 'node.js', limit: 1}, function(error, tweets, response) {
	console.log("-------------------------------------");
    console.log("-------------------------------------");
    console.log("Twitter API Tweet Search Results Below");
    console.log("-------------------------------------");
    console.log("-------------------------------------");
    console.log("");
   console.log(tweets);
});
// Twitter API




// // Spotify API 
var spotify = new Spotify({
  id: '54d72841e6a940adb2b5bf919507c6f6',
  secret: '1181e12735de4805b84ecf1705dd0352'
});
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }

spotify
  .search({ type: 'track', query: 'All the Small Things', limit: 1 })
  .then(function(response) {
  	console.log("-------------------------------------");
    console.log("-------------------------------------");
    console.log("Spotify Track Search Results Below");
    console.log("-------------------------------------");
    console.log("-------------------------------------");
    console.log("");
    console.log(response);
    console.log("-------------------------------------");
    console.log("-------------------------------------");
    console.log("");
  })
  .catch(function(err) {
  	console.log("-------------------------------------");
    console.log("-------------------------------------");
    console.log(error);
    console.log("-------------------------------------");
    console.log("-------------------------------------");
    console.log("");
});
// // Spotify API

// console.log("");
// console.log("-------------------------------------");
// console.log("This is our Spotify data: " + data);
// console.log("-------------------------------------");
// console.log("");



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
    console.log("-------------------------------------");
    console.log("");


  }
});