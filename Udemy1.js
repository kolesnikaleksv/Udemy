
let money = prompt("Ваш бюджет на месяц?", "укажите в гривнах"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "год, месяц, день");

let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце",
     "Укажите в гривнах"),
    a2 = prompt("Во сколько обойдется", "Укажите в гривнах"),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", 
     "Укажите в гривнах"),
    a4 = prompt("Во сколько обойдется", "Укажите в гривнах");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);
