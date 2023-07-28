var a =2
function b(){
    console.log(a)
}



function a (){
    var y = 4
    return function(){
        console.log(y)
    }
}

var abc = a()
console.dir(abc)