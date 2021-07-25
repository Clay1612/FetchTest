'use strict'

//Request URL
const requestURL = 'https://jsonplaceholder.typicode.com/posts';

//Variables
let layoutRow = document.querySelector('.row');
let viewMoreButton = document.querySelector('.btn-secondary');
let rememberCount = 0;
let counter = 6;
let postTitleInput = document.getElementById('recipient-name');
let postTextInput = document.getElementById('message-text');
let addPostButton = document.getElementById('addPostButton');

//FETCH Functions
//GET
function sendGetRequest(url) {
  return fetch(url)
    .then(response => {
      return response.json()
    })
}

//Post
function sendPostRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  }

  return fetch(url, {
    method : method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    return response.json()
  })
}

//Requests
//GET
sendGetRequest(requestURL)
  .then(data => {
    addElements(data, 6)
  })

//Post
function addNewPost() {
  const postBody = {
    title: postTitleInput.value,
    body: postTextInput.value,
  }

  sendPostRequest('POST', requestURL, postBody)
  .then(data => {
    console.log(data)
  })  
}

addPostButton.addEventListener('click', addNewPost);

//Template functions
function createCard(data) {
  const card = document.querySelector('template').content.querySelector('.js-my-card').cloneNode(true);
  const titleContent = card.querySelector('.card-title');
  const cardContent = card.querySelector('.card-text');

  titleContent.innerHTML = data.title;
  cardContent.innerHTML = data.body;

  return card;
}

function addElements(data, count) {
  let array = data;
  let fragment = new DocumentFragment();

  if(array.length > counter) {
    for (let i = rememberCount; i < counter; i++) {
      fragment.append(createCard(data[i]));
    }
  
    layoutRow.append(fragment);
  
    rememberCount += count;
    counter +=count;

  } else {
    let lastPartOfArray = array.slice(rememberCount , array.length)
    for (let i = lastPartOfArray[0].id; i < array.length; i++) {       //** FIX ME */ // Последний элемент массива не показывает, <= не помогает
      fragment.append(createCard(data[i]));
    }
  
    layoutRow.append(fragment);
    viewMoreButton.setAttribute('disabled', 'disabled');
  }
}

//Event Listener on button View More
viewMoreButton.addEventListener('click', () => {
  sendGetRequest(requestURL)
  .then(data => {
    addElements(data, 6)
  })
});
