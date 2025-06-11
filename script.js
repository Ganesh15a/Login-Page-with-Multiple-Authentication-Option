// Sample user data
const users = [
  {
    email: "uaskhkas.com",
    username: "ganesh",
    phone: "12345",
    password: "pass123"
  },
  {
    email: "admin@example.com",
    username: "admin",
    phone: "9876543210",
    password: "adminpass"
  }
];

const authMode = document.getElementById("authMode");
const identifier = document.getElementById("identifier");
const password = document.getElementById("password");
const passwordGroup = document.getElementById("passwordGroup");
const form = document.getElementById("loginForm");
const status = document.getElementById("loginStatus");

authMode.addEventListener("change", () => {
  status.textContent = "";
  if (authMode.value === "phone") {
    passwordGroup.style.display = "none";
    identifier.placeholder = "Enter Phone Number";
    password.removeAttribute("required");
  } else {
    passwordGroup.style.display = "block";
    password.setAttribute("required", "true");
    identifier.placeholder = `Enter ${authMode.value.charAt(0).toUpperCase() + authMode.value.slice(1)}`;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = identifier.value.trim();
  const pass = password.value;
  let foundUser;

  if (authMode.value === "email") {
    foundUser = users.find(user => user.email === input && user.password === pass);
  } else if (authMode.value === "username") {
    foundUser = users.find(user => user.username === input && user.password === pass);
  } else if (authMode.value === "phone") {
    foundUser = users.find(user => user.phone === input);
  }

  if (foundUser) {
    status.style.color = "green";
    status.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "welcome.html";
    }, 1000);
  } else {
    status.style.color = "red";
    status.textContent = "Invalid credentials!";
  }
});
