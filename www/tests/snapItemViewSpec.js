var SnapItemView = require('../src/js/views/snap-item.js');
var Backbone = require('backbone');

describe('SnapItemView', function() {

  beforeEach(function() {
    this.view = new SnapItemView();
  });

  afterEach(function() {
    this.view = null;
  });

  it('should be an instance of Backbone.View', function() {
    expect(SnapItemView).toBeDefined();
    expect(this.view).toEqual(jasmine.any(Backbone.View));
  });

});