function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    //could also have let j = i and console.log(j) to have 0, 1, 2 vs 3,3,3
    //that we currently good; Let is block scoped.
    arr.push(function() {
      console.log(i);
    });
  }

  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

function buildFunctions2() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        };
      })(i)
    );
  }

  return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();
