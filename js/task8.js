function opposite(number) {
   
       console.log(number)
    
       if (Math.sign(number)>0){
           return (0 - number)
       } else if (Math.sign(number)<0){
            return (0+number)
       }
  }

  opposite(5)