const button = document.querySelector("button");
const quote = document.querySelector("p");

async function generate() {
  const response = await fetch(
    "https://raw.githubusercontent.com/papavlad/Data/main/quotes.json"
  );
  const data = await response.json();
  const number = Math.floor(Math.random() * data.quotes.length);
  quote.innerHTML = data.quotes[number];
}

button.addEventListener("click", generate);
