
// pure function two rule
// 1: একটি আর্গুমেন্ট দিলে সবসময় same result দিতে হবে 
// 2: কোনো প্রকার সাইড effect তৈরি করতে পারবে না 


// pure function 
function a(n){
    return n+n

}
// console.log(a(2))


// Not a pure function 

var a = 4

function m(){
    var a = 2 
     console.log(a)
}
m()