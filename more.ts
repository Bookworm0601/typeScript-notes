// 类型别名

type functionType = () => string

type stringOrFunctionType = string | functionType

function getName(n: stringOrFunctionType) :string{
    if(typeof n === 'string') {
        return n
    } else {
        return n()
    }
}


//类型断言,针对联合类型类型不清晰的时候,比如有的类型可以用length有的不行

function lengthOfName (name: string | number) :number {
    if((<string>name).length) {
        return (<string>name).length
    } else {
        return name.toString().length
    }
}

console.log(lengthOfName('lengthOfName'))
console.log(lengthOfName(100))