// Задача 1:
//  Пошук максимального числа
// javascript

// function findMaxNumber(numbers) {
//   let max = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }

//   return max;
// }

// const numbersArray = [5, 12, 8, 43, 25, 18];
// const maxNumber = findMaxNumber(numbersArray);
// console.log("Максимальне число:", maxNumber);

// ==============================================

// Задача 2:
//  Обчислення середнього значення

// javascript

// function calculateAverage(numbers) {
//   let sum = 0;

//   for (let number of numbers) {
//     sum += number;
//   }

//   return sum / numbers.length;
// }

// const numbersArray = [10, 20, 30, 40, 50];
// const average = calculateAverage(numbersArray);
// console.log("Середнє значення:", average);

// ============================================

// Задача 3:
//  Перевірка на парність

// javascript

// function isEven(number) {
//   return number % 2 === 0;
// }

// const num = 15;
// console.log(`${num} є парним: ${isEven(num)}`);

// ================================================

// Задача 4:
//  Генерація випадкового кольору у HEX - форматі

// javascript

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
// }

// const randomColor = getRandomHexColor();
// console.log("Випадковий колір:", randomColor);

// ======================================================

// Задача 1: Зміна тексту при кліку

// html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Зміна тексту</title>
// </head>
// <body>

//   <button id="changeTextButton">Змінити текст</button>
//   <p id="outputText">Початковий текст</p>

//   <script>
//     const changeTextButton = document.getElementById('changeTextButton');
//     const outputText = document.getElementById('outputText');

//     changeTextButton.addEventListener('click', function () {
//       outputText.textContent = 'Новий текст';
//     });
//   </script>

// </body>
// </html>

// =====================================================

// Задача 2: Перевірка наявності класу

// html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Перевірка класу</title>
//   <style>
//     .highlight {
//       color: red;
//     }
//   </style>
// </head>
// <body>

//   <p id="targetElement">Текст для виділення</p>
//   <button id="toggleClassButton">Перемикнути клас</button>

//   <script>
//     const targetElement = document.getElementById('targetElement');
//     const toggleClassButton = document.getElementById('toggleClassButton');

//     toggleClassButton.addEventListener('click', function () {
//       targetElement.classList.toggle('highlight');
//     });
//   </script>

// </body>
// </html>

// ===========================================================

// Задача 3: Зміна колірів за допомогою випадаючого списку

// html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Зміна кольорів</title>
//   <style>
//     .red { color: red; }
//     .green { color: green; }
//     .blue { color: blue; }
//   </style>
// </head>
// <body>

//   <select id="colorSelector">
//     <option value="red">Червоний</option>
//     <option value="green">Зелений</option>
//     <option value="blue">Синій</option>
//   </select>
//   <p id="coloredText">Текст змінює колір</p>

//   <script>
//     const colorSelector = document.getElementById('colorSelector');
//     const coloredText = document.getElementById('coloredText');

//     colorSelector.addEventListener('change', function () {
//       coloredText.className = colorSelector.value;
//     });
//   </script>

// </body>
// </html>

// ====================================================
