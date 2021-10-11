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

function addYear(o) {
    o.year = 2000;
}
addCitation(ob4);
addYear(ob9);
addYear(ob5);
addYear(ob6);
addYear(ob7);
addYear(ob8);
addYear(ob4);


// make an array object
var quotes = [ob1, ob2, ob3, ob4, ob5, ob6, ob7, ob8, ob9, ob10];

printQuote(quotes);


/***
 * `getRandomQuote` function
 ***/

// randomQuoteObject = getRandomQuote(quotes);
function getRandomQuote(quo) {

    return quo[Math.floor(Math.random() * quo.length)];
}


/***
 * `printQuote` function
 ***/

function printQuote(q) {
    var randomQuote = getRandomQuote(q);

    // fetch quote information
    var quote = randomQuote.quote;
    var source = randomQuote.source;
    var citation = randomQuote.citation;
    var year = randomQuote.year;

    console.log(quote);
    console.log(source);

    if (citation) {
        console.log(citation);
    }

    if (year) {
        console.log(year);
    }


}

/***
 * click event listener for the print quote button
 ***/
