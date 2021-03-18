var cur=new Date()
let dateel=document.getElementById('date')
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
dateel.textContent=months[cur.getMonth()]+' '+cur.getDate()+', '+cur.getFullYear()+' '+cur.getHours()+':'+cur.getMinutes()+':'+cur.getSeconds()
dateel.style.textAlign='center'
let heading1=document.querySelector('h1')
let heading2=document.querySelector('h2')
heading1.style.textAlign='center'
heading2.style.textAlign='center'
let year=document.getElementById('year')
year.style.fontSize='70px'
function getRandomColor() 
{
    var letters='0123456789ABCDEF';
    var color='#';
    for (var i=0;i<6;i++) 
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeColor()
{
    year.style.color=getRandomColor()
    dateel.style.backgroundColor=getRandomColor()
}
setInterval(changeColor,1000);
let ntable=document.createElement('table')
document.body.appendChild(ntable)
for(let i=0;i<asabenehChallenges2020['challenges'].length;i++)
{
    let ntr=document.createElement('tr')
    let cname=document.createElement('td')
    let cdesc=document.createElement('td')
    let cstatus=document.createElement('td')
    cname.textContent=asabenehChallenges2020['challenges'][i]['name']
    cname.style.fontSize='20px'
    let details=document.createElement('details')
    let summary=document.createElement('summary')
    summary.textContent=asabenehChallenges2020['challenges'][i]['name'].slice(11)
    summary.style.fontSize='20px'
    let ulist=document.createElement('ul')
    for(let j=0;j<asabenehChallenges2020['challenges'][i]['topics'].length;j++)
    {
        let listitem=document.createElement('li')
        listitem.textContent=asabenehChallenges2020['challenges'][i]['topics'][j]
        listitem.style.fontSize='20px'
        ulist.appendChild(listitem)
    }
    if(asabenehChallenges2020['challenges'][i]['status']=='Done')
    {
        ntr.style.backgroundColor='GREEN'
    }
    else if (asabenehChallenges2020['challenges'][i]['status']=='Ongoing')
    {
        ntr.style.backgroundColor='YELLOW'
    }
    else
    {
        ntr.style.backgroundColor='RED'
    }
    details.appendChild(summary)
    details.appendChild(ulist)
    cdesc.appendChild(details)
    cstatus.textContent=asabenehChallenges2020['challenges'][i]['status']
    cstatus.style.textAlign='right'
    cstatus.style.fontSize='20px'
    ntr.appendChild(cname)
    ntr.appendChild(cdesc)
    ntr.appendChild(cstatus)
    ntr.style.height='50px'
    ntable.appendChild(ntr)
}
ntable.style.marginLeft='auto'
ntable.style.marginRight='auto'

//Name of author section
let author=document.createElement('p')
author.textContent=asabenehChallenges2020['author']['firstName']+' '+asabenehChallenges2020['author']['lastName']
author.style.textAlign='center'
author.style.fontSize='25px'
author.style.fontWeight=1000
document.body.appendChild(author)

//Contact Section
let contact=document.createElement('div')
contact.style.textAlign='center'
for(let i=0;i<asabenehChallenges2020['author']['socialLinks'].length;i++)
{
    contact.innerHTML+=asabenehChallenges2020['author']['socialLinks'][i]['fontawesomeIcon']
}
contact.innerHTML+='<br><br>'
contact.style.fontSize='25px'
contact.style.letterSpacing='10px'
document.body.appendChild(contact)

//Bio section
let bio=document.createElement('div')
bio.textContent=asabenehChallenges2020['author']['bio']
bio.style.width='800px'
bio.style.marginLeft='auto'
bio.style.marginRight='auto'
document.body.appendChild(bio)

//About Section Using Table
let about=document.createElement('table')
let headings=document.createElement('tr')
let titles=document.createElement('th')
titles.textContent='Titles'
let skills=document.createElement('th')
skills.textContent='Skills'
let qualifications=document.createElement('th')
qualifications.textContent='Qualifications'
headings.appendChild(titles)
headings.appendChild(skills)
headings.appendChild(qualifications)
headings.style.fontSize='25px'
let content=document.createElement('tr')
let tc=document.createElement('td')
let tcl=document.createElement('ul')
for(let i=0;i<asabenehChallenges2020['author']['titles'].length;i++)
{
    let item=document.createElement('li')
    item.textContent=asabenehChallenges2020['author']['titles'][i][0]+' '
    item.textContent+=asabenehChallenges2020['author']['titles'][i][1]
    tcl.appendChild(item)
}
let emojis=['✔️','📖','👨‍🎓']
tcl.style.listStyleType='None'
tc.vAlign='top'
tc.appendChild(tcl)
content.appendChild(tc)
let ts=document.createElement('td')
let tsl=document.createElement('ul')
for(let i=0;i<asabenehChallenges2020['author']['skills'].length;i++)
{
    let item=document.createElement('li')
    item.textContent=emojis[0]+' '+asabenehChallenges2020['author']['skills'][i]
    tsl.appendChild(item)
}
ts.appendChild(tsl)
tsl.style.listStyleType='None'
content.appendChild(ts)
let tq=document.createElement('td')
let tql=document.createElement('ul')
for(let i=0;i<asabenehChallenges2020['author']['qualifications'].length;i++)
{
    let item=document.createElement('li')
    if (i==0)
    {
        item.textContent=emojis[1]+' '+asabenehChallenges2020['author']['qualifications'][i]
    }
    else
    {
        item.textContent=emojis[2]+' '+asabenehChallenges2020['author']['qualifications'][i]
    }
    tql.appendChild(item)
}
tql.style.listStyleType='None'
tq.appendChild(tql)
tq.vAlign='top'
content.appendChild(tq)
about.appendChild(headings)
about.appendChild(content)
about.style.marginLeft='auto'
about.style.marginRight='auto'
document.body.appendChild(about)

//Keywords Section
let hkey=document.createElement('h2')
hkey.textContent='Keywords'
let keywords=document.createElement('p')
for(let i=0;i<asabenehChallenges2020['keywords'].length;i++)
{
    let word=document.createElement('span')
    word.textContent='#'+asabenehChallenges2020['keywords'][i]
    word.style.backgroundColor=getRandomColor()
    word.style.borderRadius='5px'
    word.style.marginRight='10px'
    keywords.appendChild(word)
}
document.body.appendChild(hkey)
document.body.appendChild(keywords)

