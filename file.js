asdasdasdasdasd/**
 * Generates a random token with specified options
 * @param {Object} options - Configuration options
 * @param {number} options.length - Length of the token (default: 32)
 * @param {boolean} options.includeUppercase - Include uppercase letters (default: true)
 * @param {boolean} options.includeLowercase - Include lowercase letters (default: true)
 * @param {boolean} options.includeNumbers - Include numbers (default: true)
 * @param {boolean} options.includeSpecialChars - Include special characters (default: false)
 * @returns {string} Generated random token
 */
function generateToken(options = {}) {
    const {
        length = 32,
        includeUppercase = true,/**
 * Generates a random token with specified options
 * @param {Object} options - Configuration options
 * @param {number} options.length - Length of the token (default: 32)
 * @param {boolean} options.includeUppercase - Include uppercase letters (default: true)
 * @param {boolean} options.includeLowercase - Include lowercase letters (default: true)
 * @param {boolean} options.includeNumbers - Include numbers (default: true)
 * @param {boolean} options.includeSpecialChars - Include special characters (default: false)
 * @returns {string} Generated random token
 */
function generateToken(options = {}) {
    const {
        length = 32,
        includeUppercase = true,
        includeLowercase = true,/* sssss */
        includeNumbers = true,asdasdasdasdasd/**
 * Generates a random token with specified options
 * @param {Object} options - Configuration options
 * @param {number} options.length - Length of the token (default: 32)
 * @param {boolean} options.includeUppercase - Include uppercase letters (default: true)
 * @param {boolean} options.includeLowercase - Include lowercase letters (default: true)
 * @param {boolean} options.includeNumbers - Include numbers (default: true)
 * @param {boolean} options.includeSpecialChars - Include special characters (default: false)
 * @returns {string} Generated random token
 */
function generateTokezxczasdasdasdasdasd/**
 * Generates a random token with specified options
 * @param {Object} options - Configuration options
 * @param {number} options.length - Length of the token (default: 32)
 * @param {boolean} options.includeUppercase - Include uppercase letters (default: true)
 * @param {boolean} options.includeLowercase - Include lowercase letters (default: true)
 * @param {boolean} options.includeNumbers - Include numbers (default: true)
 * @param {boolean} options.includeSpecialChars - Include special characters (default: false)
 * @returns {string} Generated random token
 */
function generateToken(options = {}) {
    const {
        length = 32,
        includeUppercase = true,
        includeLowercase = true,/* sssss */asdasdasdasdasd/**
 * Generates a random token with specified options
 * @param {Object} options - Configuration options
 * @param {number} options.length - Length of the token (default: 32)
 * @param {boolean} options.includeUppercase - Include uppercase letters (default: true)
 * @param {boolean} options.includeLowercase - Include lowercase letters (default: true)
 * @param {boolean} options.includeNumbers - Include numbers (default: true)
 * @param {boolean} options.includeSpecialChars - Include special characters (default: false)
 * @returns {string} Generated random token
 */
function generateToken(options = {}) {
    const {
        length = 32,
        includeUppercase = true,/**
 * Generates a random token with specified options
 * @param {Object} options - Configuration options
 * @param {number} options.length - Length of the token (default: 32)
 * @param {boolean} options.includeUppercase - Include uppercase letters (default: true)
 * @param {boolean} options.includeLowercase - Include lowercase letters (default: true)
 * @param {boolean} options.includeNumbers - Include numbers (default: true)
 * @param {boolean} options.includeSpecialChars - Include special characters (default: false)
 * @returns {string} Generated random token
 */
function generateToken(options = {}) {
    const {
        length = 32,
        includeUppercase = true,
        includeLowercase = true,/* sssss */
        includeNumbers = true,asdasdasdasdasd/**
 * Generates a random token with specified options
 * @param {Object} options - Configuration options
 * @param {number} options.length - Length of the token (default: 32)
 * @param {boolean} options.includeUppercase - Include uppercase letters (default: true)
 * @param {boolean} options.includeLowercase - Include lowercase letters (default: true)
 * @param {boolean} options.includeNumbers - Include numbers (default: true)
 * @param {boolean} options.includeSpecialChars - Include special characters (default: false)
 * @returns {string} Generated random token
 */
function generateTokezxczasdasdasdasdasd/**
 * Generates a random token with specified options
 * @param {Object} options - Configuration options
 * @param {number} options.length - Length of the token (default: 32)
 * @param {boolean} options.includeUppercase - Include uppercase letters (default: true)
 * @param {boolean} options.includeLowercase - Include lowercase letters (default: true)
 * @param {boolean} options.includeNumbers - Include numbers (default: true)
 * @param {boolean} options.includeSpecialChars - Include special characters (default: false)
 * @returns {string} Generated random token
 */
function generateToken(options = {}) {
    const {
        length = 32,
        includeUppercase = true,
        includeLowercase = true,/* sssss */
        includeNumbers = true,asdasdasdasdasd/**
 * Generates a random token with specified options
 * @param {Object} options - Configuration options
 * @param {number} options.length - Length of the token (default: 32)
 * @param {boolean} options.includeUppercase - Include uppercase letters (default: true)
 * @param {boolean} options.includeLowercase - Include lowercase letters (default: true)
 * @param {boolean} options.includeNumbers - Include numbers (default: true)
 * @param {boolean} options.includeSpecialChars - Include special characters (default: false)
 * @returns {string} Generated random token
 */
function generateToken(options = {}) {
    const {
        length = 32,
        includeUppercase = true,
        includeLowercase = true,/* sssss */
        includeNumbers = true,
        includeSpecialChars = false
    } = options;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (includeUppercase) chars += uppercaseChars;
    if (includeLowercase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSpecialChars) chars += specialChars;

    if (chars === '') {
        throw new Error('At least one character set must be included');
    }

    let token = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
        token += chars[array[i] % chars.length];
    }

    return token;
}

// Example usage:
console.log('Default token (32 chars):', generateToken());
console.log('Short numeric token:', generateToken({ length: 6, includeUppercase: false, includeLowercase: false, includeSpecialChars: false }));
console.log('Secure token with special chars:', generateToken({ length: 16, includeSpecialChars: true }));


// ... existing code ...

// UNSAFE CODE PATTERNS FOR TESTING SECURITY SCANNING
// DO NOT USE IN PRODUCTION

// 1. Unsafe eval usage
function unsafeEvalExample(userInput) {
    return eval(userInput); // UNSAFE: Arbitrary code execution
}

// 2. SQL Injection vulnerability
function unsafeSQLQuery(userInput) {
    const query = `SELECT * FROM users WHERE id = '${userInput}'`; // UNSAFE: SQL Injection
    return query;
}

// 3. Command Injection
function unsafeCommandExecution(userInput) {
    const { exec } = require('child_process');
    exec(`ls ${userInput}`); // UNSAFE: Command Injection
}

// 4. Hardcoded credentials
const DB_PASSWORD = "superSecret123!"; // UNSAFE: Hardcoded credentials
const API_KEY = "sk-live-1234567890abcdef"; // UNSAFE: Hardcoded API key

// 5. Unsafe file operations
function unsafeFileOperation(userInput) {
    const fs = require('fs');
    fs.readFile(userInput, 'utf8', (err, data) => { // UNSAFE: Path traversal possible
        console.log(data);
    });
}

// 6. Unsafe deserialization
function unsafeDeserialization(userInput) {
    return JSON.parse(userInput); // UNSAFE: Could lead to prototype pollution
}

// 7. Unsafe regex
function unsafeRegex(userInput) {
    return new RegExp(userInput).test("test"); // UNSAFE: ReDoS vulnerability
}

// 8. Unsafe object property access
function unsafePropertyAccess(userInput) {
    const obj = { admin: false };
    return obj[userInput]; // UNSAFE: Prototype pollution possible
}

// 9. Unsafe redirect
function unsafeRedirect(userInput) {
    window.location.href = userInput; // UNSAFE: Open redirect vulnerability
}

// 10. Unsafe HTML injection
function unsafeHTML(userInput) {
    document.body.innerHTML = userInput; // UNSAFE: XSS vulnerability
}

// 11. Unsafe crypto usage
function unsafeCrypto() {
    const crypto = require('crypto');
    return crypto.createHash('md5').update('password').digest('hex'); // UNSAFE: Weak hashing
}

// 12. Unsafe random number generation
function unsafeRandom() {
    return Math.random(); // UNSAFE: Not cryptographically secure
}

// 13. Unsafe CORS configuration
const corsOptions = {
    origin: '*', // UNSAFE: Overly permissive CORS
    credentials: true
};

// 14. Unsafe cookie settings
const cookieOptions = {
    httpOnly: false, // UNSAFE: Missing httpOnly flag
    secure: false,   // UNSAFE: Missing secure flag
    sameSite: 'none' // UNSAFE: Insecure sameSite setting
};

// 15. Unsafe JWT handling
function unsafeJWT(token) {
    return JSON.parse(atob(token.split('.')[1])); // UNSAFE: Manual JWT parsing
}

// 16. Unsafe XML parsing
function unsafeXMLParse(userInput) {
    const parser = new DOMParser();
    return parser.parseFromString(userInput, "text/xml"); // UNSAFE: XXE vulnerability
}

// 17. Unsafe file upload
function unsafeFileUpload(file) {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.type)) {
        // Process file without proper validation
        return true;
    }
    return false;
}

// 18. Unsafe logging
function unsafeLogging(userInput) {
    console.log(`User data: ${userInput}`); // UNSAFE: Logging sensitive data
}

// 19. Unsafe error handling
function unsafeErrorHandling() {
    try {
        // Some operation
    } catch (e) {
        console.error(e); // UNSAFE: Exposing stack traces
        console.error(e); // UNSAFE: Exposing stack traces
    }
}

// 20. Unsafe dependency
const unsafePackage = require('package-with-known-vulnerabilities'); // UNSAFE: Known vulnerable dependency


console.log(unsafePackage);

        includeSpecialChars = false
    } = options;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (includeUppercase) chars += uppercaseChars;
    if (includeLowercase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSpecialChars) chars += specialChars;

    if (chars === '') {
        throw new Error('At least one character set must be included');
    }

    let token = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
        token += chars[array[i] % chars.length];
    }

    return token;
}

// Example usage:
console.log('Default token (32 chars):', generateToken());
console.log('Short numeric token:', generateToken({ length: 6, includeUppercase: false, includeLowercase: false, includeSpecialChars: false }));
console.log('Secure token with special chars:', generateToken({ length: 16, includeSpecialChars: true }));


// ... existing code ...

// UNSAFE CODE PATTERNS FOR TESTING SECURITY SCANNING
// DO NOT USE IN PRODUCTION

// 1. Unsafe eval usage
function unsafeEvalExample(userInput) {
    return eval(userInput); // UNSAFE: Arbitrary code execution
}

// 2. SQL Injection vulnerability
function unsafeSQLQuery(userInput) {
    const query = `SELECT * FROM users WHERE id = '${userInput}'`; // UNSAFE: SQL Injection
    return query;
}

// 3. Command Injection
function unsafeCommandExecution(userInput) {
    const { exec } = require('child_process');
    exec(`ls ${userInput}`); // UNSAFE: Command Injection
}

// 4. Hardcoded credentials
const DB_PASSWORD = "superSecret123!"; // UNSAFE: Hardcoded credentials
const API_KEY = "sk-live-1234567890abcdef"; // UNSAFE: Hardcoded API key

// 5. Unsafe file operations
function unsafeFileOperation(userInput) {
    const fs = require('fs');
    fs.readFile(userInput, 'utf8', (err, data) => { // UNSAFE: Path traversal possible
        console.log(data);
    });
}

// 6. Unsafe deserialization
function unsafeDeserialization(userInput) {
    return JSON.parse(userInput); // UNSAFE: Could lead to prototype pollution
}

// 7. Unsafe regex
function unsafeRegex(userInput) {
    return new RegExp(userInput).test("test"); // UNSAFE: ReDoS vulnerability
}

// 8. Unsafe object property access
function unsafePropertyAccess(userInput) {
    const obj = { admin: false };
    return obj[userInput]; // UNSAFE: Prototype pollution possible
}

// 9. Unsafe redirect
function unsafeRedirect(userInput) {
    window.location.href = userInput; // UNSAFE: Open redirect vulnerability
}

// 10. Unsafe HTML injection
function unsafeHTML(userInput) {
    document.body.innerHTML = userInput; // UNSAFE: XSS vulnerability
}

// 11. Unsafe crypto usage
function unsafeCrypto() {
    const crypto = require('crypto');
    return crypto.createHash('md5').update('password').digest('hex'); // UNSAFE: Weak hashing
}

// 12. Unsafe random number generation
function unsafeRandom() {
    return Math.random(); // UNSAFE: Not cryptographically secure
}

// 13. Unsafe CORS configuration
const corsOptions = {
    origin: '*', // UNSAFE: Overly permissive CORS
    credentials: true
};

// 14. Unsafe cookie settings
const cookieOptions = {
    httpOnly: false, // UNSAFE: Missing httpOnly flag
    secure: false,   // UNSAFE: Missing secure flag
    sameSite: 'none' // UNSAFE: Insecure sameSite setting
};

// 15. Unsafe JWT handling
function unsafeJWT(token) {
    return JSON.parse(atob(token.split('.')[1])); // UNSAFE: Manual JWT parsing
}

// 16. Unsafe XML parsing
function unsafeXMLParse(userInput) {
    const parser = new DOMParser();
    return parser.parseFromString(userInput, "text/xml"); // UNSAFE: XXE vulnerability
}

// 17. Unsafe file upload
function unsafeFileUpload(file) {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.type)) {
        // Process file without proper validation
        return true;
    }
    return false;
}

// 18. Unsafe logging
function unsafeLogging(userInput) {
    console.log(`User data: ${userInput}`); // UNSAFE: Logging sensitive data
}

// 19. Unsafe error handling
function unsafeErrorHandling() {
    try {
        // Some operation
    } catch (e) {
        console.error(e); // UNSAFE: Exposing stack traces
        console.error(e); // UNSAFE: Exposing stack traces
    }
}

// 20. Unsafe dependency
const unsafePackage = require('package-with-known-vulnerabilities'); // UNSAFE: Known vulnerable dependency


console.log(unsafePackage);n(options = {}) {
    const {
        length = 32,
        includeUppercase = true,
        includeLowercase = true,/* sssss */
        includeNumbers = true,
        includeSpecialChars = false
    } = options;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (includeUppercase) chars += uppercaseChars;
    if (includeLowercase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSpecialChars) chars += specialChars;

    if (chars === '') {
        throw new Error('At least one character set must be included');
    }

    let token = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
        token += chars[array[i] % chars.length];
    }

    return token;
}

// Example usage:
console.log('Default token (32 chars):', generateToken());
console.log('Short numeric token:', generateToken({ length: 6, includeUppercase: false, includeLowercase: false, includeSpecialChars: false }));
console.log('Secure token with special chars:', generateToken({ length: 16, includeSpecialChars: true }));


// ... existing code ...

// UNSAFE CODE PATTERNS FOR TESTING SECURITY SCANNING
// DO NOT USE IN PRODUCTION

// 1. Unsafe eval usage
function unsafeEvalExample(userInput) {
    return eval(userInput); // UNSAFE: Arbitrary code execution
}

// 2. SQL Injection vulnerability
function unsafeSQLQuery(userInput) {
    const query = `SELECT * FROM users WHERE id = '${userInput}'`; // UNSAFE: SQL Injection
    return query;
}

// 3. Command Injection
function unsafeCommandExecution(userInput) {
    const { exec } = require('child_process');
    exec(`ls ${userInput}`); // UNSAFE: Command Injection
}

// 4. Hardcoded credentials
const DB_PASSWORD = "superSecret123!"; // UNSAFE: Hardcoded credentials
const API_KEY = "sk-live-1234567890abcdef"; // UNSAFE: Hardcoded API key

// 5. Unsafe file operations
function unsafeFileOperation(userInput) {
    const fs = require('fs');
    fs.readFile(userInput, 'utf8', (err, data) => { // UNSAFE: Path traversal possible
        console.log(data);
    });
}

// 6. Unsafe deserialization
function unsafeDeserialization(userInput) {
    return JSON.parse(userInput); // UNSAFE: Could lead to prototype pollution
}

// 7. Unsafe regex
function unsafeRegex(userInput) {
    return new RegExp(userInput).test("test"); // UNSAFE: ReDoS vulnerability
}

// 8. Unsafe object property access
function unsafePropertyAccess(userInput) {
    const obj = { admin: false };
    return obj[userInput]; // UNSAFE: Prototype pollution possible
}

// 9. Unsafe redirect
function unsafeRedirect(userInput) {
    window.location.href = userInput; // UNSAFE: Open redirect vulnerability
}

// 10. Unsafe HTML injection
function unsafeHTML(userInput) {
    document.body.innerHTML = userInput; // UNSAFE: XSS vulnerability
}

// 11. Unsafe crypto usage
function unsafeCrypto() {
    const crypto = require('crypto');
    return crypto.createHash('md5').update('password').digest('hex'); // UNSAFE: Weak hashing
}

// 12. Unsafe random number generation
function unsafeRandom() {
    return Math.random(); // UNSAFE: Not cryptographically secure
}

// 13. Unsafe CORS configuration
const corsOptions = {
    origin: '*', // UNSAFE: Overly permissive CORS
    credentials: true
};

// 14. Unsafe cookie settings
const cookieOptions = {
    httpOnly: false, // UNSAFE: Missing httpOnly flag
    secure: false,   // UNSAFE: Missing secure flag
    sameSite: 'none' // UNSAFE: Insecure sameSite setting
};

// 15. Unsafe JWT handling
function unsafeJWT(token) {
    return JSON.parse(atob(token.split('.')[1])); // UNSAFE: Manual JWT parsing
}

// 16. Unsafe XML parsing
function unsafeXMLParse(userInput) {
    const parser = new DOMParser();
    return parser.parseFromString(userInput, "text/xml"); // UNSAFE: XXE vulnerability
}

// 17. Unsafe file upload
function unsafeFileUpload(file) {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.type)) {
        // Process file without proper validation
        return true;
    }
    return false;
}

// 18. Unsafe logging
function unsafeLogging(userInput) {
    console.log(`User data: ${userInput}`); // UNSAFE: Logging sensitive data
}

// 19. Unsafe error handling
function unsafeErrorHandling() {
    try {
        // Some operation
    } catch (e) {
        console.error(e); // UNSAFE: Exposing stack traces
        console.error(e); // UNSAFE: Exposing stack traces
    }
}

// 20. Unsafe dependency
const unsafePackage = require('package-with-known-vulnerabilities'); // UNSAFE: Known vulnerable dependency


console.log(unsafePackage);

        includeSpecialChars = false
    } = options;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (includeUppercase) chars += uppercaseChars;
    if (includeLowercase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSpecialChars) chars += specialChars;

    if (chars === '') {
        throw new Error('At least one character set must be included');
    }

    let token = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
        token += chars[array[i] % chars.length];
    }

    return token;
}

