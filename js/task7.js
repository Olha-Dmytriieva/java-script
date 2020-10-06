function escapeRegExp(string){
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}


function validatePIN (pin){
  
console.log(pin.length)
  for(let i = 0; i < pin.length; i += 1){
    console.log(Number.isNaN(Number(pin[i])))
     
    if (Number.isNaN(Number(pin[i]))|| pin[i]===' '){
    console.log(pin[i])
      return false
     
    }
    
 
  }

  if ( pin.length === 4 || pin.length === 6 ){
    
    return true

  } else {
    return false
  }

}


// validatePIN("12") //,false, "Wrong output for '12'"




// validatePIN(".234")//,false, "Wrong output for '.234'"
validatePIN("'123")//,false, "Wrong output for 'a234'"
// validatePIN("-1.234")



// validatePIN("1234")//,true, "Wrong output for '1234'";
