greet();
//statement - returns nothing until run
function greet() {
  console.log('hi');
}
//expression - function statement passed to a variable
var anonymousGreet = function() {
  console.log('hi');
};
//function expressions are not hoisted so this invoking must be below the expression declaration.
anonymousGreet();

function log(a) {
  a();
}

log(function() {
  console.log('howdy do doggies?');
});
