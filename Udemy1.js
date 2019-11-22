
var money = prompt("Ваш бюджет на месяц", "укажите в гривнах");
var time = prompt("Введите дату в формате YYYY-MM-DD", "год, месяц, день") ;
var expenses;
var optionalExpenses;


var answerOne = prompt("Введите обязательную статью расходов",
"Во сколько обойдется");
var answerTwo = prompt("Введите обязательную статью расходов",
 "Во сколько обойдется");
 var expenses = {"answerOne":"answerTwo"};

 var appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};
alert((money - answerOne - answerTwo)/ 30);
