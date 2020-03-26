class Parent {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

class Child extends Parent {
    constructor(name,age) {        
        super(name)
        this.age = age
    }
}
const c = new Child('wangzichi', 18)
// console.log(c)
// console.log(c.getName())
// console.log(c instanceof Child)
// console.log(c instanceof Parent)
// 由此可见，child原型是Parent
console.log(Object.getPrototypeOf(Child) === Parent)

class Parentclass {
    constructor() {
        this.type = 'parents';
    }
    getName() {
        return this.type
    }
}
Parentclass.getType = () => {
    return 'is parent type'
}
class Childrenclass extends Parentclass{
    constructor() {
        super()
        console.log('在子类constructor通过super调用父类原型方法' + super.getName())
    }
    getParentName() {
        console.log('在子类方法中通过super调用父类原型方法'+ super.getName())
    }
    getParentType() {
        // 两者差别就是一个是原型getName方法，一个是本身getType方法
        console.log('在子类方法中通过super调用父类本身方法'+ super.getType())
    }
}

const chil = new Childrenclass()
chil.getParentName()
// JavaScript引擎内部，super.foo等同于Object.getPrototypeOf(this).foo(属性)
// 或Object.getPrototypeOf(this).foo.call(this) （方法）。

// 我们知道，this关键字总是指向函数所在的当前对象，ES6又新增了另一个类似的关键字super，指向当前对象的原型对象
//chil.getParentType()//Uncaught TypeError: (intermediate value).getType is not a function


// 一下类型在es5时不能被继承，现在可以了
Boolean
Number
String
Array
Function
RegExp
Error

class CustomArray extends Array {
    constructor(...args) {
        super(...args)
    }
}
const arr = new CustomArray(3)