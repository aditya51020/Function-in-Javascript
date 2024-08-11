function calculatedTax(income){
    const taxOnIncomeRange = () =>{
        if(income <= 300000 ){
            return 0.10;

        }else if(income <= 500000 ){
            return 0.20;

        }else{
            return 0.30;
        };
    };

    const taxRates = taxOnIncomeRange();
return income * taxRates;
}




const tax1 = calculatedTax(300000);
const tax2 = calculatedTax(800000);
const tax3 = calculatedTax(1000000);

console.log(`Tax on 3LPA income: ${tax1}`);
console.log(`Tax on 8LPA income: ${tax2}`);
console.log(`Tax on 15LPA income: ${tax3}`);