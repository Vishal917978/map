let arr=["apple","banana","cherry"];
let newArr=arr.map(val=>val.length);
console.log(newArr)

let a='vish';
console.log(a.charCodeAt(0))
 const d=new Date()
 console.log(d);


//  let questions = [
//     "What is your favorite hobby?",
//     "If you could travel anywhere, where would you go?",
//     "What is your dream job?",
//     "Who inspires you the most?",
//     "What is one skill you want to learn?",
//     "If you had a superpower, what would it be?",
//     "What is your favorite book or movie?",
//     "Describe yourself in three words.",
//     "What is your biggest achievement so far?",
//     "If you could meet any historical figure, who would it be?"
// ];

// // Generate a random index
// let randomIndex = Math.floor(Math.random() * questions.length);

// // Get a random question
// console.log(questions[randomIndex]);

 
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr1 = myArr.flat();
// console.log(newArr1)

// let name="vishal sharma";
// console.log(name.slice(9,11))

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.toSorted())

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}
let person1 = new Person("Alice", 25);

person1.sayHello(); 
// person2.sayHello();  