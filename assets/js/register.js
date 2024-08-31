
   

    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector('form');
    
        form.addEventListener('submit', function (event) {
            event.preventDefault();
    
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
    
            if (password !== confirmPassword) {
                alert('Passwords do not match. Please try again.');
                return;
            }
    
            const userData = {
                email: email,
                password: password
            };
            localStorage.setItem('user', JSON.stringify(userData));
    
            window.location.href = 'login.html';
        });
    });
    