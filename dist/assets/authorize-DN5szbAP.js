import{e as f,f as s,u as y,s as x,g as E,h as P,G as A,i as L,j as a}from"./firebase-DGXckuml.js";function I(){const i=async(o,e,t)=>{const w="https://static.thenounproject.com/png/65476-200.png";try{const p=(await f(s,e,t)).user;await y(p,{displayName:o,photoURL:w}).then(()=>{window.location.href="../index.html"})}catch(n){console.log("Error registering users : ",n)}},l=(o,e)=>{x(s,o,e).then(t=>{console.log(t),r(t.user),window.location.href="../index.html"}).catch(t=>{console.error("Error logging in : ",t.message)})},c=()=>{E(s).then(()=>{m(),window.location.href="../signin.html"}).catch(o=>{console.log("Error Logged out",o.message)})},g=async(o,e)=>{try{await P(s,o),e.textContent="Password reset email send, Please check your inbox",e.style.color="green",e.style.fontSize="11px"}catch(t){console.error("Error sending password reset email = ",t.message),e.textContent=`Error ${t.message}`,e.style.color="red",e.style.fontSize="11px"}},h=()=>{const o=new A;L(s,o).then(e=>{r(e.user.displayName),window.location.href="../index.html"}).catch(e=>{console.log("Error with google sign in = ",e.message)})},d=()=>{a(s,o=>{if(o)return!0;window.location.href="../signin.html"})},u=o=>{a(s,e=>{e&&o(e)})},r=o=>{localStorage.setItem("username",o.displayName)},m=()=>{localStorage.removeItem("username")};return{registerUser:i,loginUser:l,logoutUser:c,resetPassword:g,googleLogin:h,isLoggedIn:d,getUser:u}}export{I as A};
