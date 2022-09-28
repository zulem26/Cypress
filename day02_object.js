// OBJECT {}
// Objectler data kaydetmek icin kullanilir
// {} ile olusturulur

var fName = 'Ali'
var lName = 'Can'
var age = 26
var information = `${fName}, ${lName}, ${age}`
console.log(information)

// person object

var person = {
    fName : 'Ali',
    lName : 'Can',
    age : 26,
    isEmployed : true
}
console.log(person)

console.log(typeof(person))   //object

// Bilgileri Cagirma
//1) .notation
console.log(person.fName)
console.log(typeof(person.fName))
console.log(person.lName)
console.log(typeof(person.lName))
console.log(age)
console.log(typeof(person.age))


// 2) [] notation
console.log(person['fName'])
console.log(person['age'])
