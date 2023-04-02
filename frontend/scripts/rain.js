let main = document.getElementById('product')
let selectel=document.getElementById('selected')
let fifty=document.getElementById('fifty')
let hun=document.getElementById('hun')
let one=document.getElementById('over')
let xxs=document.getElementById('xxs')
let xs=document.getElementById('xs')
let s=document.getElementById('s')
let m=document.getElementById('m')
let l=document.getElementById('l')
let xl=document.getElementById('xl')
// let cartarr=[]

let curUSr = JSON.parse(localStorage.getItem("current-user"))||[]


let fetched=[]
fetch("https://inquisitive-pink-mackerel.cyclic.app/rain")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
    fetched=data
    display(data)
})
.catch((err)=>{
    console.log(err)
})
function display(data){
    main.innerHTML=""
    data.map((el,ind)=>{
        let div=document.createElement("div")
        div.setAttribute('class','cards')
        let image1=document.createElement('img')
        image1.src=el.image1
        let name=document.createElement('h4')
        name.innerText=el.name
        let price=document.createElement('p')
        price.innerText="$"+el.price
        let btn=document.createElement('button')
        btn.innerText="Add to Cart";
        
        btn.addEventListener('click', function () {
            let token = localStorage.getItem("token")
            if (token) {
                fetch("http://localhost:4031/cart/post", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify(el)
                })
                    .then((res) => {
                        return res.json()
                    })
                    .then((data) => {
                        console.log(data)
                        alert(data.msg)   
                    })
                    .catch((err) => {
                        alert(err)
                    })
            } else {
                alert("Login first")
            }
        })
        div.append(image1,name,price,btn)
        main.append(div)
    })
}

function duplicate(ele){
    for(let item of curUSr.cart){
        if(item.name == ele.name){
            return true;
        }
    }
    return false;
}
selectel.addEventListener('change',function(){
    if(selectel.value==""){
        display(fetched)
    }
    if(selectel.value=="jacket"){
        let filtered=fetched.filter((el)=>{
            return el.type=="jacket"
        })
        display(filtered)
    }
    if(selectel.value=="pant"){
        let filtered=fetched.filter((el)=>{
            return el.type=="pant"
        })
        display(filtered)
    }
    if(selectel.value=="shirt"){
        let filtered=fetched.filter((el)=>{
            return el.type=="shirt"
        })
        display(filtered)
    }
    if(selectel.value=="shoes"){
        let filtered=fetched.filter((el)=>{
            return el.type=="shoes"
        })
        display(filtered)
    }
})
fifty.addEventListener('click',function(){
    if(fifty.checked){
        let filtered=fetched.filter((el)=>{
            return el.price<50
        })
        display(filtered)
    }
})
hun.addEventListener('click',function(){
    if(hun.checked){
        let filtered=fetched.filter((el)=>{
            return el.price<100
        })
        display(filtered)
    }
})
one.addEventListener('click',function(){
    if(one.checked){
        let filtered=fetched.filter((el)=>{
            return el.price<150
        })
        display(filtered)
    }
})
over.addEventListener('click',function(){
    if(over.checked){
        let filtered=fetched.filter((el)=>{
            return el.price>150
        })
        display(filtered)
    }
})
xxs.addEventListener('click',function(){
    let filtered=fetched.filter((el)=>{
        return el.size=="XXS"
    })
    display(filtered)
})
xs.addEventListener('click',function(){
    let filtered=fetched.filter((el)=>{
        return el.size=="XS"
    })
    display(filtered)
})
s.addEventListener('click',function(){
    let filtered=fetched.filter((el)=>{
        return el.size=="S"
    })
    display(filtered)
})
m.addEventListener('click',function(){
    let filtered=fetched.filter((el)=>{
        return el.size=="M"
    })
    display(filtered)
})
l.addEventListener('click',function(){
    let filtered=fetched.filter((el)=>{
        return el.size=="L"
    })
    display(filtered)
})
xl.addEventListener('click',function(){
    let filtered=fetched.filter((el)=>{
        return el.size=="X"
    })
    display(filtered)
})
let gotoaccount=document.getElementById("gotoaccount")
let userdata=JSON.parse(localStorage.getItem("user"))||[]

gotoaccount.addEventListener('click',()=>{
  if(userdata.length==0){
    window.location.href="signup.html"
  }else{
    window.location.href="accounts.html"
  }
})