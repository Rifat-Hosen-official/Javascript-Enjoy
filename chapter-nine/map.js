// var arr = [1, 2, 3, 4, 5]

// var sqrArr = arr.map(function(value){
    // return Math.random() * 100
//     return value * value
// })
// console.log(arr)
// console.log(sqrArr)


// var arr = [1, 2, 3, 4, 5]

// function myMap(){
//     var newArr = []
//     for(var i = 0 ; i< arr.length; i++){
//         var temp = arr[i] * arr [i]
//         newArr.push(temp)
//     }
//     return newArr
// }
// console.log(myMap(arr))


var arr = [1, 2, 3, 4, 5]

function myMap(arr, callBack){
    var newArr = []
    for(var i = 0 ; i< arr.length; i++){
        var temp = callBack(arr[i], i , arr)
        newArr.push(temp)
    }
    return newArr
}

 var qb  = myMap(arr, function(value){
    return value * value  * value
})
 var mten  = myMap(arr, function(value){
    return value * 10
})

console.log(qb)
console.log(mten)