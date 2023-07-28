// Escape Notation 

// let str = ' Iam rifat and learning \'everyday\' alhamdulillah '
// let str2 = ' Iam rifat and learning \n everyday alhamdulillah '
// let str3 = ' Iam rifat and learning \t everyday alhamdulillah '
// let str4 = ' Iam rifat and learning \r everyday alhamdulillah '
// let str5 = ' Iam rifat and learning \v everyday alhamdulillah '
// let str6 = ' Iam rifat and learning \b veryday alhamdulillah '
// let str7 = ' Iam rifat and learning \f veryday alhamdulillah '

// console.log(str7 )

//  String comparison 

// var a = 'abc'
// var b = 'bcd'

// console.log(a> b)

//  Lexicographic  এর মাধ্যমে comparison করছে 



// let n = 'I am'
// let m = 'Rifat hosen'

// let p = n.concat(' ', m)

// let q = p.substr(5)
// console.log(q)
// console.log(p.charAt(0))

// console.log(p.startsWith('I am'))
// console.log(p.endsWith(en))
// console.log(n.toUpperCase())
// console.log(m.toLowerCase())
// console.log('     good ahead    '.trim())
// console.log(p.split(' '))


let str = 'Rifat hosen '

let length = 0 

while(true){
    if(str.charAt(length) == ''){
        break
    }else{
        length++
    }
}
// console.log(length)

console.log(str.length)