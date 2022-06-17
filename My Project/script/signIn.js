import navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

import footer from "../component/footer.js";

document.getElementById("footer").innerHTML=footer()



let takeData=JSON.parse(localStorage.getItem("user_data"))

console.log(takeData)

document.getElementById("btn").addEventListener('click',LoginFun)

function LoginFun()
{
    let email= document.getElementById("input2").value;

    let pass=document.getElementById("input3").value;

    // console.log(email)
    // alert("login")

    for(let i=0;i<takeData.length;i++)
    {

        // console.log(takeData[i])
        if(takeData[i].lastName==email && takeData[i].text===pass)
        {
            alert("Login Successful")

            window.location.href="index.html"
        }
        else
        {
            alert("Invaild Creditinal")
        }
    }
}