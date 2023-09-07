// Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of AJAX lets write some cool code!

// You will work with this part of the documention

// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Explanation of the Gif URL and the queries

// q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs

// rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation

// api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Create a program to retrieve the data from the API URL provided above. Use XMLHttpRequest object to make an AJAX request to the Giphy API and console.log the Javascript Object.


const url = " https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const xhr = new XMLHttpRequest();
xhr.addEventListener("load", logRequest);
xhr.open("GET", url);
xhr.send();

function logRequest(e){
    const response = JSON.parse(xhr.response);
   // console.log("response:",response);
   const first = response.data[0];
   console.log("first:",first)
}