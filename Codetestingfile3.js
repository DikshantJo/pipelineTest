function insecureDemo() {
    // 1. XSS vulnerability
    const userInput = location.hash.substring(1);
    document.getElementById("output").innerHTML = `<div>${userInput}</div>`;

    // 2. Eval injection
    const userCode = prompt("Enter code to run:");
    const result = eval(userCode);
    console.log("Result:", result);

    // 3. Open redirect
    const redirectTo = new URLSearchParams(location.search).get('next');
    location.href = redirectTo;
    console.log('asdasd')
}
