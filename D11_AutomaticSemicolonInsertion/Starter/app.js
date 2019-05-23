function getPerson() {
  //if you start the object on a new line, the syntax parser will put in a ; for you and create an error.
  return {
    firstname: 'Tony',
  };
}

console.log(getPerson());
