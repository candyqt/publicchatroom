import"./firebase-DGXckuml.js";/* empty css                */import{A as t}from"./authorize-DN5szbAP.js";const s=document.getElementById("signinform"),g=document.getElementById("googleloginbtn");s.addEventListener("submit",n=>{n.preventDefault();const e=document.getElementById("signinemail").value.trim(),o=document.getElementById("signinpassword").value.trim(),{loginUser:i}=t();i(e,o)});g.addEventListener("click",n=>{n.preventDefault();const{googleLogin:e}=t();e()});
