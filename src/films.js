// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  return movies.map(movie => movie.director);
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  return movies.filter(movie => movie.director === director);
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
function orderAlphabetically (movies) { 
  return [...movies].sort((a, b) => a.title > b.title ? 1 : a.title < b.title ? -1 : 0).map(movie => movie.title).slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  return [...movies].sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;

    return a.title > b.title ? 1 : a.title < b.title ? -1 : 0; 
  });
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
      const hours = parseInt(movie.duration);
      totalMins += isNaN(hours) ? 0 : hours * 60;
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
