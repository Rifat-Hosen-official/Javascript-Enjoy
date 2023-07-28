// Object Literal Make 

var obj = {
    m: 32,
    n:43,
}
obj.p = 33
// console.log(obj)



// Object constructor Make it 

// First Method

var obj2 = Object()
obj2.a = 7
obj2.b = 77
// console.log(obj2)

// !Second Method

var obj3 = new Object()
obj3.k = 2 
obj3.j =33
// console.log(obj3)



// *Accessing Object Properties

var point = {
    mn:33,
    mm:11,
    mp:35
}


//* Dot Notation Call 

// console.log(point.mm)
// console.log(point.mn + point.mp)

// !Array Notation Call 

// console.log(point['mp'])

// var codeSee = 'mm'
// console.log(point[codeSee])



// !Setting Object Properties 

var point = {
    x:33,
    y:22,
    z:44
}
// * Dot Notation Value Replace And Update 


point.y = 122
point.ho = 44
// console.log(point)

// ! Array Notation Value Replace And Update 

var show = 'z'
var jo = 'u'
point[jo] = 88
point[show]= 323
// console.log(point)



// *Remove Object Properties 

delete point.ho
// console.log(point)