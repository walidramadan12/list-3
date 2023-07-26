
const loginBtn = document.getElementById("login")
const usernameEl = document.getElementById("username")
const passwordEl = document.getElementById("password")
document.title = "LogIn page"

loginBtn.addEventListener("click",function(){
    let accessUser = usernameEl.value
    let accessPass = passwordEl.value
    // console.log(accessUser)
    // console.log(accessPass)
    if(accessUser=="admin01" && accessPass==123){

    }else if(accessUser=="admin02" && accessPass==234)

})