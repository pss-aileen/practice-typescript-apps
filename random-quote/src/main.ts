import "tailwindcss/tailwind.css";

// fetch("https://dummyjson.com/test")
fetch("https://dummyjson.com/quotes/random")
  // starts the process of fetching: https://developer.mozilla.org/en-US/docs/Web/API/fetch
  .then((res) => res.json())
  // when promise return `fulfilled` , do `res` and then, return res.json()
  .then(console.log);
