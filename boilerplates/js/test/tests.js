var should = require('should');
var dojo = require('../lib/dojo');


describe('testando operações matemáticas', function() {
  it('1 + 1 deve ser igual a 2', function() {
  	(1 + 1).should.be.exactly(2);
  });
});