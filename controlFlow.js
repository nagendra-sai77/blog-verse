let marks = 85;
if(marks>=95){
    console.log("A+")
}
else{
    console.log("A")
}
let day = 5;
switch(day)
{
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;      
    case 5:
        console.log("friday")
        break;     
    default:
        console.log(error) 
}
let person = {
    age: 22,
    collage: "jntu"
}
for(let key in person){
    console.log(key,person[key])
}
for(let i=5;i>=0;i--){
    if(i===3){
        continue;
    }else if(i===2){
         break;
    }else{
        console.log(i)
    }
}