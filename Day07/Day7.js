console.log('Exercise Level 1')

//1)Declare a function fullName and it print out your full name.
function fullName()
{
    console.log('Snigdha Sharma')
}
fullName()
//2)Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName1(firstName,lastName)
{
    console.log(firstName,lastName)
}
fullName1('Snigdha','Sharma')

//3)Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a,b)
{
    return a+b
}
console.log(addNumbers(5,6))

//4)An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length,width)
{
    return length*width
}
console.log(areaOfRectangle(5,7))

//5)A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length,width)
{
    return 2*(length+width)
}
console.log(perimeterOfRectangle(5,6))

//6)A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length,width,height)
{
    return length*width*height
}
console.log(volumeOfRectPrism(4,5,6))

//7)Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r,pi=3.14)
{
    return pi*r*r
}
console.log(areaOfCircle(4))

//8)Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r,pi=3.14)
{
    return 2*pi*r
}
console.log(circumOfCircle(9))

//9)Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass,volume)
{
    return mass/volume
}
console.log(density(6,7))

//10)Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed 
//of a moving object, speed.
function speed(distance,time)
{
    return distance/time
}
console.log(6,8)

//11)Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass,gravity=9.8)
{
    return mass*gravity
}
console.log(weight(9))

//12)Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(temp)
{
    return ((temp*9)/5) +32
}
console.log(convertCelciusToFahrenheit(56))

//13)Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define
// different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function BMI(weight,height)
{
    return weight/(height*height)
}
let bmi=BMI(49,1.5)
if(bmi<18.5)
{
    console.log('underweight')
}
else if(bmi<24.9)
{
    console.log('normal weight')
}
else if(bmi<29.9)
{
    console.log('overweight')
}
else
{
    console.log('obese')
}
//14)Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month)
{
    month=month.toLowerCase()
    if (month=='december' || month=='january' || month=='february')
    {
        console.log('Winter')
    }
    else if(month=='march' || month=='april' || month=='may')
    {
        console.log('Spring')
    }
    else if(month=='june' || month=='july' || month=='august')
    {
        console.log('Summer')
    }
    else
    {
        console.log('Autumn')
    }
}
checkSeason('December')
//15)Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

function maxArg(a,b,c)
{
    return Math.max(a,Math.max(b,c))
}
console.log(maxArg(4,56,-9))

console.log('Exercise Level 2')
//1)Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a=1,b=1,c=1)
{
    return -c/a;
}
console.log(solveLinEquation(2,3,4))

//2)Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadratic(a,b,c)
{
    let discriminant = b*b - 4*a*c,x1,x2,realPart,imaginaryPart,root1,root2;
    if (discriminant>0) 
    {
        x1 = (-b + Math.sqrt(discriminant)) / (2*a);
        x2 = (-b - Math.sqrt(discriminant)) / (2*a);
        return {x1,x2}
    }
    else if (discriminant == 0) 
    {
        x1 = (-b + Math.sqrt(discriminant)) / (2*a);
        return x1 
    }
    else 
    {
        realPart = -b/(2*a);
        imaginaryPart =Math.sqrt(-discriminant)/(2*a);
        root1=realPart+'+'+imaginaryPart+'i'
        root2=realPart+'-'+imaginaryPart+'i'
        return {root1,root2}
    }
}

//console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
//3)Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i])
    }
}
const a=[1,2,3,4,5,6,7,8,9,0]
printArray(a)

//4)Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08

function showDateTime(date)
{
    console.log(d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()+' '+d.getHours()+':'+d.getMinutes())
}

var d=new Date()
showDateTime(d)

//5)Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
function swapValues()
{
    let t=x
    x=y
    y=t
}
let x=8,y=9
console.log('x='+x+',y='+y)
swapValues()
console.log('x='+x+',y='+y)

//6)Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr)
{
    console.log("Before")
    console.log(arr)
    for(let i=0,j=arr.length-1;i<j;i++,j--)
    {
        let t=arr[i]
        arr[i]=arr[j]
        arr[j]=t
    }
    console.log('After')
    console.log(arr)
}
reverseArray([1,2,3,45,5,6,7,7,8,8,0])
//console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
//console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
//7)Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        arr[i]=arr[i].toUpperCase()
    }
    return arr;
}
console.log(capitalizeArray(['asfs','d','g','jk','qdxa','ds','DAX']))

