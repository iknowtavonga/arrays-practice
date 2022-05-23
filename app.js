const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//To list all these numbers individually we can use a For Each, or For Of

// In a forEach, we pass a function which loops and prints the elements
numbers.forEach(function (element) {
    // you can do some calculations inside the function like finding even numbers
    if (element % 2 === 0) {
        console.log(element);
    }
})

// For of is a newer way to run through an array
// we create a variable that runs through numbers array and loops it

/* 
for (let el of numbers) {
    console.log(el);
} */

// Using For Each for an array of Objects

const movies = [
    {
        title: 'Pursuit of Happiness',
        score: 99
    },
    {
        title: 'King Richard',
        score: 88
    },
    {
        title: 'Bad Boys',
        score: 76
    },
    {
        title: 'After Earth',
        score: 32
    }
]

movies.forEach(function (index) {
    console.log(`${index.title} - ${index.score}/100`);
})

// Map is like a For Each, but it creates a new array which you can save
const speed = [8, 22, 43, 58, 66];

// we create a new array that takes double of these amounts
const double = speed.map(function (num) {
    return num * 2;
})
console.log(double);

// Using Map to create an array of movie titles only in our array with objects
const movieTitle = movies.map(function (index) {
    return index.title;
})
console.log(movieTitle);