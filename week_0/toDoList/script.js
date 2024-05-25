window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('start-pomodoro-btn').addEventListener('click', startPomodoro);
    document.getElementById('add-task-btn').addEventListener('click', addTask);

    function startPomodoro() {
        const workTime = parseInt(document.getElementById('work-time').value) * 60; // convert minutes to seconds
        const breakTime = parseInt(document.getElementById('break-time').value) * 60; // convert minutes to seconds
        const cycles = parseInt(document.getElementById('cycles').value);

        if (workTime <= 0 || breakTime <= 0 || cycles <= 0) {
            alert('Please enter valid values for work time, break time, and cycles.');
            return;
        }

        const timerDisplay = document.getElementById('timer'); // Reference to the timer display element

        let currentCycle = 0;
        let timeRemaining = workTime;
        let isWorking = true;

        const timer = setInterval(() => {
            // Display timer
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            timerDisplay.innerHTML = `<h1>${isWorking ? 'Work' : 'Break'} Time: <span>${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}</span></h1>`;

            // Update time remaining
            timeRemaining--;

            // Toggle between work and break time
            if (timeRemaining < 0) {
                if (isWorking) {
                    timeRemaining = breakTime;
                } else {
                    timeRemaining = workTime;
                    currentCycle++;
                }
                isWorking = !isWorking;
            }

            // Check if pomodoro is complete
            if (currentCycle >= cycles) {
                clearInterval(timer);
                timerDisplay.innerHTML = `<h1>Pomodoro Complete!</h1>`;
            }
        }, 1000);
    }

    //Add task to ToDo List
    function addTask() {
        const taskName = document.getElementById('task-name').value;
        const taskDesc = document.getElementById('task-desc').value;

        if (taskName === '' || taskDesc === '') {
            alert('Please fill in both fields');
            return;
        }

        const taskList = document.getElementById('task-list');
        const row = document.createElement('tr');

        // Fill the Row
        row.innerHTML = `
            <td>${taskName}</td>
            <td>${taskDesc}</td>
            <td class="status">incomplete</td>
            <td class="actions">
                <button class="toggle-status">Toggle Status</button>
                <button class="delete">Delete</button>
            </td>
        `;

        taskList.appendChild(row);

        document.getElementById('task-name').value = '';
        document.getElementById('task-desc').value = '';

        //Buttons Logic
        row.querySelector('.toggle-status').addEventListener('click', () => {
            const statusCell = row.querySelector('.status');
            if (statusCell.textContent === 'incomplete') {
                statusCell.textContent = 'complete';
                row.querySelector('.toggle-status').classList.add('complete');
            } else {
                statusCell.textContent = 'incomplete';
                row.querySelector('.toggle-status').classList.remove('complete');
            }
        });

        row.querySelector('.delete').addEventListener('click', () => {
            row.remove();
        });
    }
});
