// First Class Function 

function add(a,b){
    return a+b
}

// Rule 1: A Function can be stored in a variable 
var sum = add
console.log(sum(2,1))
console.log(typeof sum)
// Rule 2: A Function can be stored in an array

var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0])

// Rule 3: A Function can be stored in an object

var obj = {
    sum: add
}
console.log(obj)
console.log(obj.sum(1,3))

// Rule 4: We can create Function  as need
setTimeout(function(){
    console.log('ahead')
},100)
// Rule 5: We can pass function as an argument 

// Rule 6: We can return function from another function 