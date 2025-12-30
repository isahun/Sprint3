// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(movie => movie.director);
  console.log("EXERCISE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const result = movies.filter(movie => movie.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const directorArray = movies.filter(movie => movie.director === director);

  if (directorArray.length === 0) return 0;

  const scoreSum = directorArray.reduce((total, movie) => (total + movie.score), 0);
  
  const result = scoreSum / directorArray.length;
  
  return parseFloat(result.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let orderedFilms = [...movies];
  orderedFilms = orderedFilms.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1
    } else { return 0 }
  });
  
  const result = orderedFilms.map(movie => movie.title).slice(0, 20);

  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let orderedYear = [...movies];
  
  orderedYear.sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    }

    if (a.title > b.title) {
      return 1; 
    } else if (a.title < b.title) { 
      return -1; 
    } else { 
      return 0; 
    }
  });

  return orderedYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let movieCategory = movies.filter(movie => movie.genre.includes(genre));
  if (movieCategory.length === 0) return 0;

  let catSum = movieCategory.reduce((total, movie) => (total + movie.score), 0)
  let result = catSum / movieCategory.length;

  return parseFloat(result.toFixed(2));
  }

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let movieDuration = movies.map(movie => {
    let totalMins = 0;

    if (movie.duration.includes("h")) {
      const movieHourToMins = parseInt(movie.duration)*60;
      totalMins += movieHourToMins;
    }

    if (movie.duration.includes("min")) {
      const minutes = parseInt(movie.duration.split("h ")[1]);
      totalMins += minutes;
    }

    return {
      ...movie,
      duration: totalMins
    };
  });

  return movieDuration;
};

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const filmsbyYear = movies.filter(movie => movie.year === year);

  const bestFilm = filmsbyYear.reduce((bestMovie, currentMovie) => { //(total, movie)
    if (currentMovie.score > bestMovie.score) {
      return currentMovie;
    } else {
      return bestMovie;
    };
  });
  
  return [bestFilm]
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
