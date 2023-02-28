// Step-1: add click event handler with the submit button
document.getElementById('button-submit').addEventListener('click',function(){
    // Step-2: get the email address inside the email input field
    // always remember to use .value to get text from na input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //Step-3: get password
    // set id on the HTML element
    // get the element
    // get the value from the elements
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER: Do not verify email password on the client side 
    // Step-4:  verify email password 
    if (email === 'sontan@baap.com' && password === 'secret'){
        console.log('valid user');
    }
    else{
        alert('moira ja toi');
    }
})