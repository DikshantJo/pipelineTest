// Dummy JavaScript App for Testing AI Tools
// This code simulates a basic todo list app (non-functional)

// === Global Variables ===
let todos = [];
let completedCount = 0;

// === Sample DOM Elements (assume these exist in HTML) ===
const input = document.getElementById('todoInput');
const list = document.getElementById('todoList');
const counter = document.getElementById('completedCounter');

// === Utility Functions ===
function createTodoItem(text) {
    return {
        id: Date.now(),
        text: text,
        completed: false
    };
}

function addTodo(text) {
    if (!text) {
        console.warn("Empty todo not allowed");
        return;
    }
    const todo = createTodoItem(text);
    todos.push(todo);
    renderTodoItem(todo);
    console.log(`Added todo: ${text}`);
}

function renderTodoItem(todo) {
    const item = document.createElement('li');
    item.textContent = todo.text;
    item.dataset.id = todo.id;

    item.addEventListener('click', () => toggleTodo(todo.id));
    list.appendChild(item);
}

function toggleTodo(id) {
    for (let todo of todos) {
        if (todo.id === id) {
            todo.completed = !todo.completed;
            updateUI();
            break;
        }
    }
}

function updateUI() {
    list.innerHTML = '';
    completedCount = 0;
    for (let todo of todos) {
        renderTodoItem(todo);
        if (todo.completed) completedCount++;
    }
    counter.textContent = `Completed: ${completedCount}`;
}

// === Event Handlers ===
document.getElementById('addBtn').addEventListener('click', () => {
    addTodo(input.value);
    input.value = '';
});

// === Dummy Class Example ===
class TodoManager {
    constructor(user) {
        this.user = user;
        this.todos = [];
    }

    logUser() {
        console.log(`Managing todos for ${this.user}`);
    }

    add(text) {
        const todo = createTodoItem(text);
        this.todos.push(todo);
    }

    getTodos() {
        return this.todos;
    }
}

// === Testing the class ===
const testManager = new TodoManager("Alice");
testManager.logUser();
testManager.add("Read AI paper");
console.log(testManager.getTodos());
