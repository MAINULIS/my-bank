// step-1 add event listener with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step-2: get the withdraw amount from the withdraw field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

      // step-7: clear the withdraw field
      withdrawField.value = '';

    // validation alert
    if(isNaN(newWithdrawAmount)){
        alert('Please, provide a valid number')
        return;
    }

    // step-3: get the current withdraw total amount
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    // step-4: add numbers to get the total withdraw
    const currentTotalWithdraw = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentTotalWithdraw;

    // Balance
    // step-5:get current balance total
    const balanceTotalElement =document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate the current balance after withdraw
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})