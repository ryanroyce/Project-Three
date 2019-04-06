# CinéSearch
[CinéSearch](https://cinesearch-live.herokuapp.com/) is a data-persistent, full stack React application app with user authentication to help users that struggle with indecisiveness with choosing what movie to watch on a cozy night in, or maybe just don't know what kinds of movies are out there and need help with suggestions. 

This is where CinéSearch comes in. CinéSearch is a Tinder-like app, but instead of trying to pair you with a significant other, it tries to find the right movie for you that fit your criteria on what movie you'd like to watch. CinéSearch makes a random API call to RapidAPI and OmbdAPI, that matches the users desired movie-type requirements that they can set in the settings page, for movies of certain genre and/or streaming providers such as Netflix, Hulu, HBO etc.)  

## UI
The homepage of CinéSearch brings you to the login page where you can either log in or sign up a new account.

The UI is built on Semantic UI, and is fairly simple. In the Searched Movies tab, the user will be presented with a MovieCard with the movie image and the plot below, along with a thumbsdown and a thumbsup button. The thumbsdown button refreshes the MovieCard with another movie suggestion while the thumbsup saves the movie onto your account's saved page list.

# Technologies used
* React.js
* Node.js
* Express
* Passport
* MongoDB/Mongoose
* Semantic-UI
