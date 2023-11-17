document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // You can replace this with your own server-side code
    console.log('User attempted to log in with email:', email, 'and password:', password);
});