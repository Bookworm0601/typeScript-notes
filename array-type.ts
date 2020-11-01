// 数组中只能有字符串元素
let strArr:string[] = ['aaa']
// 元组(严格匹配)
let unitArr:[string,number] = ['111', 3]

function likeArr() {
 // arguments是类数组，有length和下标获取参数，但是无数组方法   
 console.log(arguments)
}