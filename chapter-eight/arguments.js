function add(a , b){
    var result = a + b 
    // console.log(result)
}

// var add = add (11 ,44)



// var arr1 = [2, 3, 5]
// var arr2 = [5, 7, 8]
// var arr3 = [7, 4, 6]

// function sumOfArray(arr){
//     var sum = 0
//     for(var i =0 ; i< arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum)
// }


// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)



// ! No parameters but value sum 

function add(){
    
    var sum = 0 

    for(var i = 0; i< arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}
add(12,4)