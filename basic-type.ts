// boolen类型 小写
let isShow: boolean = true
let age: number = 12
let binInt: number = 0b111111
let firstName: string = 'gao'
let info: string = `my name is ${firstName}, age is ${age}`
let u: undefined = undefined
let n: null = null
// u n是所有类型的子集
let show: boolean = undefined


// any类型 可以兼容任何类型(不安全，无属性方法提示)

let anyData: any = 'xxxx'
anyData = 123
anyData.getName()


//联合类型
let stringOrNumber: string | number = 1
stringOrNumber = '123'
