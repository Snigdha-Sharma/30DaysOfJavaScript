console.log('Exercise Level 1')
const countries = ['Estonia','Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','Kazhakistan','India','Nepal','Afghanistan','Bhutan','Sri Lanka']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//1)Explain the difference between forEach, map, filter, and reduce.
//forEach is used to iterate the array
//map iterates the array and simultaneously modifies all elements individually
//filter selects only some elements that satisfy our given condition
//reduce reduces the array to a single element after applying some condition on aggregate all elements

//2)Define a call function before you them in forEach, map, filter or reduce.
console.log('For Each')
let sum = 0;
numbers.forEach(num => console.log(num))
console.log(sum)

console.log('Map')
const numbersSquare = numbers.map((num) => num * num)
console.log(numbersSquare)

console.log('Filter')
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

console.log('Reduce')
const suma = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(suma)

//3)Use forEach to console.log each country in the countries array.
countries.forEach(el=>console.log(el))

//4)Use forEach to console.log each name in the names array.
names.forEach(name=>console.log(name))

//5)Use forEach to console.log each number in the numbers array.
numbers.forEach(num=>console.log(num))

//6)Use map to create a new array by changing each country to uppercase in the countries array.
console.log(countries.map(country=>country.toUpperCase()))

//7)Use map to create an array of countries length from countries array.
console.log(countries.map(country=>country.length))

//8)Use map to create a new array by changing each number to square in the numbers array
console.log(numbers.map(num=>num=num*num))

//9)Use map to change to each name to uppercase in the names array
console.log(names.map(name=>name.toUpperCase()))

//10)Use map to map the products array to its corresponding prices.
console.log(products.map(p=>p['product']+p['price']))

//11)Use filter to filter out countries containing land.
console.log(countries.filter(country=>country.endsWith('land')))

//12)Use filter to filter out countries having six character.
console.log(countries.filter(country=>country.length==6))

//13)Use filter to filter out countries containing six letters and more in the country array.
console.log(countries.filter(country=>country.length>=6))

//14)Use filter to filter out country start with 'E';
console.log(countries.filter(country=>country.startsWith('E')))

//15)Use filter to filter out only prices with values.
console.log(products.filter(p=>p['price']!='' && p['price']!=' '))

//16)Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr)
{
    let ans=new Array()
    for (let i=0;i<arr.length;i++)
    {
        if(typeof(arr[i])==typeof('a'))
            ans.push(arr[i])
    }
    return ans
}
console.log(getStringLists([1,2,'relax','chill',8.9,'orange','kharbooja']))

//17)Use reduce to sum all the numbers in the numbers array.
console.log(numbers.reduce((total,num)=>total+num,0))

//18)Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let lastCountry=countries.pop()
console.log(countries.reduce((cons,cont)=>cons+cont+', ','')+'and '+lastCountry+' are north European countries')

//19)Explain the difference between some and every
//some finds if there is some element in the aray that satisfies the given condition and every check if all elements satisfy given condition or not

//20)Use some to check if some names' length greater than seven in names array
console.log(names.some(name=>name.length>7))

//21)Use every to check if all the countries contain the word land
console.log(countries.every(country=>country.endsWith('land')))

//22)Explain the difference between find and findIndex.
//find return the first elemnt that satisfies a condition while findIndex returns its index

//23)Use find to find the first country containing only six letters in the countries array
console.log(countries.find(country=>country.length==6))

//24)Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countries.findIndex(country=>country.length==6))

//25)Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log(countries.findIndex(country=>country=='Norway'))

//26)Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(countries.findIndex(country=>country=='Russia'))

console.log('Exercise Level 2')
//1)Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice=parray=>{
    let sum=0
    const callback=function(el)
    {
        if(el['price']!='' && el['price']!=' ')
            sum+=el['price']
    }
    parray.forEach(callback)
    return sum
}

console.log(totalPrice(products))

//2)Find the sum of price of products using only reduce reduce(callback))
console.log(products.reduce((sum,val)=>val['price']+sum,0))

//3)Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as
// countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(countries)
{
    let ans={}
    ans['land']=countries.filter(country=>country.endsWith('land'))
    ans['ia']=countries.filter(country=>country.endsWith('ia'))
    ans['island']=countries.filter(country=>country.endsWith('island'))
    ans['stan']=countries.filter(country=>country.endsWith('stan'))
    return ans
}
console.log(categorizeCountries(countries))

