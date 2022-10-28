const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
// console.log(process.argv)

if (!address) {
    console.log("please provide address")
} else {
    geocode(address, (error, { latitude, longitude, label } = {}) => {
        if (error) {
            return console.log('error1: ' + error)
        }
        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                console.log('error3: ' + error)
            }
            console.log('label: ' + label) //geocode.js要回傳
            console.log('forecast: ' + forecastData)
        })
    })
}

