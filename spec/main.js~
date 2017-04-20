function main(words) {
    if(words!=='')
    {
        let wordArray=words.split(/\s+/)
        let groupWords=group(wordArray)
        groupWords.sort((x,y)=>y.count-x.count)
        return  groupWords.map((e)=>format(e.word,e.count)).join('\r\n')
    }

    return ''
}

var group=function(wordArray)
{
    return wordArray.reduce((array,word)=>
        {
            let entry=array.find((e)=>e.word===word);
    if(entry)
    {
        entry.count++
    }
    else
    {
        array.push({word:word,count:1})
    }
    return array
},[])
}

var format=function(word,count)
{
    return word+' '+count
}

module.exports = main