//4)Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function letterWise(countries)
{
    let ans={}
    let letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i=0;i<letters.length;i++)
    {
        ans[letters[i]]=countries.filter(country=>country.startsWith(letters[i]))
    }
    return ans
}
console.log(letterWise(countries))
//5)Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries()
{
    if (countries.length<10)
    {
        return countries
    }
    else
    {
        return countries.slice(0,10)
    }
}
console.log(getFirstTenCountries())
//6)Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries()
{
    if (countries.length<10)
    {
        return countries
    }
    else
    {
        return countries.slice(countries.length-11,countries.length-1)
    }
}
console.log(getLastTenCountries())
//7)Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
function freqOfInitial(country)
{
    let letterMap={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25}
    country=country.toUpperCase()
    const freq=new Array(26).fill(0)
    for(let i=0;i<country.length;i++)
    {
        freq[letterMap[country[i]]]++
    }
    console.log(freq)
}
countries.forEach(country=>freqOfInitial(country))

console.log('Exercise Level 3')
//1)Use the countries information, in the data folder. Sort countries by name, by capital, by population
console.log(countriesA.sort((a,b)=>{
    if(a.name<b.name)
    {
        return -1
    }
    else
    {
        return 1
    }
}))

console.log(countriesA.sort((a,b)=>{
    if(a.capital<b.capital)
    {
        return -1
    }
    else
    {
        return 1
    }
}))

console.log(countriesA.sort((a,b)=>{
    if(a.population<b.population)
    {
        return -1
    }
    else
    {
        return 1
    }
}))

//2)Find the 10 most spoken languages:
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
console.log(mostSpokenLanguages(countriesA, 10))
console.log(mostSpokenLanguages(countriesA, 3))

//3)Use countries_data.js file create a function which create the ten most populated countries
function mostPopulatedCountries(countries,count)
{
    countries.sort((a,b)=>{
        if (a.population<b.population)
        {
            return 1
        }
        else
        {
            return -1
        }
    })
    countries=countries.slice(0,count)
    let ans=[]
    for(let i=0;i<count;i++)
    {
        ans.push({country:countries[i]['name'],population:countries[i]['population']})
    }
    return ans
}
console.log(mostPopulatedCountries(countriesA, 10))
console.log(mostPopulatedCountries(countriesA, 3))

//4)Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation).
// In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create 
//all the functions which do statistical calculations as method for the statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics=
{
    count:function(){
        return ages.length
    },
    sum:function(){
        return ages.reduce((total,age)=>total+age,0)
    },
    min:function(){
        return ages.reduce((ans,age)=>Math.min(ans,age),Infinity)
    },
    max:function(){
        return ages.reduce((ans,age)=>Math.max(ans,age),0)
    },
    range:function(){
        return Math.abs(statistics.min()-statistics.max())
    },
    mean:function(){
        return statistics.sum()/ages.length
    },
    median:function(){
        ages.sort()
        const mid = Math.floor(ages.length / 2)
        return ages.length % 2 !== 0 ? ages[mid] : (ages[mid - 1] + ages[mid]) / 2;
    },
    mode:function(){
        ages.sort((x, y) => x - y);
        var bestStreak = 1;
        var bestElem = ages[0];
        var currentStreak = 1;
        var currentElem = ages[0];
        for (let i = 1; i<ages.length; i++) 
        {
            if (ages[i-1] !== ages[i]) 
            {
                if (currentStreak > bestStreak) 
                {
                    bestStreak = currentStreak;
                    bestElem = currentElem;
                }
                currentStreak = 0;
                currentElem = ages[i];
            }
            currentStreak++;
        }
        return currentStreak > bestStreak ? {currentElem,currentStreak} : {bestElem,bestStreak};
    },
    variance:function(){
        let square=ages.map(age=>age*age)
        let sumSquare=square.reduce((sum,num)=>sum+num,0)
        sumSquare/=ages.length
        return sumSquare-(statistics.mean()*statistics.mean())
    },
    standardDeviation:function(){
        return Math.sqrt(statistics.variance())
    },
    frequencyDist:function(){
        let freq={}
        ages.forEach(age=>{
            if(freq[age]==undefined)
            {
                freq[age]=1
            }
            else
            {
                freq[age]++
            }
        })
        let ans=[]
        let total=ages.length
        let keys=Object.keys(freq)
        let values=Object.values(freq)
        for (let i=0;i<keys.length;i++)
        {
            ans.push({age:keys[i],percentage:(values[i]*100)/total})
        }
        return ans
    }
}

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.variance()) // 17.5
console.log('Standard Deviation: ', statistics.standardDeviation()) // 4.2
console.log('Frequency Distribution: ',statistics.frequencyDist())