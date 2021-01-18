// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  const directors = movies.map(function (movie) {
    return movie.director
  });
  return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  if (movies.length === 0) {
    return 0;
  }

  const filteredByDirector = movies.filter(function (movie) {
    if (movie.director === 'Steven Spielberg') {
      return true;
    }
  });

  let moviesByGenreCounter = 0;

  for (let movie of filteredByDirector) {
    if (movie.genre.includes('Drama')) {
      moviesByGenreCounter++;
    }
  }

  return moviesByGenreCounter;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }

  const averageRate = movies.reduce(function (totalRate, movie) {
    if (movie.rate.length === 0) { // why doesn't this work???
      return totalRate + movie.rate.lenght;
    }
    return totalRate + movie.rate;
  }, 0) / movies.length;

  const averageRateRounded = Math.round(averageRate * 100) / 100;
  return averageRateRounded;
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const filteredByDrama = movies.filter(function (movie) {
    if (movie.genre.includes('Drama')) {
      return true;
    }
  });
  return ratesAverage(filteredByDrama);
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const orderedByYear = [...movies].sort(function (a, b) {
    if (a.year == b.year) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }
    return a.year - b.year;
  });

  return orderedByYear;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  console.log(movies);

  const titles = movies.map(function (movie) {
    return movie.title;
  })
  
  console.log(titles);

  const alphabetical = titles.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  console.log(alphabetical);
  const firstTwenty = alphabetical.slice(0, 20);
  return firstTwenty;
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
