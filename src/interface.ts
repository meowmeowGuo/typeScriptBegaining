/* 对象类型-接口 interface */
interface Person {
  readonly id: number;
  name: string;
  age?: number;

  [propName: string]: any;
}

let Tom: Person = {
  id: 123,
  name: 'Tom',
  // age: 24,
  gender: 'male',
};

// Tom.id = 2457;


/* 数组 */
let fibonacci: number[] = [1, 1, 2, 3];
// fibonacci.push('5');

let array: Array<number> = [1, 1, 2, 3, 5];

interface NumberArray {
  [index: number]: number;
}

let array2: NumberArray = [1, 2, 3];