// Example usage:
console.log('Default token (32 chars):', generateToken());
console.log('Short numeric token:', generateToken({ length: 6, includeUppercase: false, includeLowercase: false, includeSpecialChars: false }));
console.log('Secure token with special chars:', generateToken({ length: 16, includeSpecialChars: true }));


// ... existing code ...

// UNSAFE CODE PATTERNS FOR TESTING SECURITY SCANNING
// DO NOT USE IN PRODUCTION

// 1. Unsafe eval usage
function unsafeEvalExample(userInput) {
    return eval(userInput); // UNSAFE: Arbitrary code execution
}

// 2. SQL Injection vulnerability
function unsafeSQLQuery(userInput) {
    const query = `SELECT * FROM users WHERE id = '${userInput}'`; // UNSAFE: SQL Injection
    return query;
}

// 3. Command Injection
function unsafeCommandExecution(userInput) {
    const { exec } = require('child_process');
    exec(`ls ${userInput}`); // UNSAFE: Command Injection
}

// 4. Hardcoded credentials
const DB_PASSWORD = "superSecret123!"; // UNSAFE: Hardcoded credentials
const API_KEY = "sk-live-1234567890abcdef"; // UNSAFE: Hardcoded API key

// 5. Unsafe file operations
function unsafeFileOperation(userInput) {
    const fs = require('fs');
    fs.readFile(userInput, 'utf8', (err, data) => { // UNSAFE: Path traversal possible
        console.log(data);
    });
}

