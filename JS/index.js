// console.log(a);
// var a;/
// ................

let a=12;
if(a>10){
    a=30
    let b=10;
    console.log(a);
    console.log(b);
}
console.log(a);
// console.log(b);


function hello(){
    console.log("hello world");
}
hello();

const hello1=()=>{
    console.log("hello user1");
}
hello1();
function sum(x,y,z){
    return (x+y+z);
}
const sum1=(x,y,z)=>{
    return(x+y+z);
}
const result=sum(10,12,13);
console.log(result);
console.log(sum1(2,4,5));

// spreading

