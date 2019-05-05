require("dotenv").config();
var keys = require("./keys.js");
const chooseArtistorBand = process.argv[2]
const property = process.argv[3]
 var axios = require('axios')

//------------------Spotify----------------//
// Make a request for a user with a given ID
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//var thisSong = process.argv[2]
var songName =  process.argv[2];

 
spotify.search({ type: 'track', query: songName }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
console.log("Artist Name: " + data.tracks.items[0].album.artists[0].name); // done
console.log("The album that the song is from: " + data.tracks.items[0].name); // done
console.log("A preview link of the song from Spotify: " + data.tracks.items[0].album.artists[0].external_urls.spotify); //done 
console.log("The song's name: " + data.tracks.items[0].name); 
}); 

//--------------------OMDB-------------------//
/* const OmdbApiClient = require('open-movie-database-api').OmdbApiClient;
const client = new OmdbApiClient(<your-registered-api-key>);

client.get('Star Wars')
    .then(result => {
        console.log(result);
    });

client.search('Star Wars')
    .then(result => {
        console.log(result);
    }); */