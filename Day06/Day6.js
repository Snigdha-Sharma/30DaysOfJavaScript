console.log("Day 6")
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
const webTechs = ['HTML','CSS','JS','React','Redux','Node','Express','MongoDB']
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//1)Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let i=0;i<=10;i++)
{
    console.log(i)
}
let i=0
while(i<=10)
{
    console.log(i)
    i++
}
i=0
do{
    console.log(i)
    i++
}while(i<11)
//2)Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i=10;i>=0;i--)
{
    console.log(i)
}
i=10
while(i>=0)
{
    console.log(i)
    i--;
}
i=10
do{
    console.log(i)
    i--
}while(i>=0)
//3)Iterate 0 to n using for loop
let n=23
for(let i=0;i<=n;i++)
{
    console.log(i)
}
//4)Write a loop that makes the following pattern using console.log():
//#
//##
//###
//####
//#####
//######
//#######
for(let i=0;i<7;i++)
{
    const arr=Array(i+1).fill('#')
    console.log(arr.join(''))
}
//5)Use loop to print the following pattern:
//   0 x 0 = 0
//   1 x 1 = 1
//   2 x 2 = 4
//   3 x 3 = 9
//   4 x 4 = 16
//   5 x 5 = 25
//   6 x 6 = 36
//   7 x 7 = 49
//   8 x 8 = 64
//   9 x 9 = 81
//   10 x 10 = 100
for(let i=0;i<11;i++)
{
    console.log(i+' X '+i+' = '+(i*i))
}
//6)Using loop print the following pattern
  
//    i    i^2   i^3
//    0    0     0
//    1    1     1
//    2    4     8
//    3    9     27
//    4    16    64
//    5    25    125
//    6    36    216
//    7    49    343
//    8    64    512
//    9    81    729
//    10   100   1000
console.log('i  i^2  i^3')
for(let i=0;i<11;i++)
{
    console.log(i+'  '+i*i+'  '+(i*i*i))
}
//7)Use for loop to iterate from 0 to 100 and print only even numbers
const evenNos=Array();
for(let i=0;i<101;i++)
{
    if(i%2==0)
    {
        evenNos.push(i)
    }
}
console.log(evenNos)
//8)Use for loop to iterate from 0 to 100 and print only odd numbers
const oddNos=Array();
for(let i=0;i<101;i++)
{
    if(i%2==1)
    {
        oddNos.push(i)
    }
}
console.log(oddNos)
//9)Use for loop to iterate from 0 to 100 and print only prime numbers
for(let i=0;i<=100;i++)
{
    if(i<=1)
    {
        console.log(i+': '+false)
        continue
    }
    let flag=true
    for (let j=2;j<i;j++)
    {
        if(i%j==0)
        {
            flag=false
            console.log(i+': '+false)
            break;
        }
    }
    if(flag)
    {
        console.log(i+': '+true)
    }
    
}
//10)Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let numsum=0
for(let i=0;i<101;i++)
{
    numsum=i+numsum
}
console.log('Sum all: '+numsum)
//11)Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven=0,sumOdd=0
for(let i=0;i<101;i++)
{
    if(i%2==0)
    {
        sumEven+=i
    }
    else
    {
        sumOdd+=i
    }
}
console.log("Even num sum: "+sumEven)
console.log("Odd num sum: "+sumOdd)
//12)Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
const warr={sumEven,sumOdd}
console.log(warr)
//14)Develop a small script which generate array of 5 random numbers
for(let i=0;i<5;i++)
{
    console.log(Math.random()*100)
}
//15)Develop a small script which generate array of 5 random numbers and the numbers must be unique
const randArr=Array()
while(randArr.length<5)
{
    let num=Math.floor(Math.random()*100)
    if(randArr.includes(num)==false)
    {
        randArr.push(num)
    }
}
console.log(randArr)
//16)Develop a small script which generate a six characters random id: 
let possibleChars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
let randChar6=''
for(let i=0;i<6;i++)
{
    randChar6=randChar6+possibleChars[Math.floor(Math.random()*possibleChars.length)]
}
console.log(randChar6)

console.log('Exercise Level 2')
//1)Develop a small script which generate any number of characters random id:
let len=Math.floor(Math.random()*100)
let randCharString=''
for(let i=0;i<len;i++)
{
    randCharString+=possibleChars[Math.floor(Math.random()*possibleChars.length)]
}
console.log(randCharString)

//2)Write a script which generates a random hexadecimal number.
let possibleCharInHex='0123456789ABCDEF'
len=Math.floor(Math.random()*100)
let randHexNum='#'
for(let i=0;i<len;i++)
{
    randHexNum+=possibleCharInHex[Math.floor(Math.random()*possibleCharInHex.length)]
}
console.log(randHexNum)

