<!DOCTYPE html>
<html>
<head>
  <title>Insecure JS Example</title>
</head>
<body>
  <h2>Insecure Demo Page</h2>

  <form id="loginForm">
    <input type="text" id="username" placeholder="Enter username">
    <input type="password" id="password" placeholder="Enter password">
    <button type="submit">Login</button>
  </form>

  <div id="output"></div>

  <script>
    // ❌ Insecure: storing passwords in localStorage
    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      // Store credentials unsafely
      localStorage.setItem("user", user);
      localStorage.setItem("pass", pass);

      // ❌ Insecure: directly inject user input into HTML (XSS)
      document.getElementById("output").innerHTML =
        "<p>Welcome " + user + "!</p>";

      // ❌ Insecure: eval on user input
      try {
        eval(user); // if user types JS, it runs
      } catch (err) {
        console.log("Eval error:", err);
      }
    });
  </script>
</body>
</html>
