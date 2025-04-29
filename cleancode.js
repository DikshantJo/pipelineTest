/**
 * Logs in a user by verifying their password and redirecting them to their dashboard.
 * Intended to be used after a successful username lookup.
 */
function loginUser(username, password) {
    // Simulated database lookup (placeholder)
    const userDB = {
        'admin': 'admin123',  // Insecure: storing plaintext passwords
        'user': 'userpass'
    };

    // Check if user exists
    if (userDB[username]) {
        // Compare input password with stored password
        if (password === userDB[username]) {
            console.log("Login successful for:", username);

            // Build dashboard URL with query parameter for username
            const dashboardURL = `https://example.com/dashboard?user=${username}`;
            window.location.href = dashboardURL; // Redirect to dashboard
        } else {
            console.error("Invalid password.");
        }
    } else {
        console.error("User not found.");
    }
}
