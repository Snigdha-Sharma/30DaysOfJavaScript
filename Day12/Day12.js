console.log('Day 12')
console.log('Exercise: Level 1')

//1)Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses
// per month.’
let salary=/\d{1,}/g
let str='He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let result=str.match(salary)
console.log(result.reduce((sum,num)=>sum+parseInt(num),0))

//2)The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these
// numbers and find the distance between the two furthest particles.
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12
str='The position of some particles on the horizontal x-axis -1, 2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
// Extract these numbers and find the distance between the two furthest particles.'
let negativeNumPat=/-\d/g
let positiveNumPat=/[^-]\d/g
let posNums=str.match(positiveNumPat)
let negaNums=str.match(negativeNumPat)
negaNums=negaNums.map(num=>parseFloat(num))
posNums=posNums.map(num=>parseFloat(num))
let maxNum=posNums.reduce((ans,num)=>Math.max(ans,num),0),minNum=negaNums.reduce((ans,num)=>Math.min(ans,num),0)
console.log(maxNum-minNum)

//3)Write a pattern which identify if a string is a valid JavaScript variable
function is_valid_variable(varName)
{
    if(varName.search('-')!=-1)
    {
        return false
    }
    let pat=/^[a-zA-Z$_][a-zA-Z\d$_]*/
    let result=pat.test(varName)
    return result
}
console.log(is_valid_variable('first_name'))
//# True 
console.log(is_valid_variable('first-name'))
//# False
console.log(is_valid_variable('1first_name')) 
//# False
console.log(is_valid_variable('firstname')) 
//# True
console.log(is_valid_variable('-')) 
console.log(is_valid_variable('_'))
console.log(is_valid_variable('*')) 
console.log(is_valid_variable('a//')) 

console.log('Exercise: Level 2')
//1)Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
function tenMostFrequentWords(para,k)
{
    let word=/[a-zA-Z]+/g
    let words=para.match(word)
    console.log(words)
    let freqMap={}
    words.forEach(word=>{
        if(freqMap[word])
        {
            freqMap[word]++
        }
        else{
            freqMap[word]=1
        }})
        let wordsf=Object.keys(freqMap)
        let frequencies=Object.values(freqMap)
        let arr=[]
        for(let i=0;i<wordsf.length;i++)
        {
            arr.push({'word':wordsf[i],'count':frequencies[i]})
        }
        arr.sort((a,b)=>{
            if(a['count']>b['count'])
            {
                return -1;
            }
            else
            {
                return 1;
            }
        })
        console.log(arr.slice(0,k))
}
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph,10))

console.log('Exercise Level 3')
//1)Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
function cleanText(sentence)
{
    sentence=sentence.replace(/@/g,'')  
    sentence=sentence.replace(/%/g,'') 
    sentence=sentence.replace(/\$/g,'') 
    sentence=sentence.replace(/&/g,'') 
    sentence=sentence.replace(/#/g,'') 
    sentence=sentence.replace(/;/g,'') 
    return sentence
}
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
sentence=cleanText(sentence)
console.log(sentence)

//2)Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.
console.log(tenMostFrequentWords(sentence,3))