// function addFunction(num1: number, num2: number) :number{
//     return num1 + num2
// }
// const addFunction1 = (num1:number,num2:number)=> num1+ num2


type Add = (x: number, y: number) => number
let AddFunc: Add
AddFunc = (num1: number, num2: number) => num1 + num2

// AddFunc = (num1,num2,num3)=> num1+ num2+ (num3?num3:0)
type Add1 = (x: number, y: number, z?: number) => number
let add1: Add1
add1 =(x:number,y:number)=>x+y
add1 = (x: number, y: number, z: number) => x + y + z

// const handleData = (arg1: number, ...args: number[]) => {
    // ...
// }

// 函数的重载（只能使用函数来重载，不能用接口和别名）
function handleData1(x:string):string[]
function handleData1(x: number): number[]
// 下面这个是函数实体
function handleData1(x: any): any {
    if (typeof x === 'string') {
        return x.split('')
    } else {
        return x.toString().split('').map(item => Number(item))
    }
}
    console.log(handleData1('sgfg'))
    console.log(handleData1(456))
