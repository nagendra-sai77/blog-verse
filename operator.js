let x=10,y=3;
console.log("x+y",x+y);
console.log("x-y",x-y);
console.log("x*y",x*y);
console.log("x/y",x/y);
console.log("x**y",x**y);
console.log("x%y",x%y);
console.log("++x",++x);
console.log("--y",--y);
console.log("x++",x++);
console.log("y--",y--);
console.log("x",x);
console.log("y",y);
let a=5;
a+=3;
console.log("a",a);
a-=2;
console.log("a",a);
a*=2;
console.log("a",a);
a/=2;
console.log("a",a);
a**=2;
console.log("a",a);
a%=2;
console.log("a",a);
let c=10,b=10;
console.log("c==b",c==b);
console.log("c!=b",c!=b);
console.log("c>b",c>b);
console.log("c===b",c===b);//checks value and type
console.log("c<=b",c<=b);
console.log("c>=b",c>=b);
console.log("c<b",c<b);
let age=20;
console.log(age>21 && age<50);
console.log(age>21 || age<50);
console.log(!(age>21));
let firstName="Nagendra";
let lastName="Sai";
let fullName=firstName+" "+lastName;
console.log(fullName);
let correctName=`${firstName} ${lastName},welcome to MernStack`;
console.log(correctName);
//ternary operator
let myAge=19;
if (myAge>=18){
    console.log("You can vote");
}else{
    console.log("You cannot vote");
}
let canVote=myAge>=18?"You can vote":"You cannot vote";
console.log(canVote);
//increment operator
let count = 5;
console.log(count++)
console.log(count)
console.log(++count)
