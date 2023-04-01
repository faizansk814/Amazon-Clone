let btn=document.getElementById('amazon')
let emailinp=document.getElementById('email')
let passwordinp=document.getElementById('password')

btn.addEventListener('click',()=>{
    let obj={
        email:emailinp.value,
        password:passwordinp.value
    }
    console.log(obj)
    fetch("http://localhost:4031/user/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        if(data.msg=="Wrong Credintials"){
            alert("Wrong Credintials")
        }else{
            localStorage.setItem("token",data.token)
            console.log(data.userdetails)
            let userdata=[]
            userdata.push(data.userdetails)
            localStorage.setItem("user",JSON.stringify(userdata))
            alert("Login Succesful")
            window.location.href="index.html"
        }
    })
    .catch((err)=>{
        alert(err.message)
    })
})