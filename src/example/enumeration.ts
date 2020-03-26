// enumeration
enum Status {
    Uploading = 3,
    Success =2,
    failed,
}
console.log(Status.Uploading)
console.log(Status.failed)// 竟然两个坐标3，哈哈哈
// object access via(通过，经过) string literals(字面量) is disallowed
// console.log(Status['Success'])


// 当使用变量或者函数定义时，下面的字段就要设置初始值
const getIndex = () => {
    return 2
}
enum Status1 {
    Uploading = 3,
    Success = getIndex(),
    // 枚举成员必须具有初始化表达式
    // failed,
    failed=5
}


// 以下三种都可以作为enumeration本身和其包含成员都可以作为类型
// 1.enum E {A}
// 2.enum E {A = 'a'}
// 3.enum E {A = -1}

// Animals本身或者里面元素都可以单独拉出来作为类型使用
enum Animals {
    dog = 1,
    cat = 2
}
interface Dog {
    type:Animals.dog
}
const dog: Dog = {
    type:Animals.dog
}
console.log(dog)
// “Dog”仅表示类型，但在此处却作为值使用。
// console.log(Dog)//所以打印不出来



// 联合枚举类型
enum Status {
    Off,
    On
}
interface Light{
    status:Status
}
const light: Light = {
    status: Status.Off
}



// const enum Animal1 {
//     Dog = 1,
// }
// 其实编译完成转化
// 1