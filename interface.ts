// interface 抽象类
interface Radio {
    switchRadio(): void; // 返回void类型
}

// interface 也可以继承另一个抽象类
interface Battery extends Radio {
    checkBattery() :void
}

// interface 类似一个规范 引入的class必须要实现他的方法和属性
// 这边的Battery抽象类包含了两个抽象方法,需要都实现
class car implements Battery {
    checkBattery() {
        console.log('hello checkBattery')
    }
    switchRadio() {
        console.log('hello checkBattery')
    }
}