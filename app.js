// Получаем элементы DOM
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Функция добавления задачи
function addTask() {
    const taskText = taskInput.value;

    if (taskText.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Удалить</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

// Функция удаления задачи
function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}
