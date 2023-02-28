/**
 1. add event handler with the withdraw button
 2. get the withdraw amount from withdraw input field
 2.5. also make sure to convert  the input into a number by using parseFloat
 3. get previous withdraw total

 4. calculate total withdraw amount 
 4.5. set total withdraw amount

 5. get the previous balance total

 6. calculate new balance total
 6.5. set he new balance total
 7. clear the input Field
 */

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Step-2: 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    if(isNaN(newWithdrawAmount)){
        alert('Please provide')
        return;
    }

    // Step-3: 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



    // Step-5: 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-7: 
    withdrawField.value = '';

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Tor baper bank er tk ses');
        return;
    }
    // Step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // step-6:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})