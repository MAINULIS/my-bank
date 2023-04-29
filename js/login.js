// step-1:add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    
    // step-2 get the email address inside the email field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step-3: get password from the input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value ;
    
    // step-4: verify email and password and give validation message
    if(email === 'my@bank.com' && password ==='myBank'){
        window.location.href =' bank.html';
    }
    else{alert('Please, provide an valid Email or Password')}
})