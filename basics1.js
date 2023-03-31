// // operators
// var a=4;
// var b=10;

// comparison operators
// if (a===b) {
//     console.log('yes');
// }else if(a>b) {
//     console.log('a is grater than');
// }
    
// else {
//     console.log('a is less than');
// }
// // logical operator
// if(a==b && a==10){
//     console.log('a has a value 10and equal to b')

// }
// else{
//     console.log('no')
// }

// functions
// function addt(a,b) { 
//     var sum=a+b;
//     console.log(sum);
    
// }
// addt(6,'neena');
// function multi(c,d) {
//     var multi=c*d;
//     console.log(multi);  
// }
// multi(9,6);
// function divs(e,f) {
//     var divs=e/f;
//     console.log(divs);
    
// }
// divs(25,5);
// for loop
// console.log("hello World");
//basics syntax of for loop to print number from 1 to 10

// for(let i=0; i<=10;i++){ 
//     console.log(i);
// }
// for(let i=10;i>=0;i--) {
//     console.log(i);
// }
// print sum of the first 10 natural number
// 1+2+3+...10
// let sum =0;

// for(let i=1;i<=10;i++){
//     sum =sum + i;

// }
// console.log("Sumof first 10 natural number is",sum);

// while loop

// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// Do While loop

// let i =2;
// do{
//     console.log(i);
// }while(i>2)

// for..of loop
let students =['Hari','Ram','Shine']
for(let student of students){
    console.log(`hello ${student}` )
}