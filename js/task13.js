const countTotalSalary = function(employees) {
    'use strict';
    let colleague = 0;
    const devs = Object.keys(employees)
    
    for(const num of devs){
      
         
          colleague += employees[num]
        }
        

      console.log(colleague)
  };
  
  // Объекты и ожидаемый результат
  const developers = {
      mango: 300,
      poly: 250,
      alfred: 450,
  };
  console.log(countTotalSalary(developers));
  // 1000
  
  const supports = {
    kiwi: 200,
    lux: 150,
chelsy: 150,
}

// console.log(countTotalSalary(supports));