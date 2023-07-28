var obj = {
    a:3,
    b:2,
    c:1
}
// *Keys () Function Show a,b,c
// console.log(Object.keys(obj))

// ! Values () Function Show value
// console.log(Object.values(obj))

// * entries() Function Show Array Dimensional Array Keys And Values 

// console.log(Object.entries(obj))

// ! First Object Clone And Second Object Create 

var obj2 = Object.assign({},obj)
obj2.a = 22


console.log(obj)
console.log(obj2)