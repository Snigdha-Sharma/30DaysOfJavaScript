console.log('Exercise Day 19')
console.log('Exercise: Level 1')
//1)Create a closure which has one inner function
function outerFunction()
{
    let count=0;
    function innerFunction() 
    {
        count++
        return count
    }
    return innerFunction
}
const innerFunc = outerFunction()
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
console.log('Exercises: Level 2')   
//1)Create a closure which has three inner functions
function outer()
{
    let num=216
    function addTwo()
    {
        num=num+2
        return num
    }
    function subtractTwo()
    {
        num=num-2
        return num
    }
    function multiplyTwo()
    {
        num=num*2
        return num
    }
    return {
        addTwo:addTwo(),
        subtractTwo:subtractTwo(),
        multiplyTwo:multiplyTwo()
    }
}
const allFunc=outer()
console.log(allFunc.addTwo)
console.log(allFunc.subtractTwo)
console.log(allFunc.multiplyTwo)
console.log('Exercises: Level 3')
//1)Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome,
// addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
function personAccount()
{
    let firstname='Snigdha',lastname='Sharma',income,expense
    let incomes=[1000,2000,1340,5670],expenses=[100,56,789]
    function totalIncome()
    {
        return incomes.reduce((total,income)=>total+income,0)
    }
    function totalExpense()
    {
        return expenses.reduce((total,expense)=>total+expense,0)
    }
    function accountInfo()
    {
        return 'Account belongs to '+firstname+' '+lastname+'. The total income is '+totalIncome()+'. The total expenses are '+totalExpense()+'. The account balance is '+(totalIncome()-totalExpense())
    }
    function addIncome(income)
    {
        incomes.push(income)
    }
    function addExpense(expense)
    {
        expenses.push(expense)
    }
    function accountBalance()
    {
        return totalIncome()-totalExpense()
    }
    return {
        totalIncome:totalIncome(),
        totalExpense:totalExpense(),
        accountInfo:accountInfo(),
        addIncome:addIncome(2000)
    }
}
const resultFunc=personAccount()
console.log(resultFunc.totalIncome)
console.log(resultFunc.totalExpense)
console.log(resultFunc.accountInfo)

