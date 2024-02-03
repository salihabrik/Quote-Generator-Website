const quote = document.getElementById('quote');
const author = document.getElementById('author');
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();


    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(api_url);

function tweet() {
    const quoteText = encodeURIComponent(quote.innerHTML);
    const authorText = encodeURIComponent(author.innerHTML);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText} ----by ${authorText}`;
    
    window.open(tweetUrl, "Tweet Window", "width=600, height=300");
}


/*
function tweet(){
    window.open("https://twitter.com/intent/tweet?"  + quote.innerHTML + " ----by " + author.innerHTML, "Tweet Window", "width=600, height=300");
}*/