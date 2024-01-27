

/* -------practice task one------- */

/* var burgerPrice = 100;
if(burgerPrice > 500){
    console.log('you will get free coke');
}
else{
    console.log('you have to pay 30 taka for coke');
} */


/* -------practice task two------- */
/* bmi (body mass index) */
/* var weight = 50;
var height = 1.5;
var bmi = weight / (height ** 2); */ /* Math.pow(height, 2); we can use this for height square */
 
/* var bmi = 30;
console.log('your bmi is =',bmi);

if(bmi){
    if(bmi < 18.5){
        console.log('so you are underweight');
    }
    else if(bmi >= 18.5  &&  bmi <= 24.9 ){
        console.log('so your weight is normal');
    }
    else if(bmi >= 25  &&  bmi <= 29.9 ){
        console.log('so you are overweight');
    }
    else{
        console.log('you are obese or fatty');
    }
} */





/* -------practice task Three------- */

/* var studentScore = 70;
console.log('your score is =',studentScore);
if(studentScore >= 90 && studentScore <= 100){
    console.log('your grade is = A')
}
else if(studentScore >= 80 && studentScore <= 89){
    console.log('your grade is = B');
}
else if(studentScore >= 70 && studentScore <= 79){
    console.log('your grade is = C');
}
else if(studentScore >= 60 && studentScore <= 69){
    console.log('your grade is = D');
}
else{
    console.log('your garde is = F');
} */




/* -------practice task four------- */

/* const myScore = 81;
const friendScore = 70;
console.log('my score is =',myScore);

if(myScore > 80){
    console.log('your friend score:',friendScore);
    if(friendScore > 80){
        console.log('Thats why we will go fo a lunch');
    }
    else if(friendScore >= 60 && friendScore < 80){
        console.log('better luck next time my friend');
    }
    else if(friendScore < 60 && friendScore >= 40){
        console.log('I will unseen your message');
    }
    else if(friendScore < 40){
        console.log('i will block you');
    }
    else{
        console.log('nothing to do');
    }
}
else{
    console.log('i will go to home and sleep and act sad');
}
 */




/* -------practice task five------- */

/* var num1 = 30;
var num2 = 15;
var sum = num1 + num2;
var result; */

/* if(num1 > num2){
    result = num1 * 2;
    console.log(result);
}
else{
    console.log(sum);
} */



// same problem solve by using ternary
/* result = (num1 > num2) ? result = num1 * 2 : result = num1 + num2 ;
console.log(result); */




/* -------practice task six------- */

var childrenAge = 11;
var student = true;
var seniorAge = 60;
var regularTicketPrice = 800;
if(childrenAge < 10 ){
    console.log('The ticket will be free for you');

}
else if(student == true){
    //50% discount
    var discount = regularTicketPrice * 50 / 100;
    console.log('the ticket price will be:',discount);
}
else if(seniorAge >= 60 ){
    //15% discount
    var discountPrice = regularTicketPrice * 15 / 100;
    console.log('The ticket price will be:',discountPrice);
}
else{
    console.log('The ticket price will be:',regularTicketPrice);
}




