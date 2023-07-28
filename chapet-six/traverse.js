
// Travesing 

var arr = [2, 6, 8, 34, 80]

// for (var i = 0; i < arr.length; i++){
    // console.log(arr[i])

//     arr[i] = arr[i] + 2 
// }
// console.log(arr)



// var sum = 0 

// for(var i = 0; i< arr.length; i++){
//     sum += arr[i]
// }

// console.log(sum)



for (var i =0 ; i< arr.length; i++){
    if(arr[i]%2 == 1){
        console.log('is odd number:', arr[i])
    }
    else{
        console.log('is even number :', arr[i])
    }
}