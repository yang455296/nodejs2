setTimeout(() => {
    console.log('two second are up')
}, 2000)

const names = ['11', '22', '33']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }

        callback(data)
    }, 2000)
}
geocode('Philadelphia', (data) => {
    console.log(data)
})

const add = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b;
        callback(sum)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})