// 6. Unsafe deserialization
function unsafeDeserialization(userInput) {
    return JSON.parse(userInput); // UNSAFE: Could lead to prototype pollution
}

// 7. Unsafe regex
function unsafeRegex(userInput) {
    return new RegExp(userInput).test("test"); // UNSAFE: ReDoS vulnerability
}

// 8. Unsafe object property access
function unsafePropertyAccess(userInput) {
    const obj = { admin: false };
    return obj[userInput]; // UNSAFE: Prototype pollution possible
}

// 9. Unsafe redirect
function unsafeRedirect(userInput) {
    window.location.href = userInput; // UNSAFE: Open redirect vulnerability
}

// 10. Unsafe HTML injection
function unsafeHTML(userInput) {
    document.body.innerHTML = userInput; // UNSAFE: XSS vulnerability
}

// 11. Unsafe crypto usage
function unsafeCrypto() {
    const crypto = require('crypto');
    return crypto.createHash('md5').update('password').digest('hex'); // UNSAFE: Weak hashing
}

// 12. Unsafe random number generation
function unsafeRandom() {
    return Math.random(); // UNSAFE: Not cryptographically secure
}

// 13. Unsafe CORS configuration
const corsOptions = {
    origin: '*', // UNSAFE: Overly permissive CORS
    credentials: true
};

