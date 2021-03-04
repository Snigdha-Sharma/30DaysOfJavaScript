console.log('Day 11')
console.log('Exercise: Level 1')

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

//1)Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
let [e,pi,gravity,humanBodyTemp,waterBoilingTemp]=constants
console.log('e:'+e+',pi:'+pi+',gravity:'+gravity+',Human Body Temperature:'+humanBodyTemp+',Water Boiling Temperature:'+waterBoilingTemp)

//2)Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin,est,sw,den,nor]=countries
console.log('fin:'+fin+',est:'+est+',sw:'+sw+',den:'+den+',nor:'+nor)

//3)Destructure the rectangle object by its properties or keys.
let {width,height,area,perimeter}=rectangle
console.log('width:'+width+',height:'+height+',area:'+area+',perimeter:'+perimeter)

console.log('Exercise: Level 2')
//1)Iterate through the users array and get all the keys of the object using destructuring
users.forEach(user => console.log('Name: '+user.name+', Scores: '+user.scores+', Skills: '+user.skills+', Age: '+user.age))

//2)Find the persons who have less than two skills
users.forEach(user=>{if(user.skills.length<2)
{
    console.log(user.name)
}})

console.log('Exercise: Level 3')
//1)Destructure the countries object print name, capital, population and languages of all countries
countriesB.forEach(country=>console.log('Name: '+country.name+' ,Capital: '+country.capital+' ,Population: '+country.population+' ,Languages: '+country.languages))

//2)A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array
// to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name,skills,score]=student
let [score1,score2,jsScore,reactScore]=score
console.log(name, skills, jsScore, reactScore)

//3)Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
function convertArrayToObject(students)
{
    let studObj=[]
    students.forEach(student=>{
        studObj.push({'name':student[0],'skills':student[1],'scores':student[2]})
    })
    return studObj
}
console.log(convertArrayToObject(students))
// [
//   {
//     name: 'David',
//     skills: ['HTM','CSS','JS','React'],
//     scores: [98,85,90,95]
//   },
//   {
//     name: 'John',
//     skills: ['HTM','CSS','JS','React'],
//     scores: [85, 80,85,80]
//   }
// ]

//4)Copy the student object to newStudent without mutating the original object. In the new object add the following ?
//Add Bootstrap with level 8 to the front end skill sets
//Add Express with level 9 to the back end skill sets
//Add SQL with level 8 to the data base skill sets
//Add SQL without level to the data science skill sets
const studentB = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

const copyStud={...studentB}
copyStud.skills.frontEnd.push({skill:'Bootstrap',level:8})
copyStud.skills.backEnd.push({skill:'Express',level:9})
copyStud.skills.dataBase.push({skill:'SQL',level:8})
copyStud.skills.dataScience.push('SQL')
console.log(copyStud)