// 1.public 基类 子类 外部都能访问(读取和赋值)
// 2.protected 基类 子类可以访问(读取和赋值) 外部无法访问(类似家族资产，不外传)
// 3.private 基类可以访问(读取和赋值) 子类外部无法访问
// 4.readonly 只读属性 只能读取无法赋值
// 5.static 是对象之外，所有类共享的(大多用于无法变化的类属性,一些共性的东西,比如字典,例如动物的科目等等)
class Animal1 {
    name: string;
    static annimalType: string[] = ['cat', 'dog']
    static isAnnimalType(a): boolean {
        return a instanceof Animal1
    }
    constructor(name) {
      this.name = name
    };
    static run ():string{
      return `${this.name} is running`
    }
}

// new Animal('lily').name = a readonly name状态下只读无法写入，否则报错

// 狗类(继承)动物类(ts-node可以一次性运行ts文件)
class dog1 extends Animal1{
    bark() {
        return `${this.name} is barking!!!`
    }
}

// 判断狗是否是动物
console.log(Animal1.isAnnimalType(new dog1('xxx')))
console.log(Animal1.run())

// console.log(new dog1('little dog').name) protected修饰的情况下只能基类和子类访问

// 猫类
class cat1 extends Animal1{
    // 重写构造函数时必须super去初始化基类构造函数
    constructor(name) {
      super(name)
    }
    // 多态(重写基类的run函数)
    run(){
        // 调用父类的方法要用super,不能用this(否则可能栈溢出)
        return 'meow!! '+ super.run()
    }
}

console.log(new cat1('little cat').run())