var should = require('should');
var dojo = require('../lib/dojo');

describe('numeros romandos', function() {
  it('I deve ser convertido para 1', function() {
  	console.log(dojo);
  	(dojo.run("I")).should.be.exactly(1);
  });

  it('V deve ser convertido para 5', function() {
  	console.log(dojo);
  	(dojo.run("V")).should.be.exactly(5);
  });

  it('III deve ser convertido para 3', function() {
  	console.log(dojo);
  	(dojo.run("III")).should.be.exactly(3);
  });

  it('IV deve ser convertido para 4', function() {
  	console.log(dojo);
  	(dojo.run("IV")).should.be.exactly(4);
  });

  it('VI deve ser convertido para 6', function() {
  	console.log(dojo);
  	(dojo.run("VI")).should.be.exactly(6);
  });


  it('VII deve ser convertido para 7', function() {
  	console.log(dojo);
  	(dojo.run("VII")).should.be.exactly(7);
  });

  it('VIII deve ser convertido para 8', function() {
  	console.log(dojo);
  	(dojo.run("VIII")).should.be.exactly(8);
  });

  it('X deve ser convertido para 10', function() {
  	console.log(dojo);
  	(dojo.run("X")).should.be.exactly(10);
  });

  it('IX deve ser convertido para 9', function() {
  	console.log(dojo);
  	(dojo.run("IX")).should.be.exactly(9);
  });

  it('XVIII deve ser convertido para 18', function() {
  	console.log(dojo);
  	(dojo.run("XVIII")).should.be.exactly(18);
  });

  it('XIV deve ser convertido para 14', function() {
  	console.log(dojo);
  	(dojo.run("XIV")).should.be.exactly(14);
  });

  it('XX deve ser convertido para 20', function() {
  	console.log(dojo);
  	(dojo.run("XX")).should.be.exactly(20);
  });

  it('XIX deve ser convertido para 19', function() {
  	console.log(dojo);
  	(dojo.run("XIX")).should.be.exactly(19);
  });

  it('L deve ser convertido para 50', function() {
  	console.log(dojo);
  	(dojo.run("L")).should.be.exactly(50);
  });

  it('XLIX deve ser convertido para 49', function() {
  	console.log(dojo);
  	(dojo.run("XLIX")).should.be.exactly(49);
  });

  it('C deve ser convertido para 100', function() {
  	console.log(dojo);
  	(dojo.run("C")).should.be.exactly(100);
  });

  it('XCIX deve ser convertido para 99', function() {
  	console.log(dojo);
  	(dojo.run("XCIX")).should.be.exactly(99);
  });

  it('D deve ser convertido para 500', function() {
  	console.log(dojo);
  	(dojo.run("D")).should.be.exactly(500);
  });

  it('DXLVII deve ser convertido para 547', function() {
  	console.log(dojo);
  	(dojo.run("DXLVII")).should.be.exactly(547);
  });

  it('M deve ser convertido para 1000', function() {
  	console.log(dojo);
  	(dojo.run("M")).should.be.exactly(1000);
  });

  it('MMMDCCCXLVII deve ser convertido para 3847', function() {
  	console.log(dojo);
  	(dojo.run("MMMDCCCXLVII")).should.be.exactly(3847);
  });
});