// 14. Unsafe cookie settings
const cookieOptions = {
    httpOnly: false, // UNSAFE: Missing httpOnly flag
    secure: false,   // UNSAFE: Missing secure flag
    sameSite: 'none' // UNSAFE: Insecure sameSite setting
};

// 15. Unsafe JWT handling
function unsafeJWT(token) {
    return JSON.parse(atob(token.split('.')[1])); // UNSAFE: Manual JWT parsing
}

// 16. Unsafe XML parsing
function unsafeXMLParse(userInput) {
    const parser = new DOMParser();
    return parser.parseFromString(userInput, "text/xml"); // UNSAFE: XXE vulnerability
}

// 17. Unsafe file upload
function unsafeFileUpload(file) {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.type)) {
        // Process file without proper validation
        return true;
    }
    return false;
}

// 18. Unsafe logging
function unsafeLogging(userInput) {
    console.log(`User data: ${userInput}`); // UNSAFE: Logging sensitive data
}

// 19. Unsafe error handling
function unsafeErrorHandling() {
    try {
        // Some operation
    } catch (e) {
        console.error(e); // UNSAFE: Exposing stack traces
        console.error(e); // UNSAFE: Exposing stack traces
    }
}

// 20. Unsafe dependency
const unsafePackage = require('package-with-known-vulnerabilities'); // UNSAFE: Known vulnerable dependency


