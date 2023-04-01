let formel = document.querySelector('form')

formel.addEventListener('submit', (e) => {
    e.preventDefault()
    let userObj = {
        name: document.querySelector("#customername").value,
        email: document.querySelector("#ap_email").value,
        password: document.querySelector("#ap_password").value,
        phone: document.querySelector("#ap_phone_number").value
    }
    fetch("http://localhost:4031/user/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userObj)
    })
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        alert("Registration Succesful")
        window.location.href="login.html"
    })
    .catch((err)=>{
        alert(err.message)
    })

})


