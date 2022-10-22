// const square = function(x){
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

const square = (x) => x * x

console.log(square(3))

const event1 = {
    name: '123',
    guestList: ['1', '2', '3'],
    printList() {
        //上面函式簡化
        console.log('list for' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + 'is attending' + this.name) //箭頭函式this要注意不會綁函式自己
        })
    }
}

event1.printList()