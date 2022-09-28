// nested object

/*
fName : Ali          -> String
age : 26             -> Number
isEmployed : true    -> boolean
address :            -> Object
   street : 767 5th Ave 
   city   : NYC
   state  : New York
hobies : swimming, running, hunting    ->Array
*/

const person = {
    fName : 'Ali',
    age : 26,
    isEmployed : true,
    address : {
        street : '767 5th Ave',
        city : 'NYC',
        state : 'New York'
    },
    hobies : ['swimming', 'running', 'hunting']
}
console.log(person)
console.log(person.fName)
console.log(person.isEmployed)
console.log(person.address)
console.log(person.address.city)

console.log(person.hobies)
console.log(person.hobies[0])
console.log(person.hobies[4])