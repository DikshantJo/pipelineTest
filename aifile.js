HICODE
HICODE
HICODE
HICODE
HICODE
HICODE
asdasdasdas
asdadasd
// ❌ VULNERABLE: Direct string concatenation
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}

// ❌ VULNERABLE: Template literals without sanitization
function searchUsers(searchTerm) {
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
  return db.query(query);
}

// test-security.js - Intentionally insecure code for testing
const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// XSS vulnerability
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  document.getElementById('comments').innerHTML += comment;
});

// Path traversal vulnerability
app.get('/files/:filename', (req, res) => {
  const filePath = `/uploads/${req.params.filename}`;
  res.sendFile(filePath);
});

// Hardcoded credentials
const API_KEY = "sk-test1234567890abcdef";
const DB_PASSWORD = "password123";

app.listen(3000);


// ❌ VULNERABLE: Direct string concatenation
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}

// ❌ VULNERABLE: Template literals without sanitization
function searchUsers(searchTerm) {
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
  return db.query(query);
}

// test-security.js - Intentionally insecure code for testing
const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// XSS vulnerability
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  document.getElementById('comments').innerHTML += comment;
});

// Path traversal vulnerability
app.get('/files/:filename', (req, res) => {
  const filePath = `/uploads/${req.params.filename}`;
  res.sendFile(filePath);
});

// Hardcoded credentials
const API_KEY = "sk-test1234567890abcdef";
const DB_PASSWORD = "password123";

app.listen(3000);



// ❌ VULNERABLE: Template literals without sanitization
function searchUsers(searchTerm) {
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
  return db.query(query);
}

// test-security.js - Intentionally insecure code for testing
const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// XSS vulnerability
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  document.getElementById('comments').innerHTML += comment;
});

// Path traversal vulnerability
app.get('/files/:filename', (req, res) => {
  const filePath = `/uploads/${req.params.filename}`;
  res.sendFile(filePath);
});

// Hardcoded credentials
const API_KEY = "sk-test1234567890abcdef";
const DB_PASSWORD = "password123";

app.listen(3000);


// ❌ VULNERABLE: Direct string concatenation
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}

// ❌ VULNERABLE: Template literals without sanitization
function searchUsers(searchTerm) {
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
  return db.query(query);
}

// test-security.js - Intentionally insecure code for testing
const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// XSS vulnerability
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  document.getElementById('comments').innerHTML += comment;
});

// Path traversal vulnerability
app.get('/files/:filename', (req, res) => {
  const filePath = `/uploads/${req.params.filename}`;
  res.sendFile(filePath);
});

// Hardcoded credentials
const API_KEY = "sk-test1234567890abcdef";
const DB_PASSWORD = "password123";

app.listen(3000);


HICODE
HICODE
HICODE
HICODE
HICODE
HICODE
asdasdasdas
asdadasd
// ❌ VULNERABLE: Direct string concatenation
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}

// ❌ VULNERABLE: Template literals without sanitization
function searchUsers(searchTerm) {
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
  return db.query(query);
}

// test-security.js - Intentionally insecure code for testing
const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// XSS vulnerability
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  document.getElementById('comments').innerHTML += comment;
});

// Path traversal vulnerability
app.get('/files/:filename', (req, res) => {
  const filePath = `/uploads/${req.params.filename}`;
  res.sendFile(filePath);
});

// Hardcoded credentials
const API_KEY = "sk-test1234567890abcdef";
const DB_PASSWORD = "password123";

app.listen(3000);


// ❌ VULNERABLE: Direct string concatenation
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}

// ❌ VULNERABLE: Template literals without sanitization
function searchUsers(searchTerm) {
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
  return db.query(query);
}

// test-security.js - Intentionally insecure code for testing
const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// XSS vulnerability
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  document.getElementById('comments').innerHTML += comment;
});

// Path traversal vulnerability
app.get('/files/:filename', (req, res) => {
  const filePath = `/uploads/${req.params.filename}`;
  res.sendFile(filePath);
});

// Hardcoded credentials
const API_KEY = "sk-test1234567890abcdef";
const DB_PASSWORD = "password123";

app.listen(3000);



// ❌ VULNERABLE: Template literals without sanitization
function searchUsers(searchTerm) {
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
  return db.query(query);
}

// test-security.js - Intentionally insecure code for testing
const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// XSS vulnerability
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  document.getElementById('comments').innerHTML += comment;
});

// Path traversal vulnerability
app.get('/files/:filename', (req, res) => {
  const filePath = `/uploads/${req.params.filename}`;
  res.sendFile(filePath);
});

// Hardcoded credentials
const API_KEY = "sk-test1234567890abcdef";
const DB_PASSWORD = "password123";

app.listen(3000);


// ❌ VULNERABLE: Direct string concatenation
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}

// ❌ VULNERABLE: Template literals without sanitization
function searchUsers(searchTerm) {
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
  return db.query(query);
}

// test-security.js - Intentionally insecure code for testing
const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// XSS vulnerability
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  document.getElementById('comments').innerHTML += comment;
});

// Path traversal vulnerability
app.get('/files/:filename', (req, res) => {
  const filePath = `/uploads/${req.params.filename}`;
  res.sendFile(filePath);
});

// Hardcoded credentials
const API_KEY = "sk-test1234567890abcdef";
const DB_PASSWORD = "password123";

