// function sayHello (name) {
//     console.log(`Hello ${name}`)
// }

function sayHello () {
    console.log(`Hello ${this.name}`)
}

sayHello.call({ name: 'Yoan'}, 'Ama')

