// BitCamp Exercies
// 0 ეტაპი
// 1-ლი კვირა დავალება 1  

// //console.log("Hello World")

// 1-ლი კვირა დავალება 2

// let x=5
// console.log(x)

// 1-ლი კვირა დავალება 3

// console.log(5+2)

// 1-ლი კვირა დავალება 4

// console.log(7-4)

// 1-ლი კვირა დავალება 5

// console.log(5*8)

// 1-ლი კვირა დავალება 6

// console.log(12/3)

// 1-ლი კვირა დავალება 7

// console.log(8%6)

// 1-ლი კვირა დავალება 8

// let text='i dont know'
// console.log(text.length)

// // 1-ლი კვირა დავალება 9

// console.log('I' + 'dont' + 'know')

// 1-ლი კვირა დავალება 10

// console.log('its easy to say'.toUpperCase())

// 1-ლი კვირა დავალება 11

// console.log('FIRST HOMEWORK'.toLowerCase())




// მე-2 კვირა დავალება 1
// console.log('Hello World')

// მე-2 კვირა დავალება 2
// function Sum(number1, number2){
//     console.log(number1 + number2)
// }
// Sum(20, 40)

// მე-2 კვირა დავალება 3
// function textLength(text){
//     return text.length;
// }
// console.log(textLength("scxxcaxcac"));

// მე-2 კვირა დავალება 4
// function concatenate(text1, text2){
//     return text1 + text2;
// }
// console.log(concatenate("Hello", "World"))

// მე-2 კვირა დავალება 5
// function Num(number){
//     return number;
// }
// let x = Num(1);
// console.log(x);

// მე-2 კვირა დავალება 6
// function textUpperCase(text){
//     return text.toUpperCase();
// }
// console.log(textUpperCase("sadasdsadasdasdasda"));

// მე-2 კვირა დავალება 7
// function textLowerCase(text){
//     return text.toLowerCase();
// }
// console.log(textLowerCase("sDASDASsdasdadasdadSADASD"));

// მე-2 კვირა დავალება 8
// function balance(number1, number2){
//     return number1 % number2;
// }
// console.log(balance(6, 4))

// მე-2 კვირა დავალება 9
// function helloName(name){
//     return "Hello " + name;
// }
// console.log(helloName("Sandro"))

// მე-2 კვირა დავალება 10
// function subtract(number1, number2){
//     return number1 - number2;
// }
// console.log(subtract(7, 2))

// მე-2 კვირა დავალება 11
// function check(number){
//     if (number%2 == 1){
//         console.log("even")
//     } else {
//         console.log("odd")
//     }
// }
// check(4);

// მე-2 კვირა დავალება 12
// function check1(number){
//     if(number > 0 ){
//         console.log("positive")
//     } else if(number < 0 ) {
//         console.log("negative")
//     } else {
//         console.log(0)
//     }
// }
// check1(0);

// მე-2 კვირა დავალება 13
// function check2(number1, number2){
//     if (number1 === 0){
//         console.log("false")
//     } else if (number1%number2 === 0) {
//         console.log('true')
//     } else {
//         console.log('false')
//     }
// }
// check2(2, 2)

// მე-2 კვირა დავალება 14
// function textCheck(text){
//     if (text.length === 0){
//         console.log("empty")
//     } else {
//         console.log("not empty")
//     } 
// }
// textCheck("asdasdsa")

// მე-2 კვირა დავალება 15
// function wordCheck(word){
//     if (word.includes("hello")){
//         console.log("false")
//     } else {
//         console.log("true")
//     }
// }
// wordCheck("hello world")

// მე-2 კვირა დავალება 16
// function minNumber(number1, number2){
//     if(number1 > number2){
//         console.log(number2)
//     } else if(number1 === number2){
//         console.log(number1 + "=" + number2)
//     } else {
//         console.log(number1)
//     }
// }
// minNumber(3, 2)










// მე-3 კვირა დავალება 1

// for( let i = 0; i <= 10; i++){
//     console.log(i)
// }

// მე-3 კვირა დავალება 2

// function findLongest(sentence){
//     let splited = sentence.split(" ");

//     let max = splited[0]
//     for(let i = 1; i < splited.length; i++){
//         if(splited[i].length > max.length){
//             max = splited[i];
//         }
//     }
//     return max
// }
// console.log(findLongest("sandro apciauri seventeen"));

// მე-3 კვირა დავალება 3
// for(let number = 2; number < 20; number += 2){
//     console.log(number)
// }

// მე-3 კვირა დავალება 4

// let sayHello = Number(prompt("How many times do you want to say hello? "))
// for(let i = 0; i < sayHello; i++){
//     console.log("Hello");
// }

// მე-3 კვირა დავალება 5
// let sum = 0;
// for(let i = 1; i < 100; i++){
//     sum = sum + i
// }
// console.log(sum);

// მე-3 კვირა დავალება 6

// let monthNumber = Number(prompt("Enter month number: "));
// switch(monthNumber){
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//   console.log(31)
//   break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//   console.log(30)
//   break;
//   case 2:
//   console.log("28 or 29")
//   break;
//   default: console.log("wrong input")
// }

// მე-3 კვირა დავალება 7
// let secretNumber = 3;
// let userNumber = Number(prompt("Guess the secret number between 1 and 10: "));
// while(secretNumber !== userNumber){
//     userNumber = Number(prompt("Guess the secret number between 1 and 10: "));
// }
// console.log("You Got It!!!")

// მე-3 კვირა დავალება 8
// let studentMark = prompt("Enter your grade: ");
// switch(studentMark){
//     case "A":
//         console.log("Excellent!!")
//         break;
//     case "B":
//         conosole.log("Good!")
//         break;
//     case "C":
//         console.log("Satisfactory")
//         break;
//     case "D":
//         console.log("Less than satisfactory")
//         break;
//     case "F":
//         console.log("Unsatisfactory")
//         break;
//     default: 
//     console.log("Wrong input")
// }
// მე-3 კვირა დავალება 9
// let userPassword = prompt("Enter your password: ");
// let correctPassword = "12345";
// while(userPassword !== correctPassword){
//     console.log("Try Again");
//     userPassword = prompt("Enter your password: ");
// }
// console.log("Correct!!")

// მე-3 კვირა დავალება 10
// function sumDigits(num){
//     let str = String(num);
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         count+=Number(str[i])
//     }
//     return count
// }
// console.log(sumDigits(54))

// მე-3 კვირა დავალება 11

// function countBs(sentence){
//     let count = 0;
//     for(let i = 0; i < sentence.length; i++){
//         if(sentence[i] == "B"){
//             count++
//         }
//     }
//     return count
// }
// console.log(countBs("hB ab sabx Bitcamp"))







// მე-4 კვირა დავალება 1

// let arr = [1,3,5,4];
// let count = 0;
// for(let i = 0; i < arr.length; i++){
//     count += arr[i]
// }
// console.log(count);

// მე-4 კვირა დავალება 2

// let arr = [1,3,5,4];
// let count = 0;
// for(let i = 0; i < arr.length; i++){
//     count += arr[i]
// }
// console.log(count/arr.length);

// მე-4 კვირა დავალება 3

// let arr = [20, 11, 15, 21, 2, 5]
// let arraySort = arr.sort(function(a,b){return a-b})
// console.log(arraySort);

// მე-4 კვირა დავალება 4

// let arr = [20, 11, 15, 21, 2, 6]
// let arraySort = arr.sort(function(a,b){return a-b})
// console.log(arraySort[arraySort.length-1]);

// მე-4 კვირა დავალება 5

// let arr = [20, 11, 15, 21, 2, 6]
// let arraySort = arr.sort(function(a,b){return a-b})
// console.log(arraySort[0]);

// მე-4 კვირა დავალება 6

// let array = [1,2,6,10,20]
// function check(arr){
//     if(arr.includes(3)){
//         return "შეიცავს 3-იანს"
//     } else {
//         return "სცადეთ თავიდან"
//     }
// }
// console.log(check(array));

// მე-4 კვირა დავალება 7

// let array = [1,4,6,7,2]
// function deleted(arr, num){
//     if(arr.includes(num)){
//         let index = arr.indexOf(num);
//        arr.splice(index, 1);
//     }
//     return arr;
// }
// console.log(deleted(array, 2));

// მე-4 კვირა დავალება 8 
// let array = [2,2,3,4,7,7,10,11,12]
// function findNum(arr, num){
//     let counter = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == num){
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(findNum(array, 7))

// მე-4 კვირა დავალება 9

// let arr = [1,2,3,5,4,6];
// let count = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         count += arr[i]
//     }
// }

// console.log(count);

// მე-4 კვირა დავალება 10


// let arr = [20,40,25,30,10,2,6,76,0]
// let sorted = arr.sort((a,b) => a-b)
// console.log(sorted[sorted.length - 2]);

// let array = [20,40,25,30,10,2,6,76,0]
// function findTheSecondLargest(arr){
//     let sortedArr = arr.sort((a,b) => a-b)
//     return sortedArr[sortedArr.length - 2]
// }
// console.log(findTheSecondLargest(array));

// მე-4 კვირა დავალება 11

// let array1 = [2,4,6]
// let array2 = [2,4,6,5]
// function checkEqual(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(i = 0; i < arr1.length; i++){
//         if(arr1[i] !== arr2[i]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkEqual(array1, array2))

// მე-4 კვირა დავალება 12

// let array1 = [5,4,3,9,11,24,23,30]
// let array2 = [11,10,7,5,9,53,20,19]
// function sorted(arr1, arr2){
//     let joinedArr = [...arr1,...arr2]
//      return joinedArr.sort((a,b) => a-b)
// }
//  console.log(sorted(array1, array2));

// მე-4 კვირა დავალება 13

// let array = ["b", "c", "d","a","f"]
// function sorted(arr){
//     return arr.sort();
// }
// console.log(sorted(array));

// მე-4 კვირა დავალება 14

// let array1 = [5,4,3,9,11,24,23,30]
// let array2 = [11,10,7,5,9,53,20,19]
// function sameElement(arr1, arr2){
// let commonElements = [];
// for(let i = 0; i < arr1.length; i++){
//     for(let j = 0; j < arr2.length; j++){
//         if(arr1[i] === arr2[j]){
//             commonElements.push(arr1[i]);
//             }
//         }
//     }
//     return commonElements;
// }        
// console.log(sameElement(array1, array2));

// მე-4 კვირა დავალება 15

// let car = {
//     mark: "BMW",
//     models: "430",
//     year: 2016
// }

// console.log(car); 

// მე-4 კვირა დავალება 16

// let car = {
//     mark: "BMW",
//     models: "430",
//     year: 2016
// }
// car.start = "The car is starting!";
// console.log(car)

// მე-4 კვირა დავალება 17

// let person = {
//     name: "Sandro",
//     town: "Tbilisi",
//     age: 18,
// }
// console.log(person.name)

// მე-4 კვირა დავალება 18

// let person = {
//     name: "Sandro",
//     town: "Tbilisi",
//     age: 18,
// }
// console.log(person.name)
// person.job = "Future programmer"
// console.log(person)




// მე-5 კვირა დავლება 1

// let person = {
//     name: "Sandro",
//     "last name": "Aptsiauri",
//     age: 18,
// }
// console.log(person)

// მე-5 კვირა დავლება 2

// let person = {
//     name: "Sandro",
//     "last name": "Aptsiauri",
//     age: 18,
// }
// person.sayHello = function(){
//     return person.name;
// }
// console.log(person)

// მე-5 კვირა დავლება 3

// let person = {
//     name: "Sandro",
//     "last name": "Aptsiauri",
//     age: 18,
// }
// person.sayHello = function(){
//     console.log(person.name);
// }
// delete person.age;
// console.log(person);

// მე-5 კვირა დავლება 4

// let person = {
//     name: "Sandro",
//     "last name": "Aptsiauri",
//     age: 18,
// }
// person.sayHello = function(){
//     console.log(person.name);
// }
// delete person.age;
// person.job = "Future programmer";
// console.log(person)

// მე-5 კვირა დავლება 5

// let person = {
//     name: "Sandro",
//     "last name": "Aptsiauri",
//     age: 18,
// }
// person.sayHello = function(){
//     console.log(person.name);
// }
// delete person.age;
// person.job = "Future programmer";
// person.jobLength = function(){
//     return person.job.length
// }
// console.log(person)

// მე-5 კვირა დავლება 6

// let person = {
//     name: "Sandro",
//     "last name": "Aptsiauri",
//     age: 18,
// }
// person.sayHello = function(){
//     console.log(person.name);
// }
// delete person.age;
// person.job = "Future programmer";
// person.jobLength = function(){
//     return person.job.length
// }
// console.log(Object.keys(person).length)

// მე-5 კვირა დავლება 7

// let person = {
//     name: "Sandro",
//     "last name": "Aptsiauri",
//     age: 18,
// }
// person.sayHello = function(){
//     console.log(person.name);
// }
// delete person.age;
// person.job = "Future programmer";
// person.jobLength = function(){
//     return person.job.length
// }
// person.gender = "Male"
// if(!"gender" in person){
//     person.gender = "Male"
// }
// console.log(check)

// მე-5 კვირა დავლება 8

// let person = {
//     name: "Sandro",
//     "last name": "Aptsiauri",
//     age: 18,
// }
// person.sayHello = function(){
//     console.log(person.name);
// }
// delete person.age;
// person.job = "Future programmer";
// person.jobLength = function(){
//     return person.job.length
// }
// for(let key in person){
//     console.log(key)
// }

// მე-5 კვირა დავლება 9

// let person = {
//     name: "Sandro",
//     "last name": "Aptsiauri",
//     age: 18,
// }
// person.sayHello = function(){
//     console.log(person.name);
// }
// delete person.age;
// person.job = "Future programmer";
// person.jobLength = function(){
//     return person.job.length
// }
// for(let key in person){
//     console.log(person[key])
// }





// მე-6 კვირა დავალება 1

// function generateRandomNumbers(num1, num2){
//     let range = num2-num1
//     let number = Math.floor((Math.random()*(range+1))+num1);
//     console.log(number);
// }
// generateRandomNumbers(5, 10)

// მე-6 კვირა დავალება 2

// function capitalizeWords(sentence){
//     let str = sentence.split(" ")
//     let arr = [];
//     for(let i = 0; i < str.length; i++){
//         arr.push(str[i][0].toUpperCase()+str[i].slice(1)) 
//     }
//     return arr.join(" ");
// }
// console.log(capitalizeWords("sandro aptsiauri"))

// მე-6 კვირა დავალება 3
// let array = [{name: "sandro"},{name: "david"},{name: "sandro"}]
// function checkObj(arr, key){
//     let emptyArr = [];
//     for(let i = 0; i < arr.length; i++){
//         emptyArr.push(array[i][key])
//     }
//     let unique = [...new Set(emptyArr)]
//     return unique;
// }
// console.log(checkObj(array, "name"));

// მე-6 კვირა დავალება 4 

// function checkPangram(sentence){

//     let regex = sentence.replace(/[\s.,!?]/g, '');
//     let unique = [...new Set(regex)];
//     if(unique.length === 26){
//         return true
//     } else {
//         return false;
//     }
// }
// console.log(checkPangram("ABCDEFGHIJKLMNOPQRSTUVWXYZ"))
// მე-6 კვირა დავალება 5

// function foo(sentence){
//     let array = [];
//     let splited = sentence.split(" ");
//     let unique = [...new Set(splited)]
//     for(let i = 0; i < unique.length; i++){
//         if(unique[i] !== "a" && unique[i] !== "the" && unique[i] !== "is"){
//         array.push(unique[i])
//         }
//     } 
//     let sorted = array.sort();
//     return sorted;

// }
// console.log(foo("sandro aptsiauri the a is"))
// მე-6 კვირა დავალება 6
// function removeFalse(arr){
//     let trueArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]){
//             trueArr.push(arr[i])    
//         }
//     }
//     return trueArr;
// }
// console.log(removeFalse([0,"sandro",null,NaN,5]))
// მე-6 კვირა დავალება 7

// function reverseSentence(sentence){
//     let splited = sentence.split(" ");
//     let emptyArr = [];
//     for(let i = splited.length-1; i >= 0; i--){
//         emptyArr.push(splited[i]);
//     }
//     return emptyArr;
// }
// console.log(reverseSentence("sandro aptsiauri"))

// მე-6 კვირა დავალება 8
// function checkPalindrome(str){
//     let splited = str.split("");
//     let reversed = splited.reverse();
//     let joinArray = reversed.join("")
//         if(str === joinArray){
//             return true;
//         } else {
//             return false;
//     }
// }
// console.log(checkPalindrome("hello"))
// მე-6 კვირა დავალება 9

// let array = [-1,-3,-5,-2,-20]
// function findLargest(arr){
//     let largest = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// console.log(findLargest(array))


// მე-6 კვირა დავალება 10
// let array = [5,4,2,10]
// function sum(arr){
//     let count = 0;
//     for(i = 0;i < arr.length; i++){
//         count += arr[i];
//     }
//     return count;
// }
// console.log(sum(array))



// ეტაპი 1

// 1-ლი კვირა დავალება 1

// function checkLetter(string, letter){
//     let counter = 0;
//     for(let i = 0; i < string.length; i++){
//         if(string[i] == letter){
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(checkLetter("dude", "d"))

// 1-ლი კვირა დავალება 2

// let array = [2,5,1,3,7,9,11,10,20]

// function sortedArr(arr){
//     let sorted = arr.sort((a,b) => b-a)
//     return sorted;
// }
// console.log(sortedArr(array))

