// 1.对对象的形状(shape)进行描述
// 2.对类(class)进行抽象
// 3.Duck typing(鸭子类型)
interface Person {
    readonly id: number; // 只读,初始化完后无法修改
    name: string;
    age?: number // 可选属性，初始化可以给也可以不给
}

let gao: Person = {
    id: 123,
    name: 'gao'
}