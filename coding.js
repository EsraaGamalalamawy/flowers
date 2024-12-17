var strat=document.getElementById("start")
var front=document.getElementById("front")
var boxing=document.getElementById("boxing")
var login=document.getElementById("login")
var signup=document.getElementById("signup")
var tologin=document.getElementById("tologin")
var tosignup=document.getElementById("tosignup")
var loginsection=document.getElementById("loginsection")
var signupsection=document.getElementById("signupsection")
var usernameSign=document.getElementById("usernameSign")
var emailSign=document.getElementById("emailSign")
var passwordSign=document.getElementById("passwordSign")
var ConsfirmPass=document.getElementById("ConsfirmPass")
var goFromSign=document.getElementById("goFromSign")
var username=document.getElementById("username")
var password=document.getElementById("password")
var goFromLogin=document.getElementById("goFromLogin")
var errorUN=document.getElementById("errorUN")
var errorE=document.getElementById("errorE")
var errorP=document.getElementById("errorP")
var errorCP=document.getElementById("errorCP")
var errorloginU=document.getElementById("errorloginU")
var errorloginP=document.getElementById("errorloginP")
var errorlogin=document.getElementById("errorlogin")
var forgetlink=document.getElementById("forgetlink")
var forget=document.getElementById("forget")
var closeForget=document.getElementById("closeForget")
var ok=document.getElementById("ok")
var emailforget=document.getElementById("emailforget")
var errorforget=document.getElementById("errorforget")
var send=document.getElementById("send")
var showpass=document.getElementById("showpass")
var noaccount=document.getElementById("noaccount")
var closenoaccount=document.getElementById("closenoaccount")

strat.onclick=function(){
    boxing.style.transform="rotatey(180deg)"
    front.style.opacity="0"
}
tologin.onclick=function(){
    loginsection.style.height="320%"
    loginsection.style.opacity="0"
    setTimeout(()=>{
        login.style.display="flex"
        signup.style.display="none"
        loginsection.style.height="20%"
    },300)
    setTimeout(()=>{
        loginsection.style.opacity="1"
    },1000)
}
tosignup.onclick=function(){
    signupsection.style.height="320%"
    signupsection.style.opacity="0"
    setTimeout(()=>{
        signup.style.display="flex"
        login.style.display="none"
        signupsection.style.height="20%"
    },300)
    setTimeout(()=>{
        signupsection.style.opacity="1"
    },1000)
}
goFromSign.onclick=()=>{
    localStorage.setItem("usernameSign",usernameSign.value)
    localStorage.setItem("emailSign",emailSign.value)
    localStorage.setItem("passwordSign",passwordSign.value)
    localStorage.setItem("ConsfirmPass",ConsfirmPass.value)
    if(usernameSign.value=="" || emailSign.value=="" || passwordSign.value=="" || ConsfirmPass.value=="" ){
        if(usernameSign.value==""){
            errorUN.innerHTML="Please Enter Your UserName First"
            usernameSign.style.boxShadow="0 0 5px 0 red"
        }if(emailSign.value==""){
            errorE.innerHTML="Please Enter Your Email First"
            emailSign.style.boxShadow="0 0 5px 0 red"
        }if(passwordSign.value==""){
            errorP.innerHTML="Please Enter Your Password First"
            passwordSign.style.boxShadow="0 0 5px 0 red"
        }if(ConsfirmPass.value==""){
            errorCP.innerHTML="Please Enter Your Consfirm Password First"
            ConsfirmPass.style.boxShadow="0 0 5px 0 red"
        }
    }else{
        const check=emailSign.value.indexOf("@")
        if(check==-1){
            errorE.innerHTML="Your email dosen't have '@' ,please enter correct email"
            emailSign.style.boxShadow="0 0 5px 0 red"
        }else if(passwordSign.value!=ConsfirmPass.value){
            errorCP.innerHTML="Consfirm Password must be the same as your password"
            ConsfirmPass.style.boxShadow="0 0 5px 0 red"
        }
        else{
            window.location="home.html" 
            usernameSign.value=""
            passwordSign.value=""
            emailSign.value=""
        }
    }
    return false
}
goFromLogin.onclick=(e)=>{
    if(username.value=="" || password.value==""){
        if(username.value==""){
            errorloginU.innerHTML="Please Enter Your UserName First"
            username.style.boxShadow="0 0 5px 0 red"
        }if(password.value==""){
            errorloginP.innerHTML="Please Enter Your Password First"
            password.style.boxShadow="0 0 5px 0 red"
        }
    }else{
        if(localStorage.getItem("usernameSign") && localStorage.getItem("passwordSign")){
            var usernameOld=localStorage.getItem("usernameSign")
            var passwordOld=localStorage.getItem("passwordSign")
            if(username.value==usernameOld && password.value==passwordOld){
                location="home.html"
                username.value=""
                password.value=""
            }else if(username.value!=usernameOld){
                errorloginU.innerHTML="Your UserName is not correct"
                username.style.boxShadow="0 0 5px 0 red"
            }else{
                errorloginP.innerHTML="Your Password is not correct"
                password.style.boxShadow="0 0 5px 0 red"
            }
        }else{
            noaccount.style.display="flex"
        }
    }
    return false
}
send.onclick=()=>{
    if(emailforget.value==""){
        errorforget.innerHTML="Please enter your email first"
        emailforget.style.boxShadow="0 0 5px 0 black"
    }else if(localStorage.getItem("emailSign") && localStorage.getItem("passwordSign")){
        if(emailforget.value==localStorage.getItem("emailSign")){
            showpass.innerHTML=`your password is : ${localStorage.getItem("passwordSign")}`
        }else{
            errorforget.innerHTML="your email isn't correct"
            emailforget.style.boxShadow="0 0 5px 0 black"
        }
    }else{
        noaccount.style.display="flex"
    }

}
ok.onclick=()=>{
    forget.style.display="none"
    if(localStorage.getItem("passwordSign")){
        password.value=localStorage.getItem("passwordSign")
    }
    emailforget.value=""
}
forgetlink.onclick=()=>{
    forget.style.display="flex"
}
closeForget.onclick=()=>{
    forget.style.display="none"
}
closenoaccount.onclick=()=>{
    noaccount.style.display="none"
}
usernameSign.onfocus=()=>{
    errorUN.innerHTML=""
    usernameSign.style.boxShadow="0 0 5px 0 black"
}
emailSign.onfocus=()=>{
    errorE.innerHTML=""
    emailSign.style.boxShadow="0 0 5px 0 black"
}
passwordSign.onfocus=()=>{
    errorP.innerHTML=""
    passwordSign.style.boxShadow="0 0 5px 0 black"
}
ConsfirmPass.onfocus=()=>{
    errorCP .innerHTML=""
    ConsfirmPass.style.boxShadow="0 0 5px 0 black"
}
username.onfocus=()=>{
    errorloginU.innerHTML=""
    username.style.boxShadow="0 0 5px 0 black"
}
password.onfocus=()=>{
    errorloginP.innerHTML=""
    password.style.boxShadow="0 0 5px 0 black"
}
forgetlink.onclick=()=>{
    forget.style.display="flex"
}
closeForget.onclick=()=>{
    forget.style.display="none"
}
emailforget.onfocus=()=>{
    errorforget.innerHTML=""
    emailforget.style.boxShadow="0 0 5px 0 black"
}