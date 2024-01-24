console.log("Script load")

// import { key, name } from './util.js'
// console.log(key, name)

// import * as util from './util.js'

// console.log(util.key)
// console.log(util.name)

// function greet(name) {
//     console.log("hello " + name)
// }

// greet("nikooo")

// arrow functions
// const userName = 'max'
// const age = 43

// const user = {
//     name: 'max',
//     age: 32,
//     greet() {
//         console.log("hello " + this.name)
//     }
// }

// console.log(user.greet())

// class User {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     greet() {
//         console.log("HELLO USER: " + this.name)
//     }
// }

// const user1 = new User("Jemali", 33)
// user1.greet()

// arrays
const ages = [12, 321, 123, 12]
ages.push(100)
// console.log(ages)

const index = ages.findIndex((item) => {
    return item == 100
})

// console.log(index)

// ages.map((item) => { console.log(item) })


function transformToObjects(numberArray) {
    // Todo: Add your logic
    const obj = numberArray.map((item) => { return { 'val': item } })
    // should return an array of objects
    return obj
}

console.log(transformToObjects([1, 2, 3]))


//descturcute arrays
const [firstName, lastName] = ["nika", "kobaidze"]

console.log(firstName)

// destructure objects
const user = {
    name: "niko0000",
    age: 12
}

const { name, age } = user
console.log(name)
console.log(age)