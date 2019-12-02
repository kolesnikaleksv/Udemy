
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
    savings: true,
    chooseExpenses: function() {
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
                
        }
    },
    detectedDayBadget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Ежедневный бюджет:" + appData.moneyPerDay);
    },
    
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Низкий бюджет");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
            console.log("Средний бюджет");
        } else if(appData.moneyPerDay > 1000) {
            console.log("Высокий уровень бюджета");
        } else {
            console.log("Что то пощло не так 2");
        }
    },
    checkSaving: function() {
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.MonthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита:" + (appData.MonthIncome).toFixed(2));
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let opt = prompt("Статья не обязательных расходов?","");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        for (let c = 0; c < 0; c++) {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)","");
        
        if ( (typeof(items)) === "string" && items != "" && (typeof(items)) != null) {
            
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что то еще?",""));
            appData.income.sort();
            appData.income.forEach( function(item, i)  {
                alert([i+1] + "Способы дополнительного заработка: " + item);
            });
            }else{
            c--;
            }
        }
            
    }

};




