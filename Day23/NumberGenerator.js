function isPrime(number)
{
    let isPrime=true;
    if (number===1) 
    {
        return false
    }
    else if (number>1) 
    {
        for (let i=2;i<number;i++) 
        {
            if (number%i==0) 
            {
                isPrime=false;
                break;
            }
        }
    }  
    return isPrime
}

let heading1=document.querySelector('h1')
let heading2=document.querySelector('h2')
let heading3=document.querySelector('h3')
heading1.style.textAlign='center'
heading1.style.color='GREEN'
heading2.style.textAlign='center'
heading3.style.textAlign='center'
let sdiv=document.createElement('div')
let searchBar=document.createElement('input')
let info=document.createElement('p')
searchBar.style.borderColor='GREEN'
searchBar.style.borderWidth='3px'
searchBar.style.height='35px'
searchBar.style.width='500px'
searchBar.style.alignSelf='center'
searchBar.style.marginRight='20px'
searchBar.style.marginBottom='10px'
let goButton=document.createElement('button')
goButton.textContent='Generate numbers'
goButton.style.height='41px'
goButton.style.backgroundColor='GREEN'
goButton.style.color='WHITE'
let ndiv=document.createElement('div')
goButton.addEventListener('click',()=>{
    if(parseInt(searchBar.value))
    {
        info.textContent=''
        ndiv.innerHTML=''
        makeTable(searchBar.value)
    }
    else
    {
        info.textContent='Input must be a number'
    }
})
searchBar.addEventListener('click',()=>{
    info.textContent='Enter number value on the input field to generate numbers'
    info.style.color='RED'
    info.style.width='500px'
})
sdiv.appendChild(info)
sdiv.appendChild(searchBar)
sdiv.appendChild(goButton)
sdiv.style.textAlign='center'
document.body.appendChild(sdiv)

function makeTable(count)
{
    let ntable=document.createElement('table')
    ndiv.appendChild(ntable)
    document.body.appendChild(ndiv)
    let num=1
    for(let i=0;num<=count;i++)
    {
        let ntr=document.createElement('tr')
        ntr.style.alignSelf='center'
        for(let j=0;j<9 && num<=count;j++)
        {
            let ntd=document.createElement('td')
            if(isPrime(num))
            {
                ntd.style.backgroundColor='RED'
            }
            else if(num%2==0)
            {
                ntd.style.backgroundColor='GREEN'
            }
            else
            {
                ntd.style.backgroundColor='YELLOW'
            }
            ntd.textContent=num
            ntd.style.fontSize='40px'
            ntd.style.textAlign='center'
            ntd.style.color='WHITE'
            ntd.style.width='150px'
            ntd.style.height='80px'
            ntr.appendChild(ntd)
            num++
        }   
        ntable.appendChild(ntr)
    }
    ntable.style.marginLeft='auto'
    ntable.style.marginRight='auto'
}
