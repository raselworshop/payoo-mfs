// console.log('homepage added')
// add money to te account :

//step-1: add event handler to the add money button inside form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevant page to reload after submitted form
    event.preventDefault();
    // step-2: get the money be added to the maoin balance
    const inputAddMoney = document.getElementById('input-add-money').value;
    console.log(inputAddMoney)
    // step-3 get the pin number
    const inputPinNumber = document.getElementById('input-pin-number').value;
    console.log(inputPinNumber);
    // step-3: verify the pin number to be approve the add money, this isn't proper way
    if(inputPinNumber === '1234'){
        console.log('adding money to your account/main balance')
        // step-4: get the current balance 
        const accountBalance = document.getElementById('account-balance').innerText;
        console.log(accountBalance)
        // step-5: add the new money to account balance 
        const inputAddMoneyNumber = parseFloat(inputAddMoney);
        const accountBalanceNumber = parseFloat(accountBalance);
        const newBalance = inputAddMoneyNumber + accountBalanceNumber;
        console.log(newBalance);
        // step-6: update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
    }else{
        alert('Failed to add money, please provide correct PIN')
    }
    console.log('money add btn clicked')
})