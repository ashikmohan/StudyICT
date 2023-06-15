
// syntax of execption try catch throw finally
function check(){
    var c =document.getElementById('number').value;
    var msg =document.getElementById('msg');
    msg.innerHTML="";
    try {
        if(c=="")throw "box cannot be empty"   
        if(isNaN(c)) throw "enterd value is not a number"
        if(c<10) throw "too low"
        if(c>20) throw "too high"
    } catch (error) {
        msg.innerHTML=error
    }
    finally{
        document.getElementById("number").value =""
    }
}