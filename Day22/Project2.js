let heading2=document.querySelector('h2')
let heading1=document.querySelector('h1')
let author=document.getElementById('authorName')
let doc=document.getElementById('docName')
heading1.style.fontSize='50px'
heading1.style.letterSpacing='15px'
heading1.style.textAlign='center'
heading2.textContent='Total number of countries: '+countries.length
heading2.style.textAlign='center'
author.style.textAlign='center'
doc.style.textAlign='center'
let ntable=document.createElement('table')
document.body.appendChild(ntable)
let idx=0
for(let i=0;idx<countries.length;i++)
{
    let ntr=document.createElement('tr')
    ntr.style.alignSelf='center'
    for (let j=0;j<6 && idx<countries.length;j++)
    {
        let ntd=document.createElement('td')
        ntd.textContent=countries[idx]['name'].toUpperCase()
        ntd.style.textAlign='center'
        ntd.width='150px'
        ntd.height='150px'
        ntd.style.border='2px solid #E8E5E4'
        ntr.appendChild(ntd)
        idx++
    }
    ntable.appendChild(ntr)
}
ntable.style.marginLeft='auto'
ntable.style.marginRight='auto'
