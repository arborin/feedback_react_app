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