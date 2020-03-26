function Ponit(x, y) {
    this.x = x
    this.y = y
}
Ponit.prototype.getPosition = function () {
    return '['+ this.x + this.y +']'
}

var p1 = new Ponit(2, 3)
console.log(p1)

class Ponit1{
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    getPosition() {
        return '['+ this.x + this.y +']'
    }
}
var p1 = new Ponit1(2, 3)
console.log(p1)
// 属性是本身自有，二方法却不是本身
console.log(p1.hasOwnProperty('x'))
console.log(p1.hasOwnProperty('getPosition'))
console.log(p1.__proto__.hasOwnProperty('getPosition'))

// 如果在constructor返回，那new出来就是不是实例对象
class Ponit2{
    constructor(x, y) {
        this.x = x
        this.y = y
        return {a:'a'}
    }
    getPosition() {
        return '['+ this.x + this.y +']'
    }
}
var p1 = new Ponit2(2, 3)
console.log(p1 instanceof Ponit2)

// 就是对象中set和get方法
var info = {
    _age: 18,
    set age(newValue){
        if(newValue > 18){
            console.log('怎么变老了')
        }else {
        console.log('哈哈哈，我年轻不有为')
        }
    },
    get age(){
        console.log('访问我年龄干啥')
        return this._age
    }
}
console.log(info.age)
info.age = 33


class Infos{
    constructor(){}
}
const infos1 = class c {
    constructor(){}
}
// 报错，说明定义类名是赋值的变量名
// const testinfos1 = new c()
// 简写
// const infos1 = class{
//     constructor(){}
// }
const testinfos1 = new infos1()


// 证明每个函数都有name属性
// function testFunction() { }
// console.log(testFunction.name)

class MyPoint{
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    getPosition() {
        return '['+ this.x + this.y +']'
    }
    static getName() {
        return this.name
    }
}
const mypoint = new MyPoint(1, 2)
console.log(mypoint.getPosition())
// console.log(mypoint.getName()) //静态方法不能被实例所用


// 经典：通过symbol定义私有属性，让引入这不能使用这个属性，因为导出时symbol值不会被导出
import point from './a.js'
const ooo = new point()
console.log(ooo)
console.log(ooo.mysymbol())//这里还能拿到symbol命名的方法，难道我定义出错


// 通过new.target 来判断是不是调用
function Targ() {
    console.log(new.target)
}
const t = new Targ()
const t1 = Targ()


class Target{
    constructor() {
        console.log(new.target)
    }    
}
const t2 = new Target()