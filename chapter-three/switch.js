let date = new Date()
let today = date.getDay()

switch(today){
    case 0 :
        console.log('Today is sunday')
        break
    case 1:
        console.log('Today is Monday')    
        break
    case 2 : 
        console.log('Today is tuesday')
        break
    case 3:
        console.log('Today is wenesday') 
        break
    case 4:
        console.log('Today is thusday')  
        break
    case 5:
        console.log('Today is friday')
        break
    case 6:
        console.log('Today is staurday')
        break             
    default : console.log('N ot a vaild number')

}