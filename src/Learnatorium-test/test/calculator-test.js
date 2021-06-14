var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

var calculator = require('../unitTest');

describe('Testing assert function; ',function(){
    describe('Check addTest Function',function(){
        it('Check the returned value using : assert.equals(value,value): ',function(){
            result=calculator.addTest(1,1);
            assert.equal(result,2);
        })
    })
})