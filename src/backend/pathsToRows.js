const fileSystem = require('fs')
const { resolve } = require('path')

module.exports = paths => {
    return new Promise((resolve, reject)=> {
        try{
            const rows = paths.map(path => fileSystem.readFileSync(path).toString('utf8'))
                              .reduce((fullText, fileText) => `${fullText}\n${fileText}`)
                              .split('\n')

            resolve(rows)
        }catch(e){
            const vazio = paths;
            vazio = ''
            reject(vazio);
        }
    })
}