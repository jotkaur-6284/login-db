document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = this.username.value;
  const password = this.password.value;

  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();

  document.getElementById("message").textContent = data.message;

  if (res.ok) {
    document.getElementById("message").style.color = "green";
  }
});
