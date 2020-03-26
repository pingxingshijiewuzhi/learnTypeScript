// 定义symbol位对象方法名，外界访问不到
const mysymbol = Symbol('mysymbol')
export default class Ponit{
    mysymbol() {
        console.log('aaa')
    }
}