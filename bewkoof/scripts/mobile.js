const g = (id) => {
    return document.getElementById(id)

}

const m = (el) => {
    return document.createElement(el)

}
import { hover, navbar,appe } from './navbar.js'
g("navbar").innerHTML = navbar()
hover()
// loc()
appe()
import footer from './footer.js'
g("footer").innerHTML = footer()
let slider = [{
    url: "https://images.bewakoof.com/uploads/grid/app/1x1Banner-static-shoes-1651235308.gif"

},

{
    url: "https://images.bewakoof.com/uploads/grid/app/Sweet-Summer-Common-1651757016.jpg"

},
{
    url: "https://images.bewakoof.com/uploads/grid/app/Mobile-Covers-Static-Banner-720X720px-1651237585.jpg"

},


]


slider.forEach((el, index) => {
    if (index < 3) {

        let div = m("div")
        div.setAttribute("class", "img_box")
        let img = m("img")
        img.setAttribute("class", "images")


        img.src = el.url
        div.append(img)
        g("slider").append(div)

    }
})
// console.log(slider)
let i = 0,
    j = 1,
    k = 2


let slideShow = () => {
    let div = m("div")
    let div1 = m("div")
    let div2 = m("div")


    let img1 = m('img'),
        img2 = m("img"),
        img3 = m("img")
    setInterval(() => {


        if (i == slider.length) {
            i = 0
        }

        if (j == slider.length) {
            j = 0
        }

        if (k == slider.length) {
            k = 0
        }

        g("slider").innerHTML = null;
        img1.src = slider[i].url
        img2.src = slider[j].url

        img3.src = slider[k].url
        // console.log(img1)
        // console.log(i)
        div.append(img1)
        div1.append(img2)
        div2.append(img3)
        g("slider").append(div, div1, div2)

        i++
        j++
        k++
    }, 2000)



    // document.getElementsByClassName("images").style.display = "none"
    // document.getElementsByClassName("img_box").append(div)

}


slideShow()

let img99 = [{
    url: "https://images.bewakoof.com/t320/brooklyn-nyc-lines-lightweight-adjustable-strap-men-slider-333620-1641198633-1.jpg"
},
{
    url: "https://images.bewakoof.com/t320/sliding-bat-lightweight-adjustable-strap-men-slider-367177-1640357910-1.jpg"
},
{
    url: "https://images.bewakoof.com/t320/steel-blue-plain-small-backpack-229482-1644581542-1.jpg"

},

{
    url: "https://images.bewakoof.com/t320/pride-lightweight-adjustable-strap-mens-slider-361104-1638711646-1.jpg"
},
{
    url: "https://images.bewakoof.com/t320/melting-deadpool-lightweight-adjustable-strap-men-s-slider-dpl-352228-1640357878-1.jpg"
},
{
    url: "https://images.bewakoof.com/t320/cheeky-goofy-lightweight-adjustable-strap-women-343782-1637843162-1.jpg"
},
{
    url: "https://images.bewakoof.com/t320/men-s-black-striped-sliders-489609-1649425869-1.jpg"
}
,
{
    url: "https://images.bewakoof.com/t540/spidey-lightweight-adjustable-strap-men-slider-ffhl-333645-1641198689-1.jpg"
}
,
{
    url: "https://images.bewakoof.com/t540/gamers-printed-lightweight-adjustable-strap-men-slider-324768-1641198884-1.jpg"
},
{
    url: "https://images.bewakoof.com/t320/ride-with-pride-notebooks-soft-bound-notebook-367169-1626875340.jpg"
}

]

img99.forEach((el, index) => {
    if (index < 5) {

        let div = m("div")
        let img = m("img")
        let b = m("b")
        let p = m("p")
        let c = m("p")
        img.src = el.url
        p.innerText = "499"
        c.innerText = "999"
        c.setAttribute("class", "cutoff")
        p.setAttribute("class", "orbit")
        c.style.marginTop = "-10%"
        b.append(img, p, c)
        div.append(b)
        g("bestSeller").append(div)

        g("previous").addEventListener("click", () => {
            btn_slider(slider)

        })
        g("next").addEventListener("click", () => {
            next_slider()
        })

    }

})

