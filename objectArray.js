let person={
    name:"sai",
    age:22
}
console.log(person.name)
console.log(person["age"])
const {name,age}=person;//destructoring assignment
console.log(name)
console.log(age)
let fruits = ["apple","mango","orange"]
console.log(fruits[0])
let numbers=[1,2,3,4,5]
let square=numbers.map((num)=>num*num);//transform each element
console.log(square)
let evens=numbers.filter((num)=>num%2==0)
console.log(evens)
let sum=numbers.reduce((present,num)=>present+num)
console.log(sum)
let students=[{
    name:"ram",
    marks:88
},{
    name:"sai",
    marks:99
},{
    name:"rohith",
    marks:50
}
]
console.log(students)
console.log(students[2])
let maxMarks=0;
let topper="";
for(let student of students){
    if(student.marks>maxMarks){
        maxMarks.Marks=student.marks;
        topper=student.name;

    }
}
console.log(`topper id ${topper} and he got ${maxMarks}`)