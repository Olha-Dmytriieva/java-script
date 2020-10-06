const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка'

const CANCELED_BY_USER = 'Отменено пользователем!';

let price;
let countryName = prompt (`Выберите страну доставки`);
let message;
let country;


if (countryName === null) {
    message = CANCELED_BY_USER;
    console.log(message);
  } else {
    country = countryName[0].toUpperCase(1) + countryName.slice(1).toLowerCase();}

switch(countryName){

    case CHINA:
        price  = 100;
        country = countryName;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        break;

    case AUSTRALIA:
        price  = 170;
        country = countryName;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        break;

    case INDIA:
        price  = 80;
        country = countryName;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        break;

    case JAMAICA:
        price  = 120;
        country = countryName;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        break;

    default: 
        message= `В выбранную страну доставка не доступна`;
      
}

console.log(message)

