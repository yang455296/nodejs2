const fs = require('fs')
const { userInfo } = require('os')
const book = {
    title:'123',
    author:'321',
    version: 2
}
/*
// JSON是字串,沒有屬性值
const bookJSON = JSON.stringify(book)
console.log(bookJSON) // {"title":"123","author":"321","version":2} 雙引號
console.log(bookJSON.title) // undefined
console.log(book) //{ title: '123', author: '321', version: 2 }
console.log(book.title) //123

// 找JSON內資料用JSON.parse
const parseData = JSON.parse(bookJSON)
console.log(parseData.author) //321
*/
/*
const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON) //按照上面給的資訊去建一個.json
*/
/*
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)
*/

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'new' 
data.age = 20

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON )

