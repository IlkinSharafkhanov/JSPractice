// function addName(name, birthYear, yearToday) {
//     function calcAge() {
//         return yearToday - birthYear;
//     }
//     let age = calcAge()
//   return "Menim adim " + name +"dir. "+ "Menim " + age + " yasim var.";
// }

// let anything = "Ilkin";

// console.log(addName(anything, 2004, 2022));

// let month = "aprel";

// switch (month) {
//   case 1:
//   case "yanvar":
//   case 2:
//   case "fevral":
//   case 12:
//   case "dekabr":
//     console.log("QIS");
//     break;
//   case 3:
//   case "mart":
//   case 4:
//   case "aprel":
//   case 5:
//   case "may":
//     console.log("YAZ");
//     break;
//   case 6:
//   case "iyun":
//   case 7:
//   case "iyul":
//   case 8:
//   case "avqust":
//     console.log("YAY");
//     break;
//   case 9:
//   case "sentyabr":
//   case 10:
//   case "oktyabr":
//   case 11:
//   case "noyabr":
//     console.log("PAYIZ");
//     break;
//   default:
//     console.log("BELE AY YOXDUR");
// }

// let first = [ 1, 2, 3, 4 ];
// let second = [ 1, 2, 3, 4, 5 ];

// let difference = second.filter(x => !first.includes(x));
// console.log(difference);

// function isAvgWhole(array){
//     let sum = 0
//     let cnt = 0
//     for(let i = 0; i < array.length; i++){
//         sum+=array[i]
//         cnt++
//     }
//     let avg = sum / cnt
//     if(avg % 1 === 0){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }

// isAvgWhole([1,2,3,4])

// function factorial(number){
//     let sum = 1
//     for(let i = number; i > 0; i--){
//         sum *= i
//     }
//     console.log(sum)
// }

// factorial(4)

// function sayHelloBye(people, number){
//     newName = people.charAt(0).toUpperCase() + people.slice(1);
//     if(number == 0){
//         console.log("Bye " + newName);
//     }else if(number == 1){
//         console.log("Hello " + newName);
//     }
// }

// sayHelloBye("alon", 1)

// let sentence = "I have a lot of apples"
// let result

// let newSent = sentence.replace("[aeoui]", "")

// console.log(newSent);

// function capToFront(someString) {
//     let stringArray = someString.split("")
//     let cap = []
//     let notCap = []
//     for(let i = 0;i < stringArray.length; i++){
//         if(stringArray[i] == stringArray[i].toUpperCase()){
//             cap.push(stringArray[i])
//             stringArray.splice(i, 0)
//         }
//         if(stringArray[i] == stringArray[i].toLowerCase()){
//             notCap.push(stringArray[i])
//         }
//     }
//     let newArr = cap.join("").concat(notCap.join(""))

//     console.log(newArr)
// }

// capToFront("iLKIn")

// function sortByLength(someArr){
//     const desc = someArr.sort((a,b) => b.length - a.length);
//     console.log(desc)
// }

// sortByLength(["hello", "hi", "water", "pop"])

// function spelling(someStr){
//     newStr = ""
//     let emptyArr = []
//     for(let i = 0; i<5; i++){
//         newStr+=someStr[i]
//         emptyArr.push(newStr)
//     }
//     console.log(emptyArr);
// }

// spelling("ilkin")

// function lonelyInteger(someArr){
//     for(let i = 0; i < someArr.length; i++){
//         if(!someArr.includes(someArr[i] * -1)){
//             console.log(someArr[i]);
//         }
//     }
// }

// lonelyInteger([-3, 1, 2, 3, -1, -2, -4])

// function arrayOfMultiplies(multNum, numOfEl){
//     let someArr = []
//     for(let i = 1; i<=numOfEl; i++){
//         someArr.push(multNum * i)
//     }
//     console.log(someArr);
// }

// arrayOfMultiplies(7, 5)

// function removeDup(someArr){
//     let newArr = [...new Set(someArr)]
//     console.log(newArr);
// }

// removeDup(["John", "Taylor", "John"])

// function mirror(someArr){
//     let newArr = []
//     let reversedArr = []
//     for(let i = someArr.length - 2; i >= 0; i-- ){
//         reversedArr.push(someArr[i])
//     }
//     newArr = someArr.concat(reversedArr)
//     console.log(newArr);
// }

// mirror([0, 2, 4, 6])

//creating ul inside div
const newElement = document.createElement("ul");
newElement.classList.add("items");
const itemList = document.querySelector(".added-items");
itemList.appendChild(newElement);

//getting variables from document 
const todoInput = document.querySelector("#inputs");
const todoButton = document.querySelector("#submit");
const todoList = document.querySelector(".items");

//adding event of creating list inside ul while clicking
todoButton.addEventListener("click", () => {
  const taskInput = document.querySelector("#inputs").value;
  if (taskInput.trim() === "") {
    alert("Enter input!");
  } else {
    document.querySelector(".items").innerHTML += `<li class="item"> ${taskInput}<button class="delete">X</button></li>`;
  }
  document.querySelector("#inputs").value = "";
});

//adding event of deleting list inside ul while clicking red button
todoList.addEventListener("click", deleteSome);

function deleteSome(e){
    const item = e.target //target is getting every element while clicking
    if(item.classList[0] === 'delete'){ //we check if item that we clicking is item class of 'delete' 
        item.parentElement.remove() //we take the parent of that element and delete it
    }
}
