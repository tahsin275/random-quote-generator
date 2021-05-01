/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Array containing all the quotes

const quotes = [
  {
    quote: 'Talk is cheap. Show me the code.',
    source: 'Linus Torvalds',
    tags: 'coding'
  },
  {
    quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    source: 'John Woods',
    tags: 'coding'
  },
  {
    quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    source: 'Martin Fowler',
    tags: 'coding'
  },
  {
    quote: 'I\'m not a great programmer; I\'m just a good programmer with great habits.',
    source: 'Linus Torvalds',
    citation: 'Goodreads',
    tags: 'best-practice'
  },
  {
    quote: 'Truth can only be found in one place: the code.',
    source: 'Robert C. Martin',
    tags: 'coding'
  },
  {
    quote: 'Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.',
    source: 'Muhammad Waseem',
    year: 2006,
    tags: 'programming'
  },
  {
    quote: 'A language that doesn\'t affect the way you think about programming is not worth knowing.',
    source: 'Alan J. Perlis',
    tags: 'programming'
  },
  {
    quote: 'Walking on water and developing software from a specification are easy if both are frozen.',
    source: 'Edward V. Berard',
    tags: 'humor'
  },
  {
    quote: 'The most disastrous thing that you can ever learn is your first programming language.',
    source: 'Alan Kay',
    tags: 'programming'
  },
  {
    quote: 'The most important property of a program is whether it accomplishes the intention of its user.',
    source: 'C.A.R. Hoare',
    tags: 'programming'
  },
  {
    quote: 'First, solve the problem. Then, write the code.',
    source: 'John Johnson',
    tags: 'best-practice'
  },
  {
    quote: 'Code is like humor. When you have to explain it, it’s bad.',
    source: 'Cory House',
    tags: 'coding'
  },
  {
    quote: 'Make it work, make it right, make it fast.',
    source: 'Kent Beck',
    tags: 'best-practice'
  }
]

// console.log(quotes);


// Function for picking a quote randomly
// from the quotes array

function getRandomQuote(arr){
  const length = arr.length;
  //generating random number by array length
  const randomNum = Math.floor(Math.random()*length);
  const randomQuote = arr[randomNum];
  return randomQuote;
}

// console.log(getRandomQuote(quotes).quote);


// Function to check if a color is dark or light
// code snippets by Andreas Wik from Codepen.io
function lightOrDark(color) {

  // Variables for red, green, blue values
  let r, g, b, hsp;
  
  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {

      // If RGB --> store the red, green, blue values in separate variables
      color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
      
      r = color[1];
      g = color[2];
      b = color[3];
  } 
  else {
      
      // If hex --> Convert it to RGB: http://gist.github.com/983661
      color = +("0x" + color.slice(1).replace( 
      color.length < 5 && /./g, '$&$&'));

      r = color >> 16;
      g = color >> 8 & 255;
      b = color & 255;
  }
  
  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(
  0.299 * (r * r) +
  0.587 * (g * g) +
  0.114 * (b * b)
  );

  // Using the HSP value, determine whether the color is light or dark
  if (hsp>127.5) {

      return 'light';
  } 
  else {

      return 'dark';
  }
}



// Function to print quote on the page

function printQuote(){
  // assigning a random quote into a variable
  const quoteObj = getRandomQuote(quotes);
  // console.log(quoteObj);
  // changing the body color with every quote
  // code snippets by Akhil sai from Dev.to
  let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  // check the color contrast
  let contrast = lightOrDark(randomColor);
  // check if its a light color
  // regenerate dark color again
  if (contrast == 'dark'){
    // changing the body style
    document.querySelector('body').style.backgroundColor = randomColor;
    // document.querySelector('body').style.color = 'white';
    // document.querySelector('.load-quote').style.color = 'white';
  }
  else {
    while(contrast == 'light'){
      randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      contrast = lightOrDark(randomColor);
      // console.log(contrast);
    }
    document.querySelector('body').style.backgroundColor = randomColor;
    // document.querySelector('body').style.color = 'black';
    // document.querySelector('.load-quote').style.color = 'black';
  }

  // breaking down the quote into individual variables
  const quote = quoteObj.quote;
  const author = quoteObj.source;
  const cite = quoteObj.citation;
  const year = quoteObj.year;
  const tag = quoteObj.tags;
  let html;
  //  conditional rendering of html variable
  if (cite && year && tag){
    html = `
    <p class="quote">${quote}</p>
    <p class="source">${author}
      <span class="citation">${cite}</span>
      <span class="year">${year}</span>
    </p>
    <p>tag: ${tag}</p>
  `;
  }
  else if (cite && tag){
    html = `
    <p class="quote">${quote}</p>
    <p class="source">${author}
      <span class="citation">${cite}</span>
    </p>
    <p>tag: ${tag}</p>
  `;
  }
  else if (year && tag){
    html = `
    <p class="quote">${quote}</p>
    <p class="source">${author}
      <span class="year">${year}</span>
    </p>
    <p>tag: ${tag}</p>
  `;
  }
  else if (cite && year){
    html = `
    <p class="quote">${quote}</p>
    <p class="source">${author}
      <span class="citation">${cite}</span>
      <span class="year">${year}</span>
    </p>
  `;
  }
  else if(cite){
    html = `
    <p class="quote">${quote}</p>
    <p class="source">${author}
      <span class="citation">${cite}</span>
    </p>
  `;
  }
  else if(year){
    html = `
    <p class="quote">${quote}</p>
    <p class="source">${author}
      <span class="year">${year}</span>
    </p>
  `;
  }
  else if(tag){
    html = `
    <p class="quote">${quote}</p>
    <p class="source">${author}</p>
    <p>tag: ${tag}</p>
  `;
  }
  else {
    html = `
    <p class="quote">${quote}</p>
    <p class="source">${author}</p>
  `;
  }
  // adding the html within the quote box
  document.getElementById('quote-box').innerHTML = html;
}

// Display a random quote when
// the user visits the webpage
printQuote();


// Repond to users click events
// when a user press 'show another quote' button

document.getElementById('load-quote').addEventListener("click", printQuote, false);


// Auto refresh the code every 10 second

setInterval(printQuote,10000);