document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();

        // cash out amount
        const cashOut = document.getElementById('input-cash-out').value;
        const cashOutNumber = parseFloat(cashOut)
        const cashOutpinNumber = document.getElementById('input-cash-out-pin').value;
        
        // wrong to verify pin
        if(cashOutpinNumber === '1234'){
            const mianBalance = document.getElementById('account-balance').innerText;

            const numberBalance = parseFloat(mianBalance)

            // reduce the balance
            const balanceNew = numberBalance - cashOutNumber;

            // update the UI/ACCOUNT balance 
            document.getElementById('account-balance').innerText = balanceNew;
        }else{
            alert('Failed to cash out!! please try later')
        }
    })