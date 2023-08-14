// var rect = {
//     width: 200,
//     height: 300,

//     draw: function(){
//         console.log(' i am rectangle')
//         console.log(' my width is' + this.width)
//         console.log(' my height  is' + this.height)
//     }

// }

// rect.draw()



// Factory Pattern 

// var buildRect = function(width,height){
//     return {
//         width: width,
//         height: height,
    
//         draw: function(){
//             console.log(' i am rectangle')
//             this.printProperties()
//             console.log(this)
            
//         },
//         printProperties: function(){
//             console.log(' my width is' + this.width)
//             console.log(' my height  is' + this.height)
//         }
    
//     }

    
// }

// var rect1 = buildRect (22,44);
// rect1.draw()

// var rect2 = buildRect(12,42);
// rect2.draw()

// constructor pattern

// var Rectangle = function (width,height){

//     this.width = width
//     this.height = height

//     this.draw = function(){
//         console.log('I am a rectangle');
//         this.printProperties()
//         console.log(this); 
//     }

//     this.printProperties = function(){
//         console.log('My Width is' + this.width);
//         console.log('My Height is' + this.height);
//     }
// }

// var rect3 = new Rectangle (2,3)
// rect3.draw()




// Bind ,Call , Apply in javascript 


// function myUse(c, d){
//     console.log(this.a + this.b + c + d);
// }
// Call Methods
// myUse.call({a:12,b:22},3,2)
// Apply Method 
// myUse.apply({a:33,b:44},[4,8])

// Bind Method 

// var testBind = myUse.bind({a:3 ,b:3})
// testBind(2,3)



// Pass by value and pass by Reference 
// call by value and call by Reference 


// Pass by value
// var  m = 2

// function chance(m){
//     m = m + 2
//     console.log(m);
// }

// chance(m)
// console.log(m);


// pass by Reference
// var obj = {
//     a:3,
//     b:4
// }
// function valueChance(obj){
//     obj.a = obj.a + 2
//     obj.b = obj.b + 1
//     console.log(obj);
// }

// valueChance(obj)
// console.log(obj);


