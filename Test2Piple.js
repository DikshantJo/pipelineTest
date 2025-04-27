// Dummy JavaScript Code with potential issues and vulnerabilities

// 1. Insecure password handling (plaintext storage)
let userPassword = '12345'; // Storing password as plain text
console.log('User password: ', userPassword);

// 2. Use of eval (potential for code injection)
let userInput = 'alert("Hacked!")'; // Simulated malicious user input
eval(userInput); // This can execute arbitrary code from user input

// 3. Cross-Site Scripting (XSS) vulnerability
let userInputXSS = '<script>alert("XSS Attack!")</script>'; // Simulated malicious user input
document.body.innerHTML = userInputXSS; // Rendering input directly in the DOM (XSS vulnerability)

// 4. Insecure AJAX request (missing CORS headers)
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://example.com/sensitive-data", true);
xhr.send();

// 5. Hardcoded API keys
const API_KEY = "1234567890abcdef"; // Exposing API key directly in the client-side code
console.log("API key: ", API_KEY);

// 6. Insecure cookie storage (no HttpOnly or Secure flags)
document.cookie = "sessionId=abcd1234; path=/;"; // Storing session ID in cookies without security flags

// 7. Insecure random number generation (predictable)
function getRandomNumber() {
  return Math.random(); // Insecure, can be predicted
}

let randomValue = getRandomNumber();
console.log("Random number: ", randomValue);

// 8. Potential for race conditions (concurrent async issue)
let balance = 1000;
function transferFunds(amount) {
  setTimeout(() => {
    balance -= amount;
    console.log('Balance after transfer: ', balance);
  }, 100);
}

transferFunds(500); // Simulating two transfers that could race
transferFunds(200); // Second transfer happening too soon, causing potential issues
