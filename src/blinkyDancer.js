var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  this.blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);
  this.oldStep = this.blinkyDancer.step;
  this.step();
  
};


makeBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.blinkyDancer.$node.toggle();
};

