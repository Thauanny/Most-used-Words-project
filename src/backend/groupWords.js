
const { resolve } = require('path')

module.exports = words => {
    return new Promise((resolve, reject)=> {
        try{
            const groupedWords = words.reduce((obj, word) => {

                if(obj[word]){
                    obj[word] = obj[word] + 1
                }else{
                    obj[word] = 1
                }
                return obj
            }, {})

            const groupedWordsArray = Object.keys(groupedWords)
                                    .map(key => ({name: key, amout: groupedWords[key]}))
                                    .sort((w1, w2)=> w2.amout - w1.amout)
            resolve(groupedWordsArray)
        }catch(e){
            const error = words;
            error = '';
            reject(groupedWords);
        }
    })
}
