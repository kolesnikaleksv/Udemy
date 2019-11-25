
"use strict";

let money = +prompt("Ваш бюджет на месяц?", "укажите в гривнах"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "год, месяц, день");

let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};


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

//Способ с применением while
//let i = 0;
//while(i < 2){
//    let a = prompt("Введите обязательную статью расходов в этом месяце",""),
//        b = prompt("Во сколько обойдется", "Укажите в гривнах");
//        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && 
//          b != '' && a != '' && a.length < 50) {
//        console.log("Done");
//        appData.expenses[a] = b;
//        }else {
//            console.log("что то пошло не так");
//        }
//        i++;
//}
// Способ с применением цикла do
//let i = 0;
//do{
//    let a = prompt("Введите обязательную статью расходов в этом месяце",""),
//        b = prompt("Во сколько обойдется", "Укажите в гривнах");
//        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && 
//          b != '' && a != '' && a.length < 50) {
//        console.log("Done");
//        appData.expenses[a] = b;
//        }else {
//            console.log("что то пошло не так");
//        }
//        i++;
//}
//while(i < 2);


appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет:" + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Низкий бюджет");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
    console.log("Средний бюджет");
} else if(appData.moneyPerDay > 1000) {
    console.log("Высокий уровень бюджета");
} else {
    console.log("Что то пощло не так 2")
}