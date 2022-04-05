let numberOfFilms;
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        numberOfFilms = +prompt("How many films have you watched?", "");
    },
    rememberMyFilms: function () {
        let a, b;
        for (let i = 0; i < 2; i++) {
            do {
                a = prompt("What film?", "");
                b = +prompt("What rate?", "");
            } while (a.length > 50 && a === null && a == "" && b != null);
            personalMovieDB.movies[a] = b;
        }
    },
    getPersonalLevel: function () {
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
    },
    showMyDB: function (MovieDB) {
        if (!MovieDB.private) {
            console.log(MovieDB);
        }
    },
    writeYourGenres: function (MovieDB) {
        for (let i = 1; i <= 3; i++) {
            let temp;
            do {
                temp = prompt(`What is your favourite genre #${i}`);
            } while (temp.length > 50 && temp === null && temp == "");
            MovieDB.genres[i - 1] = temp;
        }
    },
    toggleVisibleDB: function(MovieDB){
        MovieDB.private = !MovieDB.private;
    },
    showGenres: function(){
        let i = 1;
        for(let key of genres){
            console.log(`Favourite genre #${i} - is ${key} in ${genres}`);
        }
    }
};