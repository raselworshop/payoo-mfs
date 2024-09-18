// Log in section 
// console.log('hello there!!')
// search for: form submit reloading the page

// step-1: add event handler
document.getElementById('btn-login').addEventListener('click', function(event){
    // step-2: preven default behavior reloading browser
    event.preventDefault();
    //step-3: get the phone number 
    const phoneNumber = document.getElementById('p-number');
    console.log(phoneNumber.value)
    console.log('login button clicked')
})