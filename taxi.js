let finalPrice = 20;

let kmNos = +prompt('No of KMs');
let kmValue = 6.5 * kmNos;

console.log(`Value of Trip : ${kmValue} EGP`)

finalPrice = finalPrice + kmValue;

let isNight = confirm('هل الرحلة بليل ؟');

if(isNight == true){
    let superCharge = (10/100) * finalPrice;
    finalPrice = finalPrice + superCharge;
    console.log(`SuperCharge Night : ${superCharge} EGP`)
}

let promoCode = prompt('Please enter PromoCode');

if(promoCode == 'SAVE10'){
    let discount = (10/100) * finalPrice;
    finalPrice = finalPrice - discount;
    console.log(`Promo Code Discount : ${discount} EGP`)

}else{
    alert('Wrong PromoCode');
}

let vat = (14/100) * finalPrice;
console.log(`VAT 14% : ${vat} EGP`)
finalPrice = finalPrice + vat;

console.log(`Final Price : ${finalPrice} EGP`)