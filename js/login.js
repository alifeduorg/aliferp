document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent default form submission

    // Get the values entered by the user in the form
    var staffId = document.getElementById("staffId").value;
    var password = document.getElementById("password").value;

    console.log("Staff ID:", staffId);  // Log staff ID for debugging
    console.log("Password:", password);  // Log password for debugging

    // Send POST request to the Google Apps Script to validate login
    fetch('https://script.google.com/macros/s/AKfycbzri07nVtHmuY4tbRc_c3tnOOf8szTJQRYDBVhDpCja/dev', {
        method: 'POST',
        body: JSON.stringify({ staffId: staffId, password: password }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(result => {
        console.log("Login Result:", result);  // Log the result to check if it's true/false
        if (result === true) {
            // Redirect to the dashboard if login is successful
            window.location.href = "dashboard.html";  // Redirect to dashboard page
        } else {
            alert("Invalid Staff ID or Password.");
        }
    })
    .catch(error => {
        console.error('Error:', error);  // Log any network or fetch errors
        alert("An error occurred while processing your login.");
    });
});
