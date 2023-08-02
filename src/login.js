//mail id: x@xx.com
//password: xxxxxxxx

function lgn(){
    mailid=document.forms["login"]["mailid"];
    pass=document.forms["login"]["pass"];

    if (mailid.value==""){
        alert("Enter mail address");
        mailid.focus();
        return false;
    }

    else if (pass.value==""){
        alert("Enter password");
        pass.focus();
        return false;
    }

    else if (mailid.value=="x@xx.com" && pass.value=="xxxxxxxx"){
        alert("Valid");
        return true;
    }

    else {
        alert("Not valid");
        return false;
    }
}