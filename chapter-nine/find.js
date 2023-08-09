// Build in function find () and findIndex () use 

// var arr = [1, 5, 4, 7, 9, 3]

// var result = arr.find(function(value){
//     return value=== 7 
// })
// console.log(result)

// var result2 = arr.findIndex(function(value){
//     return value === 3
// })
// console.log(result2)


// find take out 

var arr = [33, 22, 66, 35, 24, 77, 45]

function myFind (arr,cb){
    for(var i = 0 ; i<arr.length; i++){
        if(cb(arr[i])){
            return arr[i]
        }
    }
}

var result = myFind(arr,function(value){
    return value === 66
})
console.log(result)


// findIndex take out 

var arr2 = [4, 3, 7, 32, 77, 332, 773]

function myFindIndex (arr ,cb){
    for(var i = 0; i < arr2.length ; i++){
        if(cb(arr2[i])){
            return i
        }
    }
}

var result2 = myFindIndex(arr2,function(value){
    return value === 32
})
console.log(result2)