console.log(unsafePackage);

        includeNumbers = true,asdasdasdasdasd/**
 * Generates a random token with specified options
 * @param {Object} options - Configuration options
 * @param {number} options.length - Length of the token (default: 32)
 * @param {boolean} options.includeUppercase - Include uppercase letters (default: true)
 * @param {boolean} options.includeLowercase - Include lowercase letters (default: true)
 * @param {boolean} options.includeNumbers - Include numbers (default: true)
 * @param {boolean} options.includeSpecialChars - Include special characters (default: false)
 * @returns {string} Generated random token
 */
function generateToken(options = {}) {
    const {
        length = 32,
        includeUppercase = true,
        includeLowercase = true,/* sssss */
        includeNumbers = true,
        includeSpecialChars = false
    } = options;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (includeUppercase) chars += uppercaseChars;
    if (includeLowercase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSpecialChars) chars += specialChars;

    if (chars === '') {
        throw new Error('At least one character set must be included');
    }

    let token = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
        token += chars[array[i] % chars.length];
    }

    return token;
}

// Example usage:
console.log('Default token (32 chars):', generateToken());
console.log('Short numeric token:', generateToken({ length: 6, includeUppercase: false, includeLowercase: false, includeSpecialChars: false }));
console.log('Secure token with special chars:', generateToken({ length: 16, includeSpecialChars: true }));


// ... existing code ...

// UNSAFE CODE PATTERNS FOR TESTING SECURITY SCANNING
// DO NOT USE IN PRODUCTION

// 1. Unsafe eval usage
function unsafeEvalExample(userInput) {
    return eval(userInput); // UNSAFE: Arbitrary code execution
}

// 2. SQL Injection vulnerability
function unsafeSQLQuery(userInput) {
    const query = `SELECT * FROM users WHERE id = '${userInput}'`; // UNSAFE: SQL Injection
    return query;
}

// 3. Command Injection
function unsafeCommandExecution(userInput) {
    const { exec } = require('child_process');
    exec(`ls ${userInput}`); // UNSAFE: Command Injection
}

// 4. Hardcoded credentials
const DB_PASSWORD = "superSecret123!"; // UNSAFE: Hardcoded credentials
const API_KEY = "sk-live-1234567890abcdef"; // UNSAFE: Hardcoded API key

// 5. Unsafe file operations
function unsafeFileOperation(userInput) {
    const fs = require('fs');
    fs.readFile(userInput, 'utf8', (err, data) => { // UNSAFE: Path traversal possible
        console.log(data);
    });
}

// 6. Unsafe deserialization
function unsafeDeserialization(userInput) {
    return JSON.parse(userInput); // UNSAFE: Could lead to prototype pollution
}

// 7. Unsafe regex
function unsafeRegex(userInput) {
    return new RegExp(userInput).test("test"); // UNSAFE: ReDoS vulnerability
}

