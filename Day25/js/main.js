//General UI added
document.body.style.backgroundColor='#F0F0F0'

let header=document.querySelector('h2')
header.style.textAlign='center'
header.style.fontFamily='verdana'
header.style.color='ORANGE'
header.style.fontSize='40px'

let subtitle=document.querySelector('p','subtitle')
subtitle.style.textAlign='center'
subtitle.textContent='Currently, we have '+countries.length+' countries'
subtitle.style.fontSize='20px'


//Population button functionality
let wrapper=document.querySelector('div','wrapper')
wrapper.style.textAlign='center'
let pop=document.querySelectorAll('button')
pop.forEach(p=>{
    p.textContent=p.textContent.toUpperCase()
    p.style.backgroundColor='ORANGE'
    p.style.color='BLACK'
    p.style.margin='5px'
    p.style.fontSize='20px'
    p.style.padding='10px'
})

let graphHeading=document.querySelector('h4','graph-title')
graphHeading.textContent=''

let totalPop=0

let populationData=[]
countries.forEach(country=>{
    populationData.push({'country':country['name'],'population':parseInt(country['population'])})
    totalPop+=parseInt(country['population'])
})

populationData.push({'country':'World','population':totalPop})
populationData.sort((a,b)=>{
    if(a['population']>b['population'])
    {
        return -1
    }
    else
    {
        return 1
    }
})

populationData=populationData.slice(0,11)
populationData=populationData.reverse()


let popChart=new ej.charts.Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: "Category",
        title: ""
    },
    title:'10 Most Populated Countries in the World',
    //Initializing Primary Y Axis
    primaryYAxis: {
        title: "Population",
    },
    //Initializing Chart Series
    series: [
        {
            type: "Bar",
            dataSource: populationData,
            xName: "country",
            yName: "population",
            fill: "ORANGE"
        }
    ]
    
});

allButtons=document.getElementsByTagName('button');
popButton=allButtons[0]
popButton.addEventListener('click',()=>{
    popChart.appendTo('#graphs')
})

//Language Button functionality added
const langMap=new Map()
countries.forEach(country=>{
    country['languages'].forEach(language=>{
        if (langMap.get(language)==undefined)
        {
            langMap.set(language,1)
        }
        else
        {
            langMap.set(language,langMap.get(language)+1)
        }
    })
})

let langData=[]
langMap.forEach((freq,language)=>{
    langData.push({'language':language,'frequency':freq})
})
langData.sort((a,b)=>{
    if(a['frequency']>b['frequency'])
    {
        return -1
    }
    else
    {
        return 1
    }
})
langData=langData.slice(0,10)
langData=langData.reverse()

let langChart=new ej.charts.Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: "Category",
        title: "",
        
    },
    title:'10 Most spoken languages in the World',
    //Initializing Primary Y Axis
    primaryYAxis: {
        title: "Languages",
    },
    //Initializing Chart Series
    series: [
        {
            type: "Bar",
            dataSource: langData,
            xName: "language",
            yName: "frequency",
            fill: "ORANGE"
        }
    ]
    
});

langButton=allButtons[1]
langButton.addEventListener('click',()=>{
    langChart.appendTo('#graphs')
})




