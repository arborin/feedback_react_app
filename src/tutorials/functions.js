const func = (arg) => {
    console.log(arg)
}

func("nikooo")


const arr = [1, 2, 3, 4, 5, 6]

const res = arr.map((el) => el * 2)
console.log(res)
temp = res.filter((el) => { if (el > 5) return el })

console.log(temp)

max = temp.reduce((max, value) => Math.max(max, value), 0)
console.log(max)


// rest parameters
function maxnum(a, b, ...numbers) {
    console.log(numbers)
}

maxnum(12, 3, 4, 5, 6, 3)
maxnum()

// SPRED OPERATOR
const names = ["bob", "john"]

let test = [...names] // copy of array
console.log(test)