const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const modalRequest = prompt (`Введите логин и пароль`);
console.log(modalRequest);



if (modalRequest === null) {
    message =`Отменено пользователем!`;
    console.log(message);
}
 else if (modalRequest === ADMIN_PASSWORD) {
    message = `Добро пожаловать!`;
    console.log(message);
} else {
    message = `Доступ запрещен, неверный пароль!`;
    console.log(message);
}