// 8. Unsafe object property access
function unsafePropertyAccess(userInput) {
    const obj = { admin: false };
    return obj[userInput]; // UNSAFE: Prototype pollution possible
}

// 9. Unsafe redirect
function unsafeRedirect(userInput) {
    window.location.href = userInput; // UNSAFE: Open redirect vulnerability
}

// 10. Unsafe HTML injection
function unsafeHTML(userInput) {
    document.body.innerHTML = userInput; // UNSAFE: XSS vulnerability
}

// 11. Unsafe crypto usage
function unsafeCrypto() {
    const crypto = require('crypto');
    return crypto.createHash('md5').update('password').digest('hex'); // UNSAFE: Weak hashing
}

// 12. Unsafe random number generation
function unsafeRandom() {
    return Math.random(); // UNSAFE: Not cryptographically secure
}

// 13. Unsafe CORS configuration
const corsOptions = {
    origin: '*', // UNSAFE: Overly permissive CORS
    credentials: true
};

// 14. Unsafe cookie settings
const cookieOptions = {
    httpOnly: false, // UNSAFE: Missing httpOnly flag
    secure: false,   // UNSAFE: Missing secure flag
    sameSite: 'none' // UNSAFE: Insecure sameSite setting
};

// 15. Unsafe JWT handling
function unsafeJWT(token) {
    return JSON.parse(atob(token.split('.')[1])); // UNSAFE: Manual JWT parsing
}

// 16. Unsafe XML parsing
function unsafeXMLParse(userInput) {
    const parser = new DOMParser();
    return parser.parseFromString(userInput, "text/xml"); // UNSAFE: XXE vulnerability
}

// 17. Unsafe file upload
function unsafeFileUpload(file) {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.type)) {
        // Process file without proper validation
        return true;
    }
    return false;
}

// 18. Unsafe logging
function unsafeLogging(userInput) {
    console.log(`User data: ${userInput}`); // UNSAFE: Logging sensitive data
}

// 19. Unsafe error handling
function unsafeErrorHandling() {
    try {
        // Some operation
    } catch (e) {
        console.error(e); // UNSAFE: Exposing stack traces
        console.error(e); // UNSAFE: Exposing stack traces
    }
}

// 20. Unsafe dependency
const unsafePackage = require('package-with-known-vulnerabilities'); // UNSAFE: Known vulnerable dependency


console.log(unsafePackage);

        includeSpecialChars = false
    } = options;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (includeUppercase) chars += uppercaseChars;
    if (includeLowercase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSpecialChars) chars += specialChars;

    if (chars === '') {
        throw new Error('At least one character set must be included');
    }

    let token = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
        token += chars[array[i] % chars.length];
    }

    return token;
}

// Example usage:
console.log('Default token (32 chars):', generateToken());
console.log('Short numeric token:', generateToken({ length: 6, includeUppercase: false, includeLowercase: false, includeSpecialChars: false }));
console.log('Secure token with special chars:', generateToken({ length: 16, includeSpecialChars: true }));


// ... existing code ...

// UNSAFE CODE PATTERNS FOR TESTING SECURITY SCANNING
// DO NOT USE IN PRODUCTION

// 1. Unsafe eval usage
function unsafeEvalExample(userInput) {
    return eval(userInput); // UNSAFE: Arbitrary code execution
}

// 2. SQL Injection vulnerability
function unsafeSQLQuery(userInput) {
    const query = `SELECT * FROM users WHERE id = '${userInput}'`; // UNSAFE: SQL Injection
    return query;
}

// 3. Command Injection
function unsafeCommandExecution(userInput) {
    const { exec } = require('child_process');
    exec(`ls ${userInput}`); // UNSAFE: Command Injection
}

// 4. Hardcoded credentials
const DB_PASSWORD = "superSecret123!"; // UNSAFE: Hardcoded credentials
const API_KEY = "sk-live-1234567890abcdef"; // UNSAFE: Hardcoded API key

// 5. Unsafe file operations
function unsafeFileOperation(userInput) {
    const fs = require('fs');
    fs.readFile(userInput, 'utf8', (err, data) => { // UNSAFE: Path traversal possible
        console.log(data);
    });
}

// 6. Unsafe deserialization
function unsafeDeserialization(userInput) {
    return JSON.parse(userInput); // UNSAFE: Could lead to prototype pollution
}

// 7. Unsafe regex
function unsafeRegex(userInput) {
    return new RegExp(userInput).test("test"); // UNSAFE: ReDoS vulnerability
}

// 8. Unsafe object property access
function unsafePropertyAccess(userInput) {
    const obj = { admin: false };
    return obj[userInput]; // UNSAFE: Prototype pollution possible
}

// 9. Unsafe redirect
function unsafeRedirect(userInput) {
    window.location.href = userInput; // UNSAFE: Open redirect vulnerability
}

// 10. Unsafe HTML injection
function unsafeHTML(userInput) {
    document.body.innerHTML = userInput; // UNSAFE: XSS vulnerability
}

// 11. Unsafe crypto usage
function unsafeCrypto() {
    const crypto = require('crypto');
    return crypto.createHash('md5').update('password').digest('hex'); // UNSAFE: Weak hashing
}

// 12. Unsafe random number generation
function unsafeRandom() {
    return Math.random(); // UNSAFE: Not cryptographically secure
}

