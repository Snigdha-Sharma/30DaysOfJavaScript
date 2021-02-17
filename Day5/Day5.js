console.log('Exercise: Level 1')
//1)Declare an empty array
const a=Array()

//2)Declare an array with more than 5 number of elements
const arr=Array(8).fill(0)

//3)Find the length of your array
var sz=arr.length
console.log(sz)

//4)Get the first item, the middle item and the last item of the array
console.log(arr[0])
console.log(arr[sz/2])
console.log(arr[sz-1])

//5)Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedArr=Array()
mixedArr.push('Snigdha')
mixedArr.push('Sharma')
mixedArr.push(20184097)
mixedArr.push(3883)
mixedArr.push(343.216)
mixedArr.push(true)

//6)Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const Companies=['Facebook','Google','Apple','IBM','Oracle','Amazon']

//7)Print the array using console.log()
console.log(mixedArr)
console.log(Companies)

//8)Print the number of companies in the array
console.log(Companies.length)

//9)Print the first company, middle and last company
console.log('First Company: '+Companies[0])
console.log('Middle Company: '+Companies[Companies.length/2])
console.log('Last Company: '+Companies[Companies.length-1])

//10)Print out each company
for (i=0;i<Companies.length;i++)
{
    console.log(Companies[i])
}

//11)Change each company name to uppercase one by one and print them out
for(i=0;i<Companies.length;i++)
{
    console.log(Companies[i].toUpperCase())
}

//12)Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
var lastEl=Companies[Companies.length-1]
Companies.pop()
console.log(Companies.toString()+' and '+lastEl+' are big IT companies.')
Companies.push(lastEl)

//13)Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log(Companies.includes('Apple'))
console.log(Companies.includes('Salesforce'))

//14)Filter out companies which have more than one 'o' without the filter method
for(i=0;i<Companies.length;i++)
{
    var countO=0;
    for(j=0;j<Companies[i].length;j++)
    {
        if (Companies[i].charAt(j)=='o')
        {
            countO++;
        }
    }
    if (countO>=2)
    {
        console.log(Companies[i])
    }
}

//15)Sort the array using sort() method
Companies.sort()
console.log(Companies)

//16)Reverse the array using reverse() method
Companies.reverse()
console.log(Companies)

//17)Slice out the first 3 companies from the array
console.log(Companies.slice(0,3))

//18)Slice out the last 3 companies from the array
console.log(Companies.slice(Companies.length-3,Companies.length))

//19)Slice out the middle IT company or companies from the array
//Companies.pop()
if (Companies.length%2==0)
{
    console.log(Companies.slice(Companies.length/2-1,Companies.length/2+1))
}
else
{
    console.log(Companies.slice(Companies.length/2,Companies.length/2+1))
}

//20)Remove the first IT company from the array
console.log(Companies.splice(0,1))

//21)Remove the middle IT company or companies from the array
if (Companies.length%2==0)
{
    console.log(Companies.splice(Companies.length/2-1,2))
}
else
{
    console.log(Companies.splice(Companies.length/2,1))
}

//22)Remove the last IT company from the array
console.log(Companies.splice(Companies.length-1,1))

//23)Remove all IT companies
console.log(Companies.splice(0,Companies.length))

console.log('Exercise Level 2')
//1)Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file.
// Access both file in main.js file
console.log(countries)
console.log(webtechs)

//2)First remove all the punctuations and change the string to array and count the number of words in the array
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words=text.split(' ')
console.log(words)
console.log(words.length)

//3)In the following shopping cart add, remove, edit items

//const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//i) add 'Meat' in the beginning of your shopping cart if it has not been already added
//ii) add Sugar at the end of you shopping cart if it has not been already added
//iii) remove 'Honey' if you are allergic to honey
//iv) modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(shoppingCart[0]!='Milk')
{
    shoppingCart.unshift('Milk')
}
console.log(shoppingCart)
if(shoppingCart[shoppingCart.length-1]!='Sugar')
{
    shoppingCart.push('Sugar')
}
console.log(shoppingCart)
if (shoppingCart.includes('Honey'))
{
    shoppingCart.splice(3,1)
}
console.log(shoppingCart)
shoppingCart[2]='Green Tea'
console.log(shoppingCart)

//4)In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(countries.includes('Ethiopia'))
{
    console.log('ETHIOPIA')
}
else
{
    countries.push('Ethiopia')
}
console.log(countries)

//5)In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the 
//array.
if(webtechs.includes('Sass'))
{
    console.log('Sass is a preprocess')
}
else
{
    webtechs.push('Sass')
    console.log(webtechs)
}

//6)Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
fullStack=frontEnd.concat(backEnd)
console.log(fullStack)
//["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

console.log('Exercise Level 3')
//1)The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
ages.sort()
console.log(ages)
let minAge=ages[0],maxAge=ages[ages.length-1]
console.log("Maximum: "+maxAge)
console.log("Minimum: "+minAge)
let medianAge;
//Find the median age(one middle item or two middle items divided by two)
if(ages.length%2==0)
{
    medianAge=(ages[ages.length/2]+ages[ages.length/2 -1])/2
    console.log("Median: "+medianAge)
}
else
{
    medianAge=ages[ages.length/2]
    console.log("Median: "+medianAge)
}
//Find the average age(all items divided by number of items)
let agesum=0
for(let a=0;a<ages.length;a++)
{
    agesum+=ages[a]
}
let averageAge=agesum/ages.length
console.log("Average: "+averageAge)
//Find the range of the ages(max minus min)
let rangeAge=ages[ages.length-1]-ages[0]
console.log("Range: "+rangeAge)
//Compare the value of (min - average) and (max - average), use abs() method 
console.log(Math.abs((minAge-averageAge),(maxAge-averageAge)))
//Slice the first ten countries from the countries array
const tenCountries = countries.slice(0, Math.min(10, countries.length))
console.log(`Top 10 Countries : [${tenCountries}]`)

//Find the middle country(ies) in the countries array
const mid = countries[Math.floor(countries.length/2)]
if(countries.length % 2 == 0) 
{
    console.log(`Middle Countries : ${countries[Math.floor(countries.length/2)-1]}, ${mid}`)
}
else console.log(`Middle Country : ${mid}`)

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if(countries.length%2==0)
{
    console.log(countries.slice(0,countries.length/2))
    console.log(countries.slice(countries.length/2+1))
}
else
{
    console.log(countries.slice(0,countries.length/2-1))
    console.log(countries.slice(countries.length/2))
}