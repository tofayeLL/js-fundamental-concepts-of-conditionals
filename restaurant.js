const price = 1200;
const age = 40;

if(age < 12){
    console.log('you can eat free');
}
else if(age >= 60){
    // 50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount); 
}
else if (age >=  26){
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
    
}

else{
    console.log(price);
}