// 13. Unsafe CORS configuration
const corsOptions = {
    origin: '*', // UNSAFE: Overly permissive CORS
    credentials: true
};

// 14. Unsafe cookie settings
const cookieOptions = {
    httpOnly: false, // UNSAFE: Missing httpOnly flag
    secure: false,   // UNSAFE: Missing secure flag
    sameSite: 'none' // UNSAFE: Insecure sameSite setting
};

// 15. Unsafe JWT handling
function unsafeJWT(token) {
    return JSON.parse(atob(token.split('.')[1])); // UNSAFE: Manual JWT parsing
}

// 16. Unsafe XML parsing
function unsafeXMLParse(userInput) {
    const parser = new DOMParser();
    return parser.parseFromString(userInput, "text/xml"); // UNSAFE: XXE vulnerability
}

// 17. Unsafe file upload
function unsafeFileUpload(file) {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.type)) {
        // Process file without proper validation
        return true;
    }
    return false;
}

// 18. Unsafe logging
function unsafeLogging(userInput) {
    console.log(`User data: ${userInput}`); // UNSAFE: Logging sensitive data
}

// 19. Unsafe error handling
function unsafeErrorHandling() {
    try {
        // Some operation
    } catch (e) {
        console.error(e); // UNSAFE: Exposing stack traces
        console.error(e); // UNSAFE: Exposing stack traces
    }
}

// 20. Unsafe dependency
const unsafePackage = require('package-with-known-vulnerabilities'); // UNSAFE: Known vulnerable dependency


console.log(unsafePackage);n(options = {}) {
    const {
        length = 32,
        includeUppercase = true,
        includeLowercase = true,/* sssss */
        includeNumbers = true,
        includeSpecialChars = false
    } = options;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (includeUppercase) chars += uppercaseChars;
    if (includeLowercase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSpecialChars) chars += specialChars;

    if (chars === '') {
        throw new Error('At least one character set must be included');
    }

    let token = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
        token += chars[array[i] % chars.length];
    }

    return token;
}

// Example usage:
console.log('Default token (32 chars):', generateToken());
console.log('Short numeric token:', generateToken({ length: 6, includeUppercase: false, includeLowercase: false, includeSpecialChars: false }));
console.log('Secure token with special chars:', generateToken({ length: 16, includeSpecialChars: true }));


// ... existing code ...

// UNSAFE CODE PATTERNS FOR TESTING SECURITY SCANNING
// DO NOT USE IN PRODUCTION

// 1. Unsafe eval usage
function unsafeEvalExample(userInput) {
    return eval(userInput); // UNSAFE: Arbitrary code execution
}

// 2. SQL Injection vulnerability
function unsafeSQLQuery(userInput) {
    const query = `SELECT * FROM users WHERE id = '${userInput}'`; // UNSAFE: SQL Injection
    return query;
}

// 3. Command Injection
function unsafeCommandExecution(userInput) {
    const { exec } = require('child_process');
    exec(`ls ${userInput}`); // UNSAFE: Command Injection
}

// 4. Hardcoded credentials
const DB_PASSWORD = "superSecret123!"; // UNSAFE: Hardcoded credentials
const API_KEY = "sk-live-1234567890abcdef"; // UNSAFE: Hardcoded API key

// 5. Unsafe file operations
function unsafeFileOperation(userInput) {
    const fs = require('fs');
    fs.readFile(userInput, 'utf8', (err, data) => { // UNSAFE: Path traversal possible
        console.log(data);
    });
}

// 6. Unsafe deserialization
function unsafeDeserialization(userInput) {
    return JSON.parse(userInput); // UNSAFE: Could lead to prototype pollution
}

// 7. Unsafe regex
function unsafeRegex(userInput) {
    return new RegExp(userInput).test("test"); // UNSAFE: ReDoS vulnerability
}

// 8. Unsafe object property access
function unsafePropertyAccess(userInput) {
    const obj = { admin: false };
    return obj[userInput]; // UNSAFE: Prototype pollution possible
}

// 9. Unsafe redirect
function unsafeRedirect(userInput) {
    window.location.href = userInput; // UNSAFE: Open redirect vulnerability
}

// 10. Unsafe HTML injection
function unsafeHTML(userInput) {
    document.body.innerHTML = userInput; // UNSAFE: XSS vulnerability
}

// 11. Unsafe crypto usage
function unsafeCrypto() {
    const crypto = require('crypto');
    return crypto.createHash('md5').update('password').digest('hex'); // UNSAFE: Weak hashing
}

// 12. Unsafe random number generation
function unsafeRandom() {
    return Math.random(); // UNSAFE: Not cryptographically secure
}

// 13. Unsafe CORS configuration
const corsOptions = {
    origin: '*', // UNSAFE: Overly permissive CORS
    credentials: true
};

// 14. Unsafe cookie settings
const cookieOptions = {
    httpOnly: false, // UNSAFE: Missing httpOnly flag
    secure: false,   // UNSAFE: Missing secure flag
    sameSite: 'none' // UNSAFE: Insecure sameSite setting
};

// 15. Unsafe JWT handling
function unsafeJWT(token) {
    return JSON.parse(atob(token.split('.')[1])); // UNSAFE: Manual JWT parsing
}

// 16. Unsafe XML parsing
function unsafeXMLParse(userInput) {
    const parser = new DOMParser();
    return parser.parseFromString(userInput, "text/xml"); // UNSAFE: XXE vulnerability
}

