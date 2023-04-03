


function reg(){
    uname=reg_name.value,
    acno=reg_acno.value,
    pswd=reg_pswd.value,
    balance=5000;


accountDetails={
    uname,
    acno,
    pswd
}

if(acno in localStorage){
    alert('account   already exist')
}
else{
    localStorage.setItem(acno,JSON.stringify(accountDetails));
    alert("Account Created")
    window.location.href="loginpage.html"
}

}

// login

function login(){
    acno=reg_acno.value;
    pswd=reg_pswd.value;

    if(acno in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(acno))
        if(pswd==accountDetails.pswd){
            alert("Log In Successfully");
            window.location.href="home.html";
        }
        else{
            alert("Password Incorrect");
        }
        
        
    }
    else{
        alert("Accont not found");
    }
}