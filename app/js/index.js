'use strict'

//Variables
const requestURL = 'https://jsonplaceholder.typicode.com/comments';

let titleContent = document.querySelectorAll('.card-title');
let subTutleContent = document.querySelectorAll('.card-subtitle');
let cardContent = document.querySelectorAll('.card-text');

let body = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle: 'qwertyui@gmail.com',
  text: 'consectetur adipisicing elit',
}

// RequestFunction
//GET
function sendGetRequest(url) {
  return fetch(url)
    .then(response => {
      return response.json()
    })
}

//Post
function sendPostRequest(method, url, body = null) {
  let headers = {
    'Content-Type': 'application/json',
  }

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  })
  .then(response => {
    return response.json()
  })
}

//Requests
//GET
sendGetRequest(requestURL)
  .then(data => {
    for(let i of titleContent) {
      i.innerHTML = data[0].name;
    }

    for(let i of subTutleContent) {
      i.innerHTML = data[0].email;
    }

    for(let i of cardContent) {
      i.innerHTML = data[0].body;
    }
  })

//POST
sendPostRequest('POST', requestURL, body)
  .then(data => console.log(data));