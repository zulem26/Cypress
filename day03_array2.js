// ARRAY DATA EKLEME VE SILME

var friendList = ['Can', 'Ece', 'Ali', 'Naz']
console.log(friendList)
console.log(typeof(friendList))

//1) push() : Array in sonuna data ekler
friendList.push('Zulkif')
console.log(friendList)

//2) unshift() : Array in basina data ekler
friendList.unshift('Beren')
console.log(friendList)

//3) pop() : Son datayi siler
friendList.pop()
console.log(friendList)

//4) shift() ilk datayi siler
friendList.shift()
console.log(friendList)

var ages = [10, 20, 30, 40, 50, 30, 60, 30]

//5) indexOf(item, from) 
console.log(ages.indexOf(20))  //1
console.log(ages.indexOf(50))  //4

console.log(ages.indexOf(30, 3)) // 3 uncu indexten basla ve 30 un index ini getir

// return -1 eslesme yok demek
console.log(ages.indexOf(20,3))  //-1
console.log(ages.indexOf(80))   //-1

//6) lastindexOf() : 
console.log(ages.lastIndexOf(30))  //30 en son kacinci index te 

//7) includes(item, starting index) : baslangic index
console.log(ages.includes(60)) //true
console.log(ages.includes(70)) //false

console.log(ages.includes(40,3))  //true
console.log(ages.includes(10,2))  //false

const isExist = ages.includes(40,3)  // datayi saklama yontemi
console.log(isExist) 

const isExist1 = ages.includes(80,3)  // datayi saklama yontemi
console.log(isExist1) 





