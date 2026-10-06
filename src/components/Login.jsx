import {userContext}from "react"
import { userState } from "react"
import {UserProvider} from "../context/UserContext"

function LoginForm(){
    const{setUserInfo}=userContext(UserProvider)
const[email,setEmail]=userState("")
const[password,setPassword]=userState("")
function handleEmailChange(e){
    setEmail(e.target.value)
}
function handlePasswordChange(e){
    setPassword(e.target.value)
}
function login(e){
    e.preventDefault()

    if(email==="adan@gmail.com" && password==="1234"){
setUserInfo({email:email,name:"Adan Khan"})
alert("Loginned")
    }
}
return(
    <div>
<form onSubmit={login}>
<div>
    <input type="text"name=""id=""placeholder="Enter your email"onChange={(e)=>{
        setEmail(e.target.value)
    }}/>
</div>
<div>
<input type="password"name=""id=""placeholder="Enter your password"onChange={(e)=>{
    setPassword(e.target.value)
}}/>
</div>
<button type="submit">Login</button>
</form>
    </div>
)

}