// Anonymous Function (isimsiz)
// function(a, b, c){
//    return a + b + c
//}
// uncaught syntaxError : Function statements reques

var result =  function (a, b, c){
    return a + b + c
}
console.log(result (1,2,3))

let info = function(fName, lName, age){
    console.log(fName + ' ' + lName + ' ' + age)
}
info('ali', 'can', 26)

// ARROW FUNCTIONS
function sum(a){
    return a + 100
}
console.log(sum(10))

//function kelimesini ve ismini sil
// parametre ve body arasina =>
// () sil. EGER TEK PARAMETRE VAR ISE
var arrow = a => a+100
console.log(arrow(10))

function sum2(a,b){
    return a + b + 100
}
console.log(sum2(1,2))

var arrow1 = (a,b) => a + b + 100
console.log(arrow1(2,3))

// Parametresiz Fonksiyonlarda Arrow

// Traditional Function
var a = 5, b = 6
function sum3(){
    return a + b + 100
}
console.log(sum3(5,6))


// Anonymous Function
a = 6
b = 7
var newSum = function(){
    return a + b + 100
}
console.log(newSum())

var aro = (a,b) => a + b + 100
console.log(aro(5,6))

// Prizma Hacim
var prism1 = function(l, w, h){
    return l * w * h
}
console.log(prism1(1,2,3))

var arrowPrizma =(u,e,h)=>u*e*h
console.log(arrowPrizma(3,4,2))