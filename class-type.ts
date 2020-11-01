// 基类(封装) //OOP三大特别，封装 继承 多态
class Animal {
    name: string;
    constructor(name) {
      this.name = name
    };
    run ():string{
      return `${this.name} is running`
    }
}
console.log(new Animal('lily').run())

// 狗类(继承)动物类(ts-node可以一次性运行ts文件)
class dog extends Animal{
    bark() {
        return `${this.name} is barking!!!`
    }
}

console.log(new dog('little dog').bark())

// 猫类
class cat extends Animal{
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

console.log(new cat('little cat').run())