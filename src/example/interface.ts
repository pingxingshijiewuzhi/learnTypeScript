// const getFullName1 = ({ firstName, lastName }) => {
//     return `${firstName} ${lastName}`
// }
// getFullName1({
//     firstName: 'hha',
//     lastName:'aa'
// })
interface NameInfo {
    firstName:string,
    lastName:string,
}
const getFullName = ({ firstName, lastName }:NameInfo):string=> {
// const getFullName = ({ firstName, lastName }:{firstName:string,lastName:string})=> {
    return `${firstName} ${lastName}`
}
getFullName({
    firstName: 'hha',
    lastName:'dsf'
})


// 定义接口，在变量后加？表示可有可无
interface Vegetable {
    color?: string,
    readonly type: string,
    // [prop:string]:any //多余属性添加不报错方法二
}
const getVegetables = ({color,type}:Vegetable) => {
    return `A ${color? (color + '') : ''} ${type}`
}

// 多余属性添加不报错，类型兼容性方法三
const vegetableInfo = {
    // color: 'red',
    type:'banna',
    color: 'red',
    size:2
}

console.log(getVegetables(vegetableInfo))

interface ArrInter {
    0: number,
    readonly 1:string
}
let arr: ArrInter = [1, 'a']
// arr[1] = 'b'
// 只读类型，不能修改


// 定义类型别名
type AddFunc = (num1: number, num2: number) => number
const add: AddFunc = (n1, n2) => n1 + n2

interface RoleDic {
    [id:string]:string
}
const role2: RoleDic = {
    a: 'suoer_man',
    1:'admin'
}
console.log(role2)

interface Vegetables{
    color:string
}

// interface Tomato {
//     color: string,
//     radius:number
// }
interface Tomato extends Vegetables{
    radius:number
}

interface Carrot extends Vegetables{
    length:number
}

const tomato: Tomato = {
    radius: 2,
    color:'red'
}
const carrot: Carrot = {
    length: 2,
    color:'orange'
}


interface Counter {
    (): void,
    count:number
}

const getCounter = (): Counter => {
    const c = () => { c.count++ }
    c.count = 0
    return c
}
const counter: Counter = getCounter()
counter()
console.log(counter.count)
counter()
console.log(counter.count)
counter()
console.log(counter.count)