app.listen(3000);
HICODE
HICODE
HICODE
HICODE
HICODE
HICODE
asdasdasdas
asdadasd
// ❌ VULNERABLE: Direct string concatenation
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}

// ❌ VULNERABLE: Template literals without sanitization
function searchUsers(searchTerm) {
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
  return db.query(query);
}

// test-security.js - Intentionally insecure code for testing
const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// XSS vulnerability
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  document.getElementById('comments').innerHTML += comment;
});

// Path traversal vulnerability
app.get('/files/:filename', (req, res) => {
  const filePath = `/uploads/${req.params.filename}`;
  res.sendFile(filePath);
});

// Hardcoded credentials
const API_KEY = "sk-test1234567890abcdef";
const DB_PASSWORD = "password123";

app.listen(3000);


// ❌ VULNERABLE: Direct string concatenation
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}

// ❌ VULNERABLE: Template literals without sanitization
function searchUsers(searchTerm) {
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
  return db.query(query);
}

// test-security.js - Intentionally insecure code for testing
const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// XSS vulnerability
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  document.getElementById('comments').innerHTML += comment;
});

// Path traversal vulnerability
app.get('/files/:filename', (req, res) => {
  const filePath = `/uploads/${req.params.filename}`;
  res.sendFile(filePath);
});

// Hardcoded credentials
const API_KEY = "sk-test1234567890abcdef";
const DB_PASSWORD = "password123";

app.listen(3000);



// ❌ VULNERABLE: Template literals without sanitization
function searchUsers(searchTerm) {
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
  return db.query(query);
}

// test-security.js - Intentionally insecure code for testing
const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// XSS vulnerability
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  document.getElementById('comments').innerHTML += comment;
});

// Path traversal vulnerability
app.get('/files/:filename', (req, res) => {
  const filePath = `/uploads/${req.params.filename}`;
  res.sendFile(filePath);
});

// Hardcoded credentials
const API_KEY = "sk-test1234567890abcdef";
const DB_PASSWORD = "password123";

app.listen(3000);


// ❌ VULNERABLE: Direct string concatenation
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}

// ❌ VULNERABLE: Template literals without sanitization
function searchUsers(searchTerm) {
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
  return db.query(query);
}

// test-security.js - Intentionally insecure code for testing
const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// XSS vulnerability
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  document.getElementById('comments').innerHTML += comment;
});

// Path traversal vulnerability
app.get('/files/:filename', (req, res) => {
  const filePath = `/uploads/${req.params.filename}`;
  res.sendFile(filePath);
});

// Hardcoded credentials
const API_KEY = "sk-test1234567890abcdef";
const DB_PASSWORD = "password123";

app.listen(3000);


HICODE
HICODE
HICODE
HICODE
HICODE
HICODE
asdasdasdas
asdadasd
// ❌ VULNERABLE: Direct string concatenation
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}

// ❌ VULNERABLE: Template literals without sanitization
function searchUsers(searchTerm) {
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
  return db.query(query);
}

// test-security.js - Intentionally insecure code for testing
const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// XSS vulnerability
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  document.getElementById('comments').innerHTML += comment;
});

// Path traversal vulnerability
app.get('/files/:filename', (req, res) => {
  const filePath = `/uploads/${req.params.filename}`;
  res.sendFile(filePath);
});

// Hardcoded credentials
const API_KEY = "sk-test1234567890abcdef";
const DB_PASSWORD = "password123";

app.listen(3000);


// ❌ VULNERABLE: Direct string concatenation
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}

// ❌ VULNERABLE: Template literals without sanitization
function searchUsers(searchTerm) {
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
  return db.query(query);
}

// test-security.js - Intentionally insecure code for testing
const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// XSS vulnerability
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  document.getElementById('comments').innerHTML += comment;
});

// Path traversal vulnerability
app.get('/files/:filename', (req, res) => {
  const filePath = `/uploads/${req.params.filename}`;
  res.sendFile(filePath);
});

// Hardcoded credentials
const API_KEY = "sk-test1234567890abcdef";
const DB_PASSWORD = "password123";

app.listen(3000);



// ❌ VULNERABLE: Template literals without sanitization
function searchUsers(searchTerm) {
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
  return db.query(query);
}

// test-security.js - Intentionally insecure code for testing
const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// XSS vulnerability
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  document.getElementById('comments').innerHTML += comment;
});

// Path traversal vulnerability
app.get('/files/:filename', (req, res) => {
  const filePath = `/uploads/${req.params.filename}`;
  res.sendFile(filePath);
});

// Hardcoded credentials
const API_KEY = "sk-test1234567890abcdef";
const DB_PASSWORD = "password123";

app.listen(3000);


// ❌ VULNERABLE: Direct string concatenation
function getUserData(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}

// ❌ VULNERABLE: Template literals without sanitization
function searchUsers(searchTerm) {
  const query = `SELECT * FROM users WHERE name LIKE '%${searchTerm}%'`;
  return db.query(query);
}

// test-security.js - Intentionally insecure code for testing
const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/users/:id', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// XSS vulnerability
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  document.getElementById('comments').innerHTML += comment;
});

// Path traversal vulnerability
app.get('/files/:filename', (req, res) => {
  const filePath = `/uploads/${req.params.filename}`;
  res.sendFile(filePath);
});

// Hardcoded credentials
const API_KEY = "sk-test1234567890abcdef";
const DB_PASSWORD = "password123";

app.listen(3000);
