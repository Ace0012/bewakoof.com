



let g = (id) => {
    return document.getElementById(id)

}

const m = (el) => {
    return document.createElement(el)

}



   import { hover, navbar,loc,appe } from './navbar.js'
document.getElementById("navbar").innerHTML = navbar()
hover()
loc()
appe()


let data = JSON.parse(localStorage.getItem("loginName"))||[]
let inp = g("login")
let log = g("log").innerHTML
console.log(log)

let i;
g("btn").addEventListener("click",()=>{
   if(inp.value===null){
       alert("Plese fill all the reqiured field")
   }
   else{

 

       g("Conatiner").innerHTML = null;
       let h1 = m("h1")
       h1.innerText = "ENTER OTP HERE"
       let otp = Math.floor(Math.random()*10000)
       console.log(otp)
       let input = m("input")
       let btn = m("button")
       btn.innerText = "ENTER"
       let p=m("p")
       p.innerText = "Hi Ayush"
       let p2 = m("h4")
       p2.innerText = `Your Otp is :-",${otp}`
       
       
       btn.addEventListener("click",()=>{
           // log = "";
           console.log(log)
           if(input.value == otp){
               // window.location.href = "index.html"
               log=p
               console.log(log)
               
               localStorage.setItem("login",p.innerText)
               console.log(data)
               window.location.href = "./index.html"
               
               
               
               
            }
            else{
                localStorage.removeItem("login")
        window.location.reload()
        
    }


   
})

g("Conatiner").append(h1,input,btn,p2)
   }



})





