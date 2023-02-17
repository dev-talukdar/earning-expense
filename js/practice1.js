function CalculateTotal(){
    // total income value 
    const myIncome = document.getElementById('total-income');
    const myIncomeField = document.getElementById(myIncome.value);

    // total food cost value     
    const fieldOne = document.getElementById('expense-field-one');
    const fieldOneValue = parseFloat(fieldOne.value);

    // total rent cost 
    const fieldTwo = document.getElementById('expense-field-two');
    const fieldTwoValue = parseFloat(fieldTwo.value);

    // total clothing cost 
    const fieldThree = document.getElementById('expense-field-three');
    const fieldThreeValue = parseFloat(fieldThree.value);

    // we got here all expenses from the 3 field 
    const total = fieldOneValue + fieldTwoValue + fieldThreeValue;

        // total expense is now showing to the target field 
    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = total;
    
    // remaining balance is now showing to the target field 
    const remainingMoney = myIncomeField - total;
    const remainingBalance = document.getElementById('remaining-balance')
    remainingBalance.innerText = remainingMoney;   


}