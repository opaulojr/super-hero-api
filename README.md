# Project Super Hero API

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Preview

![Preview of Super Hero API](./super-hero-api.png)

## About

This is my 12th project during my journey at Trybe!

[Super Hero API](https://akabab.github.io/superhero-api/api/) is responsible for displaying heroes randomly and providing their information and trivia. This is my first time consuming a real API, handling its responses, data, and possible errors; displaying to the user the most important and relevant information!

## Repository Structure

- The `src` folder contains all the code

## Implemented Features

### API Consumption

  - The application consumes the [Super Hero API](https://akabab.github.io/superhero-api/api/) and uses the .JSON response file to display:

    - Hero's image
    - Hero's name
    - Their biography

  - The consumed endpoint is `'https://akabab.github.io/superhero-api/api/id/number.json'` where **'number'** is a number between 1 and 562 (total number of heroes in the API). There is a function responsible for generating random numbers so that they are dynamically passed to the endpoint

  - After the random number is generated, it is stored in an array, thus creating a kind of history so that later if the function responsible for generating a random number generates a number that has already been generated previously, it repeats the generation process, thus avoiding the repetition of displayed heroes

---

### Swal Library

  - [Swal](https://sweetalert2.github.io/) is an abbreviation used to refer to SweetAlert, a library that facilitates the creation of highly customizable and visually appealing dialog modals. In this project, it was used to display a dialog modal of the heroes' biography

---
