'use strict'; //Request URL

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var requestURL = 'https://jsonplaceholder.typicode.com/comments';
var body = {
  title: 'Lorem ipsum dolor sit amet',
  subtitle: 'qwertyui@gmail.com',
  text: 'consectetur adipisicing elit'
}; //Template variables

var cardTemplate = document.querySelector('.card-template');
var layoutRow = document.querySelector('.row'); // RequestFunction
//GET

function sendGetRequest(url) {
  return fetch(url).then(function (response) {
    return response.json();
  });
} //Post


function sendPostRequest(method, url) {
  var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var headers = {
    'Content-Type': 'application/json'
  };
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(function (response) {
    return response.json();
  });
} //Requests
//GET


sendGetRequest(requestURL).then(function (data) {
  var _iterator = _createForOfIteratorHelper(titleContent),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var i = _step.value;
      i.innerHTML = data[0].name; //** FIX ME */
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(subTutleContent),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _i = _step2.value;
      _i.innerHTML = data[0].email; //** FIX ME */
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var _iterator3 = _createForOfIteratorHelper(cardContent),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _i2 = _step3.value;
      _i2.innerHTML = data[0].body; //** FIX ME */
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}); //POST

sendPostRequest('POST', requestURL, body).then(function (data) {
  return console.log(data);
}); //Template functions

function createCard() {
  return cardTemplate; //Эта функция особо то и не нужна, не до конца видимо понял твою задумку, обсудим.
}

function addElement() {
  var fragment = new DocumentFragment();
  fragment.append(createCard().content.cloneNode(true));
  layoutRow.append(fragment);
} //Template add


addElement();
addElement();
addElement();
addElement();
addElement();
addElement();
var titleContent = document.querySelectorAll('.card-title');
var subTutleContent = document.querySelectorAll('.card-subtitle');
var cardContent = document.querySelectorAll('.card-text');
//# sourceMappingURL=index.js.map
