let g = (id) => {
    return document.getElementById(id)

}

const m = (el) => {
    return document.createElement(el)

}



import { hover, navbar, loc, appe } from './navbar.js'
document.getElementById("navbar").innerHTML = navbar()
hover()
loc()
appe()
import footer from './footer.js'
g("footer").innerHTML = footer()
g("subs").addEventListener("click", () => {
    if (g("inp").value !== "") {
        g("user").innerText = "User Subscribed"
        g("user").style.color = "cyan"
    }
    else {
        g("user").innerText = "Enter email first"
        g("user").style.color = "cyan"
    }


})


let data = JSON.parse(localStorage.getItem("img"))||[]
data.forEach((el,index)=>{
    let div = m("div")
    let img = m("img")
    img.src = data[index]
    img.style.marginTop = "10%"
    
    let p = m("p")
    p.innerText = "T-shirts for Men"
     let price = m("p")
     price.innerText = "799"
     let btn = m("btn")
     btn.innerText = "Buy Now"
     btn.style.background = "teal"
     btn.addEventListener("click",()=>{
        window.location.href = "./buyNow.html"

     })
    div.append(img,p,price,btn)
    g("data").append(div)

    
})

console.log(data)
