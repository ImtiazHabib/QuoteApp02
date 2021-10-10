/******************************************
project 1 - Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/

// making 10 object of quotes
const ob1 = {
    quote: 'hello',
    source: 'aaa',
};
const ob2 = {
    quote: 'sinha',
    source: 'sss',
};
const ob3 = {
    quote: 'how ',
    source: 'ddd',
};
const ob4 = {
    quote: 'are ',
    source: 'fff',
};
const ob5 = {
    quote: 'you',
    source: 'ggg',
};
const ob6 = {
    quote: 'rafiq',
    source: 'hhh',
};
const ob7 = {
    quote: 'kamal',
    source: 'jjj',
};
const ob8 = {
    quote: 'hasib',
    source: 'kkk',
};
const ob9 = {
    quote: 'polas',
    source: 'lll',
};
const ob10 = {
    quote: 'bijoy',
    source: 'zzz',
};

// citation and year add function
function addCitation(ob) {
    ob.citation = 'www.youtube.com';
}

function addYear(ob) {
    ob.year = 2000;
}
addCitation(ob4);
addYear(ob9);

// make an array object
var quotes = [ob1, ob2, ob3, ob4, ob5, ob6, ob7, ob8, ob9, ob10];




/***
 * `getRandomQuote` function
 ***/
// declare object type variable
const randObject = new Object();
const randObjectResult = new Object();

randObjectResult = getRandomQuote(quotes, randObj)

// create function and send the random number and object array
function getRandomQuote(obj, randOb) {
    // create a random number 
    var randomNumber = Math.random();

    randOb = obj[randomNumber];
    return randOb;
}

console.

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 ***/
