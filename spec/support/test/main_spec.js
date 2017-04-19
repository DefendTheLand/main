describe("Frequency Number", function () {
    var CountWords = require('../main');
    var countWords;

    beforeEach(function () {
        countWords = new CountWords();
    });

    it("should return 'it 1' when given 'it'",function () {
        expect(countWords.main('it')).toEqual('it 1');
    });


    it("should return 'it 1\r\nis 1' when given 'it is'",function () {
        expect(countWords.main('it is')).toEqual('it 1\r\nis 1');
    });

    it("should return 'it 2\r\nis 1' when given 'it is it'",function () {
        expect(countWords.main('it is it')).toEqual('it 2\r\nis 1');
    });

    it("should return 'it 2\r\nis 1' when given 'it    is        it'",function () {
        expect(countWords.main('it     is    it')).toEqual('it 2\r\nis 1');
    });

    it("should return 'is 3\r\nit 2\r\nhe 1' when given 'it is it he is is'",function () {
        expect(countWords.main('it is it he is is')).toEqual('is 3\r\nit 2\r\nhe 1');
    });

    it("should return 'it 3\r\nwas 2\r\nthe 2\r\nage 2\r\nof 2\r\nwisdom 1\r\nfoolishness 1\r\nis 1' when given 'it was the age of wisdom it was the age of foolishness it is'",function () {
        expect(countWords.main('it was the age of wisdom it was the age of foolishness it is')).toEqual('it 3\r\nwas 2\r\nthe 2\r\nage 2\r\nof 2\r\nwisdom 1\r\nfoolishness 1\r\nis 1');
    });
});
