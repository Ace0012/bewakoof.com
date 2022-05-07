
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

g("cate").addEventListener("click", () => {
    g("item").style.display = "grid"
    g("sizIte").style.display = "none"
})

g("size").addEventListener("click", () => {
    g("sizIte").style.display = "grid"
    g("item").style.display = "none"
    g("brandIte").style.display = "none"

})

g("brand").addEventListener("click", () => {
    g("brandIte").style.display = "grid"
    g("sizIte").style.display = "none"

    g("item").style.display = "none"
})
g("color").addEventListener("click", () => {

    g("coloIte").style.display = "grid"
    g("brandIte").style.display = "none"
    g("sizIte").style.display = "none"

    g("item").style.display = "none"
})
g("design").addEventListener("click", () => {

    g("designIte").style.display = "grid"
    g("coloIte").style.display = "none"
    g("brandIte").style.display = "none"
    g("sizIte").style.display = "none"

    g("item").style.display = "none"
})
g("fit").addEventListener("click", () => {

    g("fitIte").style.display = "grid"
    g("designIte").style.display = "none"
    g("coloIte").style.display = "none"
    g("brandIte").style.display = "none"
    g("sizIte").style.display = "none"

    g("item").style.display = "none"
})

g("sleeve").addEventListener("click", () => {

    g("sleIte").style.display = "grid"
    g("fitIte").style.display = "none"
    g("designIte").style.display = "none"
    g("coloIte").style.display = "none"
    g("brandIte").style.display = "none"
    g("sizIte").style.display = "none"

    g("item").style.display = "none"
})


g("neck").addEventListener("click", () => {
    g("nckIte").style.display = "grid"
    g("sleIte").style.display = "none"
    g("fitIte").style.display = "none"
    g("designIte").style.display = "none"
    g("coloIte").style.display = "none"
    g("brandIte").style.display = "none"
    g("sizIte").style.display = "none"

    g("item").style.display = "none"
})


let menData = () => {
    let data = [{
        url: "https://images.bewakoof.com/t320/men-s-birthday-yellow-stripe-t-shirt-479982-1648642419-1.jpg"
    },
    {
        url: "https://images.bewakoof.com/t320/avengers-broken-logo-452021-1644924504-1.jpg"
    },
    {
        url: "https://images.bewakoof.com/t320/3-spiders-480289-1648150837-1.jpg"
    },
    {
        url: "https://images.bewakoof.com/t320/jasmin-green-white-vertical-half-sleeves-stripe-t-shirt-473125-1645888763-1.jpg"
    },
    {
        url: "https://images.bewakoof.com/t320/pageant-blue-long-sleeve-henley-t-shirt-405302-1643284437-1.jpg"
    },
    {
        url: "https://images.bewakoof.com/t320/men-s-white-solid-polo-t-shirt-443183-1649996647-1.jpg"
    },
    {
        url: "https://images.bewakoof.com/t320/coca-cola-wave-461549-1645165548-1.jpg"
    },
    {
        url: "https://images.bewakoof.com/t320/customizable-black-printed-round-neck-t-shirt-443960-1645623796-1.jpg"
    },
    {
        url: "https://images.bewakoof.com/t320/black-crewneck-varsity-rib-half-sleeves-t-shirt-men-s-plain-crewneck-varsity-rib-h-s-t-shirt-272304-1596190917.jpg"
    },
    {
        url: "https://images.bewakoof.com/t320/orchid-petal-long-sleeve-henley-t-shirt-405285-1643284676-1.jpg"
    },
    {
        url: "https://images.bewakoof.com/t320/meteor-grey-long-sleeve-henley-t-shirt-405284-1641471599-1.jpg"
    },
    {
        url: "https://images.bewakoof.com/t320/hola-peter-480294-1648531157-1.jpg"
    },
    {
        url: "https://images.bewakoof.com/t320/pop-hope-full-sleeve-t-shirt-white-300989-1637855403-1.jpg"
    },

    ]


    data.forEach((el,index)=>{
        let div = m("div")
        let img = m("img")
        img.src = el.url
        let p = m("p")
        p.innerText = "T-Shirts for Men"
        let price = m("p")
        price .innerText = "799"
        let btn = m("button")
        btn.innerText = "Add To Cart"
btn.style.width = "90%"
btn.style.marginBottom = "3%"
btn.style.background = "teal"
btn.style.border = "none"
btn.style.outline = "none"

let arr = []
btn.addEventListener("click",()=>{

 arr.push(img.src)

   localStorage.setItem("img",JSON.stringify(arr));
   window.location.href = "addTocart.html";
    })

div.append(img,p,price,btn)
g("products").append(div)
    })
}
menData()



