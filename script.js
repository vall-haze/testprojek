// Add event listener to login button
document.querySelector(".login-form button").addEventListener("click", (e) => {
  e.preventDefault();
  // Get input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  // Validate input values
  if (username === "" || password === "") {
    alert("Please fill in all fields");
  } else {
    // Send request to server (e.g., using fetch API)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Login successful, redirect to dashboard
          window.location.href = "/dashboard";
        } else {
          // Login failed, display error message
          alert("Invalid username or password");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
