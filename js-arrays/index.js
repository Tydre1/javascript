const arrayVazia = [, , ,];

console.log(arrayVazia.length)


// push adiciona elementos
// pop remove elementos (o último)

arrayVazia.push(50)

console.log(arrayVazia[0])
console.log(arrayVazia[1])
console.log(arrayVazia[2])

// map()

const arrayNums = [1, 2, 3, 4];

function multiplicaPorDez(num) {
    return num * 10
}

// const arraySomada = arrayNums.map(multiplicaPorDez)
// console.log(arraySomada)

const arraySomada = arrayNums.map(num => num * 10)

console.log(arraySomada)