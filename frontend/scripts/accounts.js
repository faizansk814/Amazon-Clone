let userdata = JSON.parse(localStorage.getItem("user")) || []
let box1=document.getElementById('a')
let box=document.getElementById('b')
display(userdata)
function display(data) {
    data.map((el) => {
        let h3=document.createElement('h3')
        h3.innerText='Accounts'
        let accountname = document.createElement('h1')
        accountname.innerText = `Welcome ${el.name}`
        let div=document.createElement('div')
        let profile=document.createElement('h5')
        profile.innerText="Profile Details"
        let img=document.createElement('img')
        img.src="https://files.myglamm.com/site-images/original/no-user-yellow.png"
        let name = document.createElement('h1')
        name.innerText = `Name      ${el.name}`
        let email = document.createElement('h1')
        email.innerText = `Email    ${el.email}`
        let gender = document.createElement('h1')
        gender.innerText = `Gender   Not added`
        let location = document.createElement('h1')
        location.innerText = `Location   Not added`
        div.append(img,name,email,gender,location)
        box1.append(h3,accountname)
        box.append(div)
    })
}