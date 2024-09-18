/*
1. add event listener to add money button (form submission):
make sure preventDefault so that page doesn't auto reload
2.get the user input: add money ammount & user PIN
3. verify the PIN number, for wrong PIN input ---> failed to add and
                          for right PIN input ---> allow to add money to the main balance
4. get the current balance.

5. add money to the current balance with new input money

6. Display/Update the main balance in the UI/DOM
*/

document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        const addMoney = document.getElementById('input-add-money').value;
        const inputAddMoneyNumber = parseFloat(addMoney)
        const pinNumber = document.getElementById('input-pin-number').value;

        // console.log(addMoney, pinNumber)
        if(pinNumber === '1234'){
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);
            const newBalance = balanceNumber + inputAddMoneyNumber;
            document.getElementById('account-balance').innerText = newBalance;
            console.log(balance)
        }else{
            alert('Failed to add the money, please try again');
        }
    })