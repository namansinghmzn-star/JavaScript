// Filter Even Number

// const arr = [1,2,3,4,5,6,7,8,9,10]

// const evenNumber = arr.filter(n => n%2==0)
// console.log(evenNumber)

// Filter odd number

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const oddNumber = arr.filter(n=> n%2==1)
// console.log(oddNumber)

// Filter number greater than 10 

// const numbers = [ 39, 65,1,5,87,34,10,43]
// const greater = numbers.filter(n=> n>10)
// console.log(greater)

// Name with lenght more than 4
// const names = ["Rahul", "Amit", "Naman", "Ram"];
// const longNames = names.filter(n=> n.length>4)
// console.log(longNames)

const student = [
    { name: "Naman Singh", marks:89},
    { name: "Deepak Yadav", marks:98},
    { name: "Veepanshu Kasana", marks:43}
]

const passedStudent = student.filter(stu => stu.marks >=50)
console.log(passedStudent)