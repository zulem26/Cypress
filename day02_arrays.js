//ARRAYS

var frienList = ['Can', 'Ece', 'Ali', 'Naz']
var frienList1 = new Array ('Can', 'Ece', 'Ali', 'Naz')

console.log(frienList)
console.log(frienList1)
console.log(frienList[0])
console.log(frienList[3])
console.log(frienList[10])

//Can  ---> Han
frienList[0] = 'Han'
console.log(frienList)

//Naz ----> Derya
frienList[3] = 'Derya'
console.log(frienList)


//Yeni Deger Ekleme
// Deniz
frienList[4] = 'Deniz'
console.log(frienList)

frienList[7] = 'Sinan'
console.log(frienList)   //Arada 2 tane bos oldugu icin empty*2 yaziyor(5-6 yok)
