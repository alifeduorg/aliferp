const form = document.querySelector("#login-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();  // Prevent form from submitting the default way

  const staffId = document.getElementById("staff-id").value;
  const password = document.getElementById("password").value;

  // Send POST request to Google Apps Script with form data
  fetch('https://script.google.com/macros/s/AKfycbwuTGphCBTYyoYXcBawh6U53She23mIcDAqSY--hYmZMsVcrQ4kxFt9RmBQgf_HDtznig/exec', {
    method: 'POST',
    body: JSON.stringify({
      staffId: staffId,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Redirect to dashboard if login is successful
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid credentials');
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("An error occurred, please try again.");
  });
});
