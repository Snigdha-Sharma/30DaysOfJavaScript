console.log('Exercise Level 1')

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
//1)create an empty set
const emptySet=new Set()
console.log(emptySet)

//2)Create a set containing 0 to 10 using loop
const set1=new Set()
for(let i=0;i<=10;i++)
{
    set1.add(i)
}
console.log(set1)

//3)Remove an element from a set
set1.delete(10)
console.log(set1)

//4)Clear a set
set1.clear()
console.log(set1)

//5)Create a set of 5 string elements from array
const names=['Snigdha','Saloni','Purva','Divyasri','Ravina']
const nameSet=new Set(names)
console.log(nameSet)

//6)Create a map of countries and number of characters of a country
const countriesMap=new Map()
let charCount=[]
countriesA.forEach(country=>charCount.push(country.length))
for(let i=0;i<countriesA.length;i++)
{
    countriesMap.set(countriesA[i],charCount[i])
}
console.log(countriesMap)

console.log('Exercises: Level 2')
//1)Find a union b
let c=[...a,...b]
let C=new Set(c)
console.log(C)

//2)Find a intersection b
let A=new Set(a)
let B=new Set(b)
let i=a.filter((num)=>B.has(num))
console.log(i)

//3)Find a with b
let d=a.filter((num)=>!B.has(num))
let diff= new Set(d)

console.log(diff)

console.log('Exercise Level 3')
//1)How many languages are there in the countries object file.
let allLanguages=new Set()
countriesB.forEach(country=>{country['languages'].forEach(language=>allLanguages.add(language))})
console.log(allLanguages.size)

//2)Use the countries data to find the 10 most spoken languages:
function mostSpokenLanguages(countries,count)
{
    let ans={}
    countries.forEach(country=>{
        country['languages'].forEach(language=>{
            if(ans[language]==undefined)
            {
                ans[language]=1
            }
            else
            {
                ans[language]++
            }
        })
    })
    let keys=Object.keys(ans)
    let values=Object.values(ans)
    let xy=Array(ans.length)
    for(let i=0;i<keys.length;i++)
    {
        xy.push({language:keys[i],count:values[i]})
    }    
    xy.sort((a,b)=>{
        if (a.count<b.count)
        {
            return 1
        }
        else
        {
            return -1
        }
    })
    xy=xy.slice(0,count)
    return xy
}
console.log(mostSpokenLanguages(countriesB, 10))