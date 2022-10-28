// object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// object destructuring

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}
// console.log(product.label)

/*
const { label: productLabel, stock, rating = 5, rating2 } = product
// console.log(label) //label is not defined
console.log(productLabel)
console.log(stock)
console.log(rating)
console.log(rating2)
*/

const transaction = (type, { label , stock = 0 }={}) => {
    console.log(type, label, stock)
}

transaction('order', product)
