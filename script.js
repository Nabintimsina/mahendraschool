
function validationform(){
    var a= document.forms["myform"]['fname'].value;
    var b= document.forms["myform"]["lname"].value;
    var c = document.forms["myform"]["email"].value;
    var d= document.forms["myform"]["phone"].value;
    var e= document.forms["myform"]["message"].value;

   
    if(d==""|| a==""|| b=="" || c=="" || e=="" )  
    {
        alert("All Required field  must be filled");
        return false;
    }
}


