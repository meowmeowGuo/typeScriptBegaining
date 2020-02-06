// 类型别名
type NumberOrString = number | string;

// 字符串字面量类型
type eventNames = 'click' | 'scroll' | 'mousemove';

function handleEvent(ele: Element, event: eventNames) {
  console.log(event);
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
// handleEvent(document.getElementById('world'), 'dbclick');

// 元祖
let tom: [string, number] = ['Tom', 15];
let jimmy: [string, number];
jimmy[0] = 'Jimmy';
jimmy = ['Jimmy', 90];
let jack: [string, number];
jack.push(34);
// jack.push(true);

// 枚举
enum Days {
  Sun = 7,
  Mon = 1,
  Tur,
  Wed,
  Thu,
  Fri,
  Sat,
}

enum Color {
  Red,
  // Red='red'.length,
  Green,
  // Blue = 'blue'.length,
}

const enum Direction {
  Up,
  Down,
  left,
  right,
}

// 类
class Animal {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`My name is ${this.name}`);
  }

  get name() {
    return 'Jack';
  }

  set name(value) {
    console.log('setter: ' + value);
  }
}

let a = new Animal('Jack');
console.log(a.sayHi());

class Cat extends Animal {

  static isAnimal(a) {
    return a instanceof Animal;
  }

  constructor(name) {
    super(name);
    console.log(this.name);
  }

  sayHi() {
    return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
  }
}

let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom

let b = new Animal('Kitty'); // setter: Kitty
b.name = 'Tom'; // setter: Tom
console.log(b.name); // Jack


