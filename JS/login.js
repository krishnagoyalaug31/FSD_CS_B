function login(username,password){
    console.log(`${username} is login`);
}
login("krishna","abes");
// array....................................................--------------------------------
const mymap=new Map([
    ["key1","678"],
    ["krishna",7889],
    [78,"bjhw"],
]);
mymap.set(9,"keyy");
console.log(mymap.get("key1"));
console.log(mymap.get("key2"));
console.log(mymap);
// set....................................................................
const myset=new Set();
myset.add(23);
myset.add(56);
myset.add(27);
myset.add(26);
console.log(myset);

// filter operation with arrow function -----------------------------------------------------
const number=[2,3,4,5,6,7,8,9]
const data=number.filter((n)=>(n>5));
console.log(data);
// even number---------------------------------------------------------------

const number1=[2,3,4,5,6,7,8,9]
const data1=number.filter((n)=>(n%2!=0)).map((a)=>(a*5));
console.log(data1);
const data2=number.filter((n)=>(n%2!=0)).map((a)=>(a*5)).reduce((b,s)=>b+s);
console.log(data2);
// promise--------------------

const mypromise=new Promise(
    (resolve,reject)=>{
        console.log("executed promise");
        reject("network error");
    }
);
mypromise.then((msg)=>console.log(msg)).catch((err)=>console.log("Error",err));
// /promise---------------------
const url="https://api.github.com/users/krishnagoyalaug31";
const res=fetch(url);
res.then((res)=>{
   return res.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("Error:",err);
}).finally(()=>console.log("finally executed"));