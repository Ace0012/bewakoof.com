const g = (id)=>{
    return document.getElementById(id)

}

import {hover,navbar,appe,loc} from './navbar.js'


document.getElementById("navbar").innerHTML = navbar()
loc()
appe()
hover()

import footer from './footer.js'
g("footer").innerHTML = footer()



g("slider").addEventListener("mouseenter",()=>{
    slider()
})

let id;
let i =0;
let j = 1
let k =2;

let slider = ()=>{
    let img = [g("fst").src,g("scn").src,g("thr").src,g("for").src,g("fiv").src]
let img2 = document.createElement("img")
let img3 = document.createElement("img")
let img4 = document.createElement("img")
setInterval(function(){
    if(i == img.length ){
       
    
        i=0;
        
    }
    if(j==img.length){
        j=0
    }
    if(k==img.length){
        k=0
    }
    g("slider").innerHTML = null;
    img2.src = img[i]
    
    img3.src = img[j]
    img4.src = img[k]


    img2.style.height = "500px"
    img2.style.width = "500px"
    img3.style.height = "500px"
    img3.style.width = "500px"
    img4.style.height = "500px"
    img4.style.width = "500px"

    // img2.style.marginLeft = "7px"
img3.style.marginLeft = "20px"
img4.style.marginLeft = "20px"

img2.style.marginTop = "10%"
img3.style.marginTop = "10%"
img4.style.marginTop = "10%"


    g("slider").append(img2,img3,img4)
    i++
    j++
    k++


},3000)
}


let obj ={
    0:"https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-best-seller-1637307127.jpg",
    1:"https://images.bewakoof.com/uploads/grid/app/WhatsApp-Video-2022-01-29-at-14-06-03-1643446784.gif",
    2:"https://images.bewakoof.com/uploads/grid/app/CUSTOMISE-thumbnail-1644818150.jpg",
    3:"https://images.bewakoof.com/uploads/grid/app/vote-for-design-1641715844.jpg",
    4:"https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-plus-size-1637307128.jpg",
    5:"https://images.bewakoof.com/uploads/grid/app/merch-store-thumbnail-1650381435.jpg",
    6:"https://images.bewakoof.com/uploads/grid/app/coke-x-bwkf-thumbnail--1--1645602489.jpg",
    7:"https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-new-arrival-1637307130.jpg",
    8:"https://images.bewakoof.com/uploads/grid/app/PersonalCare-Thumbnail-1647932750.jpg",


}
console.log(obj)
// g("left").addEventListener("click" ,()=>{
//     if(i ==8){
//        i =0 
//     }
//     let id;
//     id = setInterval(()=>{
//       img.src = obj2[i]
//       div.append(img)
//       g("show2").append(div)
//       i++
//     },1000)
// });






// let obj2  =[
//     "https://images.bewakoof.com/t320/love-and-thunder-half-sleeve-t-shirt-495475-1651249236-1.jpg",
    
//     "https://images.bewakoof.com/t320/hogwarts-gshr-half-sleeve-t-shirt-495682-1651472745-1.jpg",
//     "https://images.bewakoof.com/t320/men-s-sun-kissed-green-camo-oversized-fit-t-shirt-493011-1651504445-1.jpg",
//     "https://images.bewakoof.com/t320/hell-no-monday-half-sleeve-t-shirt-navy-blue-343973-1632151924-5.jpg",
//     "https://images.bewakoof.com/t320/white-long-sleeve-henley-t-shirt-405278-1646674135-1.jpg",
//     "https://images.bewakoof.com/t320/can-t-control-half-sleeve-t-shirt-495473-1651249258-1.jpg",
//     "https://images.bewakoof.com/t320/men-s-sun-kissed-green-marble-printed-oversized-fit-t-shirt-493012-1651504533-1.jpg",
//     "https://images.bewakoof.com/t320/one-with-the-universe-half-sleeve-t-shirt-483037-1648223173-1.jpg"]

