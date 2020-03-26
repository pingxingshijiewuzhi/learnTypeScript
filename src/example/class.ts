class Ponit {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
    public getPosition() {
        return `${this.x},${this.y}`
    }
}
const  p = new Ponit(1, 3)
console.log(p)

class Parent {
    public name:string
    constructor(name:string) {
        this.name = name
    }
}
class Child extends Parent {
    constructor(name: string) {
        super(name)
    }
}

// public


// private 私有的 类的实例，本身，子例实例都问不到属性
class ParentOne11 {
    private age:number
    constructor(age:number) {
        this.age = age
    }
    private getAge() {
        return this.age
    }
}
const pOne = new ParentOne11(18)
// console.log(pOne.age)
// console.log(ParentOne.age)
class ChildOne11 extends ParentOne11  {
    constructor(age:number) {
        super(age)
        // 通过 "super" 关键字只能访问基类的公共方法和受保护方法
        // console.log(super.age)
        // 属性“getAge”为私有属性，只能在类“ParentOne”中访问。
        // console.log(super.getAge())
    }
}

// Protected和private区别在于子类可以访问父类方法，不能访问属性
// protected加在constructor上，只能通过子类创建实例，自身不能创建实例
class ParentOne {
    protected age:number
    protected constructor(age:number) {
        this.age = age
    }
    protected getAge() {
        return this.age
    }
}
// 类“ParentOne”的构造函数是受保护的，仅可在类声明中访问
// const pOne = new ParentOne(18)  //报错
class ChildOne extends ParentOne{
    constructor(age:number) {
        super(age)
        // 只能拿到方法，拿不到属性
        console.log(super.age)
        console.log(super.getAge())
    }
}



// readonly
class UserInfo {
    readonly name: string
    constructor(name: string) {
        this.name = name
    }
}
const userOne = new UserInfo('lili')
// console.log(userOne)
// userOne.name = 'wangzichi'

// public 真正作用
class A {
    // constructor(height:number){}
    // constructor(height:number){this.height= height}
    constructor(public height:number){}
}
const a1 = new A(48)
// 在constructor中用public
// console.log(a1.height)


class ParentTwo{
    public static age: number = 18
    public static getAge() {
        return ParentTwo.age
    }
}
const pTwo = new ParentTwo()
// console.log(pTwo.age)静态属性实例访问不了
// console.log(ParentTwo.age)本身可以访问
class ParentThree{
    private static age: number = 11111
    public static getAge() {
        return ParentThree.age
    }
}
const pThree = new ParentThree()
// console.log(ParentThree.age)//本身也访问不了，只能在类中访问
// console.log(ParentThree.getAge())


// 可选参数
class Profile {
    public name: string
    public age?: number
    constructor(name: string, age?: number, public sex?: string) {
        this.name = name
        this.age = age
    }
}
const profileOne = new Profile('wangzichi')
// console.log(profileOne)

abstract class People{
    constructor(public name: string){ }
    public abstract printName():void
}
// const P1 = new People()  无法创建抽象类的实例，报错
class Man extends People{
    constructor(name: string) {
        super(name)
        this.name = name
    }
    // 非抽象类“Man”不会实现继承自“People”类的抽象成员“printName”
    // 所以的手动添加
    public printName() {
        console.log(this.name)
    }
}
const m = new Man('wagnzichi')
console.log(m)


// 类继承接口
interface FootInterface{
    type:string
}
class FoodClass implements FootInterface{
    // Property 'type' is missing in type 'FoodClass' but required in type 'FootInterface'
    // 接口中定义的必须在class中有才行
    public type :string
    // 接口定义的必须在类中让实例可以访问到，所以static，pritave不能添加
    // public static type :string
}

// 接口继承类
class Haha {
    // public name:string
    protected name:string
}
interface Hehe extends Haha{}
// Property 'name' is missing in type 'hehe1' but required in type 'Hehe'
// 由此可见，接口Hehe继承了类，所以必须传入name属性
// class hehe1 implements Hehe {}

// 属性“name”受保护，但类型“hehe1”并不是从“Haha”派生的类
// 就是hehe1 不是Haha的实例无法访问到name
class hehe1 extends Haha implements Hehe{
    public name:string
}


// 传入类，返回类实例，完全懵逼
const create = <T>(c:new()=>T): T => {
    return new c()
}
class Infoall {
    public age: number
    constructor() {
        this.age = 188888
    }
}
console.log(create<Infoall>(Infoall))
// console.log(create<Infoall>(Infoall).name)
