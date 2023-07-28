var arr = [2, 3, 66, 7, 4, 8, 9, 80]

var find = 6

isFound = false

// for(var i = 0; i< arr.length; i++){
//     if(arr.length === find){
//         console.log('Data Found Of Index' + i)
//         break
//     }else{
//         console.log('Data Not Found')
//     }
// }

// for(var i = 0; i < arr.length ; i++){
//     if(arr[i] === find){
//         console.log('Data Found Of Index ' + i)
//         isFound = true
//         break
//     }
// }
// if(!isFound){
//     console.log('Data Not Found')
// }

for (var i = 0 ; i < arr.length ; i++){
    if(arr[i] === find){
        console.log('Data Found Of Index' + i)
        isFound = true
        break
    }
}

if(!isFound){
    console.log('Data Not Found')
}