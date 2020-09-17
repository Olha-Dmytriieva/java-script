let credits = 23580;
const pricePerDroid = 3000;
let message;
let modalRequest = prompt(`Введите нужное количество дроидов`);
let totalPrice = pricePerDroid * modalRequest;



if (modalRequest === null) {
    message =`Отменено пользователем!`;
    console.log(message);

} else if (totalPrice <= credits) {
    // totalPrice = pricePerDroid * modalRequest;
    console.log(totalPrice);
    message = `Вы купили ${modalRequest} дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
    console.log(message);

} else {
    message = `Недостаточно средств на счету!`
    console.log(message);
}



