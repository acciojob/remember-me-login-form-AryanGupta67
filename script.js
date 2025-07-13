// Wait for DOM to load
window.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const checkbox = document.getElementById('checkbox');
  const submitBtn = document.getElementById('submit');
  const existingBtn = document.getElementById('existing');
  const form = document.getElementById('loginForm');

  // Check if credentials exist in localStorage
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    existingBtn.style.display = 'inline-block';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (username === "" || password === "") {
      alert("Please fill in both fields.");
      return;
    }

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
  });

  existingBtn.addEventListener('click', () => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      alert(`Logged in as ${storedUsername}`);
    }
  });
});

