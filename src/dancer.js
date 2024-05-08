// Creates and returns a new dancer object that can step
//func - pseudo
   // remove dancer

var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  // use jQuery to create an HTML <span> tag



  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body


};


Dancer.prototype.step = function() {
  var scope = this;
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(function() {
    scope.step();
  },
  this._timeBetweenSteps);

};



Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //

  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

