//布尔类型
// let bool: boolean = false
let bool: boolean
bool = true

// 数值类型
let num: number = 123
// 可以进制表示
// num = ob1111011
num = 0o173
num = 0x7b

// 数字类型
let str: String
str = 'abv'
str = `数值是${num}`
console.log(str)

let arr1: number[]
let arr4:Array<number>
let arr2: (number | string)[]
arr2 = [234, 'st']

// 元祖类型
let tuple: [string, number, boolean]
tuple = ['a', 23, false]

// 枚举类型
enum Roles {
    super_admin,
    admin = 4,
    user
}
// 那user下标是多少？打印不来
console.log(Roles[0])
console.log(Roles[1])//undefined
console.log(Roles[2])//undefined
console.log(Roles[4])

// any类型
let value: any
value='adf'
value = 2134
const arr5: any[] = ['ds', 2345]

// void类型
const consoleText = (text: string): void => {
    console.log(text)
}
consoleText('textstring类型')

// undefined和null既是类型也是值
// "strictNullChecks": true,  如果在tscionfig中启用这项,那null和undifined就不能为任意类型的子类

// never类型
const errorFunc = (message:string): never => {
throw new Error(message)
}
errorFunc('sdfsg')
const infiniteFunc = (): never => {
    while(true){}
}

let neverVariable = (() => {
    while(true){}
})()
// never类型却能能赋值给任意类型，任意类型值不可以赋值给never
// num = neverVariable
// neverVariable = num  //报错

// 类型断言
    // (<类型>变量)
    // (变量 as 类型)
const getLength =  (input: number | string): number => {
    if ((<string>input).length || (input as string).length === 0 ) {
       return (input as string).length
    } else {
        return input.toString().length
    }
}
getLength(1232)
getLength('sdffd')