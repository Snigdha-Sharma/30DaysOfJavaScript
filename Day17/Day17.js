console.log("Day 17")
console.log('Exercise Level 1')
//1)Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('FirstName','Snigdha')
localStorage.setItem('LastName','Sharma')
localStorage.setItem('Age',21)
localStorage.setItem('Country','India')
localStorage.setItem('City','Lucknow')

console.log(localStorage.getItem('FirstName'))
console.log(localStorage.getItem('LastName'))
console.log(localStorage.getItem('Age'))
console.log(localStorage.getItem('Country'))
console.log(localStorage.getItem('City'))
console.log('Exercise Level 2')
//1)Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object
// in your browser localStorage.
let student={
    'FirstName':'Snigdha',
    'LastName':'Sharma',
    'Age':21,
    'Skills':['Java','JavaFX','PHP','HTML','Javascript'],
    'Country':'India'
}
const stud=JSON.stringify(student,undefined,4)
localStorage.setItem('student',stud)
console.log(localStorage.getItem('student'))
console.log('Exercise Level 3')
//Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense
// and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount
{
    constructor(firstName,lastName,incomes,expenses)
    {
        this.firstName=firstName
        this.lastName=lastName
        this.incomes=incomes
        this.expenses=expenses
    }
    totalIncome()
    {
        return this.incomes['amount'].reduce((total,income)=>income+total,0)
    }
    totalExpenses()
    {
        return this.expenses['amount'].reduce((total,expense)=>expense+total,0)
    }
    accountInfo()
    {
        return 'The name of accountholder is '+this.firstName+this.lastName
    }
    addIncome(income)
    {
        this.incomes.push(income)
    }
    addExpense(expense)
    {
        this.expenses.push(expense)
    }
    accountBalance()
    {
        return this.totalIncome()-this.totalExpenses()
    }
}
const p=new PersonAccount('Snigdha','Sharma',[{'desc':'Monthly Salary','amount':100000},{'desc':'Money from renters','amount':30000}],[{'desc':'Income Tax','amount':50000},{'desc':'Daily Expenditure','amount':1000},{'desc':'Newspaper','amount':300}])
console.log(p)