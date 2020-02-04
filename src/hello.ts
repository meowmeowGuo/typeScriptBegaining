function sayHello(person: string) {
  return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));
// 原始数据类型
// *1 boolean
let isDone: boolean = false;
// new Boolean() 返回的是一个 Boolean 对象：
let createdByNewBoolean: Boolean = new Boolean(1);
// 直接调用 Boolean 也可以返回一个 boolean 类型：
let createByBoolean: boolean = Boolean(1);

// *2 number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// *3 string
let myName: string = 'Tom';
let myAge: number = 25;
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} next month`;

// *4 void
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function alertName(): void {
  alert('My name is Tom');
}

// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
let unusable: void = undefined;

// *5 Null 和 Undefined
let n: null = null;
let u: undefined = undefined;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
let num2: number = undefined; // 不会报错
let u2: undefined;
let num3: number = u2; // 不会报错
// 而 void 类型的变量不能赋值给 number 类型的变量：
let u3: void;
let num4: number = u3; // 报错


// 任意值:any
// 如果是一个普通类型，在赋值过程中改变类型是不被允许的：
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;
// 如果是any类型，则允许被赋值为任意类型
let myFavoriteNumber2: any = 'seven';
myFavoriteNumber2 = 7;
// 任意值的属性和方法
// 在任意值上访问任意属性都是允许的，也允许调用任何方法
let anything: any = 'hello';
console.log(anything.myname);
anything.setName('Tom');

// 未声明类型的变量，会被识别为任意类型
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
// 等价于
/*
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
*/
