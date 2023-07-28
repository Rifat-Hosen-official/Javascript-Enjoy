/*

! 1: value name up to Expression
* 2: Equal since Anonymous Function 

*/

var allSum = function (a, b){
    return a + b
}

var a = allSum(1,2)
// console.log(a)


setTimeout(function (){
    console.log('i will call after two second')
}, 2000 );