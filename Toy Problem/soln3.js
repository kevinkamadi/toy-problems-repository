const prompt = require("prompt-sync")()

const salary = prompt("Enter your monthly salary: ");
const payee = salary - 2400;

let taxable;
if(payee > 0 && payee <= 24000){
    taxable = 0.1 * payee;
}else if (payee >= 24001 && payee <= 32333){
    taxable = 0.25 * payee;
}else if (payee >= 32334 && payee <= 500000){
    taxableR = 0.3 * payee;
}else if (payee >= 500001 && payee <= 800000 ){
    taxable = 0.325 * payee;
}else {
    taxable = 0.35 * payee; 
}


let nhif;
if (salary <= 5999){
    nhif = 150;
}else if (salary >= 6000 && salary <= 7999){
    nhif = 300;
}else if (salary >= 8000 && salary <= 11999){
    nhif = 400;
}else if (salary >= 12000 && salary <= 14999){
    nhif = 500;
}else if (salary >= 15000 && salary <= 19999){
    nhif = 600;
}else if (salary >= 20000 && salary <= 24999){
    nhif = 750;
}else if (salary >= 25000 && salary <= 29999){
    nhif = 850;
}else if (salary >= 30000 && salary <= 34999){
    nhif = 900;
}else if (salary >= 35000 && salary <= 39999){
    nhif = 950;
}else if (salary >= 40000 && salary <= 44999){
    nhif = 1000;
}else if (salary >= 45000 && salary <= 49999){
    nhif = 1100;
}else if (salary >= 6000 && salary <= 59999){
    nhif = 1200;
}else if (salary >= 6000 && salary <= 69999){
    nhif = 1300;
}else if (salary >= 6000 && salary <= 89999){
    nhif = 1400;
}else if (salary >= 6000 && salary <= 99999){
    nhif = 1500;
}else {
    nhif = 1700;
}

console.log(`Taxable: ${taxable}`)

const nssf = salary * 0.06;
const tax = taxable - nhif - nssf;

console.log(` NHIF: ${nhif}`)
console.log(` NSSF: ${nssf}`)
console.log(`Taxable Rate: ${tax}`)