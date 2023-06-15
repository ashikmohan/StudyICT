// var bt=document.getElementById("bt");
// bt.addEventListener("click",()=>{
//     alert(`callback alert`);

// }
// )

// function add1(a,b){

//     var sum =a+b;
//     return sum;
// }

// function display(val){
//     document.getElementById("textc").innerText=`The sum is ${val}`;
// }
// var result=add1(9,10);
// display(result);

// call back function
// function add1(a,b,callback){

//     var sum =a+b;
//     callback (sum);
// }
// function display(val){
//     document.getElementById("textc").innerText=`The sum is ${val}`;
// }
// add1(10,12,display);

// Promise function

// function add1(a,b){
//     let promise=new Promise((resolve,reject)=>{
//         var sum=a+b;
//         if(sum<10){
//             resolve(sum);

//         }
//         else{
//             reject('Sum is not greater than 10');
//         }
//     })
//     promise.then((val)=>{
//         document.getElementById('textc').innerText=`The sum is ${val}`
//     })
//     .catch((err)=>{
//         document.getElementById('textc').innerText=`The error message is ${err}`
//     })
// }
// add1(1,2);


// we can do like this also return method

// function add1(a,b){
//     return promise=new Promise((resolve,reject)=>{
//         var sum=a+b;
//         if(sum<10){
//             resolve(sum);

//         }
//         else{
//             reject('Sum is not greater than 10');
//         }
//     })
// }
// add1(1,2);

// promise.then((val)=>{
//     document.getElementById('textc').innerText=`The sum is ${val}`
// })
// .catch((err)=>{
//     document.getElementById('textc').innerText=`The error message is ${err}`
// })

// Async await

// async function add1(a,b){
//     let promise=new Promise((resolve,reject)=>{
//         var sum=a+b;
//         if(sum>10){
//             resolve(sum);

//         }
//         else{
//             reject('Error');
//         }
//     })
//     var ans = await promise;
//     document.getElementById('textc').innerText=`The Sum is ${ans}`
// }
// add1(10,10);



// ajax
function ajaxcall(){
    var xhttp=new XMLHttpRequest();
    xhttp.open('GET','https://gorest.co.in/public/v2/users',true);

    xhttp.send();
    xhttp.onreadystatechange=()=>{
        let promise=new Promise((resolve,reject)=>{
            if(this.readystate==4 && this.status==200){
                resolve('It is done')
            }
        })
        promise.then((val)=>{
            document.getElementById('textc').innerText=`The result is ${val}`;
        })}
}
ajaxcall();