//     console.log(obj2)



//     g("btn1").addEventListener("click",()=>{

//         previous()
//     })
    
//     g("btn2").addEventListener("click",()=>{
//         next()
//     })


// let p=0;

//     for(let i =0;i<obj2.length;i++){

//         console.log(obj[i])
//         let div = document.createElement("div")
        
//         let img = document.createElement("img")
//         img.setAttribute("id","image")
//        img.src = obj2[i]

  
    

//     div.append(img)
//     g("img-box").append(div)
       
//       }



    //   let previous = ()=>{

    //     if(p==0){
    //         img.src = obj2[obj2.length-1]
    //     div.append(img)
    //     g("img-box").append(div)
    //     }
    // }


    let one = g("one").src;
    let two = g("two").src;
    let three = g("three").src;
    let four = g("four").src;
    let five = g("five").src
// let p1 = 299;
// p1.setAttribute("class","rate")

// let c1 = 999;



let obj2  =[one,two,three,four,five,
       
        "https://images.bewakoof.com/t320/can-t-control-half-sleeve-t-shirt-495473-1651249258-1.jpg",
        "https://images.bewakoof.com/t320/men-s-sun-kissed-green-marble-printed-oversized-fit-t-shirt-493012-1651504533-1.jpg",
        "https://images.bewakoof.com/t320/one-with-the-universe-half-sleeve-t-shirt-483037-1648223173-1.jpg"]



        g("prev").addEventListener("click",()=>{

previous()
})

g("next").addEventListener("click",()=>{
next()
})
let ii = 0;
    let jj = 1;
    let kk = 2;
    let ll = 3;
    let mm = 4;
let next = ()=>{
    g("img_box").innerHTML =  null
    let img1 = document.createElement("img")
    let img2= document.createElement("img")
    let img3 = document.createElement("img")
    let img4 = document.createElement("img")
    let img5 = document.createElement("img")

if(ii==obj2.length-1){
    ii=0;
   

}
ii++;
console.log(i)


if(jj==obj2.length-1){

    jj=0;
}
jj++
console.log(j)

if(kk==obj2.length-1){
    kk=0;
}
kk++
if(ll==obj2.length-1){
   ll =0;
}
ll++
if(mm==obj2.length-1){
   mm =0;
}
mm++


 img1.src= obj2[ii]


img2.src = obj2[jj]


img3.src = obj2[kk]
img4.src = obj2[ll]



img5.src = obj2[mm]






g("img_box").append(img1,img2,img3,img4,img5)

}

let h = 0
let r = 1
let t = 2
let y = 3
let u = 4

let previous = ()=>{
    g("img_box").innerHTML =  null
    let img1 = document.createElement("img")
    let img2= document.createElement("img")
    let img3 = document.createElement("img")
    let img4 = document.createElement("img")
    let img5 = document.createElement("img")

if(h==0){
    h=obj2.length;
   

}
h--;
console.log(h)


if(r==0){

    r=obj2.length;
}
r--
console.log(r)

if(t==0){
    t=obj2.length;


}
t--
console.log(t)
if(y==0){
   y =obj2.length;
}
y--
console.log(y)
if(u==0){
   u =obj2.length;
}
u--
console.log(u)


 img1.src= obj2[h]


img2.src = obj2[r]


img3.src = obj2[t]
img4.src = obj2[y]



img5.src = obj2[u]






g("img_box").append(img1,img2,img3,img4,img5)
}

let images = ["https://images.bewakoof.com/uploads/grid/app/DOTD-Homepage-Men-new-1651479092.jpg","https://images.bewakoof.com/uploads/grid/app/1x1Banner-static-OfficialMerch-characters2-1651235308.jpg","https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-New-Printed-Tshirts-Men-1651638288.jpg"]
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
g("showData").addEventListener("click",()=>{
    window.location.href =  "./product.html"
})

      





