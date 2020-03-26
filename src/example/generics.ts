const getArray = <t>(value: t, time: number = 5) :t[]=> {
    return new Array(time).fill(value)
}

// console.log(getArray<number>(123,4).map(item=>item.length))//报错，检测出来number类型
console.log(getArray<number>(123, 4).map(item => item.toString()))

const getArrayOne = <T, K>(params1: T, parames2: K, times: number): [T, K][] => {
    return new Array(times).fill([params1,parames2])
}
// console.log(getArrayOne(1,'b',3))

// 下面两种情况结果一样，ts会根据传入的参数来判断，即使没定义泛型
// getArrayOne<number, string>(1, 'b', 3).forEach(item => {
//     console.log(item[0].length)
//     console.log(item[1].toFixed())
// })

// getArrayOne(1, 'b', 3).forEach(item => {
//     console.log(item[0].length)
//     console.log(item[1].toFixed())
// })


// let getArray: <T>(arg: T, times: number) => T[]
// getArray = (arg: any, times: number) => {
//     return new Array(times).fill(arg)
// }

// 可以检测到传入的是number类型，number没有length属性，报错
// getArray(123,3).map(item=>item.length)

type GetArray = <T>(arg: T, times: number) => T[]
let getArrayThree:GetArray = (arg: any, times: number) => {
    return new Array(times).fill(arg)
}

// 泛型约束   通过接口定义继承，让泛型都具有length属性
interface ValueWidthLength {
    length:number
}

const getArrayTwo = <T extends ValueWidthLength>(arg: T, times): T[] => {
    return new Array(times).fill(arg)
}
// 字符串和数组有length属性
getArrayTwo([1,2],3)
getArrayTwo('sdfgs',3)
// getArrayTwo(1221,3)//报错1221数字没有length属性

// 再来一个泛型约束
const getProps = <T, K extends keyof T>(object: T, propName: K) => {
    return object[propName]
}
const objs = {
    a: 'a',
    b:'b'
}
getProps(objs, 'a')
// 约束objs上没有c的属性名，报错
// getProps(objs,'c')
