// for(let i = 0; i < 5 ;i++) {
// console.log(i + '번째')
// }

// let i = 0;
// alert(i);
// while(i < 10) {
//     console.log(i)
//     i++;
// }

// do {
//     i++;
// } while (i<10)

// while(true) {
//     let answer = confirm('answer');
//     if (!answer) {
//         break;
//     }
// }

// let fruit = prompt('무슨 과일을 사고 싶나요?');

// switch(fruit) {
//     case '사과':
//         alert('100원');
//         break;
//     case '바나나':
//         alert('200원');
//         break;
//     case '키위':
//         alert('300원');
//         break;
//     case '멜론':
//         alert('400원');
//         break;
//     case '수박':
//         alert('500원');
//         break;
//     default:
//         alert('없는 과일입니다.')
//         break;
// }

// function hello(name = 'John') {
//     const msg = `Hello, ${name}`
//     alert(msg);
// }
// hello(prompt('이름을 입력하세요.', 'Mike'));

// function add(num1, num2) {
//     return num1 + num2;
// }
// console.log(add(1, 200));

// const add = (n1, n2) => (
//     n1 * n2
// );

// console.log(add(12, 33))

// const superman = {
//     name: 'clark',
//     age: 33,
// }

// console.log(superman.name)
// superman.name = 'Demian'
// console.log(superman.name)

// superman.hobby = 'football'
// console.log(superman)
// for(let i in superman) {
//     console.log(i)
// };

// function makeObject(name, age) {
//     return {
//         name: name,
//         age: age,
//         hobby: 'football'
//     }
// }

// const mike = makeObject('mike', 39)

// function isAdult(user) {
//     if(!('age' in user) || user.age < 20) {
//         return false;
//     }
//     return true;
// }

// const john = {
//     name: 'John'
// }

// console.log(isAdult(mike))
// console.log(isAdult(john))

// const Mike = {
//     name: 'Mike',
//     age: 30
// };

// for (x in Mike) {
//     console.log(Mike[x])
// }

// let boy = {
//     name: 'Mike',
//     sayThis: function sayHello() {
//         console.log(`Hello, ${this.name}`)
//     }
// };

// let girl = {
//     name: 'Jane',
//     sayThis: function sayHello() {
//         console.log(`Hello, ${this.name}`)
//     }
// };

// boy.sayThis();
// girl.sayThis();

// let students = ['a', 'b', 'c', 'd', 'e'];

// for (let x of students) {
//     console.log(x);
// };

// const arrNum = [0, 1, 2, 3, 4];
// const newArr = arrNum.map ((ele) => {
//     return ele + 1
// })
// console.log(newArr);

// const filterArr = newArr.filter((ele) => {
//     return ele > 2
// })
// console.log(`filtering: ${filterArr}`);

// const arrNum1 = [0, 1, 2, 3, 4];
// const arrNum2 = [3, 4, 5, 6];

// const merge = arrNum1.concat(arrNum2);
// const merge = arrNum1 + arrNum2;
// const merge = [...new Set([...arrNum1, ...arrNum2])];
// console.log(merge);

// const name = "string";
// const myNameArr = Array.from(name);
// console.log(myNameArr);

// const numArr = Array.from(name, (ele, idx) => {
//     console.log(ele);
//     console.log(idx);
//     return idx
// });
// console.log(numArr);

// const lenghArr = Array.from({length: 4}, (_, idx) => {
//     console.log(idx);
//     return idx
// });

// console.log(lenghArr);

// const animals = ["강아지", "고양이", "햄스터", "강아지", "고양이", "고양이", "토끼"];
// let count = 0;

// animals.map((ele) => {
//     if (ele === "고양이") {
//         count += 1;
//     }
// });

// console.log(count);