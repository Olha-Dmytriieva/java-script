let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
//   "full time": true
};
 
user.hobby = `skydiving`;
user.premium = false;
user.mood = `happy`;
user["full time"] = true;
 
 
const keys = Object.keys(user);

// console.table(keys[0])

for(const key of keys){
    message = `${key}:${user[key]} \n`
    console.log(message)
}
 
 
//console.log(message); 
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false   (user[age],'\n',)
mood : happy 
"full time" : true 
' */


