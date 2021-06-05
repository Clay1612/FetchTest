'use strict'; //Variables

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var UsersURL = 'https://jsonplaceholder.typicode.com/users';
var PhotoURL = 'https://jsonplaceholder.typicode.com/photos';
var CommentsURL = 'https://jsonplaceholder.typicode.com/comments';
var titleContent = document.querySelectorAll('.card-title');
var imageContent = document.querySelectorAll('.card-img-top');
var cardContent = document.querySelectorAll('.card-text'); //Fetch Function

function sendRequest(method, url) {
  var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return fetch(url).then(function (response) {
    return response.json();
  });
} //Requests


sendRequest('GET', UsersURL).then(function (data) {
  var _iterator = _createForOfIteratorHelper(titleContent),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var i = _step.value;
      i.innerHTML = data[0].name; //**FIX ME */
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
sendRequest('GET', PhotoURL).then(function (data) {
  var _iterator2 = _createForOfIteratorHelper(imageContent),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var i = _step2.value;
      i.src = data[0].url; //**FIX ME */
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});
sendRequest('GET', CommentsURL).then(function (data) {
  var _iterator3 = _createForOfIteratorHelper(cardContent),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var i = _step3.value;
      i.innerHTML = data[0].body; //**FIX ME */
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
});
//# sourceMappingURL=index.js.map
