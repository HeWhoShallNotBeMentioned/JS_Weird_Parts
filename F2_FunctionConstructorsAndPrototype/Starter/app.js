function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('This function is invoked.');
}

Person.prototype.getFullName = function() {
  return this.firstname + ' ' + this.lastname;
};

var john = new Person('Sid', 'Abramowitz');
console.log(john);

var jane = new Person('Jane', 'Smith');
console.log(jane);

Person.prototype.getFormalFullName = function() {
  return this.lastname + ', ' + this.firstname;
};

console.log(john.getFormalFullName());
