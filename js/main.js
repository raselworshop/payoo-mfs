// Log in section 
// console.log('hello there!!')
// search for: form submit reloading the page

// step-1: add event handler
// document.getElementById('btn-login').addEventListener('click', function(event){
//     // step-2: preven default behavior reloading browser
//     event.preventDefault();
//     //step-3: get the phone number & pin number
//     const phoneNumber = document.getElementById('p-number');
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber.value);
//     console.log(pinNumber);
    
//     //step-4: validate the user input
//     // temporary used condtions not correct way
//     if(phoneNumber == '0-10' && pinNumber == 'abc123'){
//         // step-5: user allowed to enter website 
//         console.log('You are logged in')
//     }else{
//         alert('You typed wrong number or password')
//     }
// })

document.getElementById('btn-login').addEventListener('click', function(event){
 event.preventDefault();
//  get phone number 
const phoneNumber = document.getElementById('p-number').value;
console.log(phoneNumber)
const pinNumber = document.getElementById('pin-number').value;
console.log(pinNumber);

if( phoneNumber === '5' && pinNumber === '1234'){
    console.log('You are logged in');
    window.location.href = './home.html'
}else{
    alert('wrong pin or number')
}
})