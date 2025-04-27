document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const staffId = document.getElementById('staffId').value;
    const password = document.getElementById('password').value;

    // Create data object
    const loginData = {
        staffId: staffId,
        password: password
    };

    // Fetch request to Google Apps Script Web App
    fetch('https://script.google.com/macros/s/AKfycbzri07nVtHmuY4tbRc_c3tnOOf8szTJQRYDBVhDpCja/dev', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirect to the dashboard
                window.location.href = 'dashboard.html';
            } else {
                // Show error message
                document.getElementById('errorMessage').style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('errorMessage').textContent = 'An error occurred during login. Please try again.';
            document.getElementById('errorMessage').style.display = 'block';
        });
});
