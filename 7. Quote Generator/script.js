
const quoteApiURL = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");


async function getQuote(url){
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    quote.textContent = data.content ;
    author.textContent=data.author ;
}

getQuote(quoteApiURL);

function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${quote.textContent}  ----By ${author.textContent}`,
        "Tweet Window" , "width=600, height=300"
    );
}