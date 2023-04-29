// step-1:add event listener with the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    
// step-2: get the deposit amount from the deposit field
const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value ;
const newDepositAmount = parseFloat(newDepositAmountString);

// step-7: clear the deposit field
depositField.value = '';

// validation check 
if(isNaN(newDepositAmount)){
    alert('please, provide a valid number');
    return;
}

// step-3: get the current deposit total amount
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

// step-4:add numbers to set the total deposit
const currentTotalDeposit = previousDepositTotal + newDepositAmount;
depositTotalElement.innerText = currentTotalDeposit;

// Balance
// step-5: get the current total
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step-6: calculate the current total balance
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotalElement.innerText = currentBalanceTotal;

})