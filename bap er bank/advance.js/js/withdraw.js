/*
 1.Add withdraw button event Handler
 2.Gateway to amount by using getInputFieldValueById Function
 3.Gate previous withdraw amount by using getTextElementValueById Function
 4.Calculate new withdraw total and set the value
 4.5 Set new withdraw total by using

 5.Get previous balance to till by using getTextElementValueById function
 6.Calculate new balance total
 7.Set balance to till using setTextElementValueById
 */
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total',newBalanceTotal);
})