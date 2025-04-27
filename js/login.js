document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior (page refresh)
  
  // Get the input values
  var staffId = document.getElementById('staffId').value;
  var password = document.getElementById('password').value;
  
  // Prepare the data to send to the Google Apps Script (your web app)
  var data = {
    staffId: staffId,
    password: password
  };

  // Make the POST request to the Google Apps Script endpoint
  fetch('https://script.google.com/macros/s/AKfycbwuTGphCBTYyoYXcBawh6U53She23mIcDAqSY--hYmZMsVcrQ4kxFt9RmBQgf_HDtznig/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)  // Send the login data
  })
  .then(response => response.json())  // Parse the JSON response
  .then(responseData => {
    if (responseData.success) {
      // If login is successful, redirect to the dashboard page
      window.location.href = 'dashboard.html';  // Change to your dashboard page URL
    } else {
      // If login fails, show an error message
      alert('Invalid Staff ID or Password. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error occurred:', error);
    alert('An error occurred while processing your login. Please try again later.');
  });
});
