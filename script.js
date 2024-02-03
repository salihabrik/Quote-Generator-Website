const quote = d


const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getQuote(api_url);
