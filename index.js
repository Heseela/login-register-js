function login(){
    let ab=document.getElementById('login')
     
     if (ab.style.transform==="translateY(1%)"){
        ab.style.transform="translateY(-1000%)"
     }else{
        ab.style.transform="translateY(1%)"
     }
}

function register(){
    let cd=document.getElementById('register')
    if (cd.style.transform==="translateY(1%)"){
        cd.style.transform="translateY(-1000%)"
    }else{
        cd.style.transform="translateY(1%)"
    }
}
