
        document.addEventListener('DOMContentLoaded', () => {
          
            const taskInput = document.querySelector('.task-input');
            const addButton = document.querySelector('.add-btn');
            const taskList = document.querySelector('.task-list');
            const emptyListMessage = document.querySelector('.empty-list');
            const totalTasksElement = document.querySelector('.total-tasks');
            const completedTasksElement = document.querySelector('.completed-tasks');
    
            let totalTasks = 0;
            let completedTasks = 0;
            
         
            const updateStats = () => {
                totalTasksElement.textContent = `Total: ${totalTasks}`;
                completedTasksElement.textContent = `Completed: ${completedTasks}`;
             
                if (totalTasks === 0) {
                    emptyListMessage.style.display = 'block';
                } else {
                    emptyListMessage.style.display = 'none';
                }
            };
            
         
            const addTask = () => {
                const taskText = taskInput.value.trim();
                
                if (taskText === '') return;
                
              
                const taskItem = document.createElement('li');
                taskItem.classList.add('task-item');
                
             
                const taskContent = document.createElement('span');
                taskContent.classList.add('task-content');
                taskContent.textContent = taskText;
                
              
                const deleteBtn = document.createElement('button');
                deleteBtn.classList.add('delete-btn');
                deleteBtn.innerHTML = '❌';
                
                
                taskItem.appendChild(taskContent);
                taskItem.appendChild(deleteBtn);
                taskList.appendChild(taskItem);
                
                
                taskInput.value = '';
                
                
                totalTasks++;
                updateStats();
                
                
                taskContent.addEventListener('click', () => {
                    taskItem.classList.toggle('completed');
                    
                    if (taskItem.classList.contains('completed')) {
                        completedTasks++;
                    } else {
                        completedTasks--;
                    }
                    
                    updateStats();
                });
                
              
                deleteBtn.addEventListener('click', () => {
                    
                    if (taskItem.classList.contains('completed')) {
                        completedTasks--;
                    }
                    
               
                    taskList.removeChild(taskItem);
                    totalTasks--;
                    updateStats();
                });
            };
            
            
            addButton.addEventListener('click', addTask);
            
            taskInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    addTask();
                }
            });
            
            
            updateStats();
        });
