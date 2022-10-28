const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { title } = require('process')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../template/views')
const partialPath = path.join(__dirname, '../template/partials')

// Setup handlebar engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'me'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'me'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'helppppppppp',
        title: 'Help',
        name: 'andy'
    })
})

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide a address'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, label } = {}) => {
        if (error) {
            return res.send({ error })
        }
        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                address: req.query.address,
                label: label,
                forecast: forecastData,

            })
        })
    })
})

// geocode(address, (error, { latitude, longitude, label } = {}) => {
//     if (error) {
//         return console.log('error1: ' + error)
//     }
//     forecast(longitude, latitude, (error, forecastData) => {
//         if (error) {
//             console.log('error3: ' + error)
//         }
//         console.log('label: ' + label) //geocode.js要回傳
//         console.log('forecast: ' + forecastData)
//     })
// })

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

// ------------------------------------

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'help 404',
        errorMessage: 'Help article not found'
    })
})


app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})