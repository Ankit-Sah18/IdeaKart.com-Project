import navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

import footer from "../component/footer.js";

document.getElementById("footer").innerHTML=footer()





document.getElementById("btn").addEventListener("click",submitForm)


function Data(f,l,e,n,t){

    this.name=f;
    this.email=l;
    this.number=e;
    this.pass=n;
    this.pass2=t;;
}

let arr=JSON.parse(localStorage.getItem("user_data"))||[]
function submitForm(event)
{

   
    let name=document.getElementById("name").value;

   

    let email=document.getElementById("email").value;

    let number=document.getElementById("mobile").value;

    let pass=document.getElementById("pass1").value;

    let pass2=document.getElementById("pass2").value;
    
    let d= new Data(name,email,number,pass,pass2)

    console.log(d)

    arr.push(d)
    console.log(arr)

    localStorage.setItem("user_data",JSON.stringify(arr))

    window.location.href="signIn.html"
    
}