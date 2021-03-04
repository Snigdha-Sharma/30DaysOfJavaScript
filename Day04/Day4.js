console.log('Exercise: Level 1')
//1)Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating 
//to wait for the number of years he neds to turn 18.
//Enter your age: 30
//You are old enough to drive.
//Enter your age:15
//You are left with 3 years to drive.
function canDrive()
{
    const now=new Date()
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

//2)Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter 
//your age:”) to get the age as input.
//Enter your age: 30
//You are 5 years older than me.
function diffAges()
{
    var myAge=21
    var yourAge=prompt('Enter your age: ','your age')
    if (myAge>yourAge)
    {
        console.log('I am '+(myAge-yourAge)+' years older than you')
    }
    else
    {
        console.log('You are '+(yourAge-myAge)+' years older than me')
    }
}

//3)If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//using if else
//ternary operator.
//  let a = 4
//  let b = 3
//  4 is greater than 3

a=48
b=45
if (a>b)
{
    console.log('a is greater than b')
}
else
{
    console.log('a is less than b')
}

a>b?console.log('a is greater than b'):console.log('a is less than b')

//4)Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

//Enter a number: 2
//2 is an even number

//Enter a number: 9
//9 is is an odd number.

function evenOdd()
{
    var num=prompt("Enter number",'Number')
    if (num%2==0)
    {
        console.log('Even')
    }
    else
    {
        console.log('Odd')
    }
}

console.log('Exercise: Level 2')
//1)Write a code which can give grades to students according to theirs scores:
//80-100, A
//70-89, B
//60-69, C
//50-59, D
//0-49, F

var marks=15
if (marks<50)
{
    console.log('F')
}
else if (marks<60)
{
    console.log('D')
}
else if (marks<70)
{
    console.log('C')
}
else if (marks<90)
{
    console.log('B')
}
else
{
    console.log('A')
}

//2)Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring
//June, July or August, the season is Summer

function findSeason()
{
    var month=prompt("Enter full month name with first letter capital:")
    month=month.toLowerCase()
    if (month=='september' || month=='october' || month=='novembor')
    {
        console.log('Autumn')
    }
    else if (month=='december' || month=='january' || month=='february')
    {
        console.log('Winter')
    }
    else if (month=='march' || month=='april' || month=='may')
    {
        console.log('Spring')
    }
    else
    {
        console.log('Summer')
    }
}

//3)Check if a day is weekend day or a working day. Your script will take day as an input.
//What is the day  today? Saturday
//Saturday is a weekend.

//What is the day today? saturDaY
//Saturday is a weekend.

//What is the day today? Friday
//Friday is a working day.

//What is the day today? FrIDAy
//Friday is a working day.

function typeOfDay()
{
    var day=prompt('What day is today?','Enter day')
    day=day.toLowerCase()
    if (day=='sunday' || day=='saturday')
    {
        console.log('Weekend')
    }
    else
    {
        console.log('Working Day')
    }
}

console.log('Exercise: Level 3')
//1)Write a program which tells the number of days in a month.
/*  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.*/

function monthDays()
{
    var month=prompt('Enter month','Month')
    month=month.toLowerCase()
    if (month=='february')
    {
        console.log(28)
    }
    else if (month=='january' || month=='march' || month=='may' || month=='july' || month=='august' || month=='october' || month=='december')
    {
        console.log(31)
    }
    else
    {
        console.log(30)
    }
}

//2)Write a program which tells the number of days in a month, now consider leap year.
function monthDays2()
{
    var month=prompt('Enter month','Month')
    var year=prompt('Enter year','Year')

    month=month.toLowerCase()
    if (month=='february')
    {
        if (year%400==0)
        {
            console.log(29)
        }
        else if (year%100==0)
        {
            console.log(28)
        }
        else if (year%4==0)
        {
            console.log(29)
        }
        else
        {
            console.log(28)
        }
    }
    else if (month=='january' || month=='march' || month=='may' || month=='july' || month=='august' || month=='october' || month=='december')
    {
        console.log(31)
    }
    else
    {
        console.log(30)
    }
}