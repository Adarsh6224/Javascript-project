function reg(){
    uname=reg_name.value,
    email=reg_email.value,
    phone=reg_phone.value,
    dob=reg_dob.value,
    pswd=reg_pswd.value;

    studentDetails={
        uname,
        email,
        phone,
        dob,
        pswd
    }

    if(email in localStorage){
        alert('account   already exist')
    }
    else{
        localStorage.setItem(email,JSON.stringify(studentDetails));
        alert("Account Created")
        window.location.href="stdlogin.html"
    }
}

    function stdlogin(){
        email=reg_email.value,
        pswd=reg_pswd.value;
    
        if(email in localStorage){
            studentDetails=JSON.parse(localStorage.getItem(email))
            if(pswd==studentDetails.pswd){
                alert("Log In Successfully");
                window.location.href="stdhome.html";
            }
            else{
                alert("Password Incorrect");
            }
            
            
        }
        else{
            alert("Profile not found");
        }
    }
    
