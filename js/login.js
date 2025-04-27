const loginData = {
    staffId: document.getElementById('staffId').value.trim(),
    password: document.getElementById('password').value.trim()
};

fetch('https://script.google.com/macros/s/AKfycbwuTGphCBTYyoYXcBawh6U53She23mIcDAqSY--hYmZMsVcrQ4kxFt9RmBQgf_HDtznig/exec', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        window.location.href = 'dashboard.html';  // Redirect to the dashboard
    } else {
        document.getElementById('errorMessage').style.display = 'block';  // Show error
    }
})
.catch(error => {
    console.error('Error:', error);
    document.getElementById('errorMessage').textContent = 'An error occurred during login. Please try again.';
    document.getElementById('errorMessage').style.display = 'block';
});
