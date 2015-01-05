
var path = require('path');
global.__root = path.resolve(__dirname + "/..");1

var should = require('should');
var assert = require('assert');

var simpletypes = require(__root + '/lib/simpletypes.js');

describe('simpletypes', function() {

    before(function(done){
        done();
    });

    describe('simpletypes.isBoolean()', function(){

        it('should return true if parameter is boolean true', function(done) {
            simpletypes.isBoolean(true).should.be.ok;
            done();
        });

        it('should return true if parameter is boolean false', function(done) {
            simpletypes.isBoolean(false).should.be.ok;
            done();
        });

        it('should return false if parameter is an empty string', function(done) {
            simpletypes.isBoolean("").should.not.be.ok;
            done();
        });

        it('should return false if parameter is any string ', function(done) {
            simpletypes.isBoolean('hello world').should.not.be.ok;
            done();
        });

        it('should return false if parameter is string "false"', function(done) {
            simpletypes.isBoolean('false').should.not.be.ok;
            done();
        });

        it('should return false if parameter is string "true"', function(done) {
            simpletypes.isBoolean('true').should.not.be.ok;
            done();
        });

        it('should return false if parameter is any integer', function(done) {
            simpletypes.isBoolean(18266).should.not.be.ok;
            done();
        });

        it('should return false if parameter is integer 0', function(done) {
            simpletypes.isBoolean(0).should.not.be.ok;
            done();
        });

        it('should return false if parameter is integer 1', function(done) {
            simpletypes.isBoolean(1).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an array', function(done) {
            simpletypes.isBoolean(['1', 'hello', 1]).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an empty array', function(done) {
            simpletypes.isBoolean([]).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an object', function(done) {
            simpletypes.isBoolean({}).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a function', function(done) {
            simpletypes.isBoolean(function(){}).should.not.be.ok;
            done();
        });

        it('should return false if parameter is null', function(done) {
            simpletypes.isBoolean(null).should.not.be.ok;
            done();
        });

        it('should return false if parameter is undefined', function(done) {
            simpletypes.isBoolean(undefined).should.not.be.ok;
            done();
        });
    });

    describe('simpletypes.isString()', function() {

        it('should return true if parameter is a string', function (done) {
            simpletypes.isString('a string').should.be.ok;
            done();
        });

        it('should return true if parameter is an empty string', function(done) {
            simpletypes.isString("").should.be.ok;
            done();
        });

        it('should return false if parameter is a integer', function(done) {
            simpletypes.isString(121).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a number', function(done) {
            simpletypes.isString(1.5).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a boolean', function(done) {
            simpletypes.isString(true).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an array', function(done) {
            simpletypes.isString(['1', 'hello', 1]).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an empty array', function(done) {
            simpletypes.isString([]).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an object', function(done) {
            simpletypes.isString({}).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a function', function(done) {
            simpletypes.isString(function(){}).should.not.be.ok;
            done();
        });

        it('should return false if parameter is null', function(done) {
            simpletypes.isString(null).should.not.be.ok;
            done();
        });

        it('should return false if parameter is undefined', function(done) {
            simpletypes.isString(undefined).should.not.be.ok;
            done();
        });
    });

    describe('simpletypes.isInteger()', function() {

        it('should return true if parameter is a integer', function (done) {
            simpletypes.isInteger(100).should.be.ok;
            done();
        });

        it('should return false if parameter is a string', function(done) {
            simpletypes.isInteger("hello").should.not.be.ok;
            done();
        });

        it('should return false if parameter is an empty string', function(done) {
            simpletypes.isInteger("").should.not.be.ok;
            done();
        });

        it('should return false if parameter is a float', function(done) {
            simpletypes.isInteger(1.21).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a boolean', function(done) {
            simpletypes.isInteger(true).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an array', function(done) {
            simpletypes.isInteger(['1', 'hello', 1]).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an empty array', function(done) {
            simpletypes.isInteger([]).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an object', function(done) {
            simpletypes.isInteger({}).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a function', function(done) {
            simpletypes.isInteger(function(){}).should.not.be.ok;
            done();
        });

        it('should return false if parameter is null', function(done) {
            simpletypes.isInteger(null).should.not.be.ok;
            done();
        });

        it('should return false if parameter is undefined', function(done) {
            simpletypes.isInteger(undefined).should.not.be.ok;
            done();
        });
    });

    describe('simpletypes.isFloat()', function() {

        it('should return true if parameter is a float', function(done) {
            simpletypes.isFloat(1.21).should.be.ok;
            done();
        });

        it('should return false if parameter is a integer', function (done) {
            simpletypes.isFloat(100).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a string', function(done) {
            simpletypes.isFloat("hello").should.not.be.ok;
            done();
        });

        it('should return false if parameter is an empty string', function(done) {
            simpletypes.isFloat("").should.not.be.ok;
            done();
        });

        it('should return false if parameter is a boolean', function(done) {
            simpletypes.isFloat(true).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an array', function(done) {
            simpletypes.isFloat(['1', 'hello', 1]).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an empty array', function(done) {
            simpletypes.isFloat([]).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an object', function(done) {
            simpletypes.isFloat({}).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a function', function(done) {
            simpletypes.isFloat(function(){}).should.not.be.ok;
            done();
        });

        it('should return false if parameter is null', function(done) {
            simpletypes.isFloat(null).should.not.be.ok;
            done();
        });

        it('should return false if parameter is undefined', function(done) {
            simpletypes.isFloat(undefined).should.not.be.ok;
            done();
        });
    });

    describe('simpletypes.isNumber()', function() {

        it('should return true if parameter is a float', function(done) {
            simpletypes.isNumber(1.21).should.be.ok;
            done();
        });

        it('should return true if parameter is a integer', function (done) {
            simpletypes.isNumber(100).should.be.ok;
            done();
        });

        it('should return false if parameter is a string', function(done) {
            simpletypes.isNumber("hello").should.not.be.ok;
            done();
        });

        it('should return false if parameter is an empty string', function(done) {
            simpletypes.isNumber("").should.not.be.ok;
            done();
        });

        it('should return false if parameter is a boolean', function(done) {
            simpletypes.isNumber(true).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an array', function(done) {
            simpletypes.isNumber(['1', 'hello', 1]).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an empty array', function(done) {
            simpletypes.isNumber([]).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an object', function(done) {
            simpletypes.isNumber({}).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a function', function(done) {
            simpletypes.isNumber(function(){}).should.not.be.ok;
            done();
        });

        it('should return false if parameter is null', function(done) {
            simpletypes.isNumber(null).should.not.be.ok;
            done();
        });

        it('should return false if parameter is undefined', function(done) {
            simpletypes.isNumber(undefined).should.not.be.ok;
            done();
        });
    });

    describe('simpletypes.isNull()', function() {

        it('should return false if parameter is a float', function(done) {
            simpletypes.isNull(1.21).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a integer', function (done) {
            simpletypes.isNull(100).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a string', function(done) {
            simpletypes.isNull("hello").should.not.be.ok;
            done();
        });

        it('should return false if parameter is an empty string', function(done) {
            simpletypes.isNull("").should.not.be.ok;
            done();
        });

        it('should return false if parameter is a boolean', function(done) {
            simpletypes.isNull(true).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an array', function(done) {
            simpletypes.isNull(['1', 'hello', 1]).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an empty array', function(done) {
            simpletypes.isNull([]).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an object', function(done) {
            simpletypes.isNull({}).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a function', function(done) {
            simpletypes.isNull(function(){}).should.not.be.ok;
            done();
        });

        it('should return true if parameter is null', function(done) {
            simpletypes.isNull(null).should.be.ok;
            done();
        });

        it('should return false if parameter is undefined', function(done) {
            simpletypes.isNull(undefined).should.not.be.ok;
            done();
        });
    });

    describe('simpletypes.isUndefined()', function() {

        it('should return false if parameter is a float', function(done) {
            simpletypes.isUndefined(1.21).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a integer', function (done) {
            simpletypes.isUndefined(100).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a string', function(done) {
            simpletypes.isUndefined("hello").should.not.be.ok;
            done();
        });

        it('should return false if parameter is an empty string', function(done) {
            simpletypes.isUndefined("").should.not.be.ok;
            done();
        });

        it('should return false if parameter is a boolean', function(done) {
            simpletypes.isUndefined(true).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an array', function(done) {
            simpletypes.isUndefined(['1', 'hello', 1]).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an empty array', function(done) {
            simpletypes.isUndefined([]).should.not.be.ok;
            done();
        });

        it('should return false if parameter is an object', function(done) {
            simpletypes.isUndefined({}).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a function', function(done) {
            simpletypes.isUndefined(function(){}).should.not.be.ok;
            done();
        });

        it('should return false if parameter is null', function(done) {
            simpletypes.isUndefined(null).should.not.be.ok;
            done();
        });

        it('should return true if parameter is undefined', function(done) {
            simpletypes.isUndefined(undefined).should.be.ok;
            done();
        });
    });

    describe('simpletypes.isEmpty()', function() {

        it('should return false if parameter is a float', function(done) {
            simpletypes.isEmpty(1.21).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a integer', function (done) {
            simpletypes.isEmpty(100).should.not.be.ok;
            done();
        });

        it('should return true if parameter is integer 0', function (done) {
            simpletypes.isEmpty(0).should.be.ok;
            done();
        });

        it('should return true if parameter is float 0.0', function (done) {
            simpletypes.isEmpty(0.0).should.be.ok;
            done();
        });

        it('should return false if parameter is a string', function(done) {
            simpletypes.isEmpty("hello").should.not.be.ok;
            done();
        });

        it('should return true if parameter is an empty string', function(done) {
            simpletypes.isEmpty("").should.be.ok;
            done();
        });

        it('should return true if parameter is a boolean false', function(done) {
            simpletypes.isEmpty(false).should.be.ok;
            done();
        });

        it('should return false if parameter is an array', function(done) {
            simpletypes.isEmpty(['1', 'hello', 1]).should.not.be.ok;
            done();
        });

        it('should return true if parameter is an empty array', function(done) {
            simpletypes.isEmpty([]).should.be.ok;
            done();
        });

        it('should return false if parameter is an object', function(done) {
            simpletypes.isEmpty({}).should.not.be.ok;
            done();
        });

        it('should return false if parameter is a function', function(done) {
            simpletypes.isEmpty(function(){}).should.not.be.ok;
            done();
        });

        it('should return true if parameter is null', function(done) {
            simpletypes.isEmpty(null).should.be.ok;
            done();
        });

        it('should return false if parameter is undefined', function(done) {
            simpletypes.isEmpty(undefined).should.not.be.ok;
            done();
        });
    });

});