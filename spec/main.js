function CountWords() {
}

CountWords.prototype.main = function (text) {
    var wordsArray = text.split(/\s+/);

    var countResult = this.countEachWord(wordsArray);

    countResult.sort(function compareEachOne(a,b){
        return a[1] > b[1] ? -1 : (a[1] < b[1] ? 1 : 0);
    });

    return this.format(countResult);
};

CountWords.prototype.format = function (arr) {
    var resultStr = '';

    for(var i in arr){
        if(i === '0')       //attention : i is equal'0',not 0
            resultStr += arr[i][0] + ' ' + arr[i][1];
        else
            resultStr += '\r\n' + arr[i][0] + ' ' + arr[i][1];
    }

    return resultStr;
};

CountWords.prototype.countEachWord = function(wordsArray){
    var countArray = [];

    for(var i = 0; i < wordsArray.length; i++){
        var wordPos = this.findWordPosition(wordsArray[i],countArray);

        if(wordPos !== false){
            countArray[wordPos][1]++;
        }
        else{
            countArray.push([wordsArray[i],1]);
        }
    }

    return countArray;
};

CountWords.prototype.findWordPosition = function (word ,arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i][0] === word)
        {
            return i;
        }
    }
    return false;
};

module.exports = CountWords;
