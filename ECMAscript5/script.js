// var nam="Ashik";
// console.log(typeof(nam));
var mssg ="this is a text message";
// console.log(mssg.split(' '))
// console.log(mssg.replace('text','confirmed'));
// console.log(mssg.length);
// console.log(mssg)
// console.log(mssg.trim);
// console.log(mssg)
// console.log(mssg.length);

// array operation
let arr=['pea','orange','apple'];
console.log(Array.isArray(mssg));

// forEach
let ar1=[34,55,67];
// arr.forEach(function(item){
//     console.log(item);
// }
// );
// ar1.forEach(function(item,ind,ar1){
//     ar1 [ind]=item<50;
    
// }
// );
// console.log(ar1);

// filter function
var ar3=ar1.filter(function(item){
    return item < 50;
}
)
console.log(ar3);
console.log(ar1);

// jSon parse
var ob1=JSON.parse('{"name":"Aswathy","age":23}');
console.log(ob1);
var ob2=JSON.stringify(ob1);
console.log(ob2);

function confirm(e){
    alert('Email sent' +e.target.value);
}
// arrow

function hello(){
    console.log('hi');
}
hello();
var ar3=ar1.filter((item)=>{
    return item<50;

}
)
console.log(ar3)

// class
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
}
var p1=new Person('maya',80);
var p2=new Person('tiya',32);
console.log(p1.name);

// Array spread operator

var a=[1,2,3];
var b=[45,66];
var c=[...a,...b];
console.log(c);

// array destructuring
var[a,b,c]=[45,66,78];
console.log(b);
var[a,,c]=[45,66,78];
console.log(c);
var[a,,c,...rest]=[45,66,78,99,00,68];
console.log(rest);

// 
setInterval(() => {
    console.log('hello')
},5000 );
console.log('hi me first');
setTimeout(() => {
    
}, );


