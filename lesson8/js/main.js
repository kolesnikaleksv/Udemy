'use strict';
let startBtn = document.getElementById("start"),
budgetValue = document.getElementsByClassName("budget-value")[0],
daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
levelValue = document.getElementsByClassName("level-value")[0],
expensesValue = document.getElementsByClassName("expenses-value")[0],
optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
incomeValue = document.getElementsByClassName("income-value")[0],
monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],

expensesItem = document.getElementsByClassName("expenses-item"),
expensesBtn = document.getElementsByTagName("button")[0],
optionalExpensesBtn = document.getElementsByTagName("button")[1],
countBtn = document.getElementsByTagName("button")[2],

optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
incomeItem = document.querySelector("#income"),
checkSaving = document.querySelector("#savings"),
sumV = document.querySelector("#sum"),
percentV = document.querySelector("#percent"),
yearV = document.querySelector(".year-value"),
monthV = document.querySelector(".month-value"),
dayV = document.querySelector(".day-value"),

data = document.querySelector(".data");



data.addEventListener('click', function(event) {
    if(money == undefined) {
        alert("Начните с кнопки 'Начать расчет'");
    } 
});



let money, time;



startBtn.addEventListener("click", function() {
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");
    

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }
    appData.budget = money;
    appData.timeDate = time;
    budgetValue.textContent = money.toFixed();
    yearV.value = new Date(Date.parse(time)).getFullYear();
    monthV.value = new Date(Date.parse(time)).getMonth() + 1;
    dayV.value = new Date(Date.parse(time)).getDay();

});




expensesBtn.addEventListener("click", function() {
    
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener("click", function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
});

countBtn.addEventListener("click", function() {
     let sum = 0;
     for(let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        appData.expenses[a] = b;
        sum += +b;
     }
    if(appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
        levelValue.textContent = "Это минимальный уровень достатка!";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Это средний уровень достатка!";
    } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = "Это высокий уровень достатка!";
    } else {
        levelValue.textContent = "Произошла ошибка!";
    }
    }
    
});

incomeItem.addEventListener("input", function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSaving.addEventListener("click", function() {
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});


sumV.addEventListener("input", function() {
    if(appData.savings == true) {
    let sum = +sumV.value,
        percent = +percentV.value;

    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    } 
});

percentV.addEventListener("input", function() {
    if(appData.savings == true) {
        let sum = +sumV.value,
            percent = +percentV.value;

    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    } 
    
});



    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};



