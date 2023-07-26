const accounts=[["admin01","123"],["admin02","234"],["admin03","345"]]
const loginBtn = document.getElementById("login")
const usernameEl = document.getElementById("username")
const passwordEl = document.getElementById("password")
document.title = "LogIn page"

loginBtn.addEventListener("click",function(){
    let accessUser = usernameEl.value
    let accessPass = passwordEl.value
    let found = false
    // console.log(accessUser)
    // console.log(accessPass)
    for(let i in accounts){
        if(accessUser==accounts[i][0] && accessPass==accounts[i][1]){
            alert(`welcome ${accessUser}`)
            found = true
        }

    }
    if(found==false){
        alert("invalid username or password")
    }
})