var arr = [ 3, 1, 3, 2, 4, 5, 7, 6, 9, 8, 6, 9]


var res1 = arr.every(function(value){
    return value % 2 === 0
})

console.log(res1)
var res2 = arr.every(function(value){
    return value >= 0
})

console.log(res2)