
 import navbar from "../component/navbar.js";

 document.getElementById("navbar").innerHTML=navbar()

//  import footer from "../component/footer.js";

// document.getElementById("footer").innerHTML=footer()


 let TakeProduct=JSON.parse(localStorage.getItem("ShowProduct"))

 console.log(TakeProduct)

TakeProduct.map(function(el,index){
      
    let maindiv=document.createElement("div")

    let div1=document.createElement("div")
     div1.setAttribute("id","div1")
     
     let div2=document.createElement("div")
     div2.setAttribute("id","div2")
     let div3= document.createElement("div")
     div3.setAttribute("id","div3")
     let div3_part=document.createElement("div")
     div3_part.setAttribute("id","div3_part")
     let showDiv=document.createElement("div")
     showDiv.setAttribute("id","showDiv")
      let ShowData=document.createElement("img")
      ShowData.src=el.lazy;
       
       let name=document.createElement("p")
       name.innerText=el.price
       name.setAttribute("id","name")
      let price=document.createElement("p")
      price.innerText=el.heading_1
      price.setAttribute("id","heading_1")
      let price1=document.createElement("p")
      price1.innerText=el.heading
      price1.setAttribute("id","heading")

      let PriceHeadingDiv=document.createElement("div")
       PriceHeadingDiv.setAttribute("id","PriceHedingdiv")
      let divP1=document.createElement("div")
      let divP2=document.createElement("div")
      let divP3=document.createElement("div")
      divP3.style.marginRight="80px"
     let store=document.createElement("p")
     store.innerText="Store"
     store.setAttribute("class","priceDiv")

     let ProPrice=document.createElement("p")
     ProPrice.innerText="Price"
     ProPrice.setAttribute("class","priceDiv")

     let Buy=document.createElement("p") 
     Buy.innerText="Buy Now"
     Buy.setAttribute("class","priceDiv")


     let PriceFinalDiv=document.createElement("div")
       PriceFinalDiv.setAttribute("id","PriceFinaldiv")
      let divP11=document.createElement("div")
      let divP22=document.createElement("div")
      divP22.setAttribute("id","div22")
      let divP33=document.createElement("div")
      divP33.setAttribute("id","div33")
     let store1=document.createElement("p")
     store1.innerText="Amazon, Paperback"
     store1.setAttribute("class","priceDiv2")

     let ProPrice1=document.createElement("p")
     ProPrice1.innerText=`RS: ${el.price_text}`
     ProPrice1.setAttribute("class","priceDiv2")

     let Buy1=document.createElement("p") 
     Buy1.innerText="Buy Now"
     Buy1.setAttribute("class","priceDiv2")
     Buy1.addEventListener("click",function(){

         BuyNow2(el,index)
     })

     divP1.append(store)
     divP2.append(ProPrice)
     divP3.append(Buy)

     PriceHeadingDiv.append(divP1,divP2,divP3)

     divP11.append(store1)
     divP22.append(ProPrice1)
     divP33.append(Buy1)

     PriceFinalDiv.append(divP11,divP22,divP33)
     
    //   <---right part Ended ---->
       let divRight=document.createElement("div")
       divRight.setAttribute("id","divRightF")
       let firstP=document.createElement("p")
       firstP.innerText="Buy it at best price from here"
       firstP.setAttribute("id","firstP")

        
         let divRight2=document.createElement("div")
         divRight2.setAttribute("id","divRight2")
         let divRight3=document.createElement("div")
         divRight3.setAttribute("class","divRight3")

         let divRight4=document.createElement("div")
         divRight4.setAttribute("class","divRight3")
         let rightPrice=document.createElement("p")
         rightPrice.innerText=`RS: ${el.price_text}`
         rightPrice.setAttribute("id","rightPrice")

         let rightBuy=document.createElement("p")
         rightBuy.innerText="Buy Now"
         rightBuy.setAttribute("id","rightBuy")
         rightBuy.addEventListener("click",function(){

            BuyNow(el,index)
         })

         let divRight5=document.createElement("div")
         divRight5.setAttribute("id","divRight5")
         let instant=document.createElement("p")
         instant.innerText="Get Instant Cashback when you pay using Amazon Pay... Click Here"
         instant.setAttribute("id","instant")
          
         divRight5.addEventListener("click",function(){

               SeeOffer(el,index)
         })

         let BookSpec=document.createElement("div")
          BookSpec.setAttribute("id","Bookspec")
          let sepcial=document.createElement("p")
          sepcial.innerText="Book Specification"
          sepcial.setAttribute("id","special")

      //   box1
            let divBS=document.createElement("div")
            divBS.setAttribute("id","divBS")
            let divBS1=document.createElement("div")
            divBS1.setAttribute("id","divBS1")
            let divBS2=document.createElement("div")
            divBS2.setAttribute("id","divBS2")

            let binding=document.createElement("p")
            binding.innerText="Binding"
            binding.setAttribute("class","p1")

            let p2=document.createElement("p");
            p2.innerText="Paperback"
            p2.setAttribute("class","p2")

//    box2
            let divBSa=document.createElement("div")
            divBSa.setAttribute("id","divBSa")
            let divBS11=document.createElement("div")
            divBS11.setAttribute("id","divBS11")
            let divBS22=document.createElement("div")
            divBS22.setAttribute("id","divBS22")

            let binding1=document.createElement("p")
            binding1.innerText="Language"
            binding1.setAttribute("class","p1")

            let p3=document.createElement("p");
            p3.innerText="ENGLISH"
            p3.setAttribute("class","p2")

            // box3
            let divBSb=document.createElement("div")
            divBSb.setAttribute("id","divBSb")
            let divBS12=document.createElement("div")
            let divBS23=document.createElement("div")
            let binding12=document.createElement("p")
            binding12.innerText="Number Of Pages"
            binding12.setAttribute("class","p1")

            let p4=document.createElement("p");
            p4.innerText="405"
            p4.setAttribute("class","p2")

            // box4
           
            let divBSc=document.createElement("div")
            divBSc.setAttribute("id","divBSc")
            let divBS13=document.createElement("div")
            let divBS24=document.createElement("div")
            let binding13=document.createElement("p")
            binding13.innerText="Author"
            binding13.setAttribute("class","p1")

            let p5=document.createElement("p");
            p5.innerText="N/A"
            p5.setAttribute("class","p3")

            // box5

            let divBSd=document.createElement("div")
            divBSd.setAttribute("id","divBSd")
            let divBS14=document.createElement("div")
            let divBS25=document.createElement("div")
            let binding14=document.createElement("p")
            binding14.innerText="Publisher"
            binding14.setAttribute("class","p1")

            let p6=document.createElement("p");
            p6.innerText="Ch Publications"
            p6.setAttribute("class","p3")
      
            divBS14.append(binding14)
            divBS25.append(p6)
            divBSd.append(binding14,p6)
    // box6

let divBSe=document.createElement("div")
divBSe.setAttribute("id","divBSe")
let divBS15=document.createElement("div")
let divBS26=document.createElement("div")
let binding15=document.createElement("p")
binding15.innerText="Isbn-10"
binding15.setAttribute("class","p1")

let p7=document.createElement("p");
p7.innerText="1950922138"
p7.setAttribute("class","p2")

divBS15.append(binding15)
divBS26.append(p7)
divBSe.append(binding15,p7)
         //box7
         let divBSf=document.createElement("div")
divBSf.setAttribute("id","divBSf")
let divBS16=document.createElement("div")
let divBS27=document.createElement("div")
let binding16=document.createElement("p")
binding16.innerText="Isbn-13"
binding16.setAttribute("class","p1")

let p8=document.createElement("p");
p8.innerText="9781950922130"
p8.setAttribute("class","p2")

divBS16.append(binding16)
divBS27.append(p8)
divBSf.append(binding16,p8)

//   box8
let divBSg=document.createElement("div")
divBSg.setAttribute("id","divBSg")
let divBS17=document.createElement("div")
let divBS28=document.createElement("div")
let binding17=document.createElement("p")
binding17.innerText="Dimension"
binding17.setAttribute("class","p1")

let p9=document.createElement("p");
p9.innerText="15.24*2.36*22.86"
p9.setAttribute("class","p2")

divBS17.append(binding17)
divBS28.append(p9)
divBSg.append(binding17,p9)
              

            divBS13.append(binding13)
            divBS24.append(p5)
            divBSc.append(binding13,p5)


            divBS12.append(binding12)
            divBS23.append(p4)
            divBSb.append(binding12,p4)

            divBS11.append(binding1)
            divBS22.append(p3)
            divBSa.append(binding1,p3)


            divBS1.append(binding)
            divBS2.append(p2)
            divBS.append(binding,p2)

            
           BookSpec.append(sepcial)


          divRight5.append(instant)
         divRight3.append(rightPrice)
         divRight4.append(rightBuy)
         divRight2.append(divRight3,divRight4)
       divRight.append(firstP)
      showDiv.append(ShowData)
      div2.append(showDiv,divRight,divRight2,divRight5,BookSpec,divBS,divBSa,divBSb,divBSc,divBSd,divBSe,divBSf,divBSg)
      div3.append(price1,price)
      div3_part.append(name,div3,PriceHeadingDiv,PriceFinalDiv)

      div1.append(div2,div3_part)
      maindiv.append(div1)

      document.getElementById("container").append(maindiv)
})

function SeeOffer(el,index){

      window.location.href="https://www.amazon.in/Cloud-Native-Applications-Java-microservice-based-cloud-native/dp/1787124347?SubscriptionId=AKIAIUO4VXYJFOFNWAEA&tag=httptopicerco-21&linkCode=xm2&camp=2025&creative=165953&creativeASIN=1787124347"
}

document.getElementById("button").addEventListener("click",myBtn)

function myBtn(){
   
      window.location.href="ShowProduct.html"

}

function  BuyNow(el,index)
{
      window.location.href="https://www.amazon.com/"
}

function  BuyNow2(el,index){

      window.location.href="https://www.amazon.com/"
}