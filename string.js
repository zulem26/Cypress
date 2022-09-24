// String

var myName = "Ali"
var myLesson = "JavaScript"

// print : Ali knows JavaScript

var message = myName + ' knows ' + myLesson
console.log(message)
// 2 kod arasindaki fark dinamik saklanmis oldu

// Ali 'knows' JavaScript
console.log("Ali 'knows' JavaScript") // hard code

console.log(myName + ' \'knows\' ' + myLesson)

// BACKTICK ‘‘
// Stringleri daha dinamik birlestirmek icin kullanilir

var message = `${myName} knows ${myLesson}`
console.log(message)