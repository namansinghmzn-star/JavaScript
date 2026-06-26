// const numbers = [10,20,30]
// const addition = numbers.reduce((sum,num) => {
//     return sum + num
// }
// )
// console.log(addition)

// const numbers = [5, 10, 15, 20]
// const total = numbers.reduce((sum,num) => {
//     return sum + num
// }
// )
// console.log(total)

// const numbers = [2,3,4]
// const multi = numbers.reduce((mult, num) => {
//     return mult*num
// }) 
// console.log(multi)

// const numbers = [10,20,30,12,34,21,60,43,54]
// const largest = numbers.reduce((larg,num) => 
//     num > larg ? num : larg
// )
// console.log(largest)

// const numbers = [10,20,30,12,34,21,4,60,43,54]
// const smallest = numbers.reduce(
//     (small, num) => num < small ? num : small
// )
// console.log(smallest)

const students = [
    { name: "Rahul", marks: 80 },
    { name: "Amit", marks: 90 },
    { name: "Naman", marks: 85 }
];

const totalMarks = students.reduce(
    (total, stud) => 
    total + stud.marks,0
)
console.log(totalMarks)