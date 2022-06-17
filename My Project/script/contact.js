
import navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

import footer from "../component/footer.js";

document.getElementById("footer").innerHTML=footer()


// document.getElementById("form").addEventListener("submit",submitForm)


// function Data(f,l,e,n,t){

//     this.firstname=f;
//     this.lastName=l;
//     this.email=e;
//     this.number=n;
//     this.text=t;
// }

// let arr=[]
// function dataForm(event)
// {

//     event.preventDefault(e);
    // let first=document.getElementById("firstName").value;

    // console.log(first)

    // let lastName=document.getElementById("lastName").value;

    // let email=document.getElementById("email").value;

    // let number=document.getElementById("number").value;

    // let text=document.getElementById("textArea").value;
    
    // let d= new Data(firstname,lastName,email,number,text)

    // console.log(d)

    // arr.push(d)
    // console.log(arr)
    // alert("yoy submitt")

//     alert("Yes Done")
// }

// // submitForm()
// // dataForm()

document.getElementById("button").addEventListener("click",myFun)


function myFun(){
    // event.preventDefault()
    let query =document.getElementById("firstName").value

    console.log(query)

    alert("Thank You! Your form has been submitted.")
}

