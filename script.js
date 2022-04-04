const numberOfFilms = +prompt("How many films have you watched?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
let a, b;
for (let i = 0; i < 2; i++) {
    do {
        a = prompt("What film?", "");
        b = +prompt("What rate?", "");
    } while (a.length > 50 && a === null && a == "" && b != null);
    personalMovieDB.movies[a] = b;
}
if (personalMovieDB.count < 10) {
    console.log("a few");
} else {
    if (personalMovieDB.count < 30) {
        console.log("normal");
    } else {
        if (personalMovieDB.count >= 30) {
            console.log("too much");
        } else {
            console.log("error");
        }
    }
}
console.log(personalMovieDB);