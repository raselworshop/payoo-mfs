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
    console.log(inputPinNumber)
    console.log('money add btn clicked')
})