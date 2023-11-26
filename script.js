const facebookBtn = document.querySelector(".js-facebook-btn");
const newQuoteBtn = document.querySelector(".js-new-quote-btn");

const displayQuote = document.querySelector(".js-display-quote");
const quoteAuthor = document.querySelector(".js-quote-author");

facebookBtn.addEventListener("click", () => {
  window.open(`https://www.facebook.com/`);
})

newQuoteBtn.addEventListener("click", () => {
  newQuote("https://api.quotable.io/random");
})

async function newQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  displayQuote.innerHTML = data.content;
  quoteAuthor.innerHTML = data.author;
}

newQuote("https://api.quotable.io/random") //calling the function so that after loading the page it will show a quote from the api
