let em = document.getElementById("email");
        let pas = document.getElementById("pas");

        // function vali(){
        //     if(em.value==""||pas.value ==""){
        //         alert("fields cannot be empty");
        //         return false;
        //     }
        // else{
        //     return true;
        // }
        // }

        // function vali(){
        //     if(em.value==""){
        //         alert("email cannot be empty");
        //         return false;
        //     }
        //     else if(pas.value==""){
        //         alert("password cannot be empty");
        //         return false;
        //     }
        //     else if(pas.value.length<5){
        //         alert("password is too short");
        //         pas.style.boder="2px solid red";
        //         return false;
        //     }
        //     else{
        //         return true;
        //     }
        // }

        // trim function

        function vali(){
                if(em.value.trim()==""||pas.value.trim() ==""){
                    alert("fields cannot be empty");
                    return false;
                }
            else{
                return true;
            }
            }

    