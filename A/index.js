
// First problem solb
// Multiply one by 3 and add 10 to the result and divide by 2 and subtract 5 from the result.

function mindGame(mindNumbers){
    const mindNumber1 = mindNumbers * 3 ;
    const mindNumber2 = mindNumber1 + 10 ;
    const mindNumber3 = mindNumber2 / 2 ;
    const mindTotalNumber = mindNumber3 - 5 ;

    return mindTotalNumber ;
}
const mindTotalResult = mindGame(); 
// console.log(mindTotalResult);



// Second problem solb
// If the characters as input are even then the result will be even otherwise the result will be odd


function evenOdd(text){
let  evenOddNumbers = text;
let lengthNumber = evenOddNumbers.length;
let theEndNumber = lengthNumber % 2 ;
if (theEndNumber === 0){
    return 'even' ;

}
else{
    return 'odd' ;
   
}


}
 let str = evenOdd(''); 
// console.log(str);






// Third problem solb 
// Taking a number and subtracting 7 from it, if the result is less than 7 then it will not give the result or multiplying 7 with 2 will give the result.

function isLGSeven(number){
    let  numbers = number - 7 ;
 
   if(numbers <= 7  ){
    console.log(numbers) ;
   }
   else{
    console.log(numbers*2);
   }
    
return number;
}
const number1 = isLGSeven(15);



//Fourth Problem solb
// A program to extract the number of negative numbers from the age of some boys and girls

function findingBadData(arr) {
    let negativeNumbers = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        negativeNumbers.push(arr[i]);
        

      }
    }
  
    return negativeNumbers;
  }
  
  let numbers = [2, -5, -10, -3, 0, -8];
  let negativeNumbers = findingBadData(numbers);
  let nagativeAge = negativeNumbers.length;
//   console.log(nagativeAge); 
  

// Fifth Problem solb

//Here we give the numbers of three friends, count the first person by 21, the second person by 32, and the third person by 43 and add them together to get the result. If it is less than 2000, the result will not be given or the result will be subtracted from 2000. In this way I can find out the number of three friends.

function gemsToDiamond(firstGems,secondGems,thirdGems){
   let firstGemsNumber = firstGems * 21;
   let secondGemsNumber = secondGems * 32;
   let thirdGemsNumber = thirdGems * 43 ;
   let totalGemsNumber = firstGemsNumber + secondGemsNumber + thirdGemsNumber ;

   if(totalGemsNumber <= 2000){
    
    return totalGemsNumber;
   }
   else{
    let subtractionNumber = totalGemsNumber - 2000 ;
    
    return subtractionNumber;
   }


}

const gemsNumberInput =  gemsToDiamond(2,2,20);
console.log(gemsNumberInput);
