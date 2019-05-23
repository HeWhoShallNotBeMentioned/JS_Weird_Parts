// function statement
function greet(name) {
  console.log('Hello ' + name);
}
greet('John1');

// using a function expression
var greetFunc = function(name) {
  console.log('Hello ' + name);
};
greetFunc('John2');

// using an Immediately Invoked Function Expression (IIFE)
var greeting = (function(name) {
  return 'Hello ' + name;
})('John3');

console.log(greeting);

// IIFE
var firstname = 'John4';

(function(name) {
  var greeting = 'Inside IIFE: Hello';
  console.log(greeting + ' ' + name);
})(firstname); // IIFE
