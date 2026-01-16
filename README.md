# Sprint 3 – Video Management Tool

## Overview

**Video Management Tool** is a JavaScript project developed as part of the **Frontend Bootcamp – Sprint 3 at IT Academy**.

The goal of this project is to implement **core data processing logic**—such as filtering, sorting, and calculations—over a movie dataset using **modern JavaScript (ES6)** array methods, ensuring correctness through **unit testing**.

This project does **not** include a user interface.  
All functionality is implemented in JavaScript and validated via automated tests.

---

## Motivation

I built this project to:

- Practice fundamental JavaScript concepts (functions, arrays, logic)
- Gain confidence using array methods like `map`, `filter`, `reduce`, and `sort`
- Write clean, test-oriented, and maintainable code
- Prepare for more advanced challenges involving APIs, frameworks, and backend logic in future sprints

This sprint acts as a solid foundation before moving on to more complex frontend architectures.

---

## Features

This project includes functions that:

- Extract all directors from a movie dataset  
- Filter movies by director  
- Calculate average scores for directors and genres  
- Sort movies alphabetically (returning the first 20 titles)  
- Sort movies by year (with secondary sorting by title)  
- Convert movie durations into total minutes  
- Find the best movie of a given year  

All functions are **pure**, **well-tested**, and follow **ES6 best practices**.

---

## Project Structure

src/
├── data.js # Movies dataset
├── films.js # Core logic implementation
tests/
├── films.spec.js # Jest unit tests
test-results.html # Generated test report
package.json
README.md

---

## How to Run & Test

Install dependencies and run tests:

```bash
npm install
npm run test
```
For active development, you can use watch mode:

```bash
npm run test:watch
```

After running the tests, a file called test-results.html is generated automatically, showing detailed test results.

---

## Tech Stack

This project uses:

- JavaScript (ES6+)
- Node.js
- Jest for unit testing
- Modern array methods (map, filter, reduce, sort)

---

## Example Usage

Some example function calls:

```bash
    getAllDirectors(movies);
    getMoviesFromDirector(movies, 'Quentin Tarantino');
    moviesAverageOfDirector(movies, 'Christopher Nolan');
    orderAlphabetically(movies);
```

Each function returns predictable results based solely on the provided data.

---

## Development Notes

- All logic is implemented in src/films.js

- Tests are written using Jest and located in tests/films.spec.js

- The project follows a clean and maintainable structure aligned with professional conventions

---

## What I Learned

During this sprint, I strengthened my understanding of:

- When to use arrow functions vs classic functions

- Writing pure functions without mutating input data

- Reading and interpreting test files to guide implementation

- Debugging and validating logic using Jest and console output

---

## Future Improvements

If I were to extend this project, I would:

- Add an interactive web-based UI

- Fetch movie data from an external API instead of a static dataset

- Introduce TypeScript for type safety

- Add more exhaustive edge-case testing

---

## License
This project is for educational purposes as part of the IT Academy Frontend Bootcamp.