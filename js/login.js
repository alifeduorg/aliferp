document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var staffId = document.getElementById('staffId').value.trim();
  var password = document.getElementById('password').value.trim();

  if (staffId === "" || password === "") {
    alert("Please fill all fields!");
    return;
  }

  fetch('https://script.google.com/macros/s/AKfycbwuTGphCBTYyoYXcBawh6U53She23mIcDAqSY--hYmZMsVcrQ4kxFt9RmBQgf_HDtznig/exec', {
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
