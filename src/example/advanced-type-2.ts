// this类型
class Counter {
    constructor(public count: number = 0) { }
    public add(value: number) {
        this.count += value
        return this
    }
    public subtract(value: number) {
        this.count -= value
        return this
    }
}
let advancedcount = new Counter(10)
// console.log(advancedcount)
// 返回this可以实现链式调用
// console.log(advancedcount.add(5).subtract(4))

class PowCount extends Counter{
    constructor(public count: number = 0) {
        super(count)
    }
    public pow(value: number) {
        this.count = this.count ** value
        return this
    }
}
let powCount = new PowCount(2)
console.log(powCount.add(5))
console.log(powCount.pow(2))


interface advancedInterface {
    name: string,
    age:number
}
let infoProp: keyof advancedInterface
infoProp = name
infoProp = 'age'
// infoProp = 'sex'

function advancedGetValue<T, K extends keyof T>(obj: T, names: K[]):T[K][] {
    return names.map(item=>obj[item])
}
const davancedInfoObj = {
    name: 'wangzichi',
    age: 18,
    bool:true
}
let infoValues: (number | string | boolean)[] = advancedGetValue(davancedInfoObj, ['name','age','bool'])
console.log(infoValues)

// 下面这是一个属性要添加readonly的情况下
interface InfoAdvanced {
    age:number
}
type readonly = {
    readonly age :number
}
// 下面这是多个属性要添加readonly的情况下
interface InfoAdvancedOne {
    age: number,
    name: string,
    sex:string
}
type readonlyType<T> = {
    // 遍历keyof T的属性名，值是T对应的属性名，这里传入T就是对象，为对象每个属性名添加readonly
    readonly [P in keyof T]?:T[P]
}
type readonlyInfoAdvancedOne = readonlyType<InfoAdvancedOne>
// 证明已经把别名都定义为只读类型了
type removereadonlyType<T> = {
    - readonly [P in keyof T]-?:T[P]
}
type withoutReadonly = removereadonlyType<readonlyInfoAdvancedOne>


// ts内置了，让每个接口属性都是Readonly 和让接口都是可选属性的 Partial
type readonlyInfoAdvancedTwo =Readonly<InfoAdvancedOne>
type readonlyInfoAdvancedThree = Partial<InfoAdvancedOne>
// pick挑拣出来类型 和 record改变类型
// type Pick<T, K extends keyof T> = {
//     [P in K]:T[P]
// }
interface Info8{
    name: string
    age: number
    address:boolean
}
type PickInfos = Pick<Info8, 'name'>


// 第一个参数对象 obj: Record<K, T>中K是属性名，T是属性值
// 第二个参数回调函数  f: (x: T) => U ，对传入第一个参数属性值加工处理返回新的属性值类型
// recode，经典,看不懂，哈哈
function mapObject<K extends string | number, T, U>(obj: Record<K, T>, f: (x: T) => U):Record<K,U>{
    const res: any = {}
    for (const key in obj) {
        res[key] = f(obj[key])
    }
    return res
}

const advancednames = { 0: 'hello', 1: 'world', 2:'nohello'}
const advancedlengths = mapObject(advancednames, (s) => s.length)
console.log(advancedlengths)


type Proxy<T> = {
    get(): T;
    set(value:T):void
}
type Proxify<T> = {
    [P in keyof T]:Proxy<T[P]>
}
function proxify<T>(obj: T): Proxify<T>{
    const result = {} as Proxify<T>
    for (const key in obj) {
        result[key] = {
            get: () => obj[key],
            set:(value)=>obj[key] = value
        }
    }
    return result
}
let props = {
    name: 'wangzichi',
    age:18
}
let proxyProps = proxify(props)
console.log(proxyProps)
proxyProps.name.set('li')
proxyProps.name.get()
console.log(proxyProps.name.get())

function unproxify<T>(t: Proxify<T>): T{
    const result = {} as T
    for (const k in t) {
        result[k] = t[k].get()
    }
    return result
}
let originProps = unproxify(proxyProps)
console.log(originProps)


const stringIndex = 'a'
const numberIndex = 2
const symbolIndex = Symbol()
type AdvancedObj2 = {
    [stringIndex]: string
    [numberIndex]: number
    [symbolIndex]:symbol
}

type keysType = keyof AdvancedObj2


// 映射类型(元祖数组)
type MapToPromise<T> = {
    [K in keyof T]:Promise<T[K]>
}
type Tuple = [number, string, boolean]
type PromiseTuple = MapToPromise<Tuple>
let tuple1: PromiseTuple = [
    new Promise((resolve, reject) => {resolve(1)}),
    new Promise((resolve, reject) => {resolve('sdf')}),
    new Promise((resolve, reject) => {resolve(true)})
]

// unknown
// 1.任何类型都可以赋值给unknown类型
let value1: unknown
value1 = 'a'
value1 = 123

// 2.如果没有类型断言或基于控制流的类型细化时，unknown不可以赋值给其他类型
let value2: unknown
// let value3:string = value2

// 3.如果没有类型断言或者基于控制流的类型细化时，不能在他上面进行任何操作
let value4: unknown
// value4 += 1

// 4.unknown与任何其他类型组成的交叉类型，最后都等于其他类型
type typeo = string & unknown

// 5.unknown和任何其他类型(除了any)组成的联合类型，都等于unknown
type typeOOne = unknown | string
type typeTwo = unknown | any
type typeThree = unknown | number[]

// 6.never类型是unknown的子类型
type advancedboolean = never extends unknown ? true : false

// 7.keyof unknown 等于类型never
type type1 = keyof unknown

// 8.只能对unknown进行不等或等操作，不能进行其他操作

// 9.unknown类型的值不能访问他的属性，作为函数调用和作为类创建实例
// 10.使用映射类型是如果遍历的是unknown类型，则不会映射任何属性
type Type<T> = {
    [P in keyof T]:number
}
type type2 =Type<any>
type type3 = Type<unknown>

type TypeName<T> =
    T extends string ? string :
    T extends number ? number :
    T extends boolean ? boolean :
    T extends  undefined ? undefined :
    T extends  ()=>void ? ()=>void :
    object

    // type