var getData = JSON.parse(localStorage.getItem("rawData")) ;

getData.forEach(function(elem){

    const div1 = document.createElement('div');
    const i1 = document.createElement('i');
    i1.setAttribute("class","fa-solid fa-cart-shopping")
    const a1 = document.createElement('a');
    a1.innerText = "View Now" ;
    a1.setAttribute("href","../product_page/productPage.html")                  //add view now anchor tag    
    div1.append(i1,a1) ;
    a1.addEventListener("click",function(){
        productFunction(elem) ;
    })

    const div2 = document.createElement('div');
    const span = document.createElement('span');
    span.innerText = "|" ;
    div2.append(span) ;

    const div3 = document.createElement('div');
    const i3 = document.createElement('i');
    i3.setAttribute("class","fa-solid fa-list")
    const a3 = document.createElement('a');
    a3.innerText = "More details" ;
    a3.setAttribute("href","../product_page/productPage.html")                  //add More Details anchor tag
    div3.append(i3,a3) ;
    a3.addEventListener("click",function(){
        productFunction(elem) ;
    })

    const p1 = document.createElement('p');
    p1.innerText = elem.head1 ;

    const p2 = document.createElement('p');
    p2.innerText = elem.price ;

    const hr = document.createElement('hr');

    const div4 = document.createElement('div');
    div4.append(div1,div2,div3) ;

    const div5 = document.createElement('div');
    div5.setAttribute("class","nCol") ;
    div5.append(p1,p2,hr,div4) ;

    const image = document.createElement('img');
    image.setAttribute("src", elem.imgUrl) ;
    image.setAttribute("alt",elem.head1) ;

    const a2 = document.createElement('a');
    a2.append(image) ;
    a2.setAttribute("href","../product_page/productPage.html")            //Add Innerview Anchor
    a2.addEventListener("click",function(){
        productFunction(elem) ;
    })
    
    const div6 = document.createElement('div');
    div6.append(a2) ;

    const div7 = document.createElement('div');
    div7.setAttribute("class","box") ;
    div7.append(div6,div5) ;
    div7.addEventListener("mouseenter",function(){
        mEnter(div5) ;
    }) ;
    div7.addEventListener("mouseleave",function(){
        mLeave(div5) ;
    }) ;

    const div8 = document.createElement('div');
    div8.append(div7) ;

    document.querySelector("#container").append(div8) ;
}) ;

function mEnter(div5){
    div5.style.backgroundColor = "rgb(248,245,221)"
}
function mLeave(div5){
    div5.style.backgroundColor = "white" ;
}

function productFunction(elem){
    localStorage.setItem("products", JSON.stringify(elem)) ;
}