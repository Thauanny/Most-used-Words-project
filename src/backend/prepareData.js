
const { resolve } = require('path')

module.exports = rows => {
    return new Promise((resolve, reject)=> {
        try{
            const words = rows.filter(filterValidRow)
                              .map(removePunctuation)
                              .map(removeTags)
                              .reduce(mergeRows)
                              .split(' ')
                              .map(word => word.toLowerCase())
                              .map(word => word.replace('"', ''))
                              .map(word => word.replace('?', ''))
                              .map(word => word.replace(',', ''))
                              .map(word => word.replace('.', ''))

            resolve(words)
        }catch(e){
            const not = rows;
            not = '';
            reject(not);
        }
    })
}



function filterValidRow(row){
    const  notNumber = !parseInt(row.trim())
    const notEmpty = !!row.trim()
    const notInterval = !row.includes('-->')

    return notNumber && notEmpty && notInterval
}


const removePunctuation = row => row.replace(/[,?!.-]/g, '')

const removeTags = row => row.replace(/(<[^>]+)>/ig, '').trim()

const mergeRows = (fullText, row) => `${fullText} ${row}`