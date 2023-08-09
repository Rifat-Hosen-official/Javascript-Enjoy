 var persons = [
    {
        name: 'rifat',
        age: 20
    },
    {
        name: 'sifat',
        age: 16
    },
    {
        name: 'lifat',
        age: 21
    },
    {
        name: 'rifa',
        age: 27
    }
 ]

//  reverse sort value 

 var arr = [ -3, 1, 3, 2, 4, 5, 7, 6, 9, 8, -6, -9]

 var result = arr.sort(function(a,b){
    if(a>b){
        return -1
    } else if (a<b) {
        return 1
    }else{
        return 0
    }
 })

 console.log(result)

//  var arr = [ -3, 1, 3, 2, 4, 5, 7, 6, 9, 8, -6, -9]

//  var result = arr.sort(function(a,b){
//     if(a>b){
//         return 1
//     } else if (a<b) {
//         return -1
//     }else{
//         return 0
//     }
//  })

//  console.log(result)

var people = persons.sort(function(a,b){
    if(a.age>b.age){
        return 1
    }else if(a.age<b.age){
        return -1
    }else{
        return 0
    }
 })

 console.log(people)