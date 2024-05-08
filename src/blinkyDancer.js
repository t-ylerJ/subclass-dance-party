
var BlinkyDancer = function(top, left, timeBetweenSteps) {
  // this.$node = $('<span class="dancer BlinkyDancer"></span>');
  // this.$node = $('<span class="BlinkyDancer"></span>');
  // this.oldStep = Dancer.prototype.step;

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('class', 'BlinkyDancer');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};


BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.css('background-image', '<img src="images/css_logo.png"');
  this.$node.toggle();

};



var CrazyDancer = function(top, left, timeBetweenSteps) {
  // this.$node = $('<span class="dancer BlinkyDancer"></span>');
  // this.$node = $('<span class="BlinkyDancer"></span>');
  // this.oldStep = Dancer.prototype.step;

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('class', 'CrazyDancer');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};


CrazyDancer.prototype = Object.create(Dancer.prototype);
CrazyDancer.prototype.constructor = CrazyDancer;

CrazyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
  this.$node.fadeIn();
  this.$node.fadeOut();
};

var ElevatorDancer = function(top, left, timeBetweenSteps) {
  // this.$node = $('<span class="dancer BlinkyDancer"></span>');
  // this.$node = $('<span class="BlinkyDancer"></span>');
  // this.oldStep = Dancer.prototype.step;

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('class', 'ElevatorDancer');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};


ElevatorDancer.prototype = Object.create(Dancer.prototype);
ElevatorDancer.prototype.constructor = ElevatorDancer;

ElevatorDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
  this.$node.animate({
    height: '10%',
    width: '10%'
  });

};