// 1-ლი კვირა დავალება 3
// let arr = ["Australia", "Germany", "United States of America"]
// function findLongest(countryNames){
//     let longest = countryNames[0];
//     for(let i = 1; i < countryNames.length; i++){
//         if(longest.length < countryNames[i].length ){
//             longest = countryNames[i];
//         }
//     }
//     return longest;
// }
// console.log(findLongest(arr))

// 1-ლი კვირა დავალება 4
// let array = [2,5,1,3,7,9,11,10,20]
// function arrayLowestLargest(arr){
//     let sorted = arr.sort((a,b) => a-b)
//     return [sorted[1], sorted[sorted.length-2]]
// }
// console.log(arrayLowestLargest(array))

// 1-ლი კვირა დავალება 5

// function firstLetterLarge(sentence){
//     let splited = sentence.split(" ")
//     let emptyArr = [];
//     for(let i = 0; i < splited.length; i++){
//         emptyArr.push(splited[i][0].toUpperCase()+splited[i].slice(1));
//     }
//     return emptyArr.join(" ");
// }
// console.log(firstLetterLarge("sandro aptsiauri"))

// 1-ლი კვირა დავალება 6

// function unique(sentence){
//     let splited = sentence.split("")
//     let sorted = splited.sort();
//     let joinarray = sorted.join("")
//     return joinarray;
// }
// console.log(unique("webster"))

// 1-ლი კვირა დავალება 7
// function generateCombinations(word){
//     let emptyArr = [];
//     for(let i = 0; i < word.length; i++){
//         for(let j = i; j < word.length; j++){
//             emptyArr.push(word.slice(i, j+1))
//         }
//     }
//     return emptyArr;
// }
// console.log(generateCombinations("dog"));

// 1-ლი კვირა დავალება 8

// function findNotRepeated(sentence){
//     for(let i = 0; i < sentence.length; i++){
//         if(sentence.indexOf(sentence[i]) === sentence.lastIndexOf(sentence[i])){
//             return sentence[i];
//         }
//     }
// }
// console.log(findNotRepeated("saddasbabasabg"))




// მე-2 კვირა დავალება 1

// let array = [1,5,-1,-7,11]
// function maxSubArr(arr){
//     let largestSum = -Infinity;
//     for(let i = 0; i < arr.length; i++){
//         let sum = 0;
//         for(let j = i; j < arr.length; j++){
//             sum += arr[j]
//             if(largestSum < sum){
//                 largestSum = sum;
//             }
//         }
//     }
//     return largestSum;
// }
// console.log(maxSubArr(array))

// მე-2 კვირა დავალება 2

// let array = [1, 2, 3, 4, 5, 6, 7]
// function rotateArray(arr, k){
//     for (let i = 0; i < k; i++){
//         let lastElement = arr.pop();
//         arr.unshift(lastElement);
//     }
//     return arr;
// }
// console.log(rotateArray(array, 2));

// მე-2 კვირა დავალება 3

// let array = [1, 2, 4]
// function missingNumber(arr){
//     for (let i = 0; i < arr.length - 1; i++){
//         if((arr[i+1] - arr[i]) !== 1){
//             return arr[i]+1
//         }
//     }
// }
// console.log(missingNumber(array))


// let array = [1, 2, 4, 6]
// function missingNumber(arr){
//     let missing = [];
//     for(let i = 0; i = arr.length; i++){
//         if(arr.indexOf([i]) === -1){
//             missing.push([i])
//         }
//     }
//     return missing;
// }
// console.log(missingNumber(array))

// 9-ე თავი დავალება 1

// function callback(){
//     console.log("Hello world")
// }
// setTimeout(callback, 1000)

// 9-ე თავი დავალება 2

// function anything() {
// return new Promise(resolve => {
//     resolve("succes")
//    })    
// }
// setTimeout(() => {
//     anything().then(response => console.log(response))
// }, 2000)

// 9-ე თავი დავალება 4

// async function getUsergitHub(){
//     const user = await fetch("https://api.github.com/users/SandroAptsiauri")
//     const data = await user.json();
//     console.log(data);
// }
// setTimeout(getUsergitHub, 2000)

// 9-ე თავი დავალება 5

// async function getUsergitHub(){
//     const response = await fetch("https://api.github.com/users/SandroAptsiauri")
//     const data = await response.json();
//     if(response.status === 200){
//         throw new Error("TypeError got caught")
//     }
// }    
// try {
//     getUsergitHub();
// } catch (error) {
//     console.log(error);
// }
