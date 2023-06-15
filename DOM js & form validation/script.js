// console.log(document.all);
// console.log(document.title)
// online section class
// var head1=document.getElementById('head1');
// head1.style.color='blue';
// head1.style.fontFamily='Arial';
// head1.innerText='JavaScript Advance';


// var pp=document.getElementById('text');
// pp.innerHTML='<p> <h3>Hi there</h3> I have created this just now </p>'



// var l1=document.getElementsByClassName('lists');
// console.log(l1);
// l1[1].style.backgroundColor='lightgreen';

// var list=document.getElementsByTagName('ul.li');
// console.log(li);    
// list.style.backgroundColor='red';

// var li=document.querySelector('h2#head1');
// li.style.color='blue';

// function popup(){
//     alert('button clicked!!');
// }
// function popup(){
//     var pp=document.getElementById('')
// }

// function chcol(){
//     var h=document.getElementById('head1');
//     h.style.color='green';
// }


// app

// var s=document.querySelector('ul li:nth-child(2)');
// s.style.color='red';


// events
// function show(){
//     var f=document.getElementById('email');
//     f.style.backgroundColor="red";
// }
// function blur(){
//     var bl=document.getElementById('password');
//     bl.style.border='2px soild red';
// }

//     var f=document.getElementById('email');
//     f.addEventListener('keydown',function display(e){
//         console.log(e);
// })

// var bl=document.getElementById('password');
// bl.addEventListener('keyup',function key(e){
//     console.log(e.target.value);
// })

// FORM VALIDATION CLASS
// verify

 var bl=document.getElementById('password');
var f=document.getElementById('email');
var error1= document.getElementById('er1');
 var error2= document.getElementById('er2');

// function verify(){
// if(f.value==''||bl.value==''){
//     alert('fileds cannot be empty');
// }
// else if(bl.value.length<8){
//     error2.innerText='password must contain 8 charactr'
// }
// else{
//     alert('form validation')
// }
    
// }


//email validate   regex is the email validator pattern
//  /^ start cheyunnath then  ([A-Za-z0-9\-#_.]+) first part in like ashikmohan2000
// @([A-Za-z0-9\-])+ after part of @ like @gmail
// .([a-z]{2,3})(.[a-z]{2,3})?$ after the . part 
// and close with  /


let regex=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-])+.([a-z]{2,3})(.[a-z]{2,3})?$/     
function validate(){
if(regex.test(f.value)){
    error1.innerText='Email is valid';
    error1.style.color='green';
    return true;

}
else{
    error1.innerText='Email is invalid';
    error1.style.color='red';
    return false;

}
}