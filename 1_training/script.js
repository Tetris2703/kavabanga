"use strict"

/**********   1   **********/
/*
let userMoney = prompt('Ваш бюджет?');
let userShop = prompt('Название вашего магазина?');


let shopGoods = []  // список товаров заданные массивом

shopGoods.push(prompt('товар 1'));
shopGoods.push(prompt('товар 2'));
shopGoods.push(prompt('товар 3'));


let employers = {} // объект сотрудников заданных массивом
let isTrue = confirm("Ваш магазин открыт?");

let mainList = {
    money: userMoney,
    shop: userShop,
    products: shopGoods,
    open: isTrue
}

console.log(mainList);
document.write(userMoney/30);
*/

/**********   2   **********/
const num = 33721;
let sum = 1;

for (let val of num.toString()) {
        sum*=val; 
    }
console.log(sum);
console.log(Math.pow(sum,3));
