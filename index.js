const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
// break tutorials array into smaller pieces
//  cut each string .map()
// cut the string into words
// index



const titleCased = () => {
  let breakTheArray = tutorials.map(toTitle)
  return breakTheArray
}

function toTitle(string) {
  let stringSplit = string.split(' ') 
  console.log(stringSplit)
  let breakTheString = stringSplit.map(element => element.charAt(0).toUpperCase() + element.slice(1));
  console.log(breakTheString.join(' '))
  return breakTheString.join(' ')
  
}

toTitle('implementing Blockchain Web API')




// let string = "this is a string"

// let substrings = string.toUpperCase().split()


// console.log(substrings)

