// 10) concat() : Arrayleri birlestirir

var drinks = ['coke', 'water', 'fanta', 'ayran']
var kebaps = ['adana', 'urfa', 'ciger', 'patlican']

var shoppingList = drinks.concat(kebaps)
console.log(shoppingList)

// 11) reverse():
var numbers = [1, 2, 3, 4, 5, 6, -7, -8]
console.log('Original List : ' + numbers)

numbers.reverse()
console.log('Reversed List : ' + numbers)

// 12) sort() : kucukten buyuge siralama
numbers.sort()
console.log('Sort List : ' + numbers)

//buyukten kucuge siralama
//sort + reverse
numbers.reverse()
console.log(numbers)