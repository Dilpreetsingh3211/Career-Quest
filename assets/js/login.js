document.addEventListener('DOMContentLoaded', function () {
    function checkLoginStatus() {
        let isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === null) {
            localStorage.setItem('isLoggedIn', 'false');
            isLoggedIn = 'false';
        }

        if (isLoggedIn === 'true') {
            document.querySelectorAll('.auth-btn').forEach(btn => {
                btn.style.display = 'none';
            });
            const logoutContainer = document.getElementById('logout-container');
            if (logoutContainer) {
                logoutContainer.style.display = 'block';
            }

            enableFeatureLinks();
        } else {
            document.querySelectorAll('.auth-btn').forEach(btn => {
                btn.style.display = 'block';
            });
            const logoutContainer = document.getElementById('logout-container');
            if (logoutContainer) {
                logoutContainer.style.display = 'none';
            }

            disableFeatureLinks();
        }
    }

    function disableFeatureLinks() {
        const featureLinks = document.querySelectorAll('.feature-link');
        featureLinks.forEach(link => {
            link.classList.add('disabled');
            link.style.pointerEvents = 'none';
            link.style.opacity = '0.5';
        });
    }

    function enableFeatureLinks() {
        const featureLinks = document.querySelectorAll('.feature-link');
        featureLinks.forEach(link => {
            link.classList.remove('disabled');
            link.style.pointerEvents = 'auto';
            link.style.opacity = '1';
        });
    }

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.email === email && storedUser.password === password) {
                localStorage.setItem('isLoggedIn', 'true');
                alert('Login successful!');
                window.location.href = 'index.html';
            } else {
                alert('Invalid email or password. Please try again.');
            }
        });
    }

    function signOut() {
        localStorage.setItem('isLoggedIn', 'false');
        disableFeatureLinks();
        alert('You have been logged out.');
        window.location.href = 'login.html';
    }

    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function (event) {
            event.preventDefault();
            signOut();
        });
    }

    checkLoginStatus();

    window.addEventListener('beforeunload', function () {
    });
});
