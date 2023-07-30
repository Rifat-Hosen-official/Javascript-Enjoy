// var arr = [3, 5, 6, 2, 8, 5]

//  var filterArr = arr.filter(function(value){
//     return value % 2 === 0
// })
// console.log(filterArr)


var arr = [3, 5, 6, 2, 8, 5]

function myFilter(arr , callBack){
    var newArr = []
    for(var i = 0 ; i< arr.length ; i++){
        if(callBack (arr[i],i , arr)){
            newArr.push(arr[i])
        }
    }
    return newArr
}
// Even Number
var evenNumber = myFilter(arr, function(value){
    return value % 2 === 0 
})
console.log(evenNumber)

// Odd Number

var oddNumber = myFilter(arr, function(value){
    return value % 2 === 1 
})
console.log(oddNumber)

// For Form Number

var fourFormNumber = myFilter(arr, function(value){
    return value < 4
})
console.log(fourFormNumber)