let numberOfFilms;
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function start() {
    numberOfFilms = +prompt("How many films have you watched?", "");
}

function rememberMyFilms() {
    let a, b;
    for (let i = 0; i < 2; i++) {
        do {
            a = prompt("What film?", "");
            b = +prompt("What rate?", "");
        } while (a.length > 50 && a === null && a == "" && b != null);
        personalMovieDB.movies[a] = b;
    }
}

function getPersonalLevel() {
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
}

function showMyDB(MovieDB) {
    if (!MovieDB.private) {
        console.log(MovieDB);
    }
}

function writeYourGenres(MovieDB) {
    for (let i = 1; i <= 3; i++) {
        MovieDB.genres[i - 1] = prompt(`What is your favourite genre #${i}`);
    }
}

start();
rememberMyFilms();
getPersonalLevel();
showMyDB(personalMovieDB);
writeYourGenres(personalMovieDB);