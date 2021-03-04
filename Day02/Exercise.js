console.log('Exercise Level 1')

//1)Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
console.log('1:-')
let challenge='30 Days Of JavaScript'

//2)Print the string on the browser console using console.log()
console.log('2:-')
console.log(challenge)

//3)Print the length of the string on the browser console using console.log()
console.log('3:-')
console.log(challenge.length)

//4)Change all the string characters to capital letters using toUpperCase() method
console.log('4:-')
console.log(challenge.toUpperCase())

//5)Change all the string characters to lowercase letters using toLowerCase() method
console.log('5:-')
console.log(challenge.toLowerCase())

//6)Cut (slice) out the first word of the string using substr() or substring() method
console.log('6:-')
console.log(challenge.substr(0,2))

//7)Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log('7:-')
console.log(challenge.substr(3,18))

//8)Check if the string contains a word Script using includes() method
console.log('8:-')
console.log(challenge.includes('Script'))

//9)Split the string into an array using split() method
console.log('9:-')
console.log(challenge.split())

//10)Split the string 30 Days Of JavaScript at the space using split() method
console.log('10:-')
console.log(challenge.split(' '))

//11)'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log('11:-')
let str='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(str.split(','))

//12)Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log('12:-')
console.log(challenge.replace('JavaScript','Python'))

//13)What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log('13:-')
console.log(challenge.charAt(15))

//14)What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log('14:-')
console.log(challenge.charCodeAt(11))

//15)Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log('15:-')
console.log(challenge.indexOf('a'))

//16)Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log('16:-')
console.log(challenge.lastIndexOf('a'))

//17)Use indexOf to find the position of the first occurrence of the word because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'
console.log('17:-')
str='You cannot end a sentence with because because because is a conjunction'
console.log(str.indexOf('because'))

//18)Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'
console.log('18:-')
console.log(str.lastIndexOf('because'))

//19)Use search to find the position of the first occurrence of the word because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'
console.log('19:-')
console.log(str.search('because'))

//20)Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log('20:-')
str=' 30 Days Of JavaScript '
console.log(str.trim())

//21)Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log('21:-')
str=str.trim()
console.log(str.startsWith('30'))

//22)Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log('22:-')
console.log(str.endsWith('ipt'))

//23)Use match() method to find all the a’s in 30 Days Of JavaScript
console.log('23:-')
console.log(str.match(/a/g)) 

//24)Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log('24:-')
str='30 Days of '
console.log(str.concat("Javascript"))

//25)Use repeat() method to print 30 Days Of JavaScript 2 times
console.log('25:-')
str='30 Days Of Javascript'
console.log(str.repeat(2))

console.log('Exercise Level 2')

//1)Using console.log() print out the following statement:
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log('1:-')
console.log('There is no exercise better for the heart than reaching down and lifting people up.-by John Holmes teaches us to help one another.')

//2)Using console.log() print out the following quote by Mother Teresa:
//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('2:-')
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
)

//3)Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log('3:-')
console.log(typeof('10'))
console.log(typeof(10))
let num='10'
num=+num
console.log(typeof(num))

//4)Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log('4:-')
console.log(typeof('9.8'))
console.log(typeof(10))
num='9.8'
num=Math.ceil(+num)

//5)Check if 'on' is found in both python and jargon
console.log('5:-')
str='python'
console.log(str.includes('on'))
str='jargon'
console.log(str.includes('on'))

//6)I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log('6:-')
str='I hope this course is not full of jargon'
console.log(str.search('jargon')) 

//7)Generate a random number between 0 and 100 inclusively.
console.log('7:-')
console.log(Math.floor(Math.random()*101))

//8)Generate a random number between 50 and 100 inclusively.
console.log('8:-')
console.log(Math.floor(Math.random()*51)+50)

//9)Generate a random number between 0 and 255 inclusively.
console.log('9:-')
console.log(Math.floor(Math.random()*256))

//10)Access the 'JavaScript' string characters using a random number.
console.log('10:-')
str='Javascript'
console.log(str.charAt(Math.floor(Math.random()*10)))

//11)Use console.log() and escape characters to print the following pattern.

/*1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125*/
console.log('11:-')
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n')

//12)Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
str='You cannot end a sentence with because because because is a conjunction'
console.log('12:-')
console.log(str.substr(31,23)) 

console.log('Exercise Level 3')

//1)'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
str='Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(str.match(/love/g).length)

//2)Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
str='You cannot end a sentence with because because because is a conjunction'
console.log(str.match(/because/g).length)

//3)Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting
let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
sentence = sentence.replace(/%/g,"")
sentence  =sentence.replace(/@/g, "")
sentence = sentence.replace(/\$/g, "")
sentence = sentence.replace(/&/g, "")
sentence = sentence.replace(/#/g, "")
sentence = sentence.replace(/;/g, "")
sentence = sentence.replace(/,/g, "")
sentence = sentence.replace(/\./g, "")
console.log(sentence)

//4)Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
sentence='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let arr=sentence.match(/\d+/g) 
let sum=0 
for(let index=0 ;index<arr.length;index++)
{
   sum=sum+parseInt(arr[index])
} 
console.log(sum)