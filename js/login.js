document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var staffId = document.getElementById('staffId').value.trim();
  var password = document.getElementById('password').value.trim();

  if (staffId === "" || password === "") {
    alert("Please fill all fields!");
    return;
  }

  fetch('https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbzri07nVtHmuY4tbRc_c3tnOOf8szTJQRYDBVhDpCja/dev/exec', {
    method: 'POST',
    body: JSON.stringify({
      type: "login",
      staffId: staffId,
      password: password
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      // Save login details (if needed)
      localStorage.setItem('staffId', staffId);
      window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
      alert("Invalid Staff ID or Password!");
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Something went wrong. Try again later!");
  });
});
