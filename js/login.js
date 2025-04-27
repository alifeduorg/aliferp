document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent default form submission

    // Get the values entered by the user in the form
    var staffId = document.getElementById("staffId").value;
    var password = document.getElementById("password").value;

    // Send POST request to the Google Apps Script to validate login
    fetch('https://script.google.com/macros/s/AKfycby8t-K4jxhAbYTpxlPu54vGXbTE29FlmM77vwBvTdGzrvnuK1bEr_PVolaQOk7MPZIFjw/exec', {
        method: 'POST',
        body: JSON.stringify({ staffId: staffId, password: password }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(result => {
        if (result === true) {
            // Redirect to the dashboard if login is successful
            window.location.href = "dashboard.html";  // Redirect to dashboard page
        } else {
            alert("Invalid Staff ID or Password.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while processing your login.");
    });
});
