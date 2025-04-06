"use strict";

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }

// function calculateEvenTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//       // Додаємо тільки парні числа
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(calculateEvenTotal(6));

// const start = 6;
// const end = 17;
// let number;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// function findNumber(start, end, divisor) {
//   let number;
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       number = i;
//       {
//         return number;
//       }
//     }
//   }
// }

// console.log(findNumber(2, 6, 5));

// function getOrderQuantity(order) {
//   if (order.length >= 4) {
//     return 4;
//   } else if (order.length === 3) {
//     return 3;
//   } else if (order.length === 2) {
//     return 2;
//   }
//   return 0;
// }
// function getLastElementMeta(array) {
//   let lastElementIndex = array.length - 1; // Отримуємо індекс останнього елемента
//   let lastElementName = array[lastElementIndex]; // Отримуємо значення останнього елемента

//   return [lastElementIndex, lastElementName]; // Повертаємо масив
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

// function getExtremeElements(array) {
//   let lastElementIndex = array.length - 1;
//   let lastElementName = array[lastElementIndex];
//   let firsttElementName = array[0];
//   return [firsttElementName, lastElementName];
// }
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// function getLength(array) {
//   return array.join("").length;
// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));

// function calculateEngravingPrice(message, pricePerWord) {
//   const calculatemassage = message.split(" ").length;
//   return calculatemassage * pricePerWord;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// function getSlice(array, value) {
//   let index = array.indexOf(value); // Знаходимо індекс value
//   if (index !== -1) {
//     // Перевіряємо, чи існує value
//     return array.slice(0, index + 1); // Включаємо value
//   }
//   return []; // Якщо value немає, повертаємо []
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")); //"Mango", "Poly", "Ajax"
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); //"Mango", "Poly"
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango")); //"Mango"
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob")); // []
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey")); //[]

// function createArrayOfNumbers(min, max) {
//   const allNumbers = []; // Створюємо порожній масив

//   for (let i = min; i <= max; i++) {
//     // Запускаємо цикл від min до max включно
//     allNumbers.push(i); // Додаємо поточне значення i у масив
//   }

//   return allNumbers; // Повертаємо заповнений масив
// }

// console.log(createArrayOfNumbers(14, 17)); //[14, 15, 16, 17]
// console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
// console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]

// const fruits = ["Apple", "Banana", "Cherry", "berry"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// function calculateTotalPrice(order) {
//   let totalSum = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     totalSum += order[i];
//   }
//   return totalSum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function getEvenNumbers(start, end) {
//   let numbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }
//   return numbers;
// }
// console.log(getEvenNumbers(6, 12));

// function getEvenNumbers(start, end) {
//   let numbers = []; // Створюємо порожній масив для парних чисел

//   for (let i = start; i <= end; i += 1) {
//     // Перебираємо числа від start до end
//     if (i % 2 === 0) {
//       // Перевіряємо, чи число парне
//       numbers.push(i); // Додаємо парне число в масив
//     }
//   }

//   return numbers; // Повертаємо масив парних чисел
// }

// function checkStorage(storage, item) {
//   let lowerItem = item.tolowercase;

//   for (let i = 0; i < storage.length; i++) {
//     if (storage[i].toLowercase === lowerItem) {
//       return `${storage[i]} is available to order!`;
//     }
//   }
//   return "Sorry! We are out of stock!";
// }

// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));

// function getCommonElements(array1, array2) {
//   let newArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
// }

// function getCommonElements(array1, array2) {
//   let arrayNew = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       arrayNew.push(array1[i]);
//     }
//   }
//   return arrayNew;
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// function calculateTotalPrice(order) {
//   let totalSum = 0;
//   for (const element of order) {
//     totalSum += element;
//   }
//   return totalSum;
// }

// console.log(calculateTotalPrice([164, 48, 291]));

// function createReversedArray() {
//   const args = Array.from(arguments);
//   let total = [];
//   for (let i = 0; i < args.length; i++) {
//     total.push(args[i]);
//   }
//   return total.toReversed();
// }

// function createReversedArray() {
//   const args = Array.from(arguments);
//   let total = [];
//   for (let i = 0; i < args.length; i++) {
//     total.push(args[i]);
//   }
//   return total.toReversed();
// }
// console.log(createReversedArray(412, 371, 94, 63, 176));

// function calculateTax(amount, taxRate = 0.2) {
//   let totalSum = amount * taxRate;
//   return totalSum;
// }
