//Generating the keyboard code code using event listener. The image below.
let text=document.createElement('p')
let code=document.createElement('p')

text.textContent='Press any keyboard key'
text.style.fontSize='50px'
text.style.textAlign='center'
code.style.textAlign='center'
code.style.fontSize='45px'
let heading1=document.querySelector('h1')
let heading2=document.querySelector('h2')
let heading3=document.querySelector('h3')
heading1.style.textAlign='center'
heading2.style.textAlign='center'
heading3.style.textAlign='center'
document.body.appendChild(text)
document.body.appendChild(code)
let s1=document.createElement('span')

document.body.addEventListener('keypress',e=>{
    s1.textContent=e.code
    s1.style.color='GREEN'
    text.textContent='You pressed '
    text.appendChild(s1)
    code.textContent=e.keyCode
code.style.color='GREEN'})
