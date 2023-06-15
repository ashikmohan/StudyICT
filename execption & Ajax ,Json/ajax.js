
// syntax of ajax by on click in buttom the content in the txt file appear on webpage
function ajaxreq(){
    var x=new XMLHttpRequest();
    x.onreadystatechange=function(){
        if(x.readyState==4 && x.status==200){
            // document.getElementById("htxt").innerHTML=this.responseText;
            var data=JSON.parse(this.responseText);
            var output="";
            for(let i=0;i<data.length;i++){
                output +=`<li>${data[i].name}</li>`
            }
            document.getElementById('htxt').innerHTML=output;

        }
    }
    // x.open('GET','input.txt',true); ajax
     x.open('GET','data.json',true);
    x.send();
}
