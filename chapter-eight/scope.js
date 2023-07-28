var a = 'abc '

function m(){
    var a = 22
    function n(){
        // var a = 11
        // console.log(a)
    }

    n()
}
m()


function test(n){

    function a(){
        return n%3 === 0
    }
    function b(){
        return n%5 === 0
    }

    if(a() && b()){
        console.log(n  + ' ' +  'is divisible both 3 and 5')
    }else{
        console.log('Not a valid number')
    }

}
test(15)