# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kong5000/lotide`

**Require it:**

`const _ = require('@kong5000/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:



*  `head` : returns the first element of an array
*  `tail` : returns an array minus its first item
*  `middle` : returns the middle value of arrays with an odd number of elements, and the middle 2 values of arrays with even numbers of elements
*  `countLetters` : returns the number of letters in a string
*  `countOnly` : count the number of times a value occurs in an array