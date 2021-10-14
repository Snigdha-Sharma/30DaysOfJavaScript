//To get heading "World countries list"
heading=document.getElementById('heading')//Select the h1 tag by id where heading is made
heading.style.letterSpacing="15px"//For even letter spacing
heading.style.textAlign='center'//For center alignment
heading.style.color='WHITE'
heading.style.fontFamily='Verdana'
heading.style.marginTop='200px'

//To get total number of countries subheading
subHeading=document.getElementById('subHeading')//Select the h3 tag by id where sub heading is made
subHeading.style.textAlign='center'//For center alignment
subHeading.style.color='WHITE'
subHeading.style.fontFamily='Verdana'

//To get total countries dynamically
totalCountries=countries.length
subHeading.textContent+=totalCountries

//get search by starting word button
search1=document.getElementById('searchByStartingWord')
search1.style.color='WHITE'
search1.style.backgroundColor='rgb(51,51,255)'
search1.style.fontFamily='verdana'
search1.style.textAlign='center'

//get search by search with any word button
search2=document.getElementById('searchWithAnyWord')
search2.style.color='WHITE'
search2.style.backgroundColor='rgb(51,51,255)'
search2.style.fontFamily='verdana'
search2.style.textAlign='center'

//get reverse sort button
sort=document.getElementById('sort')

//get icon to change color on click
sortIcon=document.getElementById('sortIcon')

//on click of search1
search1.addEventListener('click',()=>{
    if (search1.style.backgroundColor=='rgb(51, 51, 255)')
    {
        search1.style.backgroundColor='rgb(76,0,153)'
    }
    else
    {
        search1.style.backgroundColor='rgb(51,51,255)'
    }
    search2.style.backgroundColor='rgb(51,51,255)'
})

//on click of search2
search2.addEventListener('click',()=>{
    if (search2.style.backgroundColor=='rgb(51, 51, 255)')
    {
        search2.style.backgroundColor='rgb(76,0,153)'
    }
    else
    {
        search2.style.backgroundColor='rgb(51,51,255)'
    }
    search1.style.backgroundColor='rgb(51,51,255)'
})

//on click of reverse sort
sort.addEventListener('click',()=>{
    if (sort.style.backgroundColor=='rgb(51, 51, 255)')
    {
        sort.style.backgroundColor='rgb(76, 0, 153)'
        sortIcon.style.backgroundColor='rgb(76, 0, 153)'
    }   
    else
    {
        sort.style.backgroundColor='rgb(51, 51, 255)'
        sortIcon.style.backgroundColor='rgb(51, 51, 255)'
    }
        
})


