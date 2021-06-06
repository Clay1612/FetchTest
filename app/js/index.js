'use strict'

//Request URL
const requestURL = 'https://jsonplaceholder.typicode.com/comments';

let body = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle: 'qwertyui@gmail.com',
  text: 'consectetur adipisicing elit',
}

//Template variables
let cardTemplate = document.querySelector('.card-template');
let layoutRow = document.querySelector('.row');

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
      i.innerHTML = data[0].name;  //** FIX ME */
    }

    for(let i of subTutleContent) {
      i.innerHTML = data[0].email; //** FIX ME */
    }

    for(let i of cardContent) {
      i.innerHTML = data[0].body; //** FIX ME */
    }
  })

//POST
sendPostRequest('POST', requestURL, body)
  .then(data => console.log(data));


//Template functions
function createCard() {
  return cardTemplate;
}

function addElement() {
  let fragment = new DocumentFragment();
  fragment.append(createCard().content.cloneNode(true));
  layoutRow.append(fragment);
}


//Template add
addElement();
addElement();
addElement();
addElement();
addElement();
addElement();

let titleContent = document.querySelectorAll('.card-title');
let subTutleContent = document.querySelectorAll('.card-subtitle');
let cardContent = document.querySelectorAll('.card-text');
