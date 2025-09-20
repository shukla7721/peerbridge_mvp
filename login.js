document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === "success") {
      alert(data.message);
      window.location.href = "verify.html";
    } else {
      alert(data.message);
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Something went wrong.");
  });
});