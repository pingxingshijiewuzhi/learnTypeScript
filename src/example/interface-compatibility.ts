// 类型推论系统推论name是字符串类型，在赋值不能改变类型

let interfaceCompatibilityName = 'wangzichi'
// 不能将类型“23”分配给类型“string”。
// name = 23

// 多类型联合
let arrOne = [1,'stringdsdf']
let arrOne1: (number | string)[] = [1, 'stringdsdf']

// 不知为啥ts操作dom要引入
// 上下文类型，通过左边推断函数默认参数值和属性
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent)
}

interface InfoInterface {
    name: string
}
let infoInter: InfoInterface
const infos1 = { name: 'wangzichi' ,books:{price:23}}
const infos2 = { age: 18 }
const infos3 = { name:'wangzichi' , age:18}

infoInter = infos1
// 也就说定义多了不问，但是必须的有定义的name属性和类型
// Property 'name' is missing in type '{ age: number; }' but required in type 'InfoInterface'
// infoInter = infos2
infoInter = infos3


// 这是深度遍历，所以里面的属性也会检测出来类型符合不
interface InfoInterfaceOne {
    name: string
    books: {
        price:number
    }
}
let infoInterOne: InfoInterface
const compatibility1 = { name: 'wangzichi' ,books:{price:23}}
const compatibility2 = { name: 'wangzichi', age: 18, books: { price: 88 } }
infoInterOne = compatibility1
infoInterOne = compatibility2

let compatibilityX = (x:number)=> 0
let compatibilityY = (x:number,y:number)=> 0
compatibilityY = compatibilityX
// compatibilityX = compatibilityY //报错

// 可选参数和剩余参数

// 将第一个参数数组作为 第二个参数函数 的实参用
const getSum = (arr: number[], callback: (...args: number[]) => number): number => {
    return callback(...arr)
}
const aaaaa = getSum([2, 3, 6 ], (...args: number[]): number => {
   return args.reduce((x,y)=>x+ y,0)
})
console.log(aaaaa)

// 函数参数双向协变
let compatibilityfuncA = (arg:number |string):void =>{}
let compatibilityfuncB = (arg: number): void => {}
// compatibilityfuncA = compatibilityfuncB
// compatibilityfuncB = compatibilityfuncA //其实是compatibilityfunc妥协变成compatibilityfuncB,自丢弃可有可无string类型

// 返回值类型
let compatiX = (): string | number => 0
let compatiY = (): string => 'a'
let compatiZ = (): boolean => true
compatiX = compatiY
// compatiY = compatiX  //报错
// compatiY = compatiZ //报错,更是类型不一样


// 函数重载
function merge(arg1:number,arg2:number) :number
function merge(arg1:string,arg2:string) :string
function merge(arg1: any, arg2: any){
    return arg1 + arg2
}
// 分别自动检测参数类型对应的返回值类型
merge(1,2)
merge('sdf', 'sdgd')

function sum(arg1:number,arg2:number) :number
function sum(arg1: any, arg2: any): any{
    return arg1 + arg2
}
let func = merge
// func = sum
// 因为merge有两种类型类型，sum只有一种类型,两种类型不兼容

// 因为merge有两种类型类型，sum只有一种类型,下面这种情况就可以
// let hah = sum
// hah = merge

class AnimalClass {
    public static age: number
    constructor(public name:string){}
}
class PeopleClass {
    public static age:string
    constructor(public name:string){}
}
class FoodIsClass{
    constructor(public name:number){}
}

// 用class当类型, 只会检测实例是否相同, 不会具体到实例属性的值是否是相同类型
let animalT = AnimalClass
let peopleT = PeopleClass
let foodT = FoodIsClass

// 为啥老师检测不到,我就检测到属性类型不同不能分配
// animalT = peopleT
// 下面这个肯定不行
// animalT = foodT


// protected和 private 对 兼容性影响
class parentClass {
    protected age: number
    constructor(){}
}
class ChildrenClass extends parentClass{
    constructor() {
        super()
    }
}
class otherClass {
    protected age: number
    constructor(){}
}
// 两个类看似一样, 但是就是不能类型分配,根本原因是看似一样的类,
// 但是每个类都有自己的私有属性,private和prodected,如果没有就不会这样
// 但是子类却能接受父类类型
const children: parentClass = new ChildrenClass()
// 不能将类型“otherClass”分配给类型“parentClass”。
//   属性“age”受保护，但类型“otherClass”并不是从“parentClass”派生的类
// const other: parentClass = new otherClass()


interface Data<T>{ }
let data1:Data<number>
let data2: Data<string>
data1 = data2
// 可以理解为都是空对象,可以类型兼容
// 下面这种就不可以,上面是就是定义不用,结果一样,所以一样
interface Onene<T>{
    Onene:T
}
let Onene1:Onene<number>
let Onene2: Onene<string>
// Onene1 = Onene2 //报错
// 不能将类型“Onene<string>”分配给类型“Onene<number>”