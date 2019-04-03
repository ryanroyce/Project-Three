import axios from "axios";

export default {
  // Gets all books
  getGoogleBooks: function (query) {
    return axios.get("/api/google", { params: { q: "title:" + query } });
  },

  // Gets all books
  getMovies: function () {
    return axios.get("/api/movies");
  },
  
  // Gets the book with the given id
  getMovie: function (id) {
    return axios.get("/api/movies/" + id);
  },

  // Deletes the book with the given id
  deleteMovie: function (id) {
    return axios.delete("/api/movies/" + id);
  },

  // Saves a book to the database
  saveMovie: function (movieData) {
    return axios.post("/api/movies", movieData);
  },

  getRapidAPI: function () {
    return axios.get("/api/rapid");
  },

  getOMDB: function (query) {
    return axios.get("/api/omdb", { params: { t: query } });
  },

  getUser: function(userData) {
    console.log(userData)
    return axios.post("/api/users", userData);
  },

  createUser: function(userData) {
    console.log(userData)
    return axios.post("/api/users", userData);
  },

  saveUser: function(userData) {
    return axios.post("/api/users/sign-up", userData);
  },

  checkUser: function(userData) {
    return axios.get(`/api/users/checkuser/${userData.username}`);
  },

  // deleteUser: function(userData) {
  //   return axios.delete("/api/users", userData.id);
  // }
};