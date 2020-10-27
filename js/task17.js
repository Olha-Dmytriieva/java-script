function pipeFix(numbers){
    
    
    // let newArray = numbers.slice(0,1);

    // let firstNumber = [];
    

    // let lastNumber = numbers[numbers.length - 1]
    // console.log(numbers.length)

    // // let result = []



    // for (let i = numbers[0]; i <= lastNumber; i += 1){
    //     firstNumber = firstNumber + i
        
    //     // console.log(i)
    
    // }console.log(firstNumber)
    //     // console.log(result)
        

        let firstNumber = [];

        let lastNumber = numbers[numbers.length - 1]
       
    
    
        for (let i = numbers[0]; i <= lastNumber; i += 1){
             firstNumber.push(i)
        
        }return firstNumber


    



}



// pipeFix([1,2,3,5,6,8,9])/*[1,2,3,4,5,6,7,8,9]*/
// pipeFix([1,2,3,12])/*[1,2,3,4,5,6,7,8,9,10,11,12]*/
pipeFix([6,9])/*[6,7,8,9]*/
// pipeFix([-1,4])/*[-1,0,1,2,3,4]*/
// pipeFix([1,2,3]) /*[1,2,3]*/