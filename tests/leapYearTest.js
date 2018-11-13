let should = require('should');
let leapYear = require('../leapYear');

describe('leapYear.js', () => {
   
    it('2012 should be a leap year', () => {
        leapYear(2012).should.be.equal(true);
    });

    it('2013 should not be a leap year', () => {
        leapYear(2013).should.be.equal(false);
    });

    it('String should not be a leap year', () => {
        leapYear("String").should.be.equal(false);
    });

});