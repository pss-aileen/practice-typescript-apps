// fetch("https://dummyjson.com/test")
fetch("https://dummyjson.com/quotes/random")
  // starts the process of fetching: https://developer.mozilla.org/en-US/docs/Web/API/fetch
  .then((res) => res.json())
  // when promise return `fulfilled` , do `res` and then, return res.json()
  .then((data) => {
    console.log(data);
    const quoteDom = document.getElementById("quote") as HTMLElement;
    const authorDom = document.getElementById("author") as HTMLElement;
    const quoteIdDom = document.getElementById("quote-id") as HTMLElement;

    quoteIdDom.textContent = data.id;
    quoteDom.textContent = data.quote;
    authorDom.textContent = data.author;
  });