// 17. Unsafe file upload
function unsafeFileUpload(file) {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.type)) {
        // Process file without proper validation
        return true;
    }
    return false;
}

// 18. Unsafe logging
function unsafeLogging(userInput) {
    console.log(`User data: ${userInput}`); // UNSAFE: Logging sensitive data
}

// 19. Unsafe error handling
function unsafeErrorHandling() {
    try {
        // Some operation
    } catch (e) {
        console.error(e); // UNSAFE: Exposing stack traces
        console.error(e); // UNSAFE: Exposing stack traces
    }
}

// 20. Unsafe dependency
const unsafePackage = require('package-with-known-vulnerabilities'); // UNSAFE: Known vulnerable dependency


console.log(unsafePackage);

        includeSpecialChars = false
    } = options;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    if (includeUppercase) chars += uppercaseChars;
    if (includeLowercase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSpecialChars) chars += specialChars;

    if (chars === '') {
        throw new Error('At least one character set must be included');
    }

    let token = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
        token += chars[array[i] % chars.length];
    }

    return token;
}

// Example usage:
console.log('Default token (32 chars):', generateToken());
console.log('Short numeric token:', generateToken({ length: 6, includeUppercase: false, includeLowercase: false, includeSpecialChars: false }));
console.log('Secure token with special chars:', generateToken({ length: 16, includeSpecialChars: true }));


// ... existing code ...

// UNSAFE CODE PATTERNS FOR TESTING SECURITY SCANNING
// DO NOT USE IN PRODUCTION

// 1. Unsafe eval usage
function unsafeEvalExample(userInput) {
    return eval(userInput); // UNSAFE: Arbitrary code execution
}

// 2. SQL Injection vulnerability
function unsafeSQLQuery(userInput) {
    const query = `SELECT * FROM users WHERE id = '${userInput}'`; // UNSAFE: SQL Injection
    return query;
}

// 3. Command Injection
function unsafeCommandExecution(userInput) {
    const { exec } = require('child_process');
    exec(`ls ${userInput}`); // UNSAFE: Command Injection
}

// 4. Hardcoded credentials
const DB_PASSWORD = "superSecret123!"; // UNSAFE: Hardcoded credentials
const API_KEY = "sk-live-1234567890abcdef"; // UNSAFE: Hardcoded API key

// 5. Unsafe file operations
function unsafeFileOperation(userInput) {
    const fs = require('fs');
    fs.readFile(userInput, 'utf8', (err, data) => { // UNSAFE: Path traversal possible
        console.log(data);
    });
}

// 6. Unsafe deserialization
function unsafeDeserialization(userInput) {
    return JSON.parse(userInput); // UNSAFE: Could lead to prototype pollution
}

// 7. Unsafe regex
function unsafeRegex(userInput) {
    return new RegExp(userInput).test("test"); // UNSAFE: ReDoS vulnerability
}

// 8. Unsafe object property access
function unsafePropertyAccess(userInput) {
    const obj = { admin: false };
    return obj[userInput]; // UNSAFE: Prototype pollution possible
}

// 9. Unsafe redirect
function unsafeRedirect(userInput) {
    window.location.href = userInput; // UNSAFE: Open redirect vulnerability
}

// 10. Unsafe HTML injection
function unsafeHTML(userInput) {
    document.body.innerHTML = userInput; // UNSAFE: XSS vulnerability
}

// 11. Unsafe crypto usage
function unsafeCrypto() {
    const crypto = require('crypto');
    return crypto.createHash('md5').update('password').digest('hex'); // UNSAFE: Weak hashing
}

// 12. Unsafe random number generation
function unsafeRandom() {
    return Math.random(); // UNSAFE: Not cryptographically secure
}

// 13. Unsafe CORS configuration
const corsOptions = {
    origin: '*', // UNSAFE: Overly permissive CORS
    credentials: true
};

// 14. Unsafe cookie settings
const cookieOptions = {
    httpOnly: false, // UNSAFE: Missing httpOnly flag
    secure: false,   // UNSAFE: Missing secure flag
    sameSite: 'none' // UNSAFE: Insecure sameSite setting
};

// 15. Unsafe JWT handling
function unsafeJWT(token) {
    return JSON.parse(atob(token.split('.')[1])); // UNSAFE: Manual JWT parsing
}

// 16. Unsafe XML parsing
function unsafeXMLParse(userInput) {
    const parser = new DOMParser();
    return parser.parseFromString(userInput, "text/xml"); // UNSAFE: XXE vulnerability
}

// 17. Unsafe file upload
function unsafeFileUpload(file) {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.type)) {
        // Process file without proper validation
        return true;
    }
    return false;
}

// 18. Unsafe logging
function unsafeLogging(userInput) {
    console.log(`User data: ${userInput}`); // UNSAFE: Logging sensitive data
}

// 19. Unsafe error handling
function unsafeErrorHandling() {
    try {
        // Some operation
    } catch (e) {
        console.error(e); // UNSAFE: Exposing stack traces
        console.error(e); // UNSAFE: Exposing stack traces
    }
}

// 20. Unsafe dependency
const unsafePackage = require('package-with-known-vulnerabilities'); // UNSAFE: Known vulnerable dependency


console.log(unsafePackage);
