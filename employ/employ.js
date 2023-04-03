function addEmp(){
    employ={
        id:empid.value,
        name:empname.value,
        designation:empdes.value,
        location:emploc.value,
        salary:empsal.value,
        experience:empexp.value
    }
    if(employ.id in localStorage){
        alert("Data already exist")
    }
    else{
        localStorage.setItem(employ.id,JSON.stringify(employ))
        alert("Data added successfully")
    }
}

function check(){
    key=searchId.value;

    if(key in localStorage){
        employ=JSON.parse(localStorage.getItem(key));
        result.innerHTML=`Employ name ${employ.name}`
    }
    else{
        result.innerHTML=""
        alert("User not found";)
    }
}