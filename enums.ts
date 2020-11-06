// 1.如果up赋值成数字，则下面的枚举会是数字累加
// 2.如果枚举赋值字符串，则所有的枚举都需要是字符串
// 3.如果是const(常量)类型的枚举，则在对比'UP' === Direction.up时，会直接将Direction.up修饰为常量'UP'
// 4.并不是所有的enum都可以使用const(常量)枚举
// 5.枚举值有两种类型 常量const 和计算的computed 只有常量值才能使用常量枚举 以下例子都是常量枚举  计算枚举后续课程再说
const enum Direction {
    up = 'UP',
    down = 'DOWN',
    left = 'LEFT',
    right = 'RIGHT'
}

// 相互映射 可以tsc编译成js查看
console.log(Direction.up)
// console.log(Direction[0])
/**
 * var Direction;
    (function (Direction) {
        Direction[Direction["up"] = 0] = "up";
        Direction[Direction["down"] = 1] = "down";
        Direction[Direction["left"] = 2] = "left";
        Direction[Direction["right"] = 3] = "right";
    })(Direction || (Direction = {}));
    console.log(Direction.up);
    console.log(Direction[0]);
    console.log(Direction);
 */
/**
 * Direction: {
  '0': 'up',
  '1': 'down',
  '2': 'left',
  '3': 'right',
  up: 0,
  down: 1,
  left: 2,
  right: 3
}
 */