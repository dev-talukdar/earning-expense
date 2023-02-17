// solution 1 


// // Eventlister added for the calculate button 
// const calculateButton = document.getElementById('calculate');
// calculateButton.addEventListener('click', calculateTotal);

function calculateTotal() {
    // Total income value 
    const myIncome = document.getElementById('total-income');
    const myIncomeField = parseFloat(myIncome.value);

    // Total food cost value 
    const fieldOne = document.getElementById('expense-field-one');
    const fieldOneValue = parseFloat(fieldOne.value);

    // Total rent cost  value 
    const fieldTwo = document.getElementById('expense-field-two');
    const fieldTwoValue = parseFloat(fieldTwo.value);

    // Total cloth cost value 
    const fieldThree = document.getElementById('expense-field-three');
    const fieldThreeValue = parseFloat(fieldThree.value);

    // We got here total expense from the 3 field above     
    const total = fieldOneValue + fieldTwoValue + fieldThreeValue;
    // Error message 
    if (total > myIncomeField) {
        alert('you are not permited to spend more than your income')
    }

    // Total expense is now showing to the target field 
    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = total;

    // Remaing balance is now showing to the target field
    const remainingMoney = myIncomeField - total;
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = remainingMoney;
}


// solution 2

// // Get DOM elements
// const calculateButton = document.getElementById('calculate');
// const myIncome = document.getElementById('total-income');
// const fieldOne = document.getElementById('expense-field-one');
// const fieldTwo = document.getElementById('expense-field-two');
// const fieldThree = document.getElementById('expense-field-three');
// const totalExpense = document.getElementById('total-expense');
// const remainingBalance = document.getElementById('remaining-balance');

// // Add event listener to the calculate button
// calculateButton.addEventListener('click', () => {
//   // Parse values
//   const myIncomeField = parseFloat(myIncome.value);
//   const fieldOneValue = parseFloat(fieldOne.value);
//   const fieldTwoValue = parseFloat(fieldTwo.value);
//   const fieldThreeValue = parseFloat(fieldThree.value);

//   // Calculate total expense and show on the page
//   const total = fieldOneValue + fieldTwoValue + fieldThreeValue;
//   totalExpense.innerText = total;

//   // Calculate remaining balance and show on the page
//   const remainingMoney = myIncomeField - total;
//   remainingBalance.innerText = remainingMoney;

//   // Display error message if total expense is greater than income
//   if (total > myIncomeField) {
//     alert('You are not permitted to spend more than your income.');
//   }
// });


// solution 3

const calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', () => {
  const { value: myIncomeField } = document.getElementById('total-income');
  const { value: fieldOneValue } = document.getElementById('expense-field-one');
  const { value: fieldTwoValue } = document.getElementById('expense-field-two');
  const { value: fieldThreeValue } = document.getElementById('expense-field-three');

  const totalExpense = parseFloat(fieldOneValue) + parseFloat(fieldTwoValue) + parseFloat(fieldThreeValue);
  const remainingMoney = myIncomeField - totalExpense;

  if (totalExpense > myIncomeField) {
    alert('you are not permited to spend more than your income')
  }

  document.getElementById('total-expense').innerText = totalExpense;
  document.getElementById('remaining-balance').innerText = remainingMoney;
});

