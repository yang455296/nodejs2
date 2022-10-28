const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=29904d63c99ac431c0e6a5e664d1e9ef&query=40,-75'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data +chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        // console.log(data)
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error)=>{
    console.log('an error', error)
})
request.end()