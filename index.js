let finalPrice = 0;

let cupSize = prompt('Select cup size (sm | md | lg)');

if(cupSize == "sm"){
    finalPrice = finalPrice + 45;
    console.log('Cup Size sm : 45 EGP');
}else if(cupSize == "md"){
    finalPrice = finalPrice + 55;
    console.log('Cup Size md : 55 EGP');
}else if(cupSize == "lg"){
    finalPrice = finalPrice + 65;
    console.log('Cup Size md : 65 EGP');
}else{
    alert('بطل عبط يا اسطي واختار حجم مظبوط')
}

// true , false
let extraMilk = confirm('Do you want extra milk ?');

if(extraMilk == true){
    finalPrice = finalPrice + 5;
    console.log('Extra Milk : 5 EGP');
}

let extraSyrup = confirm('Do you want extra syrup ?')

if(extraSyrup == true){
    finalPrice = finalPrice + 7;
    console.log('Extra Syrup : 7 EGP');
}


let extraShoot = confirm('Do you want extra Shoot ?')

if(extraShoot == true){
    finalPrice = finalPrice + 10;
    console.log('Extra Shoot : 10 EGP');
}


let isStudent = confirm('Are you student ?');

if(isStudent == true){
    let discount = (20/100) * finalPrice;
    console.log(`Student Discount (20%) : - ${discount} EGP `);
    finalPrice = finalPrice - discount;
}

let vat = (14/100) * finalPrice;
console.log(`VAT 14% : ${vat} EGP`)
finalPrice = finalPrice + vat;
console.log(`Final Price : ${finalPrice} EGP`);