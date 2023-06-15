let Na =document.getElementById('Name');
let phone =document.getElementById('num');
let pass =document.getElementById('Pass');
let error1 = document.getElementById('er1');
let error2 = document.getElementById('er2');
let error3 = document.getElementById('er3');



// function validation(){
//     if(Name.value==""||phone.value==""){
//         return false;
//         alert("fields are empty");

//     }
//     else{

//         return true;
//         alert("confirm submition")
//     }
    
// }
let regex=/^([A-Za-z])/
function validation(){
    if(regex.test(Na.value)){
        error1.innerText='Name is Valid';
        error1.style.color ='green'
        return true;

    }
    else{
        error1.innerText='Name is invalid';
        error1.style.color='red';
        return false;
    
    }
}
let ab=/^([0-9])/
function mohan(){
    if(ab.test(phone.value)){
        error2.innerText='Number is Valid';
        error2.style.color ='green'
        return true;

    }
    else{
        error2.innerText='Number is invalid';
        error2.style.color='red';
        return false;
    
    }
}

let pas=/^([A-Za-z0-9])/
function ashik(){
    if(pas.test(pass.value)){
        error3.innerText='Password is Valid';
        error3.style.color ='green';
        return true;

    }
    else{
        error3.innerText='Password is invalid';
        error3.style.color='red';
        return false;
    
    }
}