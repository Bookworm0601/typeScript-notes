// 声明式写法(x,y为number且必传 z选传 function返回值为number)
function add(x: number, y: number, z?: number): number{
    if(typeof z === "number"){
        return x + y + z
    } else {
        return x + y
    }
}

// 表达式定义(如果z给默认值，那ts也会把z解析为选送的,和es6相同)
let add1 = function(x: number, y: number, z: number = 10): number{
    if(typeof z === "number"){
        return x + y + z
    } else {
        return x + y
    }
}

// 1.ts中变量冒号之后都是类型定义，因此(x: number, y:number, z?: number) => number是函数定义
// 2.add1的类型之所以和add2匹配，是因为ts有类型推论机制，但第一次赋值时未给类型，那ts会默认给变量一个呗赋值的类型
let add2: (x: number, y:number, z?: number) => number = add1