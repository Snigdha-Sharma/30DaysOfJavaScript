console.log('Exercise Day 18')
console.log('Exercise: Level 1')
const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
//1)Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => { // getting the data

    for(let i=0;i<data.length;i++)
    {
        let a=[]
        a.push({'name':data[i]['name']})
        a.push({'capital':data[i]['capital']})
        a.push({'languages':data[i]['languages']})
        a.push({'population':data[i]['population']})
        a.push({'area':data[i]['area']})
        console.log(a)
    }
  })
  .catch(error => console.log(error)) // handling error if something wrong happens
console.log('Exercise: Level 2')
//1)Print out all the cat names in to catNames variable.
let catNames=[]
fetch(catsAPI)
.then(response => response.json()) // accessing the API data as JSON
.then(data => { 
    for(let i=0;i<data.length;i++)
    {
        catNames.push(data[i]['name'])
    }
    console.log(catNames)
})
.catch(error => console.log(error)) // handling error if something wrong happens
console.log('Exercise: Level 3')
//1)Read the cats api and find the average weight of cat in metric unit.
fetch(catsAPI)
.then(response => response.json()) // accessing the API data as JSON
.then(data => {     
    let weights=0
    //console.log(data)
    for(let i=0;i<data.length;i++)
    {
        let arr=data[i]['weight']['metric']
        let lower=arr[0]
        let upper=arr[4]
        weights+=((upper+lower)/2)
    }
    console.log(weights/data.length)
})
.catch(error => console.log(error))
//2)Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => { // getting the data
    let arr=[]
    for(let i=0;i<data.length;i++)
    {
        arr.push({'Name':data[i]['name'],'Area':data[i]['area']})
    }
    arr.sort((x,y)=>{
        if(x['Area']>y['Area'])
        {
            return -1
        }
        else
        {
            return 1
        }
    })
    console.log(arr.slice(0,10))
  })
  .catch(error => console.log(error)) 
//3)Read the countries api and count total number of languages in the world used as officials.
fetch(countriesAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => { // getting the data
    let cnt=0
    for(let i=0;i<data.length;i++)
    {
        cnt+=data[i]['languages'].length
    }
    console.log('Total number of languages:'+cnt)
  })
  .catch(error => console.log(error))