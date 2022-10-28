
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

/*
const url = 'http://api.weatherstack.com/current?access_key=29904d63c99ac431c0e6a5e664d1e9ef&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('unable to connect to weather service');
    } else if (response.body.error){
        console.log('unable to find location');
    } else {
        const temp = response.body.current.temperature;
        const feel = response.body.current.feelslike;
        const des = response.body.current.weather_descriptions[0];
        console.log(`${des}. It is currently ${temp} degree out. It feels like ${feel} degree out.`);
    }
})
*/

/*
const geocodeurl = 'http://api.positionstack.com/v1/forward?access_key=575038c5df6fd38c1b35e1c3908e21d5&query=600%20Pennsylvania%20Ave%20NW,%20Washington%20DC'

request({ url: geocodeurl, json: true }, (error, response) => {
    if (error) {
        console.log('unable to connect to map service');
    } else if (response.body.data.length == 0) {
        console.log('unable to find location');
    } else {
        const latitude = response.body.data[0].latitude
        const longitude = response.body.data[0].longitude
        console.log('latitude: ' + latitude)
        console.log('longitude: ' + longitude)
    }
})
*/


// geocode('Philadelphia', (error, data) => {
//     console.log('error1: ' + error)
//     console.log('latitude: ' + data.latitude, 'longitude: ' + data.longitude)
// })

geocode('!', (error, data) => {
    console.log('error2: ' + error)
    console.log('data2: ' + data)
})

// forecast(-75.7088, 44.1545, (error, data) => {
    
//     console.log('error3: ' + error)
//     console.log('data3: ' + data)
// })

// forecast(44.1545, -75.7088, (error, data) => {
    
//     console.log('error4: ' + error)
//     console.log('data4: ' + data)
// })