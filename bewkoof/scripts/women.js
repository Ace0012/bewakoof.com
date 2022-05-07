const g = (id) => {
    return document.getElementById(id)

}

const m = (el) => {
    return document.createElement(el)

}
import { hover, navbar,appe } from './navbar.js'

g("navbar").innerHTML = navbar()
appe()
hover()
import footer from './footer.js'
g("footer").innerHTML = footer()
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


let slider = [{
    url: "https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Printed-Tshirts-Women-2-1651235315.jpg"

},

{
    url: "https://images.bewakoof.com/uploads/grid/app/1x1-boyfriendtees-w-1651235305.jpg"

},
{
    url: "https://images.bewakoof.com/uploads/grid/app/1x1-buy2fr599-w-1651329455.jpg"

},
{
    url: "https://images.bewakoof.com/uploads/grid/app/1x1-sweet-summer-treats-w-1651578693.jpg"
}

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
    url: "https://images.bewakoof.com/t320/purple-portion-dark-sapphire-layer-cut-n-sew-sleeve-t-shirt-447911-1641389961-1.jpg"
},
{
    url: "https://images.bewakoof.com/t320/women-s-sun-kissed-green-camo-relaxed-fit-t-shirt-493030-1651504391-1.jpg"
},
{
    url: "https://images.bewakoof.com/t320/the-force-boyfriend-t-shirt-495857-1651647786-1.jpg"

},
{
    url: "https://images.bewakoof.com/t320/slay-all-day-boyfriend-t-shirt-495996-1651736850-1.jpg"
},
{
    url: "https://images.bewakoof.com/t320/baby-yoda-boyfriend-t-shirt-495856-1651647686-1.jpg"
},
{
    url: "https://images.bewakoof.com/t320/summer-paradise-oversized-fit-t-shirt-495681-1651502583-1.jpg"
},
{
    url: "https://images.bewakoof.com/t320/been-there-2-0-boyfriend-t-shirt-482683-1648181861-1.jpg"
},
{
    url: "https://images.bewakoof.com/t320/baby-yoda-oversized-fit-t-shirt-495860-1651647711-1.jpg"
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

let images = ["https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Kurtis-Women-1651235314.jpg","https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-New-Printed-Tshirts-Women-1651638288.jpg","https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-Printed-Tshirts-Women-2-1651235315.jpg"]
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