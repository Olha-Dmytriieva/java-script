function greet(language) {
   
    let result = ` `;

   const languages = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
   }

   
     

     for (const key in languages){
     if (key === language){

        result = languages[key];
       break
     }
     else {
      result = "Welcome"
     }
    }
    console.log(result) 
  } 
  
  // const word = Object.values (languages);
//_________________________________________________
  // const word = Object.values (languages);

  // for (let i = 0; i < word.length; i += 1){
  //   if (word[i] === language){
  //     console.log(word[i]) 


  //   }
  //   else if(word[i] !== language){
  //    console.log(word[0])
  //   }

     
  //  }
  // }
 

  // //  console.log(word)

  //  for (const item of word){
    
  //      console.log(item)
  //    }
  //  }

  //  for (const key in languages){
  //    if (languages[key] === language){
  //     return (languages[key])
  //    }
  //  }
     

  
  
  
  greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.";
  greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.";
  greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.";
  
  /*
  // Think of a way to store the languages as a database (eg an object). 
  // Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it 
  // in your database. It should default to English if the language is not in the database, or in the event of an invalid input */