//3)Write a script which generates a random rgb color number.
let R=Math.floor(Math.random()*256),G=Math.floor(Math.random()*256),B=Math.floor(Math.random()*256)
console.log('rgb('+R+','+G+','+B+')')

//4)Using the above countries array, create the following new array.
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
for(let i=0;i<countries.length;i++)
{
    countries[i]=countries[i].toUpperCase()
}
console.log(countries)

//5)Using the above countries array, create an array for countries length'.
//[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
const lenCountriesArr=Array()
for(let i=0;i<countries.length;i++)
{
    lenCountriesArr.push(countries[i].length)
}
console.log(lenCountriesArr)

//6)Use the countries array to create the following array of arrays:

//   [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]
const d=new Array()
for(let i=0;i<countries.length;i++)
{
    const n=new Array()
    n.push(countries[i])
    n.push(countries[i].slice(0,3).toUpperCase())
    n.push(countries[i].length)
    d.push(n)
}
console.log(d)

//7)In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there 
//is no country containing the word 'land', print 'All these countries are without land'.
const g=new Array()
for(let i=0;i<countries.length;i++)
{
    if(countries[i].includes('LAND'))
    {
        g.push(countries[i])
    }
}
if(g.length==0)
{
    console.log('All these countries are without land')
}
else
{
    console.log(g)
}

//8)In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no 
//country containing the word 'ai', print 'These are countries ends without ia'.
const g8=new Array()
for(let i=0;i<countries.length;i++)
{
    if(countries[i].includes('IA'))
    {
        g8.push(countries[i])
    }
}
if(g8.length==0)
{
    console.log('All these countries end without ia')
}
else
{
    console.log(g8)
}

//9)Using the above countries array, find the country containing the biggest number of characters.
let maxLenCountry=''
len=0
for(let i=0;i<countries.length;i++)
{
    if(countries[i].length>len)
    {
        len=countries[i].length
        maxLenCountry=countries[i]
    }
}
console.log(maxLenCountry)

//10)Using the above countries array, find the country containing only 5 characters.
for(let i=0;i<countries.length;i++)
{
    if(countries[i].length==5)
    {
        console.log(countries[i])
    }
}

//11)Find the longest word in the webTechs array
let maxLenWebTech=''
len=0
for(let i=0;i<webTechs.length;i++)
{
    if(webTechs[i].length>len)
    {
        len=webTechs[i].length
        maxLenWebTech=webTechs[i]
    }
}
console.log(maxLenWebTech)

//12)Use the webTechs array to create the following array of arrays:
//[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
const d1=new Array()
for(let i=0;i<webTechs.length;i++)
{
    const n=new Array()
    n.push(webTechs[i])
    n.push(countries[i].length)
    d1.push(n)
}
console.log(d1)

//13)An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mern=['MongoDB','Express','React','Node']
let ans=''
for(let i=0;i<mern.length;i++)
{
    ans=ans+mern[i][0]
}
console.log(ans)

//14)Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for(let i=0;i<webTechs.length;i++)
{
    console.log(webTechs[i])
}

//15)This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits=['banana', 'orange', 'mango', 'lemon']
for(let i=0,j=fruits.length-1;i<j;i++,j--)
{
    let temp=fruits[i]
    fruits[i]=fruits[j]
    fruits[j]=temp
}
console.log(fruits)

//16)Print all the elements of array as shown below.

//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
const fullStack = [['HTML', 'CSS', 'JS', 'React'],['Node', 'Express', 'MongoDB']]
for(let i=0;i<fullStack.length;i++)
{
    for(let j=0;j<fullStack[i].length;j++)
    {
        console.log(fullStack[i][j])
    }
}

console.log('Exercise Level 3')
//1)Copy countries array(Avoid mutation)
const copyCountries=Array()
for(let i=0;i<countries.length;i++)
{
    copyCountries.push(countries[i])
}
console.log(copyCountries)
//2)Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
sortedCountries=copyCountries.sort()
console.log(sortedCountries)
//3)Sort the webTechs array and mernStack array
console.log(webTechs.sort())
console.log(mern.sort())
//4)Extract all the countries contain the word 'land' from the countries array and print it as array
console.log(g)
//5)Find the country containing the hightest number of characters in the countries array
console.log(maxLenCountry)
//6)Extract all the countries contain the word 'land' from the countries array and print it as array
console.log(g)
//7)Extract all the countries containing only four characters from the countries array and print it as array
for(let i=0;i<countries.length;i++)
{
    if(countries[i].length==4)
    {
        console.log(countries[i])
    }
}
//8)Extract all the countries containing two or more words from the countries array and print it as array
for(let i=0;i<countries.length;i++)
{
    if(countries[i].length>=2)
    {
        console.log(countries[i])
    }
}
//9)Reverse the countries array and capitalize each country and stored it as an array
console.log(countries.reverse())


    