//8)Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item)
{
    arr.push(item)
}
const arr=['asfs','d','g','jk','qdxa','ds','DAX']
addItem('snigdha')
console.log(arr)

//9)Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index)
{
    arr.splice(index,1)
}
removeItem(3)
console.log(arr)

//10)Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(n)
{
    return (n*(n+1))/2
}
console.log(sumOfNumbers(56))
//11)Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(n)
{
    let ans=0
    for(let i=1;i<=n;i=i+2)
    {
        ans=ans+i
    }
    return ans
}
console.log(sumOfOdds(99))
//12)Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEvens(n)
{
    let ans=0
    for(let i=2;i<=n;i+=2)
    {
        ans=ans+i
    }
    return ans
}
console.log(sumOfEvens(99))

//13)Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(n)
{
    if(n%2==0)
    {
        console.log('The number of evens are '+n/2)
        console.log('The number of odds are '+n/2)
    }
    else
    {
        console.log('The number of odds are '+n/2+1)
        console.log('The number of evens are '+n/2)
    }
}

evensAndOdds(100);
//The number of odds are 50.
// The number of evens are 51.

//14)Write a function which takes any number of arguments and return the sum of the arguments

const sum=(...args)=>{
    let s=0;
    for(const el of args)
    {
        s+=el
    }
    return s
}
console.log(sum(44,53,24,22))
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4))

//15)Write a function which generates a randomUserIp.
function randomUserIp()
{
    var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
    return ip
}
console.log(randomUserIp())

//16)Write a function which generates a randomMacAddress
function randomMacAddress()
{
    var hexDigits = "0123456789ABCDEF";
    var macAddress = "";
    for (var i = 0; i < 6; i++) {
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        if (i != 5) macAddress += ":";
    }

    return macAddress;
}
console.log(randomMacAddress())
//17)Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  console.log(random_hex_color_code())

//18)Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

function userIdGenerator()
{
    let possibleChars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    let randChar7=''
    for(let i=0;i<7;i++)
    {
        randChar7=randChar7+possibleChars[Math.floor(Math.random()*possibleChars.length)]
    }
    return randChar7
}
console.log(userIdGenerator());
// 41XTDbE

console.log('Exercise Level 3')
//1)Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is 
//the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser()
{
    var count=prompt('Enter number of characters')
    var noOfIDs=prompt('Enter number of IDs')
    let possibleChars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    const allids=new Array()
    for(let i=0;i<noOfIDs;i++)
    {
        let randID=''
        for(let j=0;j<count;j++)
        {
            randID=randID+possibleChars[Math.floor(Math.random()*possibleChars.length)]
        }
        allids.push(randID)
    }
    console.log(allids)
}
//userIdGeneratedByUser()

//2)Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator()
{
    let R=Math.floor(Math.random()*256),G=Math.floor(Math.random()*256),B=Math.floor(Math.random()*256)
    let ans='rgb('+R+','+G+','+B+')'
    return ans
}
console.log(rgbColorGenerator())

//3)Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors()
{
    let count=Math.random()*100+1
    const ans=new Array()
    for(let i=0;i<count;i++)
    {
        ans.push(random_hex_color_code())
    }
    console.log(ans)
}
arrayOfHexaColors()

//4)Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors()
{
    let count=Math.random()*100+1
    const ans=new Array()
    for(let i=0;i<count;i++)
    {
        ans.push(rgbColorGenerator())
    }
    console.log(ans)
}
arrayOfRgbColors()

