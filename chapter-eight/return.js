function allSum (){
    var sum = 0
    for(var i = 0;i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
var a = allSum(1,2,3)
// console.log(a)


function person(name,email){
    return{
        name: name,
        email: email
    }
}
var p1 = person('rifat','hello' )
console.log(p1)