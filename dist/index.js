document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('newTasks');

    addButton.addEventListener('click', function () {
        const taskText = inputField.value.trim();
        if (taskText !== '') {
            // Create a new task element
            const taskElement = document.createElement('div');
            taskElement.className = 'task';

            // Create a task input field
            const taskInput = document.createElement('input');
            taskInput.value = taskText;
            taskInput.disabled = true;

            // Apply styles to the task input
            taskInput.style.width = '400px';
            taskInput.style.height = '40px';
            taskInput.style.fontSize = '20px';
            taskInput.style.padding = '0 10px';
            taskInput.style.border = '1px solid #ccc';
            taskInput.style.borderRadius = '5px';
            taskInput.style.marginRight = '10px';
            taskInput.style.color = 'white';

            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';

            // Apply styles to the delete button
            deleteButton.style.width = '100px';
            deleteButton.style.height = '30px';

            deleteButton.addEventListener('click', function () {
                taskElement.remove();
            });

            taskElement.style.backgroundColor = 'linear-gradient(to right, #7F00FF, #E100FF)';
            taskElement.style.color = 'white';

            taskElement.appendChild(taskInput);
            taskElement.appendChild(deleteButton);

            // Append the task element to the task list
            taskList.appendChild(taskElement);

            // Clear the input field
            inputField.value = '';
        }
    });

    inputField.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addButton.click(); 
        }
    });
});
