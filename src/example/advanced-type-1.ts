// 交叉类型

const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
    // let res = <T & U>{}
    let res = {} as T & U
    res = Object.assign(arg1, arg2)
    return res
}
console.log(mergeFunc({ a: 'a' }, { b: 'b' }))

// 联合类型
const getLengthHaha = (content:number|string): number => {
    if (typeof content === 'string') { return content.length }
    else{return content.toString().length}
}
console.log(getLengthHaha(2222))


// 类型保护
const ValueList = [123, 'abc']
const getRandomValue = () => {
    const number1 = Math.random() * 10
    if (number1 < 5) { return ValueList[0] }
    else {return ValueList[1]}
}
const randomItem = getRandomValue()
// 这种情况下无法判断返回值类型
// console.log(randomItem)
// 1.解决方法断言
// if ((randomItem as string).length) {
//     console.log((randomItem as string).length)
// } else {
//     console.log((randomItem as number).toFixed())
// }
// 2.类型保护
function isString(value: number | string): value is string{
    return typeof value === 'string'
}
if (isString(randomItem)) {
    console.log(randomItem.length)
} else {
    console.log(randomItem.toFixed())
}


// 3.typeof类型保护只能是string/number/boolean/symbol四个值其中之一
if (typeof randomItem === 'string') {
    // 报错
// if ((typeof randomItem).includes('string')) {
    console.log(randomItem.length)
} else {
    console.log(randomItem.toFixed())
}
// typeof 只能用于 ===，不能用includes
// let stupid = 'sgsgd'
// typeof stupid === 'string'
// (typeof stupid).includes('string')


// instanceof类型保护
class CreateClassOne {
    public name = 'wangzichi'
    constructor(){}
}
class CreateClassTwo {
    public age = 18
    constructor(){}
}
function GetRandomItem() {
    return Math.random() < 0.5 ? new CreateClassOne() : new CreateClassTwo()
}
const itemhaha = GetRandomItem()
if (itemhaha instanceof CreateClassOne) {
    console.log(itemhaha.name)
} else {
    console.log(itemhaha.age)
}


function getSplicedStr(num: number | null): string{
    function getRes(prefix: string) {
        return prefix + num.toFixed().toString()
    }
    num = num || 0.12354
    return getRes('wangzichi-')
}
console.log(getSplicedStr(564))


// 类型别名
type TypeStringOne = string
let advancedStr: TypeStringOne
type PositonType<T> = { x: T, y: T }
const position1: PositonType < number > = {
    x: 1,
    y:-1
}
const position2: PositonType < string > = {
    x: 'sgs',
    y:'sdgg'
}

// 类型别名也可以引用自己，只能在自身属性中引用，相当于循环嵌套吧
type AdvancedChild<T> = {
    current: T,
    child?:AdvancedChild<T>
}
let ccc: AdvancedChild<string> = {
    current: 'firststring',
    child: {
        current: 'secondstring',
        // 这里child属性是object{至少包含current属性}
        // child:'dsf'
    }
}

// 别名给interface起类型是不能用extends和implements

type Alias = {
    num :number
}
interface AdvancedInterface {
    num:number
}
let _alias: AdvancedInterface = {
    num:324
}
let _sghd: Alias = {
    num:324
}
// interface和别名兼容
_sghd = _alias


// 字符串字面量
type AdvancedName = 'wangzichi' | 'ewrs' | 'sgsgsdf' | 'sfgksdjh'
function getDirectionFirstLetter(direction: AdvancedName) {
    return direction.substr(0,1)
}
const advancedname = getDirectionFirstLetter('ewrs')
console.log(advancedname)


// 可辨识联合两要素
// 1.具有普通的单列类型属性
// 2.一个类型别名包含了那些类型的联合
interface Square {
    kind: 'square'
    size:number
}
interface Rectangle{
    kind: 'rectangle'
    height: number
    width:number
}
interface Circle {
    kind: 'cricle'
    radius:number
}
// 将三个接口类型联合成一个
type Shape = Square | Rectangle | Circle
// 就是定义一个类型检验
function assertNaver(value: never): never{
    throw new Error('Unexpected object:' + value)
}
function getArea(s: Shape):number {
    switch (s.kind) {
        case 'square': return s.size * s.size; break;
        case 'rectangle': return s.height * s.width; break;
        case 'cricle' :return Math.PI * s.radius **2
        // default:return assertNaver(s)//报错
    }
}