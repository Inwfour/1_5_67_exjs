// console.log('Hello World')

let x = 10

x += 20 // x = x + 20

x++ // x = x + 1

let num = 10

// if (num < 10) console.log('down')
// else if (num > 10) console.log('up')
// else console.log('eq')

// let cal = num < 10 ? console.log('down') : (num > 10 ? console.log('up') : console.log('eq'))

// console.log(cal)






// const { fullname } = require('./fn')

// // console.log(fn)

// console.log(fullname('ทดสอบ', 'ระบบ'))



// let num1 = 10
// let str = `1,2,3,4`
// let str1 = '\''


// console.log(str.split(','))



let arr = [1,2,3,4]

arr.push(5)
arr.pop()

arr.unshift(0)
arr.shift()


let new_arr = arr.map((val, i, arr) => {
    return val + 1
}).filter(val => {
    return val < 3
})

// let filter_arr = arr

// console.log(new_arr)


// let arr1 = [1,2]
// let arr2 = [3,'dfasdf']



// let obj = {
//     name: 'test',
//     age: 10
// }

// console.log(Object.values(obj))






let time1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('time1'))
        }, 1000);
    })
}

let time2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(console.log('time2'))
        }, 2000);
    })
}


let show = async () => {
    try {
        await time2()
        await time1()
    } catch (error) {
        console.log(error)
    }
}

show()





