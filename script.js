let money, time;

function start(){
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt ("Ваш бюджет на месяц?", "");
    }
}
start();

   
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            console.log ("done");
    
            appData.expenses[a] = b;
        } else {                            
            console.log ("bad result");
            i--;
        }
    
    };
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
}
detectLevel();

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход с вашего депозитаЖ " + appData.monthIncome);
    }
}

checkSavings();

function detectDayBudget(){
    let dayBudget = +prompt("Какой Ваш дневной бюджет?");
    if(dayBudget == ""){
        dayBudget = +prompt ("Какой Ваш дневной бюджет?");
    }
    appData.dayBudget = dayBudget;
    alert(dayBudget);
}

detectDayBudget();

function chooseOptExpenses(){
    for(let i = 0; i < 3; i++){
        let a = prompt ("Статья необязательных расходов?"),
            b = prompt ("Во сколько обойдется?");

        if (typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50){
            
            console.log ("done");
    
            appData.optionalExpenses[a] = b;
        }else {                            
            console.log ("bad result");
            i--;
        }

    }
}
chooseOptExpenses();