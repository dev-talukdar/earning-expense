// no 1 way. 

const saveButton = document.getElementById('saving');
saveButton.addEventListener('click', savingFunc);

function savingFunc() {
    const totalIncome = document.getElementById('total-income');
    const totalIncomeField = parseFloat(totalIncome.value);

    const savingAmount = document.getElementById('saving-percent');
    const savingAmountField = parseFloat(savingAmount.value);

    // we are going to find the total amount of saving 

    const savingPossibility = totalIncomeField * (savingAmountField / 100);

    const totalSaving = document.getElementById('saving-amount')
    totalSaving.innerText = savingPossibility;


    const balance = parseFloat(document.getElementById('remaining-balance').innerText);
    const remainingBalance = balance - savingPossibility;
    document.getElementById('last-balance').innerText = remainingBalance;

}

// no 2 way.

// const saveButton = document.getElementById('saving');

// saveButton.addEventListener('click', () => {
//   const totalIncome = parseFloat(document.getElementById('total-income').value);
//   const savingAmount = parseFloat(document.getElementById('saving-percent').value);

//   const savingPossibility = totalIncome * (savingAmount / 100);
//   const totalSaving = document.getElementById('saving-amount');
//   totalSaving.innerText = savingPossibility;

//   const remainingBalance = parseFloat(document.getElementById('remaining-balance').innerText) - savingPossibility;
//   document.getElementById('last-balance').innerText = remainingBalance;
// });

// no 3 way

// const saveButton = document.getElementById('saving');
// saveButton.addEventListener('click', () => {
//   const { value: totalIncomeField } = document.getElementById('total-income');
//   const { value: savingAmountField } = document.getElementById('saving-percent');
//   const savingPossibility = totalIncomeField * (savingAmountField / 100);
//   document.getElementById('saving-amount').innerText = savingPossibility;
//   document.getElementById('last-balance').innerText = parseFloat(document.getElementById('remaining-balance').innerText) - savingPossibility;
// });
