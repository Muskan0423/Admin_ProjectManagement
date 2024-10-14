import React from 'react';
import TaskItem from './TaskItem';

function TaskList() {
  const tasks = [
    { id: 1, name: 'Task 1', assignedTo: 'User 1', dueDate: '2024-01-01', status: 'Pending', priority: 'High' },
    { id: 2, name: 'Task 2', assignedTo: 'User 2', dueDate: '2024-01-02', status: 'Completed', priority: 'Low' },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Task ID</th>
          <th>Task Name</th>
          <th>Assigned To</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