let h = 0
let r = 1
let t = 2
let y = 3
let u = 4
let btn_slider = () => {
    g("bestSeller").innerHTML = null


    let img = m("img")
    let img1 = m("img")
    let img2 = m("img")
    let img3 = m("img")
    let img4 = m("img")

    let div = m("div")
    let div1 = m("div")

    let div2 = m("div")

    let div3 = m("div")

    let div4 = m("div")

    let p = m("p")
    let p1 = m("p")
    let p2 = m("p")
    let p3 = m("p")
    let p4 = m("p")

    let c = m("p")
    let c1 = m("p")
    let c2 = m("p")
    let c3 = m("p")
    let c4 = m("p")

    // let img1 = document.createElement("img")
    // let img2= document.createElement("img")
    // let img3 = document.createElement("img")
    // let img4 = document.createElement("img")
    // let img5 = document.createElement("img")


    let b = m("b")
    let b1 = m("b")
    let b2 = m("b")
    let b3 = m("b")
    let b4 = m("b")


    if (h == 0) {
        h = img99.length;


    }
    h--;
    console.log(h)


    if (r == 0) {

        r = img99.length;
    }
    r--
    console.log(r)

    if (t == 0) {
        t = img99.length;


    }
    t--
    console.log(t)
    if (y == 0) {
        y = img99.length;
    }
    y--
    console.log(y)
    if (u == 0) {
        u = img99.length;
    }
    u--
    console.log(u)


    img.src = img99[h].url
    img1.src = img99[r].url
    img2.src = img99[t].url
    img3.src = img99[y].url
    img4.src = img99[u].url
    // console.log(index)
    p1.innerText = "499"
    p2.innerText = "499"
    p3.innerText = "499"
    p4.innerText = "499"
    p.innerText = "499"

    p.setAttribute("class", "orbit")
    p1.setAttribute("class", "orbit")
    p2.setAttribute("class", "orbit")
    p3.setAttribute("class", "orbit")
    p4.setAttribute("class", "orbit")

    c1.innerText = "999"
    c2.innerText = "999"
    c3.innerText = "999"
    c4.innerText = "999"
    c.innerText = "999"
    c.setAttribute("class","cutoff")
    c1.setAttribute("class","cutoff")
    c2.setAttribute("class","cutoff")
    c3.setAttribute("class","cutoff")
    c4.setAttribute("class","cutoff")
b.append(img,p,c)
b1.append(img1,p1,c1)
b2.append(img2,p2,c2)
b3.append(img3,p3,c3)
b4.append(img4,p4,c4)
div.append(b)

    div1.append(b1)
    div2.append(b2)
    div3.append(b3)
    div4.append(b4)





    g("bestSeller").append(div,div1,div2,div3,div4)

}



let next_slider = ()=>{
    
    g("bestSeller").innerHTML = null


    let img = m("img")
    let img1 = m("img")
    let img2 = m("img")
    let img3 = m("img")
    let img4 = m("img")

    let div = m("div")
    let div1 = m("div")

    let div2 = m("div")

    let div3 = m("div")

    let div4 = m("div")

    let p = m("p")
    let p1 = m("p")
    let p2 = m("p")
    let p3 = m("p")
    let p4 = m("p")

    let c = m("p")
    let c1 = m("p")
    let c2 = m("p")
    let c3 = m("p")
    let c4 = m("p")

    // let img1 = document.createElement("img")
    // let img2= document.createElement("img")
    // let img3 = document.createElement("img")
    // let img4 = document.createElement("img")
    // let img5 = document.createElement("img")


    let b = m("b")
    let b1 = m("b")
    let b2 = m("b")
    let b3 = m("b")
    let b4 = m("b")


    if (h == img99.length-1) {
        h = 0;


    }
    h++
    console.log(h)


    if (r == img99.length-1) {

        r = 0;
    }
    r++
    console.log(r)

    if (t == img99.length-1) {
        t = 0;


    }
    t++
    console.log(t)
    if (y == img99.length-1) {
        y = 0;
    }
    y++
    console.log(y)
    if (u == img99.length-1) {
        u = 0;
    }
    u++
    console.log(u)


    img.src = img99[h].url
    img1.src = img99[r].url
    img2.src = img99[t].url
    img3.src = img99[y].url
    img4.src = img99[u].url
    // console.log(index)
    p1.innerText = "499"
    p2.innerText = "499"
    p3.innerText = "499"
    p4.innerText = "499"
    p.innerText = "499"

    p.setAttribute("class", "orbit")
    p1.setAttribute("class", "orbit")
    p2.setAttribute("class", "orbit")
    p3.setAttribute("class", "orbit")
    p4.setAttribute("class", "orbit")

    c1.innerText = "999"
    c2.innerText = "999"
    c3.innerText = "999"
    c4.innerText = "999"
    c.innerText = "999"
    c.setAttribute("class","cutoff")
    c1.setAttribute("class","cutoff")
    c2.setAttribute("class","cutoff")
    c3.setAttribute("class","cutoff")
    c4.setAttribute("class","cutoff")
b.append(img,p,c)
b1.append(img1,p1,c1)
b2.append(img2,p2,c2)
b3.append(img3,p3,c3)
b4.append(img4,p4,c4)
div.append(b)

    div1.append(b1)
    div2.append(b2)
    div3.append(b3)
    div4.append(b4)





    g("bestSeller").append(div,div1,div2,div3,div4)
}


let images = ["https://images.bewakoof.com/uploads/grid/app/ezgif-com-gif-maker--1--1651324109.gif","https://images.bewakoof.com/uploads/grid/app/1x1Banner-static-Backpack-low-1646747551.gif","https://images.bewakoof.com/uploads/grid/app/1x1Banner-static-Backpack-low-1646747551.gif"]


let anotherSlider = ()=>{
    g("another").innerHTML = null;
    let img1  = document.createElement("img")
    let img2  = document.createElement("img")
    let img3  = document.createElement("img")
    let i = 0;
    let j = 1
    let k = 2
   
        
    setInterval(()=>{
    if(i==images.length){
        i=0
    }
    if(j==images.length){
        j=0
    }
    if(k==images.length){
        k=0
    }
    
    img1.src=images[i]
    img2.src = images[j]
    img3.src = images[k]
    
    g("another").append(img1,img2,img3)
    i++
    j++
    k++
    
    },1800)
    
    

    }
    anotherSlider()
    g("subs").addEventListener("click",()=>{
        if(g("inp").value!==""){
            g("user").innerText = "User Subscribed"
            g("user").style.color = "cyan"
        }
        else{
            g("user").innerText = "Enter email first"
            g("user").style.color = "cyan"
        }
    
        
    })