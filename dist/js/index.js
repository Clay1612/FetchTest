'use strict'; //Request URL

var requestURL = 'https://jsonplaceholder.typicode.com/posts'; //Variables

var layoutRow = document.querySelector('.row');
var viewMoreButton = document.querySelector('.btn-secondary');
var rememberCount = 0;
var counter = 6; //GET

function sendGetRequest(url) {
  return fetch(url).then(function (response) {
    return response.json();
  });
} //Requests
//GET


sendGetRequest(requestURL).then(function (data) {
  addElements(data, 6);
}); //Template functions

function createCard(data) {
  var card = document.querySelector('template').content.querySelector('.js-my-card').cloneNode(true);
  var titleContent = card.querySelector('.card-title');
  var cardContent = card.querySelector('.card-text');

  try {
    titleContent.innerHTML = data.title;
    cardContent.innerHTML = data.body;
    return card;
  } catch (_unused) {
    viewMoreButton.setAttribute('disabled', 'disabled'); // if(data.title === undefined) {
    //   titleContent.innerHTML = '';
    //   cardContent.innerHTML = '';
    // }                                   
    // Вариант где последние 4 карты не покажутся, зато не будет underfined текста
  }
}

function addElements(data, count) {
  var fragment = new DocumentFragment();

  for (var i = rememberCount; i < counter; i++) {
    fragment.append(createCard(data[i]));
  }

  layoutRow.append(fragment);
  rememberCount += count;
  counter += count;
} //Event Listener on button


viewMoreButton.addEventListener('click', function () {
  sendGetRequest(requestURL).then(function (data) {
    addElements(data, 6);
  });
});
//# sourceMappingURL=index.js.map
