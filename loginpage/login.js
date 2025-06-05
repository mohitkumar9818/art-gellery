function validateLogin(e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (!email || !password) {
      alert("Please fill in both fields.");
      return false;
    }
  
    if (!email.includes("@")) {
      alert("Invalid email format.");
      return false;
    }
  
    alert("Login successful! Redirecting to dashboard...");
    window.location.href = "index.html"; // change this to your actual dashboard page
    return true;
  }
  
  // Toggle password visibility
  document.getElementById("togglePassword").addEventListener("click", () => {
    const pass = document.getElementById("password");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  });
  