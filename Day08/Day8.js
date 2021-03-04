console.log('Exercise Level 1')
//1)Create an empty object called dog
let dog={}
//2)Print the the dog object on the console
console.log(dog)
//3)Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog={
    name:'Missie',
    legs:4,
    color:'Brown',
    age:5,
    bark:function(){
        return 'Woof Woof'
    }
}
//4)Get name, legs, color, age and bark value from the dog object
console.log(dog)
//5)Set new properties the dog object: breed, getDogInfo
dog.breed='Pamelian'
dog.getDogInfo=function(){
    return this
}

console.log('Exercise Level 2')

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
//1)Find the person who has many skills in the users object.
let ans=0
let who=''
for(const user in users)
{
    if(users[user]['skills'].length>ans)
    {
        ans=users[user]['skills'].length
        who=user
    }
}
console.log(who)

//2)Count logged in users,count users having greater than equal to 50 points from the following object.
let loggedInCount=0,greaterpoints=0
for(const user in users)
{
    if(users[user]['isLoggedIn']==true)
    {
        loggedInCount++
    }
    if(users[user]['points']>=50)
    {
        greaterpoints++
    }
}
console.log(loggedInCount)
console.log(greaterpoints)

//3)Find people who are MERN stack developer from the users object
for(const user in users)
{
    if(users[user]['skills'].includes('MongoDB') && users[user]['skills'].includes('Express') && users[user]['skills'].includes('React') && 
    users[user]['skills'].includes('Node'))
    {
        console.log(user)
    }
}
//4)Set your name in the users object without modifying the original users object
const copyUsers=Object.assign({},users)
copyUsers['Snigdha']={email:'snigdhas2012@gmail.com',
skills:['HTML','JavaFX','Javascript'],
age:21,
isLoggedIn:true,
points:49}
console.log(copyUsers)
//5)Get all keys or properties of users object
const keys=Object.keys(copyUsers)
console.log(keys)
//6)Get all the values of users object
const values=Object.values(copyUsers)
console.log(values)
//7)Use the countries object to print a country name, capital, populations and languages.
const countries={
    name:'India',
    capital:'New Delhi',
    population:136640000,
    languages:['Hindi','English','Marathi','Punjabi','Tamil','Telugu']
}
console.log(countries)

console.log('Exercise Level 3')
//1)Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome,
// addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount={
    firstName:'Snigdha',
    lastName:'Sharma',
    incomes:[90000,10000,4000,6000],
    expenses:[50000,1234,4000,5000],
    totalIncome:function(){
        let totalIncome=0
        for(const income in incomes)
        {
            totalIncome+=income
        }
        return totalIncome
    },
    totalExpense:function(){
        let totalExpense=0
        for(const expense in expenses)
        {
            totalExpense+=expense
        }
        return totalExpense
    },
    accountInfo:function(){
        return this
    },
    addIncome:function(income){
        incomes.push(income)
    },
    addExpense:function(expense){
        expenses.push(expense)
    },
    accountBalance:function(){
        return totalIncome()-totalExpense()
    }
}
console.log(personAccount)
const newusers = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

//2)a)Imagine you are getting the above users collection from a MongoDB database. Create a function called signUp which allows user to add to the collection. If user 
//exists, inform the user that he has already an account.
newusers['signup']=function(uname){
    for(let i=0;i<newusers.length;i++)
    {
        if(newusers[i]['username']==uname)
        {
            return 'Account already exists!'
        }
    }
    newusers[newusers.length]={username:uname}
    return 'User added'
}
console.log(newusers.signup('Snigdha'))
console.log(newusers.signup('Alex'))
console.log(newusers)
//b) Create a function called signIn which allows user to sign in to the application
newusers['signin']=function(uname){
    for(let i=0;i<newusers.length;i++)
    {
        if(newusers[i]['username']==uname)
        {
            newusers[i]['isLoggedIn']=true
            return 'Logged in successfully!'
        }
    }
    return 'User does not exist!'
}
console.log(newusers.signin('Snigdha'))
console.log(newusers.signin('Lori'))

//3)The products array has three elements and each of them has six properties. 
//a) Create a function called rateProduct which rates the product 

products['rateProduct']=function(userid,rating,pid){
    for (let i=0;i<newusers.length;i++)
    {
        if(newusers[i]['_id']==userid)
        {
            for(let j=0;j<products.length;j++)
            {
                if(products[j]['_id']==pid)
                {
                    products[j]['ratings'].push({userId:userid,rate:rating})
                }
            }
            return 'Rated successfully!'
        }
    }
    return 'User does not exist'
}
console.log(products.rateProduct('hedfcg',4.5,'hedfcg'))
console.log(products.rateProduct('ab12ex',3.4,'hedfcg'))
console.log(products)

//b) Create a function called averageRating which calculate the average rating of a product
products['averageRating']=function(pid){
    for(let i=0;i<products.length;i++)
    {
        if(products[i]['_id']==pid)
        {
            let sum=0
            for(let j=0;j<products[i]['ratings'].length;j++)
            {
                sum+=products[i]['ratings'][j]['rate']
            }
            return sum/products[i]['ratings'].length
        }
    }
    return 'Product not found!'
}
console.log(products.averageRating('hedfcg'))

//4)Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
products['likeProduct']=function(pid,uid){
    for(let j=0;j<newusers.length;j++)
    {
        if(newusers[j]['_id']==uid)
        {
            //console.log('User found')
            for(let i=0;i<products.length;i++)
            {
                if(products[i]['_id']==pid)
                {
                    //console.log('Product found')
                    if(products[i]['likes'].includes(uid))
                    {
                        products[i]['likes'].splice(products[i]['likes'].indexOf(uid),1)
                        console.log('Successfully unliked')
                    }
                    else
                    {
                        products[i]['likes'].push(uid)
                        console.log('Successfully liked')
                    }
                }
            }
            return 'Product not found'
        }
    }
    return 'User not found'
}
products.likeProduct('aegfal','fg12cy')
products.likeProduct('hedfcg','zwf8md')
console.log(products)

