const exprRegex=/^CODE-/,codeInput=document.getElementById("code"),messageCode=document.getElementById("code-validation"),buttonSubmit=document.getElementById("submit-btn"),champEMail=document.getElementById("inputMail");function messageFocusOut(){codeInput.value.match(exprRegex)||(messageCode.innerText="CODE INVALIDE",buttonSubmit.setAttribute("disabled",!0))}champEMail.setAttribute("type","email"),champEMail.setAttribute("pattern",".+@"),champEMail.setAttribute("title",""),champEMail.setAttribute("required",!0),champEMail.setAttribute("list",""),champEMail.autocomplete="off",codeInput.addEventListener("click",(()=>{messageCode.innerText="",buttonSubmit.removeAttribute("disabled")})),codeInput.addEventListener("change",(e=>{e.target.value.match(exprRegex)||(messageCode.innerText="CODE INVALIDE",buttonSubmit.setAttribute("disabled",!0))})),champEMail.addEventListener("click",(()=>{buttonSubmit.removeAttribute("disabled")})),champEMail.addEventListener("change",(e=>{e.target.value;const t=champEMail.validity;t.valueMissing?(champEMail.setCustomValidity("Renseigner l'email est obligatoire!"),champEMail.style.border="blue solid 3px"):t.typeMismatch?(champEMail.setCustomValidity("Un email valide, please"),champEMail.style.border="red solid 3px"):(champEMail.setCustomValidity(""),champEMail.style.border="black solid 1px"),champEMail.reportValidity()}));