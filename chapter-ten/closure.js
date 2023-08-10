// function test (){
//     var tokki = ' Iam rifat '

//     return function (){
//         console.log(tokki)
//     }
// }

// var newTest = test()

// newTest()



//  closure loops 

for(var i = 1; i<= 5;i++){
    (function(n){
        setTimeout(function(){
            console.log(n)
        },1000 * n)
    })(i)
}