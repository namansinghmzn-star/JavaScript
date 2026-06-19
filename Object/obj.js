// Objects in JavaScript
// let student = {
//     name: "Naman",
//     age: 23,
//     marks: 95
// }
// console.log(student)

// let user = {
//     username: "xyz",
//     email: "xyz@gmail.com",
//     active: true
// }
// console.log(user)
// console.log(user.username)
// console.log(user.email)
// console.log(user.active)
// user.salary = 120000
// console.log(user)

// let student1  ={
//     name: "Naman",
//     age: 24,
//     marks: 96
// }

// let student2  ={
//     name: "Veepanshu",
//     age: 21,
//     marks: 100
// }

// let student3  ={
//     name: "Deepak",
//     age: 32,
//     marks: 78
// }

// let student = [
//     {
//         name: "Naman",
//         age:23,
//         marks:97
//     },
//     {
//         name: "Veepanshu",
//         age: 21,
//         marks: 94
//     },
//     {
//         name: "Deepak",
//         age: 32,
//         marks:87
//     }
// ]
// for (i=0;i<student.length;i++){
//     console.log(student[i].name)
//     console.log("Age",student[i].age)
//     console.log("Marks",student[i].marks)

// }

// function showStudents(student) {
//     for (let i = 0; i < student.length; i++) {
//         console.log(student[i]);
//     }
// }
// showStudents(student)

// student.push({
//     name: "Rohan",
//     age: 19,
//     marks: 72
// })

// for (i=0;i<student.length;i++){
//     console.log(student[i].age)
// }

// let student = [
//     {
//         name: "Naman",
//         age:23,
//         marks:97
//     },
//     {
//         name: "Veepanshu",
//         age: 21,
//         marks: 94
//     },
//     {
//         name: "Deepak",
//         age: 32,
//         marks:87
//     }
// ]
// let total = 0
// for (let i=0; i<student.length;i++){
//     total = total + student[i].marks
// }
// console.log(total)

// let student = [
//     {
//         name: "Naman",
//         age:23,
//         marks:97
//     },
//     {
//         name: "Veepanshu",
//         age: 21,
//         marks: 94
//     },
//     {
//         name: "Deepak",
//         age: 32,
//         marks:87
//     }
// ]
// let average = 0
// let total = 0
// for (let i=0; i<student.length;i++){
//     average = total+=student[i].marks/student.length
// }
// console.log(average)

let student = [
  {
    name: "Naman",
    age: 23,
    marks: 97,
  },
  {
    name: "Veepanshu",
    age: 21,
    marks: 94,
  },
  {
    name: "Deepak",
    age: 32,
    marks: 87,
  },
];
let highest = 0;
let secondHighest = 0;
for (let i = 0; i < student.length; i++) {
  if (student[i].marks > highest) {
    highest = student[i].marks;
  } else if (student[i].marks > secondHighest && student[i].marks < highest) {
    secondHighest = student[i].marks;
  }
}

// console.log(highest)
console.log(secondHighest);