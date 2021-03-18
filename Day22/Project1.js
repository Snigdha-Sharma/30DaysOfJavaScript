//Create a div container on HTML document and create 1 to 100 numbers dynamically and append to the container div.
//Even numbers background is green
//Odd numbers background is yellow
//Prime numbers background is red

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
heading2.style.textAlign='center'
heading3.style.textAlign='center'
heading2.style.textDecoration='underline'
heading3.style.textDecoration='underline'
let ntable=document.createElement('table')
document.body.appendChild(ntable)
let num=1
for(let i=0;i<20;i++)
{
    let ntr=document.createElement('tr')
    ntr.style.alignSelf='center'
    for(let j=0;j<5;j++)
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