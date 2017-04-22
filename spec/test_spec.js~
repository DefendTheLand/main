"use strict";

describe("Word Frequency", function() {
    var main = require('./test.js')


    it('returns empty string given empty string',function(){
        var result=main('')
        var expect_string=''
        expect(expect_string).toEqual(result)
    })

    it('returns one string given one string',function(){
        var result=main('a')
        var expect_string='a 1'
        expect(expect_string).toEqual(result)
    })

	it('returns string given two different words',function(){
        var result=main('a b')
        var expect_string='a 1\r\nb 1'
        expect(expect_string).toEqual(result)
    })

	it('returns string given duplicated words',function(){
        var result=main('a b a')
        var expect_string='a 2\r\nb 1'
        expect(expect_string).toEqual(result)
    })

	it('returns string given duplicated words need to be sorted',function(){
        var result=main('a b b b')
        var expect_string='b 3\r\na 1'
        expect(expect_string).toEqual(result)
    })
    
    it('returns string given words splited by multiple spaces',function(){
        var result=main('a   b')
        var expect_string='a 1\r\nb 1'
        expect(expect_string).toEqual(result)
    })
})
