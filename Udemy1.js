
"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "укажите в гривнах");
    time = prompt("Введите дату в формате YYYY-MM-DD", "год, месяц, день");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "укажите в гривнах");
    }

}
start();


let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses () {
    for (let i = 0; i < 2; i++) {

        let a = prompt("Введите обязательную статью расходов в этом месяце",""),
            b = prompt("Во сколько обойдется", "");
    
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && 
        b != '' && a != '' && a.length < 50) {
        console.log("Done");
        appData.expenses[a] = b;
        } else {
            console.log("что то пошло не так");
            i--;
        }
            
    };
}
chooseExpenses();

function detectedDayBadget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("Ежедневный бюджет:" + appData.moneyPerDay);
}
detectedDayBadget();



function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Низкий бюджет");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
        console.log("Средний бюджет");
    } else if(appData.moneyPerDay > 1000) {
        console.log("Высокий уровень бюджета");
    } else {
        console.log("Что то пощло не так 2")
    }
}
detectLevel();

function checkSaving() {
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        
        appData.MonthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита:" + (appData.MonthIncome).toFixed(2));
    }
}
checkSaving();

function chooseOptExpenses() {
    let opt1 = +prompt("Статья не обязательных расходов?"),
        opt2 = +prompt("Статья не обязательных расходов?"),
        opt3 = +prompt("Статья не обязательных расходов?");

        appData.optionalExpenses[1] = opt1;
        appData.optionalExpenses[2] = opt2;
        appData.optionalExpenses[3] = opt3;
}
chooseOptExpenses();

