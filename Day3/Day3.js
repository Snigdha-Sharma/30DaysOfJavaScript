console.log('Exercise Level 1:')
//1) Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName='Snigdha'
let lastName='Sharma'
let country='India'
let city='Lucknow'
let age=21
let isMarried=false
let year=2021
console.log(firstName+lastName+country+city+age+isMarried+year)

//2)Check if type of '10' is equal to 10
console.log('10'===10)

//3)Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8')===10)

//4)Boolean value is either true or false.

//Write three JavaScript statement which provide truthy value.
//Write three JavaScript statement which provide falsy value.
console.log(typeof(10)=='number')
console.log(4>3)
console.log(true)
console.log(null)
console.log(NaN)
console.log(false)

//5)Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//4 > 3
//4 >= 3
//4 < 3
//4 <= 3
//4 == 4
//4 === 4
//4 != 4
//4 !== 4
//4 != '4'
//4 == '4'
//4 === '4'
//Find the length of python and jargon and make a falsy comparison statement.

console.log('4>3: '+(4>3))
console.log('4>=3: '+(4>=3))
console.log('4<3: '+(4<3))
console.log('4<=3: '+(4<=3))
console.log('4==4: '+(4==4))
console.log('4===4: '+(4===4))
console.log('4!=4: '+(4!=4))
console.log('4!==4: '+(4!==4))
console.log('4!=\'4\': '+(4!='4'))
console.log('4==\'4\': '+4=='4')
console.log('4===\'4\': '+(4==='4'))
s1='python'
s2='jargon'
console.log(s1.length==s2.length)

//6)Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

//4 > 3 && 10 < 12
//4 > 3 && 10 > 12
//4 > 3 || 10 < 12
//4 > 3 || 10 > 12
//!(4 > 3)
//!(4 < 3)
//!(false)
//!(4 > 3 && 10 < 12)
//!(4 > 3 && 10 > 12)
//!(4 === '4')
//There is no 'on' in both dragon and python

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
s1='dragon'
s2='python'
console.log(s1.match(/on/))
console.log(s2.match(/on/))

//7) Use the Date object to do the following activities

//What is the year today?
//What is the month today as a number?
//What is the date today?
//What is the day today as a number?
//What is the hours now?
//What is the minutes now?
//Find out the numbers of seconds elapsed from January 1, 1970 to now.

const now=new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())

console.log('Exercise : Level 2')
//1)Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

//Enter base: 20
//Enter height: 10
//The area of the triangle is 50
function areaOfTriangle()
{
    var base=prompt("Enter length of base of triangle:","length of base")
    var height=prompt("Enter length of height of triangle:","length of height")
    var area=(parseInt(base)*parseInt(height))/2
    console.log('The area of the triangle is '+area)
}

//2) Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
//Enter side a: 5
//Enter side b: 4
//Enter side c: 3
//The perimeter of the triangle is 12
function perimeterOfTriangle()
{
    var a=prompt("Length of side 1:","a")
    var b=prompt("Length of side 2:","b")
    var c=prompt("Length of side 3:","c")
    var perimeter=parseInt(a)+parseInt(b)+parseInt(c)
    console.log('The perimeter of the triangle is '+perimeter)
}

//3)Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
function areaAndPerimeterOfRectangle()
{
    var length=prompt("Length of rectangle:","length")
    var width=prompt("Width of rectangle:","width")
    var area=parseInt(length)*parseInt(width)
    var perimeter=(parseInt(length)+parseInt(width))*2
    console.log('The area of the rectangle is '+area)
    console.log('The perimeter of the rectangle is '+perimeter)
}

//4)Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
function areaAndCircumferenceOfCircle()
{
    const pi=3.14
    var radius=prompt("Enter radius of circle:","radius")
    radius=parseInt(radius)
    console.log('Area is ',pi*radius*radius)
    console.log('Circumference is ',2*pi*radius)
}

//5)Calculate the slope, x-intercept and y-intercept of y = 2x -2
console.log("Slope: 2")
console.log("x-intercept: 1")
console.log("y-intercept: -2")
var slope1=2

//6)Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
var x1=2,y1=2,x2=6,y2=10
var m=y2-y1/x2-x1
console.log(m)

//7)Compare the slope of above two questions
console.log(slope1>m)

//8)Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
var x=-3
console.log(x**2+6*x+9)

//9)Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
//Enter hours: 40
//Enter rate per hour: 28
//Your weekly earning is 1120
function calculatePay()
{
    var hours=prompt("Enter hours of work: ","hours of work")
    var rph=prompt("Enter rate per hour: ","rate per hour")
    console.log('Your weekly earning is ',parseInt(hours)*parseInt(rph))
}

//10)If the length of your name is greater than 7 say, your name is long else say your name is short
var myName='Snigdha'
if (name.length>7)
{
    console.log('Long')
}
else
{
    console.log('Short')
}

//11)Compare your first name length and your family name length and you should get this output.
//let firstName = 'Asabeneh'
//let lastName = 'Yetayeh'
//Your first name, Asabeneh is longer than your family name, Yetayeh

firstName='Snigdha'
lastName='Sharma'
if (firstName.length>lastName.length)
{
    console.log('Your first name, '+firstName+' is longer than your family name,'+lastName)
}
else
{
    console.log('Your first name, '+firstName+' is shorter than your family name,'+lastName)
}

//12)Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
console.log('I am '+(myAge-yourAge)+' years older than you')

//13) Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

//Enter birth year: 1995
//You are 25. You are old enough to drive

//Enter birth year: 2005
//You are 15. You will be allowed to drive after 3 years.

function canDrive()
{
    var yearOfBirth=prompt("Enter your year of birth: ","Birth Year")
    var currYear=now.getFullYear()
    if (currYear-yearOfBirth<18)
    {
        console.log('You are '+(currYear-yearOfBirth)+'. You will be allowed to drive after'+(18-currYear+yearOfBirth)+' years.')
    }
    else
    {
        console.log('You are '+(currYear-yearOfBirth)+'. You are old enough to drive')
    }
}

//14)Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

//Enter number of yours you live: 100
//You lived 3153600000 seconds.

function timeLeftToLive()
{
    var yearsLived=prompt('Enter number of years lived','years lived')
    var yearsLeft=100-yearsLived
    console.log('Minutes Left: '+(yearsLeft*365*24*60))
}

//15)Create a human readable time format using the Date time object

//YYYY-MM-DD HH:mm
//DD-MM-YYYY HH:mm
//DD/MM/YYYY HH:mm

console.log(now.getFullYear()+'-'+now.getMonth()+1+'-'+now.getDate()+' '+now.getHours()+':'+now.getMinutes())
console.log(now.getDate()+'-'+now.getMonth()+1+'-'+now.getFullYear()+' '+now.getHours()+':'+now.getMinutes())
console.log(now.getDate()+'/'+now.getMonth()+1+'/'+now.getFullYear()+' '+now.getHours()+':'+now.getMinutes())

console.log('Exercise: Level 3')
//1)Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should 
//be 05 )YYYY-MM-DD HH:mm eg. 20120-01-02 07:05
var h=now.getHours()
if (h<10)
{
    h='0'+h
}
var m=now.getMinutes()
if (m<10)
{
    m='0'+m
}
console.log(now.getFullYear()+'-'+now.getMonth()+1+'-'+now.getDate()+' '+h+':'+m)

