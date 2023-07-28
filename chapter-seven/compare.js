var obj1 = {
    a:22,
    b:11,
    c:44
}

var obj2 = {
    a:22,
    b:11,
    c:44
}
// ! If And Else Method By Using Compare Object

if(obj1.a === obj2.a && obj1.b === obj2.b && obj1.c === obj2.c){
    console.log(true)

}else{
    console.log(false)
}

// * Object Compare Ticks 
// Rule:1
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
// Rule:2
var compareObj = JSON.stringify(obj1) === JSON.stringify(obj2)
console.log(compareObj)