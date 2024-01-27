

/* 
* ---------------Ternary----------
*-------condition ?write something when true  : write something when false

*/

const age = 25;

/* if(age >=  18){
    console.log('you can vote');
}
else{
    console.log('Ghumay thako');
} */

/* *** TERNARY **** */
//  age >= 18 ? console.log('you can vote') : console.log('ghumay thako')



/* Another  */

let price = 500;
const isLidar = false;

if(isLidar === true){
    price = 0;
}
else{
    price = price + 100;
}
console.log(price);

price = isLidar === true ? 0 :  price + 100;