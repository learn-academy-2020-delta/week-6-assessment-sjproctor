// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

// created two variables to target the keys and the values
// creating a const var for the function
// iteration for the array
// call on the keys value pairs for name and occupation

// let keys = Object.keys(people)
// let values = Object.values(people)

// map through the array
// converted name to an array
// created a variable to hold capitalized names
// joined sentence back together

const sentence = (array) => {
  return array.map(value => {
    let tempName = value.name.split(" ")
    // let capNameArray = []
    return tempName.map(value => {
      return value.charAt(0).toUpperCase() + value.substr(1)
    }).join(" ").concat(" is a ", value.occupation, ".")
    // return `${value.name} is a ${value.occupation}`
  })
}
console.log(sentence(people))



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

const moduloThree = (array) => {
  let numbersOnly = array.filter(value => {
    return typeof value === "number"
  })
  return numbersOnly.map(number => {
    return number % 3
  })
}
console.log(moduloThree(testingArray1))
console.log(moduloThree(testingArray2))


// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

const noDuplicates = (arr1, arr2) => {
  let finalArr = arr1.concat(arr2)
  return finalArr.filter((value, index) => {
    return finalArr.indexOf(value) === index
  })
}
console.log(noDuplicates(testingArray3, testingArray4))

const noDups = (...arr) => {
  let joinedArray = []
  arr.forEach(array => {
    joinedArray = [...joinedArray, ...array]
  });
  return joinedArray.filter((item, index) => {
    return joinedArray.indexOf(item) === index
  })
}
console.log(noDups(testingArray3, testingArray4))
