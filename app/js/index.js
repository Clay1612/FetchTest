'use strict'
//Variables
const UsersURL = 'https://jsonplaceholder.typicode.com/users';
const PhotoURL = 'https://jsonplaceholder.typicode.com/photos';
const CommentsURL = 'https://jsonplaceholder.typicode.com/comments';

let titleContent = document.querySelectorAll('.card-title');
let imageContent = document.querySelectorAll('.card-img-top');
let cardContent = document.querySelectorAll('.card-text');


//Fetch Function
function sendRequest(method, url, body = null) {
   return fetch(url).then(response => {
     return response.json();
   })
}


//Requests
sendRequest('GET', UsersURL)
  .then(data => {
    for(let i of titleContent) {
      i.innerHTML = data[0].name; //**FIX ME */
    }
  })

sendRequest('GET', PhotoURL)
  .then(data => {
    for(let i of imageContent) {
      i.src = data[0].url; //**FIX ME */
    }
  })

sendRequest('GET', CommentsURL)
  .then(data => {
    for(let i of cardContent) {
      i.innerHTML = data[0].body; //**FIX ME */
    }
  })
