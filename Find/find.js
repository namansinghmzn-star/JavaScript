// const arr = [1,2,3,4,5,6,7,8]
// const smaller = arr.find(s => s>5)
// console.log(smaller)

// const arr = [1,3,5,6,7,8]
// const even = arr.find(ev=> ev%2==0)
// console.log(even)

// const arr = [1,2,3,4,5,6,7]
// const greater = arr.find(gr => gr>8)
// console.log(greater)

// const names = ["Rahul", "Amit", "Naman", "Riya"]
// const start = names.find(st => st[0]=="N")
// console.log(start)

// const student = [
//     { name: "Naman Singh", marks: 98 },
//     { name: "Deepak Yadav", marks: 99 },
//     { name: "Veepanshu Kasana", marks: 43 }
// ]
// const failed = student.find(st=> st.marks<50)
// console.log(failed)

// const products = [
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Mobile" },
//     { id: 3, name: "Tablet" }
// ]

// const mobile = products.find(mob => mob.id==2)
// console.log(mobile)

// const ages = [12, 15, 17, 20, 25]
// const adult = ages.find(ad => ad>=18)
// console.log(adult)

// const numbers = [10, 15, 25, 30];
// const greater = numbers.find(num => num>20)
// console.log(greater)

// const names = ["Rahul", "Amit", "Naman"]
// const startA = names.find(nam => nam[0]==="A")
// console.log(startA)

// const numbers = [3, 7, 12, 15, 20];
// const divisibleBy5 = numbers.find(num => num%5==0)
// console.log(divisibleBy5)

const books = [
    { id: 1, title: "JavaScript Basics" },
    { id: 2, title: "Python for Beginners" },
    { id: 3, title: "React Guide" }
]
const isJava = books.find(jav => jav.title.includes("Java"))
console.log(isJava)