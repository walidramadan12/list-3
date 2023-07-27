const accounts=[["admin01","123"],["admin02","234"],["admin03","345"]]
const loginBtn = document.getElementById("login")
const usernameEl = document.getElementById("username")
const passwordEl = document.getElementById("password")
document.title = "LogIn page"
let counter = 1
loginBtn.addEventListener("click",function(){
   if(counter<4){
    let accessUser = usernameEl.value
    let accessPass = passwordEl.value
    let found = false
    // console.log(accessUser)
    // console.log(accessPass)
    for(let i in accounts){
        if(accessUser==accounts[i][0] && accessPass==accounts[i][1]){
            // alert(`welcome ${accessUser}`)
            found = true
            counter = 1
            document.write(`<h1 style="text-align:center;color:blue;margin-top:50px" >welcome <span style="font-weight:bold;color:red"> ${accessUser.toUpperCase()} </span></h1>`)
                setTimeout(secondPage,2000); 
        }
    }
    if(found==false){
        counter++
        alert(`invalid username or password you still have \n ${4-counter} attempts`)
    }
   }else{
    alert("Maximum attempts exxceeded")
   }
})
function secondPage(){
    window.location.replace("login.html")
}