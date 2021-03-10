console.log('Exercise Level 1')
//1)Display the countries array as a table
console.table(countriesB)
//2)Display the countries object as a table
console.table(countries)
//3)Use console.group() to group logs
console.group('Countries')
console.log(countries)
console.groupEnd()
console.log('Exercises:Level 2')
//1)10 > 2 * 10 use console.assert()
console.assert(10>2*10,'10 is not greater than 20')
//2)Write a warning message using console.warn()
console.warn('This is a warning')
//3)Write an error message using console.error()
console.error('This is an error message')
console.error('We all make mistakes')
console.log('Exercises:Level 3')
//1)Check the speed difference among the following loops: while, for, for of, forEach
const countriesC = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countriesC.length; i++) {
    console.log(countriesC[i][0], countriesC[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countriesC) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countriesC.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')