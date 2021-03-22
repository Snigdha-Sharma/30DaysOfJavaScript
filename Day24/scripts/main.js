//Options for planets array declared
let planets=['MERCURY','VENUS','EARTH','MOON','MARS','JUPITER','SATURN','URANUS','NEPTUNE','PLUTO']
let factors=[0.38,0.91,1.00,0.165,0.38,2.34,1.06,0.92,1.19,0.06]

//All planets added to dropdown list
let selectPlanet=document.querySelector('select')
let idx=0
planets.forEach(planet=>{
    let temp=document.createElement('option')
    temp.value=idx
    idx++
    temp.textContent=planet
    selectPlanet.appendChild(temp)
})

let header=document.querySelector('header')
header.style.textAlign='center'
header.style.paddingTop='20px'
let h1=document.querySelector('h1')
h1.style.color='WHITE'
h1.style.fontFamily='verdana'

let input=document.querySelector('input')
input.style.height='30px'
input.style.width='200px'
input.style.marginRight='10px'
let select=document.querySelector('select')
select.style.height='37px'
select.style.backgroundColor='#f2f2f2'
select.style.marginRight='10px'
let button=document.querySelector('button')
button.style.height='37px'
button.style.backgroundColor='GREY'
button.style.fontFamily='verdana'
button.style.color='WHITE'

let main=document.querySelector('main')
let table=document.createElement('table')
let cell1=document.createElement('td')
let cell2=document.createElement('td')
let row=document.createElement('tr')
row.appendChild(cell1)
row.appendChild(cell2)
table.appendChild(row)
main.appendChild(table)
let image=document.createElement('img')
image.src='./images/earth.png'
cell1.appendChild(image)
cell2.textContent=''
cell2.style.fontFamily='verdana'
cell2.style.color='WHITE'
cell2.style.fontSize='30px'
main.style.paddingTop='50px'
table.style.marginLeft='auto'
table.style.marginRight='auto'
table.style.paddingBottom='30px'
main.style.backgroundColor='rgb(192,192,192,0.2)'
main.style.marginLeft='auto'
main.style.marginRight='auto'
main.style.width='1200px'

document.body.style.backgroundImage="url('images/galaxy.gif')"

button.addEventListener('click',()=>{
    if(input.value=='')
    {
        image.src=''
        cell2.textContent='Mass is required'
        cell2.style.backgroundColor='rgb(192,192,192,0.3)'
    }
    else
    {
        let val=parseInt(select.value)
        console.log(val)
        if(isNaN(val))
        {
            image.src=''
            cell2.textContent='You did not select a planet yet'
            cell2.style.backgroundColor='rgb(192,192,192,0.3)'
        }
        else
        {
            image.src='./images/'+planets[val].toLowerCase()+'.png'
            cell2.textContent='The weight of the object on '+planets[val]
            let newWeight=document.createElement('div')
            newWeight.textContent=(input.value*factors[val]).toFixed(2)+' N'
            cell2.appendChild(newWeight)
            cell2.style.backgroundColor='rgb(192,192,192,0.3)'
            cell2.style.paddingBottom='auto'
            newWeight.style.backgroundColor='rgb(192,192,192,0.4)'
            newWeight.style.width='200px'
            //newWeight.style.height='200px'
            newWeight.style.overflow='auto'
            newWeight.style.borderRadius='100px'
            newWeight.style.marginLeft='auto'
            newWeight.style.marginRight='auto'
            newWeight.style.textAlign='center'
        }
    }
})



