console.log('Exercise Level 1')
//1)Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal
{
    constructor(name,age,color,legs)
    {
        this.name=name
        this.age=age
        this.color=color
        this.legs=legs
    }
    set setName(name)
    {
        this.name=name
    }
    set setAge(age)
    {
        this.age=age
    }
    set setColor(color)
    {
        this.color=color
    }
    set setLegCount(legs)
    {
        this.legs=legs
    }
    get getName()
    {
        return this.name
    }
    get getAge()
    {
        return this.age
    }
    get getColor()
    {
        return this.color
    }
    get getLegCount()
    {
        return this.legs
    }
    getAnimalInfo()
    {
        return 'The given animal has name '+this.name+' ,age '+this.age+' and is of '+this.color+' color. It has '+this.legs+' legs.'
    }
}

//2)Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal
{
    sound()
    {
        console.log('Woof Woof!')
    }
    getAnimalInfo()
    {
        return 'The given animal has name '+this.name+' ,age '+this.age+' and is of '+this.color+' color. It has '+this.legs+' legs. It makes '+this.sound()+' sound.'
    }
}
class Cat extends Animal
{
    constructor(name,age,color,legs)
    {
        super(name,age,color,legs)
    }
    sound()
    {
        console.log('Meow Meow!')
    }
    getAnimalInfo()
    {
        return 'The given animal has name '+this.name+' ,age '+this.age+' and is of '+this.color+' color. It has '+this.legs+' legs. The animal is a cat.'
    }
}
console.log('Exercise Level 2')
//1)Override the method you create in Animal class
const catObj=new Cat('Kitty',5,'Copper Brown',4)
console.log(catObj.getAnimalInfo())

console.log('ExerciseLevel 3')
//1)Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard 
//deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics 
//and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

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
console.log('Frequency Distribution: ',statistics.frequencyDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38),
// (4.0, 29), (4.0, 25)]
//2)Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense
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