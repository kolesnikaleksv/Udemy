
"use strict";

let money = prompt("Ваш бюджет на месяц?", "укажите в гривнах"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "год, месяц, день");

let appData = {
    budget: money,
    timeDate: time,
    expenses: {
        a1: a3
    },
    optionalExpenses: {},
    income: [],
    saving: false
};

var a1 = prompt("Введите обязательную статью расходов в этом месяце",""),
    a2 = prompt("Во сколько обойдется", "Укажите в гривнах"),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдется", "Укажите в гривнах");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);

console.log(appData.expenses);
