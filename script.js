"use strict;"

document.addEventListener('DOMContentLoaded', function (){
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
   
    

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username= document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim(); 
        const password = document.getElementById('password').value.trim();
        let isValid = true;
        const messages = [];


        if (username.length < 3) {
            messages.push('Username must be at least 3 characters long.');
            isValid = false;
        }
        if (!email.includes('@') || !email.includes('.')) {
            messages.push('Email must contain an "@" symbol.');
            isValid = false;
        }
        if (!password.length <= 8) {
            messages.push('Password must be at least 8 characters long.');
            isValid = false;
        }
    
            feedbackDiv.style.display = 'block';
        if (isValid=== true) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }
        
    
    
    });

});











