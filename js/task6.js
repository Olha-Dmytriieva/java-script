function isLoginValid (login, min = 4, max = 16) {

   if (login.length >= min && login.length <= max){
     return true
   } else return false
    
  }


  function isLoginUnique  (allLogins, login) {

   if(allLogins.includes(login)){
       return false
   } else return true
  }
  
  
  
  function addLogin (allLogins, login) {
    const SUCCESS = 'Логин успешно добавлен!';
    const REFUSAL = 'Такой логин уже используется!';
    const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
    let message = ``;
       console.log(isLoginValid( login))
       console.log(isLoginUnique(allLogins, login))

       if(isLoginValid( login) === true && isLoginUnique(allLogins, login) === true){
             message =  SUCCESS;
             allLogins.push(login);

        }
       else if (isLoginValid( login) === false){
             message =  ERROR;
       }
         
        else if (isLoginUnique(allLogins, login) === false){
             message =  REFUSAL;
        }
         return message
        }

        
  
  const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
  
  console.log(addLogin(logins, 'Ajax')); 
//   'Логин успешно добавлен!'
  
//   console.log(addLogin(logins, 'robotGoogles')); 
  // 'Такой логин уже используется!'
  
//   console.log(addLogin(logins, 'Zod'));
  // 'Ошибка! Логин должен быть от 4 до 16 символов'
  
//   console.log(addLogin(logins, 'jqueryisextremelyfast')); 
  // 'Ошибка! Логин должен быть от 4 до 16 символов'

 


//   Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

//   проходить проверку на длину от 4 до 16-ти символов включительно
//   быть уникален, то есть отсутствовать в массиве logins

//   Разбей задачу на подзадачи с помощью функций.
//   Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.
  

//   Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов 
//   и добавляемый логин как параметры и проверяет наличие login в массиве allLogins, 
//   возвращая true если такого логина еще нет и false если логин уже используется.
  

  
//   Предикатные функции возвращают только true или false. Такие функции принято называть 
//   начиная с is: isLoginUnique и isLoginValid в нашем случае.
  
//   isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
//   isLoginValid только проверяет валидный ли логин и возвращает true или false.
//   addLogin добавляет или не добавляет логин в массив. При этом для проверок условия 
//   добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.
