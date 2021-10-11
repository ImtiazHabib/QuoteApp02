/******************************************
project 1 - Random Quote Generator
******************************************/

// capture all html elementes
const quoteChangeButton = document.querySelector('#load-quote');
const quoteText = document.querySelector('.quote');
const quoteSource = document.querySelector('.source');
const quoteCitation = document.querySelector('.citation');
const quoteDiv = document.querySelector('#quote-box');
/***
 * `quotes` array
 ***/

// making 10 object of quotes
const ob1 = {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela',
};
const ob2 = {
    quote: 'The way to get started is to quit talking and begin doing',
    source: 'Walt Disney',
};
const ob3 = {
    quote: `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.`,
    source: 'James Cameron',
};
const ob4 = {
    quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier',
    source: 'Mother Teresa',
};
const ob5 = {
    quote: 'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart',
    source: 'Helen Keller',
};
const ob6 = {
    quote: 'The only impossible journey is the one you never begin.',
    source: 'Tony Robbins',
};
const ob7 = {
    quote: 'Success usually comes to those who are too busy to be looking for it.',
    source: 'Henry David Thoreau',
};
const ob8 = {
    quote: `Whether you think you can or you think you can't, you're right`,
    source: 'Henry Ford',
};
const ob9 = {
    quote: 'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.',
    source: 'Henry Ford',
};
const ob10 = {
    quote: `i didn't fail the test. I just found 100 ways to do it wrong.`,
    source: 'Benjamin Franklin',
};

// citation and year add function
function addCitation(ob) {
    ob.citation = 'https://www.fi.edu/benjamin-franklin/famous-quotes';
}

function addYear(o) {
    o.year = 2000;
}
addCitation(ob10);
addYear(ob9);
addYear(ob10);


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

    //    check first quotediv has p or not if yes then delete it first and then do add

    if (quoteDiv.children.length != 0) {
        while (quoteDiv.firstChild) {
            quoteDiv.firstChild.remove();
        }
    }

    var randomQuote = getRandomQuote(q);

    // fetch quote information
    var quote = randomQuote.quote;
    var source = randomQuote.source;
    var citation = randomQuote.citation;
    var year = randomQuote.year;

    if (quote) {
        //    make html element p
        const p = document.createElement('p');
        p.classList.add('quote');
        p.innerText = quote;

        // add this as quote-box child
        quoteDiv.appendChild(p);
    }

    if (source) {
        //    make html element p
        const pSource = document.createElement('p');
        pSource.classList.add('source');
        pSource.innerText = source;

        // add this as quote-box child
        quoteDiv.appendChild(pSource);
    }

    if (citation) {
        //    make html element span
        const spanCitation = document.createElement('span');
        spanCitation.classList.add('citation');
        spanCitation.innerText = citation;

        // add this as quote-box child
        quoteDiv.children[1].appendChild(spanCitation);
    }

    if (year) {
        //    make html element span
        const spanYear = document.createElement('span');
        spanYear.classList.add('year');
        spanYear.innerText = year;

        // add this as quote-box child
        quoteDiv.children[1].appendChild(spanYear);
    }


}



// const quoteCitation = document.querySelector('.quote');



/***
 * click event listener for the print quote button
 ***/
quoteChangeButton.addEventListener('click', function (event) {
    // prevent default
    event.preventDefault();

    printQuote(quotes);
})