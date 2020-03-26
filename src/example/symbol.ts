const s = Symbol()
// console.log(s)

const s5 = Symbol('name')
// 可以symbol转换字符串和boolean
// console.log(s5.toString())
// console.log(Boolean(s5))
// console.log(!s5)// 隐式转换

let prop = 'name'
const info = {
    // name:'wangzichi'
    [`my${prop}`]:'hellio'
}
// console.log(info)
const info2 = {
    [s5]: 'hello world',
    name: 'hellotoo',
    sex:'male'
}
// console.log(info2)
// 普通获取属性值
// info2.name 或者 info2[name]
// 获取symbol只能通过info2[s5]
for (const key in info2) {
    console.log(key)
}
// console.log(Object.keys(info2))
// console.log(Object.getOwnPropertyNames(info2))
// console.log(JSON.stringify(info2))
// 获取symbol正确途径
const result = Object.getOwnPropertySymbols(info2)
const result2 = Reflect.ownKeys(info2)
// console.log(result)
// console.log(result2)

// Symbol.for() 使用Symbol注册的全局标识 Symbol.keyFor()才能找到
const s8 = Symbol.for('wangzichi')
const s9 = Symbol.for('wangzichi')
// console.log( s8 === s9 )
// Symbol.keyFor()只能找到Symbol.for()值，不能找到Symbol()
console.log(Symbol.keyFor(s8))

// Symbol.hasInstance
// instanceof
// const obj = {
//     [Symbol.hasInstance] (otherobj) {
//         console.log(otherobj)
//     }
// }
// console.log({a:'a'} instanceof <any>obj)


// Symbol.isConcatSpreadable是否展开平铺
// let arr: number[]
// arr = [1, 2]
// console.log([].concat(arr, [3, 4]))

// arr[Symbol.isConcatSpreadable] = false
// console.log([].concat(arr, [3, 4]))

// const obj2 = {
//     [Symbol.natch] (string) {
//         console.log(string.length)
//     }
// }
// 'sadgf'.natch(<RegExp>obj2)
// Symbol.replace
// Symbol.serch
// Symbol.split


// let obj4: unknown = {
//     [Symbol.toPrimitive](type) {
//         console.log(type)
//     }
// }
// const res = (obj4 as number)++
// const res1 = `abc${obj4}`

// let obj5 = {
//     // [Symbol.toStringTag]:'wzngzichi'
//     get [Symbol.toStringTag]() {
//         return 'wangzichi'
//     }
// }
// console.log(obj5.toString())
// 现在返回  [object wzngzichi]
// 本身objecttoString方法返回[object object]