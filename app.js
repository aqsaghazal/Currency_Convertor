#! /usr/bin/env node
import inquirer from 'inquirer';
let currencyconvertor = {
    "USD": {
        "USD": 1,
        "PKR": 278.07,
        "WON": 1380.70,
        "LIRA": 32.32,
        "YEN": 153.31,
        "YUAN": 7.24,
        "EURO": 0.94
    },
    "PKR": {
        "USD": 0.0036,
        "PKR": 1,
        "WON": 4.97,
        "LIRA": 0.12,
        "YEN": 0.55,
        "YUAN": 0.026,
        "EURO": 0.0034
    },
    "WON": {
        "USD": 0.000725,
        "PKR": 0.201501,
        "WON": 1,
        "LIRA": 0.023435,
        "YEN": 0.111128,
        "YUAN": 0.00524,
        "EURO": 0.00068
    },
    "LIRA": {
        "USD": 0.030937,
        "PKR": 8.598388,
        "WON": 42.671724,
        "LIRA": 1,
        "YEN": 4.7425,
        "YUAN": 0.223892,
        "EURO": 0.029017
    },
    "YEN": {
        "USD": 0.006524,
        "PKR": 1.81323,
        "WON": 8.998621,
        "LIRA": 0.210861,
        "YEN": 1,
        "YUAN": 0.0721,
        "EURO": 0.006119
    },
    "YUAN": {
        "USD": 0.129589,
        "PKR": 38.404113,
        "WON": 190.72,
        "LIRA": 4.466432,
        "YEN": 21.182,
        "YUAN": 1,
        "EURO": 0.138178
    },
    "EURO": {
        "USD": 1.0661,
        "PKR": 296.303502,
        "WON": 1471.44,
        "LIRA": 34.4623,
        "YEN": 163.43,
        "YUAN": 7.7167,
        "EURO": 1
    }
};
const answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter the currency that you want to convert :",
        choices: ["USD", "EURO", "PKR", "WON", "LIRA", "YEN", "YUAN"]
    },
    {
        name: "to",
        type: "list",
        message: "select the currency in which you want to convert :",
        choices: ["USD", "EURO", "PKR", "WON", "LIRA", "YEN", "YUAN"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount :",
        choices: ["USD", "EURO", "PKR", "WON", "LIRA", "YEN", "YUAN"]
    },
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = currencyconvertor[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is : ${result}`);
}
else {
    console.log("you have selected invalid operator");
}
