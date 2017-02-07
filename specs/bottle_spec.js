var assert = require('assert');
var bottle = require('../bottle');

describe('bottle', function(){
  it('should be empty', function(){
    assert.equal(0, bottle.volume );
  });
  
  it('should be filled', function(){
    bottle.fill();
    assert.equal(100, bottle.volume);
  });
  

  it("can take drink", function(){
    bottle.drink();
    assert.equal(90, bottle.volume);
  });


  it("can be emptied", function(){
    bottle.empty();
    assert.equal(0, bottle.volume);
  });

  it("can't go below zero", function(){
    bottle.drink();
    assert.equal(0, bottle.volume);
  });

});