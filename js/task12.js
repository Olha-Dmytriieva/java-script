const findBestEmployee = function (employees) {
  
  
  let colleague = 0;
  let messageKey = ` `;
  const devs = Object.keys(employees)
  console.log((devs))

if (Object.keys(employees).length === 0) 
      { return messageKey = '' }
else{
    for(const num of devs){
      
      if (employees[num] > colleague){
        colleague = employees[num]
      }
    }   
     
} 
return Object.keys(employees).find(key => employees[key] === colleague);
}

  


  
  // Объекты и ожидаемый результат
  const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }; 
  // findBestEmployee(developers);
  // 'lorence'
  
  const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
  }; 
  // findBestEmployee(supports); 
  // 'mango'
  
  const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }

  // console.log(findBestEmployee(sellers)); 
// 'lux'  

//   Напиши функцию findBestEmployee(employees), которая принимает 
//   объект сотрудников и возвращает имя самого продуктивного (который 
//     выполнил больше всех задач).
//    Сотрудники и кол-во выполненных задач содержатся как свойства объекта 
//    в формате "имя":"кол-во задач".


// if(Object.keys(employees).length === 0) { messageKey = '' }
//   else {
//     messageValue = Math.max(...Object.values(employees))
//     messageKey = Object.keys(employees).find(key => employees[key] === messageValue)
//   }

//   return `${messageKey}`