/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'Talk is cheap. Show me the code.',
    source: 'Linus Torvalds'
  },
  {
    quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    source: 'John Woods',
  },
  {
    quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    source: 'Martin Fowler'
  },
  {
    quote: 'I\'m not a great programmer; I\'m just a good programmer with great habits.',
    source: 'Linus Torvalds'
  },
  {
    quote: 'Truth can only be found in one place: the code.',
    source: 'Robert C. Martin'
  },
  {
    quote: 'Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.',
    source: 'Muhammad Waseem'
  },
  {
    quote: 'A language that doesn\'t affect the way you think about programming is not worth knowing.',
    source: 'Alan J. Perlis'
  },
  {
    quote: 'Walking on water and developing software from a specification are easy if both are frozen.',
    source: 'Edward V. Berard'
  },
  {
    quote: 'The most disastrous thing that you can ever learn is your first programming language.',
    source: 'Alan Kay'
  },
  {
    quote: 'The most important property of a program is whether it accomplishes the intention of its user.',
    source: 'C.A.R. Hoare'
  },
  {
    quote: 'First, solve the problem. Then, write the code.',
    source: 'John Johnson'
  },
  {
    quote: 'Code is like humor. When you have to explain it, it’s bad.',
    source: 'Cory House'
  },
  {
    quote: 'Make it work, make it right, make it fast.',
    source: 'Kent Beck'
  }
]


/***
 * `getRandomQuote` function
***/

function getRandomQuote(arr){
  const length = arr.length;
  const randomNum = Math.floor(Math.random()*length);
  const randomQuote = arr[randomNum];
  return randomQuote;
}

// console.log(getRandomQuote(quotes).quote);



/***
 * `printQuote` function
***/

function printQuote(){
  const quote = getRandomQuote(quotes).quote;
  const author = getRandomQuote(quotes).source;
  const quoteText = document.querySelector('.quote');
  const authorText = document.querySelector('.source');
  quoteText.innerText = quote;
  authorText.innerText = author;


}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


// Auto refresh the code every 10 second

setInterval(printQuote,10000);