//5)Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hex)
{
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
console.log(convertHexaToRgb("#0033ff"))
//6)Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function componentToHex(c) 
{
    var hex=c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function convertRgbToHexa(r, g, b) 
{
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
console.log(convertRgbToHexa(3,4,67))
//7)Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(type,count)
{
    const colors=new Array()
    if(type=='hexa')
    {
        for(let i=0;i<count;i++)
        {
            colors.push(random_hex_color_code())
        }
    }
    else
    {
        for(let i=0;i<count;i++)
        {
            for(let i=0;i<count;i++)
            {
                colors.push(rgbColorGenerator())
            }
        }
    }
    return colors
}
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
//8)Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) 
{
    var currentIndex=array.length,temporaryValue,randomIndex
    // While there remain elements to shuffle...
    while (0 !== currentIndex) 
    {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }  
    return array;
}
  
// Used like so
var arr1 = [2, 11, 37, 42];
shuffleArray(arr1);
console.log(arr1);
//9)Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(n)
{
    if(n<=1)
    {
        return 1
    }
    return n*factorial(n-1)
}
console.log(factorial(10))
//10)Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(arg)
{
    if(arg=="")
    {
        return true
    }
    return false
}
console.log(isEmpty('er'))
//11)Call your function sum, it takes any number of arguments and it returns the sum.

const suma=(...args)=>{let s=0
for(let i=0;i<args.length;i++)
{
    s=s+args[i]
}
return s}
console.log(suma(9,0,5,6,7,8,34))

//12)Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arr)
{
    let sum=0
    for(let i=0;i<arr.length;i++)
    {
        if(typeof(arr[i])==typeof(8))
        {
            sum+=arr[i]
        }
        else
        {
            return 'All inputs are not numbers'
        }
    }
    return sum
}
console.log(sumOfArrayItems([1,2,3,44,56,'sad']))
console.log(sumOfArrayItems([1,4,6.567]))

//13)Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. 
//If not give return reasonable feedback.

function average(arr)
{
    let avg=0
    for(let i=0;i<arr.length;i++)
    {
        if(typeof(arr[i])==typeof(8))
        {
            avg+=arr[i]
        }
        else
        {
            return 'All inputs are not numbers'
        }
    }
    return avg/arr.length
}
console.log(average([1,2,3,44,56,'sad']))
console.log(average([1,4,6.567]))

//14)Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five 
//it return 'item not found'.

function modifyArray(arr)
{
    if(arr.length<5)
    {
        console.log('Not Found')
    }
    else
    {
        arr[4]=arr[4].toUpperCase()
        console.log(arr)
    }
}

modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'])
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM'])
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
modifyArray(['Google', 'Facebook','Apple', 'Amazon'])
//   'Not Found'

//15)Write a function called isPrime, which checks if a number is prime number.
function isPrime(n)
{
    if (n <= 1)
        return false;
 
    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
 
    return true;
}
console.log(isPrime(19))
console.log(isPrime(21))
//16)Write a functions which checks if all items are unique in the array.
function isUnique(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(i!=j)
            {
                if(arr[i]==arr[j])
                {
                    return false
                }
            }
        }
    }
    return true
}
console.log(isUnique(['a','b','c','d','d']))
//17)Write a function which checks if all the items of the array are the same data type.
function isSameType(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        if(typeof(arr[i])==typeof(arr[i-1]))
        {

        }
        else
        {
            return false
        }
    }
    return true
}
console.log(isSameType([12,'reeta']))

//18)JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(variable)
{
    if(variable.length==0)
    {
        return false
    }
    for(let i=0;i<variable.length;i++)
    {
        if (i==0)
        {
            if (variable[i]=='_' || variable[i]=='$' || (variable[i]>='0' && variable[i]<='9'))
            {

            }
            else
            {
                return false;
            }
        }
        else
        {
            if((variable[i]>='a' && variable[i]<='z') || (variable[i]>='A' && variable[i]<='Z') || variable[i]=='_' || variable[i]=='$' || (variable[i]>='0' && variable[i]<='9'))
            {

            }
            else
            {
                return false;
            }
        }
    }
    return true
}

//19)Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function sevenRandomNumbers()
{
    const arr=new Array()
    while(arr.length<7)
    {
        let num=Math.floor(Math.random()*10)
        if(!arr.includes(num))
        {
            arr.push(num)
        }
    }
    return arr
}
console.log(isValidVariable('$%'))

console.log(sevenRandomNumbers())
// [(1, 4, 5, 7, 9, 8, 0)]
//20)Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries()
{
    const copy=new Array()
    for(let i=0;i<countries.length;i++)
    {
        copy.push(countries[i])
    }
    copy.reverse()
    return copy
}
console.log(reverseCountries())