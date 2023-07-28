// function something(greet,name){
//     function sayHiFirstName(){
//         if(name){
//             return name.split(' ')[0]
//         }else{
//             return ' '
//         }
//     }
//     var message = greet + ' ' + sayHiFirstName()
//     console.log(message)
// }

// something('Good job! ahead', 'Rifat Hosen')



function something(greet,name){
    function firstName(){
        if(name){
            return name.split(' ')[0]
        }else{
            return ' '
        }
    }
    var massage = greet + ' ' + firstName ()
    console.log(massage)
}

something('vary good ahead', 'rifat hosen')