document.getElementById('btn-deposit').addEventListener('click',function(){
    /*
     1.Get the element by ID
     2.Get the value from the element
     3.Convert string value to a number
     */
    const newDepositAmount = getInputFieldValueById('deposit-field');

    /*
     1. get previous deposit total id
     */
    const previousDepositTotal = getTextElementValueById('deposit-total');

    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // Get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);


})