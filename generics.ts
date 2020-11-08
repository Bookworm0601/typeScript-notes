// 泛型 类似一个占位符
function echo<T>(arg: T): T {
    return arg
}


function swapData<T, U>(arg: [T, U]): [U, T] {
    return [arg[1], arg[0]]
}


// 1.泛型约束  没有length的类型变量会报错
interface withLength {
    length: number
}

function echoWithArr<T extends withLength>(arg: T):T {
    if(arg.length) {
        return arg
    }
}
const arr = echoWithArr('123')
const arr1 = echoWithArr([4,5,6])

// 2.泛型约束，传入对象的键值必须是对象的属性

enum difficut {
    Easy,
    Intermediate,
    Hard
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

console.log(getProperty({ a: '1' }, 'a' ))
