function a() {
  console.log(this);
  this.newvariable = 'hello';
}

var b = function() {
  console.log(this);
};

a();

console.log(newvariable); // not good!

b();

var c = {
  name: 'The c object',
  log: function() {
    //var self = this;

    //self.name = 'Updated c object';
    this.name = 'Updated c object';
    console.log(this);

    var setname = newname => {
      this.name = newname;
    };
    setname('Updated again! The c object');
    console.log(this);
  },
};

c.log();
