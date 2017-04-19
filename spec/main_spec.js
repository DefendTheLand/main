describe("Word Frequency", function() {
    var main = require('/home/name/main/spec/main.js')


    it('returns empty string given empty string',function(){
        var result=main('')
        var expect_string=''
        expect(expect_string).toEqual(result)
    })

    it('returns string given one word',function()
    {
        var result=main('he')
        expect(result).toEqual('he 1')

    })

    it('returns string given two different words',function()
    {
        var result=main('he is')
        expect(result).toEqual('he 1\r\nis 1')
    })

    it('returns string given duplicated different words',function()
    {
        var result=main('he is he')
        expect(result).toEqual('he 2\r\nis 1')
    })

    it('returns string given duplicated different words need to be sorted',function()
    {
        var result=main('he is is')
        expect(result).toEqual('is 2\r\nhe 1')
    })

    it('returns string given words splited by multiple spaces',function()
    {
        var result=main('he   is')
        expect(result).toEqual('he 1\r\nis 1')
    })


})