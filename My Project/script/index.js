
import navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

import footer from "../component/footer.js";

document.getElementById("footer").innerHTML=footer()

let TakeData= async()=>{
  // http://localhost:5002/api/data
     const url="https://ideakart1.herokuapp.com/api/data"
      try{
            let res= await fetch(url)

            let data= await res.json()
          appendData(data)
            console.log(data)
      }
      catch(err)
      {
        console.log(err)
      }
}

TakeData()



let appendData=(data)=>{

       data.map(function(el,index){
      
         let div=document.createElement("div")

         div.addEventListener("click",function(){

                ShowProduct(el,index)
         })

         let image=document.createElement("img")
           image.src=el.lazy

           let name=document.createElement("p")
           name.innerText=el.price;
          
           
           let price=document.createElement("p")
           price.innerText=el.price_text
           price.setAttribute("id","price")

           let div1=document.createElement("div")
           div1.setAttribute("id","div1")

           let div2=document.createElement("div")
           div2.setAttribute("class","div2")

           let div3=document.createElement("div")
           div3.setAttribute("class","div2")

           let view_more=document.createElement("p")
           view_more.innerText=el.hidden;
           view_more.setAttribute("id","view_more")

           let more_details=document.createElement("p")

           more_details.innerText=el.hidden_sm;
           more_details.setAttribute("id","view_more2")

          //  let top_read=document.getElementById("p")
          //  top_read.innerText="Top Read"
          //  top_read.setAttribute("id","top_read")

           div2.append(view_more)
           div3.append(more_details)
           div1.append(div2,div3)

           div.append(image,name,price,div1)

           document.getElementById("container").append(div)

      })
}
  let arr=JSON.parse(localStorage.getItem("ShowPoduct"))||[]
function ShowProduct(el,index){

      arr.push(el)

      console.log(arr)

      localStorage.setItem("ShowProduct",JSON.stringify(arr))
      window.location.href="ShowProduct.html"
}

