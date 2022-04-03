const numberOfFilms = +prompt("How many films have you watched?", "");
let personalMovieDB = {
        count: numberOfFilms,
        movies: {

        },
        actors: {},
        genres: [],
        private: false
    };
const a = prompt("What film?","");
const b = +prompt("What rate?", "");
const c = prompt("What film?","");
const d = +prompt("What rate?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;